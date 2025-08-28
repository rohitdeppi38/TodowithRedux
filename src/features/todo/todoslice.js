import {createSlice,nanoid} from "@reduxjs/toolkit"

const initialState = {
    todos:[{id:1,text:"Hello world"}]
};

const TodosDetails = createSlice({
    name:"task",
    initialState,
    reducers:{
        addTask(state,action){
            state.todos.push(action.payload)
        },
        deleteTodo(state,action){
            state.todos=state.todos.filter(todos=>todos.id!=action.payload)
        }
    }
})

export default TodosDetails ;
export const {addTask,deleteTodo} =TodosDetails.actions;