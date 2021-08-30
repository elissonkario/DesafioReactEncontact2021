import React, {useState} from "react";
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
    WrapContainer
} from "./components/";

import {Item} from "./components/todo/index";

import darkModeIcon from "./images/dark-mode.png";


export default function App() {

    interface TODOItem {
        id: any
        content: string,
        completed: boolean
    }

    const [theme, setTheme] = useState('light');
    const [inputItem, setInputItem] = useState('')
    const [todoItens, setTodoItens] = useState<TODOItem[] | []>([]);
    const [todoFilter, setTodoFilter] = useState('/');

    const changeTheme = (t:string) => {
        t = theme === 'dark' ? 'light' : t
        setTheme(t)
    }

    const enterItem = (e:any) => {
        if (e.key === 'Enter' && inputItem) {
            setItem(inputItem)
            setInputItem('')
        }
    }

    const setItem = (content:string) => {
        setTodoItens([
            ...todoItens, {
                id: new Date().getTime(),
                content,
                completed: false
            }
        ])
    }

    const removeItem = (v:any) => {
        setTodoItens(todoItens.filter((i) => i.id != v ))
    }

    const completeItem = (id:any) => {
        setTodoItens(todoItens.map(i =>
            i.id === id
                ? { ...i, completed: !i.completed }
                : i
        ));

    };

    const removeCompletedItems = () => {
        setTodoItens(todoItens.filter((i) => !i.completed ))
    }

    const completedAllItems = () => {
        if (todoItens.filter(f => !f.completed).length === 0) {
            setTodoItens(todoItens.map(i => ( { ...i, completed: false }) ));
        } else {
            setTodoItens(todoItens.map(i =>
                i.completed
                    ? { ...i, completed: true }
                    : { ...i, completed: !i.completed }
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
                filter = data.filter((i) => !i.completed )
                break
            case '#/completed':
                filter = data.filter((i) => i.completed )
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


    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <WrapContainer/>
            <Container>
                <TodoTitle>todos</TodoTitle>
                <TodoWrap>
                    <TodoHead>

                        <TodoSelectAll
                            className={todoItens.filter(f => !f.completed).length === 0 ? 'all-items-completed' : ''}
                            isVisible={todoItens.length > 0}
                            onClick={() => completedAllItems()}
                        />

                        <TodoInput
                            placeholder={'O que precisa ser feito?'}
                            value={inputItem}
                            onChange={e => setInputItem(e.target.value)}
                            onKeyDown={enterItem}
                        />

                    </TodoHead>

                    <TodoSection>
                        <TodoList>
                            {showItens(window.location.hash).map(i => {
                                return (
                                    <TodoWrapItem
                                     className={i.completed ? 'completed' : ''}
                                    >
                                        <Item
                                            item={i}
                                            complete={completeItem}
                                        />
                                        <ButtonRemove
                                            className={'btn-remove-item'}
                                            onClick={() => removeItem(i.id)}
                                       />
                                    </TodoWrapItem>
                                    )
                            })}
                        </TodoList>
                    </TodoSection>

                    {todoItens.length > 0 &&
                        <TodoFooter>

                            <TodoCount>{todoItens.filter(f => !f.completed).length} item left</TodoCount>

                            <TodoFilters>
                                <TodoFiltersItem>
                                    <LinkButton
                                        onClick={() => changeRoute('/')}
                                        state={activeBtnFilter('home')}
                                    >
                                        All
                                    </LinkButton>
                                </TodoFiltersItem>
                                <TodoFiltersItem>
                                    <LinkButton
                                        onClick={() => changeRoute('#/active')}
                                        state={activeBtnFilter('active')}
                                    >
                                        Active
                                    </LinkButton>
                                </TodoFiltersItem>
                                <TodoFiltersItem>
                                    <LinkButton
                                        onClick={() => changeRoute('#/completed')}
                                        state={activeBtnFilter('completed')}
                                    >
                                        Completed
                                    </LinkButton>
                                </TodoFiltersItem>
                            </TodoFilters>

                            {todoItens.some(i => i.completed) &&
                                <Button
                                    padding={0}
                                    size={'sm'}
                                    onClick={() => removeCompletedItems()}
                                >
                                    Clear completed
                                </Button>
                            }

                            <Button
                                onClick={() => changeTheme('dark')}
                            >
                                <img src={darkModeIcon} alt="Dark"/>
                            </Button>
                        </TodoFooter>
                    }
                </TodoWrap>
            </Container>
        </ThemeProvider>
    );
}
