import React, {useEffect, useState} from "react";
import {TodoItem, TodoItemInput, TodoItemLabel} from "../todo";

export function Item(props: any) {

    const [editItem, setEditItem] = useState({id: props.item.id, title: props.item.title, isDone: props.item.isDone});

    const checkEdit = (props:any) => {
        return props.editing.state && props.editing.id === props.item.id || false
    }

    const enterItem = (e:any) => {
        if (e.key === 'Enter' && editItem) {
            props.enterValue(editItem)
        }
    }

    const handleEdit = (e:object) => {
        // @ts-ignore
        let item = {id: props.item.id, title: e.target.value, isDone: props.item.isDone}

        setEditItem(item)
        props.storeEdit(item)

    }

    const outSiteEdit = () => {
        return props.outSiteEdit()
    }

    return (
        <TodoItem
            className={checkEdit(props) ? 'editing' : ''}
        >
            <TodoItemInput
                type={'checkbox'}
                checked={props.item.isDone || false}
                onClick={() => props.complete(props.item.id)}
            />

            <TodoItemLabel
                onClick={() => outSiteEdit()}
                onDoubleClick={() => props.edit(props.item.id)}
            >{props.item.title}</TodoItemLabel>

            <TodoItemInput
                className={'edit'}
                value={editItem.title}
                onChange={handleEdit}
                type={'text'}
                onKeyDown={enterItem}
            />

        </TodoItem>
    )
}