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
    TodoFooter,
    TodoCount,
    TodoFilters,
    TodoFiltersItem,
    Link,
    Button
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

    const setItem = (content:string) => {
        setTodoItens([
            ...todoItens, {
                id: new Date().getTime(),
                content
            }
        ])
    }

    const _handleKeyDown = (e:any) => {
        if (e.key === 'Enter') {
            setItem(inputItem)
            setInputItem('')
        }
    }

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <WrapContainer/>
            <Container>
                <TodoTitle>todos</TodoTitle>
                <TodoWrap>

                    <TodoHead>
                        <TodoSelectAll />
                        <TodoInput
                            placeholder={'O que precisa ser feito?'}
                            value={inputItem}
                            onChange={e => setInputItem(e.target.value)}
                            onKeyDown={_handleKeyDown}
                        />
                    </TodoHead>

                    <TodoSection>
                        <TodoList>
                            {todoItens.map(i => {
                                return (
                                    <Item
                                        content={i.content}
                                    />
                                    )
                            })}

                        </TodoList>
                    </TodoSection>

                    <TodoFooter>

                        <TodoCount>2 item left</TodoCount>

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
                </TodoWrap>
            </Container>
        </ThemeProvider>
    );
}
