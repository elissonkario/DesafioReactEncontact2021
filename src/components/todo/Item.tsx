import React from "react";
import {TodoItem, TodoItemInput, TodoItemLabel} from "../todo";

export function Item(props: any) {

    return (
        <TodoItem
            className={props.editing.state && props.editing.id === props.item.id ? 'editing' : ''}
        >
            <TodoItemInput
                type={'checkbox'}
                checked={props.item.isDone || false}
                onClick={() => props.complete(props.item.id)}
            />
            <TodoItemLabel
                onDoubleClick={() => props.edit(props.item.id)}
            >{props.item.title}</TodoItemLabel>
            <TodoItemInput
                className={'edit'}
                value={props.item.title}
                type={'text'}
            />
        </TodoItem>
    )
}