import axios from "axios";
import {TODOItem} from "../../components/todo/index";

const api = process.env.REACT_APP_API

export const getTodos = async () => {
    try {
        return await axios.get(`${api}/todos/`)
    } catch (e) {
        console.log('error')
    }
}

export const setTodo = async (data:TODOItem) => {
    try {
        await axios.post(`${api}/todos/`, data)
    } catch (e) {
        console.log('error')
    }
}