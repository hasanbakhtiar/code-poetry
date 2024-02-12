import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, Zoom, toast } from 'react-toastify';

const userdata = {
    email: "a@a",
    pass: "123"
}


const Login = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [text,setText] = useState("");
    const [alert,setAlert]= useState("");
    const navigate = useNavigate();
    const notify = (text) => toast.error(text, {
        position: "top-center",
        autoClose: 1111,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Zoom,
        });
    const checkForm = (e) => {
        e.preventDefault();
            if (!email||!pass) {
                notify('please fill input');
            }else{
              if (email !== userdata.email) {
                // setText("This account is not defined");
                // setAlert("info");
                notify('This account is not defined');

                setTimeout(()=>{
                    navigate('/register')
                },5000)
              }else{
                if (userdata.email === email && userdata.pass === pass) {
                    setText("Login is successfully!");
                    setAlert("success");
                }else{
                    // setText("email or password is wrong!");
                    // setAlert("danger");
                notify('email or password is wrong!');

                }
              }
            }
    }
    return (
        <div style={{ height: "70vh" }}>
            <div className="d-flex flex-column w-100 align-items-center justify-content-center">
                <h1 className='my-5'>Login</h1>
                <div class={`alert alert-${alert}`} role="alert">
                   {text}
                </div>
                <div className="col-5">
                    <form onSubmit={checkForm}>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input value={email} onChange={e=>setEmail(e.target.value)} type="email" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input value={pass} onChange={e=>setPass(e.target.value)} type="password" className="form-control" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <ToastContainer />
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Login