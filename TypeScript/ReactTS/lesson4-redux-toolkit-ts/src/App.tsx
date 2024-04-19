import { add } from './feature/todoSlice';
import { useRef } from 'react';
import { useAppDispatch, useAppSelector } from './store';

const App = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const dispatch = useAppDispatch();
    const todos = useAppSelector((p:any)=>p.todo);
    const formSubmit =(e:React.FormEvent)=>{
        e.preventDefault()
        if (!inputRef.current?.value) {
            alert("please fill input")
        }else{
            dispatch(add(inputRef.current?.value));  
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
                {todos.map((i:any)=>(
                    <li key={i.id} className="list-group-item">{i.text}</li>
                ))}
                </ul>

            </div>
        </div>

    )
}

export default App