import React, {useState} from "react";
import { ThemeProvider } from "styled-components";
import {
    WrapContainer,
    Container,
    lightTheme,
    darkTheme,
    TodoWrap,
    TodoHead,
    TodoTitle,
    TodoSelectAll,
    TodoInput,
    TodoSection,
    TodoList,
    TodoWrapItem,
    TodoFooter,
    TodoCount,
    TodoFilters,
    TodoFiltersItem,
    Link,
    Button,
    ButtonRemove
} from "./components/";

import { Item } from "./components/todo/index";

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
                            {todoItens.map(i => {
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
                                    <Link
                                        href={'/'}
                                        state={'active'}
                                    >
                                        All
                                    </Link>
                                </TodoFiltersItem>
                                <TodoFiltersItem>
                                    <Link
                                        href={'/'}
                                    >
                                        Active
                                    </Link>
                                </TodoFiltersItem>
                                <TodoFiltersItem>
                                    <Link
                                        href={'/'}
                                    >
                                        Completed
                                    </Link>
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
