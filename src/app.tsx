import React, {useEffect, useReducer, useState} from "react";
import { setLocale, Translate, translate } from 'react-i18nify';
import "./i18n/dictionary"

import {ThemeProvider} from "styled-components";

import {
    Button,
    ButtonRemove,
    Container,
    darkTheme,
    lightTheme,
    LinkButton,
    TodoCount,
    TodoFilters,
    TodoFiltersItem,
    TodoFooter,
    TodoHead,
    TodoInput,
    TodoList,
    TodoSection,
    TodoSelectAll,
    TodoTitle,
    TodoWrap,
    TodoWrapItem,
    WrapContainer,
    Loader,
    Footer,
    FlagIcon,
    MaskEdit
} from "./components/";

import {Item, TODOItem} from "./components/todo/index";

import { getTodos } from "./services/http/todo";

import darkModeIcon from "./assets/images/dark-mode.png";
import flagBrazil from "./assets/images/brazil.png";
import flagEua from "./assets/images/united-states.png";

import completedAudio from "./assets/media/completed.mp3";

export default function App() {

    const [theme, setTheme] = useState('light');
    const [inputItem, setInputItem] = useState('')
    const [todoItens, setTodoItens] = useState<TODOItem[] | []>([]);
    const [todoFilter, setTodoFilter] = useState('/');
    const [loading, setLoading] = useState(true);
    const [lang, setLang] = useState('ptBR');
    const [editing, setEditing] = useState({state: false, id: null });
    const [storeEditValue, setStoreEditValue] = useState({});

    const changeTheme = (t:string) => {
        t = theme === 'dark' ? 'light' : t
        setTheme(t)
    }

    const soundCompleted = () => {
        let sound = new Audio(completedAudio);
        sound.play();
    }

    const enterItem = (e:any) => {
        if (e.key === 'Enter' && inputItem) {
            setItem(inputItem)
            setInputItem('')
        }
    }

    const setItem = (title:string) => {
        setTodoItens([
            ...todoItens, {
                id: new Date().getTime(),
                title,
                isDone: false
            }
        ])
    }

    const editItem = (id:any) => {
        setEditing({
            state: true,
            id
        })
    }

    const storeEdit = (item:any) => {
         setStoreEditValue(item)
    }

    const saveEditItem = (item:any) => {
        setTodoItens(todoItens.map(i =>
             i.id === item.id
                ? { ...i, title: item.title }
                : i
        ));

        if (!item.title) {
            removeItem(item.id)
        }

        closeEdit()
    }

    const outSiteEdit = () => {
        saveEditItem(storeEditValue)
        closeEdit()
    }

    const closeEdit = () => {
        setEditing({
            state: false,
            id: null
        })
    }

    const removeItem = (v:any) => {
        setTodoItens(todoItens.filter((i) => i.id !== v ))
    }

    const completeItem = (id:any) => {

        if (!todoItens.filter(f => f.id === id && f.isDone).length) {
            soundCompleted()
        }

        setTodoItens(todoItens.map(i =>
            i.id === id
                ? { ...i, isDone: !i.isDone }
                : i
        ));

    };

    const removeCompletedItems = () => {
        setTodoItens(todoItens.filter((i) => !i.isDone ))
    }

    const completedAllItems = () => {
        if (todoItens.filter(f => !f.isDone).length === 0) {
            setTodoItens(todoItens.map(i => ( { ...i, isDone: false }) ));
        } else {
            setTodoItens(todoItens.map(i =>
                i.isDone
                    ? { ...i, isDone: true }
                    : { ...i, isDone: !i.isDone }
            ));
        }
    }

    const changeRoute = (r:string) => {
        window.location.hash = r
        setTodoFilter(r)
        showItens(window.location.hash)
    }

    const showItens = (rash:string) => {
        let data = todoItens;
        let filter;

        switch (rash) {
            case '#/active':
                filter = data.filter((i) => !i.isDone )
                break
            case '#/completed':
                filter = data.filter((i) => i.isDone )
                break
            default:
                filter = data
        }

        return filter
    }

    const activeBtnFilter = (r:string) => {
        let slug;
        if (todoFilter === '/' && r === 'home') {
            slug = 'active'
        } else {
            slug = todoFilter.includes(r) ? 'active' : ''
        }
       return slug
    }

    const changeLocale = (l:string) => {
        setLocale(l || 'ptBR');
        setLang(l || 'ptBR');
    }

    useEffect(() => {

        setLocale('ptBR');

        async function fetchData() {
            setLoading(true)
            return await getTodos()
        }

        fetchData().then(v => {
            setLoading(false)
            setTodoItens(v?.data)
        })

    }, [])

    return (
        <ThemeProvider
            theme={theme === 'light' ? lightTheme : darkTheme}>
            <WrapContainer/>
            {loading ? <Loader/> :
            <Container>
                    <div>
                        <TodoTitle><Translate value="application.title"/></TodoTitle>
                        <TodoWrap>
                            <TodoHead>
                                <TodoSelectAll
                                    className={todoItens.filter(f => !f.isDone).length === 0 ? 'all-items-completed' : ''}
                                    isVisible={todoItens.length > 0}
                                    onClick={() => completedAllItems()}
                                />

                                <TodoInput
                                    placeholder={translate("application.todoInputPlaceHolder")}
                                    value={inputItem}
                                    onChange={e => setInputItem(e.target.value)}
                                    onFocus={outSiteEdit}
                                    onKeyDown={enterItem}
                                />

                            </TodoHead>

                            <TodoSection>
                                <TodoList>
                                    {showItens(window.location.hash).map(i => {
                                        return (
                                            <TodoWrapItem
                                                className={i.isDone ? 'completed' : ''}
                                            >
                                                <Item
                                                    key={i.id}
                                                    item={i}
                                                    todoItens={todoItens}
                                                    complete={completeItem}
                                                    edit={editItem}
                                                    editing={editing}
                                                    storeEdit={storeEdit}
                                                    enterValue={saveEditItem}
                                                />

                                                <ButtonRemove
                                                    className={'btn-remove-item'}
                                                    onClick={() => removeItem(i.id)}
                                                />
                                            </TodoWrapItem>
                                        )
                                    })}
                                    {editing.state &&
                                        <MaskEdit onClick={() => outSiteEdit()}/>
                                    }
                                </TodoList>
                            </TodoSection>

                            {todoItens.length > 0 &&
                                <TodoFooter>

                                    <TodoCount>{todoItens.filter(f => !f.isDone).length}{' '}
                                         <Translate
                                             value="application.itemLeft"
                                             count={todoItens.filter(f => !f.isDone).length > 1 ? 2 : 0}/></TodoCount>

                                    <TodoFilters>
                                        <TodoFiltersItem>
                                            <LinkButton
                                                onClick={() => changeRoute('/')}
                                                state={activeBtnFilter('home')}
                                            >
                                                <Translate value="application.all"/>
                                            </LinkButton>
                                        </TodoFiltersItem>
                                        <TodoFiltersItem>
                                            <LinkButton
                                                onClick={() => changeRoute('#/active')}
                                                state={activeBtnFilter('active')}
                                            >
                                                <Translate value="application.active"/>
                                            </LinkButton>
                                        </TodoFiltersItem>
                                        <TodoFiltersItem>
                                            <LinkButton
                                                onClick={() => changeRoute('#/completed')}
                                                state={activeBtnFilter('completed')}
                                            >
                                                <Translate value="application.completed"/>
                                            </LinkButton>
                                        </TodoFiltersItem>
                                    </TodoFilters>

                                    {todoItens.some(i => i.isDone) &&
                                        <Button
                                            padding={0}
                                            size={'sm'}
                                            onClick={() => removeCompletedItems()}
                                        >
                                            <Translate value="application.clearCompleted"/>
                                        </Button>
                                    }

                                    <Button
                                        title={translate("application.darkMode")}
                                        onClick={() => changeTheme('dark')}
                                    >
                                        <img src={darkModeIcon} alt="Dark"/>
                                    </Button>
                                </TodoFooter>
                            }
                        </TodoWrap>

                        <Footer>
                                <Button
                                    onClick={() => changeLocale('ptBR')}
                                >
                                    <FlagIcon
                                        src={flagBrazil}
                                        state={lang === 'ptBR' ? 'active' : '' }
                                    />
                                </Button>
                                <Button
                                    onClick={() => changeLocale('en')}
                                >
                                    <FlagIcon
                                        src={flagEua}
                                        state={lang === 'en' ? 'active' : '' }
                                    />
                                </Button>
                    </Footer>
                    </div>
                <MaskEdit onClick={() => outSiteEdit()}/>
            </Container>
        }
        </ThemeProvider>
    );
}
