import React, {useState} from "react";
import {TodoItem, TodoItemInput, TodoItemLabel} from "../todo";

export function Item(props: any) {
    const [content, setContent] = useState('');

    return (
        <TodoItem>
            <TodoItemInput type={'checkbox'}/>
            <TodoItemLabel>{props.content}</TodoItemLabel>
        </TodoItem>
    )
}