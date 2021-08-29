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
        content: string
    }

    const [theme, setTheme] = useState('light');
    const [inputItem, setInputItem] = useState('')
    const [todoItens, setTodoItens] = useState<TODOItem[] | []>([]);

    const changeTheme = (t:string) => {
        t = theme === 'dark' ? 'light' : t
        setTheme(t)
    }

    const enterItem = (e:any) => {
        if (e.key === 'Enter') {
            setItem(inputItem)
            setInputItem('')
        }
    }

    const setItem = (content:string) => {
        setTodoItens([
            ...todoItens, {
                id: new Date().getTime(),
                content
            }
        ])
    }

    const removeItem = (v:any) => {
        setTodoItens(todoItens.filter((i) => i.id != v ))
    }

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <WrapContainer/>
            <Container>
                <TodoTitle>todos</TodoTitle>
                <TodoWrap>

                    <TodoHead>

                        <TodoSelectAll
                            isVisible={todoItens.length > 0}
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
                                    <TodoWrapItem>
                                        <Item  content={i.content}  />
                                        <ButtonRemove
                                            className={'btn-remove-item'}
                                            onClick={(v:any) => removeItem(i.id)}
                                       />
                                    </TodoWrapItem>
                                    )
                            })}

                        </TodoList>
                    </TodoSection>

                    {todoItens.length > 0 &&
                        <TodoFooter>

                            <TodoCount>{todoItens.length} item left</TodoCount>

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

                            <Button
                                padding={0}
                                size={'sm'}
                            >
                                Clear completed
                            </Button>

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
