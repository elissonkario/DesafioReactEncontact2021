import React from "react";
import {TodoItem, TodoItemInput, TodoItemLabel} from "../todo";

export function Item(props: any) {

    return (
        <TodoItem>
            <TodoItemInput
                type={'checkbox'}
                checked={props.item.completed || false}
                onClick={() => props.complete(props.item.id)}
            />
            <TodoItemLabel>{props.item.content}</TodoItemLabel>
        </TodoItem>
    )
}