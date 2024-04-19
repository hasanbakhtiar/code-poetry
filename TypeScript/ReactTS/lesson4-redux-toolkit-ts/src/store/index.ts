
import {configureStore} from '@reduxjs/toolkit';
import todoSlice from '../feature/todoSlice';
import {useDispatch} from 'react-redux'; 
import {useSelector} from 'react-redux'; 
import {TypedUseSelectorHook} from 'react-redux'; 
const store = configureStore({
    reducer:{
        todo:todoSlice
    }
})



export default store;


export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = ()=>useDispatch<AppDispatch>();
export const useAppSelector:TypedUseSelectorHook<RootStore>=useSelector;