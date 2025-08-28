import {createSlice,nanoid} from "@reduxjs/toolkit"

const initialState = {
    todos:[{id:1,text:"Hello world",completed:true}]
};

const TodosDetails = createSlice({
    name:"task",
    initialState,
    reducers:{
        addTask(state,action){
            state.todos.push({id:nanoid(),text:action.payload})
        },
        deleteTask(state,action){
            state.todos=state.todos.filter(todos=>todos.id!=action.payload)
        },
        completed(state,action){
            state.todos.completed=action.payload;
        }
    }
})

export default TodosDetails ;
export const {addTask,deleteTask} =TodosDetails.actions;