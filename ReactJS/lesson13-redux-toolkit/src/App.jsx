import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { add } from './features/todoSlice';
import swal from 'sweetalert';
import { useRef } from 'react';

const App = () => {
    const inputRef = useRef();
    const dispatch = useDispatch();
    const todos = useSelector(p=>p.todo);
    const formSubmit =(e)=>{
        e.preventDefault()
        if (!inputRef.current.value) {
            swal({
                title: "Please fill input",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
        }else{
            dispatch(add(inputRef.current.value));   
            inputRef.current.value = "";
        }
    }
    return (
        <div className="d-flex align-items-center justify-content-center flex-column">
            <h1 className='my-5'>Todo App</h1>
            <div className="col-6">
                <form className="input-group mb-3" onSubmit={formSubmit}>
                    <input ref={inputRef} type="text" className="form-control" placeholder="Enter to do" />
                    <button className="btn btn-dark" type="submit">Add</button>
                </form>
                <ul className="list-group">
                {todos.map(i=>(
                    <li key={i.id} className="list-group-item">{i.text}</li>
                ))}
                </ul>

            </div>
        </div>

    )
}

export default App