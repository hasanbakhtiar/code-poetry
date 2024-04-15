import {createSlice} from '@reduxjs/toolkit';

const initialState = [

];
const todoSlice = createSlice({
    name:"todos",
    initialState,
    reducers:{
        add:(state,action)=>{
            const newTodo = {id:crypto.randomUUID(),text:action.payload}
            state.push(newTodo);
        }
    }
})

export default todoSlice.reducer;
export const {add} = todoSlice.actions;
