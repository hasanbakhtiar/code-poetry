import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'; 
const Contact = () => {
    const form = useRef();
    
    const sendSubmit=(e)=>{
        e.preventDefault();
        emailjs
        .sendForm('service_4wd3444', 'template_djhmafn', form.current, {
          publicKey: 'cVBf7nQwR9JgBlZoL',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    }
    return (
        <div className="container">
            <h1 className='text-center'>Contact</h1>
            <div className="d-flex align-items-center justify-content-center">
                <div className="col-9">
                    <form ref={form} onSubmit={sendSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Full name</label>
                            <input name='name' type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input name='email' type="text" className="form-control" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Tel</label>
                            <input name='phone' type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Message</label>
                            <div className="form-floating">
                                <textarea name='message' className="form-control" style={{ height: 100 }} />
                            </div>

                        </div>


                        <button type="submit" className="btn btn-dark">Send</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Contact