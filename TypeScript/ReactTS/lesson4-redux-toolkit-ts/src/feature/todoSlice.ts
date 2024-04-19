import {createSlice} from '@reduxjs/toolkit';

interface todoType{
    id:string;
    text:string;
}

const initialState:todoType[] = [

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