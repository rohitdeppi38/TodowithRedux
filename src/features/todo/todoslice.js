import {createSlice,nanoid} from "@reduxjs/toolkit"

const initialState = {
    todos:[{id:1,text:"Hello world",completed:false}]
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
            const todo = state.todos.find(t=>t.id===action.payload);
            if(todo){
                todo.completed=!todo.completed;
            }
        }
    }
})

export default TodosDetails ;
export const {addTask,deleteTask,completed} =TodosDetails.actions;