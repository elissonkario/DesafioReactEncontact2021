import React, {useState} from "react";
import { ThemeProvider } from "styled-components";
import {
    WrapContainer,
    Container,
    lightTheme,
    darkTheme,
    WrapList,
    TodoTitle,
    TodoInput
} from "./components/";


export default function App() {

    const [theme, setTheme] = useState('light');

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <WrapContainer/>
            <Container>
                <TodoTitle>todos</TodoTitle>
                <WrapList>
                    <TodoInput
                        placeholder={'O que precisa ser feito?'}
                    />
                </WrapList>
            </Container>
        </ThemeProvider>
    );
}
