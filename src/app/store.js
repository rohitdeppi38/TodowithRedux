import {configureStore} from "@reduxjs/toolkit"
import TodosDetails from "../features/todo/todoslice.js"

export const store = configureStore({
    reducers:{
        todos:TodosDetails.reducer,
    }
})