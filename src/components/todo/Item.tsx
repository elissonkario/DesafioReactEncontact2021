import React from "react";
import {TodoItem, TodoItemInput, TodoItemLabel} from "../todo";

export function Item(props: any) {
    return (
        <TodoItem>
            <TodoItemInput type={'checkbox'}/>
            <TodoItemLabel>{props.content}</TodoItemLabel>
        </TodoItem>
    )
}