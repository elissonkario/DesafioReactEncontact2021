import React from "react";
import {TodoItem, TodoItemInput, TodoItemLabel} from "../todo";

export function Item(props: any) {

    return (
        <TodoItem>
            <TodoItemInput
                type={'checkbox'}
                onClick={() => props.complete(props.item.id)}
            />
            <TodoItemLabel>{props.item.content}</TodoItemLabel>
        </TodoItem>
    )
}