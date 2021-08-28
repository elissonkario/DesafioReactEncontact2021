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
    TodoItem,
    TodoItemInput,
    TodoItemLabel,
    TodoFooter,
    TodoCount,
    TodoFilters,
    TodoFiltersItem,
    Link,
    Button
} from "./components/";

import darkModeIcon from "./images/dark-mode.png";


export default function App() {

    const [theme, setTheme] = useState('light');

    const changeTheme = (t:string) => {
        t = theme === 'dark' ? 'light' : t
        setTheme(t)
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
                        />
                    </TodoHead>

                    <TodoSection>
                        <TodoList>
                            <TodoItem>
                                <TodoItemInput type={'checkbox'}/>
                                <TodoItemLabel>Fazer Todo de Teste</TodoItemLabel>
                            </TodoItem>
                            <TodoItem>
                                <TodoItemInput type={'checkbox'}/>
                                <TodoItemLabel>Comprar Açucar</TodoItemLabel>
                            </TodoItem>
                            <TodoItem>
                                <TodoItemInput type={'checkbox'}/>
                                <TodoItemLabel>Tomar café na Ciça</TodoItemLabel>
                            </TodoItem>
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
