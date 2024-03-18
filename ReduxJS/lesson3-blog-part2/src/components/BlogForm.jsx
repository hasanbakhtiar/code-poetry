import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addBlog } from '../tools/action/blogAction';

const BlogForm = () => {
    const [img,setImg]=useState(""); 
    const [title,setTitle]=useState(""); 
    const [desc,setDesc]=useState(""); 
    const dispatch = useDispatch();//new

    const formSubmit =e=>{
            e.preventDefault();
            if (!title || !desc || !img) {
                alert('please, fill input')
            }else{
                dispatch(addBlog({
                    img:img,
                    title:title,
                    desc:desc
                }))
            }
    }
    
    return (
        <div className="container">
            <div className="d-flex align-items-center justify-content-center">
                <div className="col-9">
                <form onSubmit={formSubmit}>
                <div className="mb-3">
                    <label className="form-label">Image url</label>
                    <input onChange={e=>setImg(e.target.value)} type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input onChange={e=>setTitle(e.target.value)} type="text" className="form-control" />
                </div>

                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <div className="form-floating">
                        <textarea onChange={e=>setDesc(e.target.value)} className="form-control"  style={{ height: 100 }} />
                    </div>

                </div>


                <button type="submit" className="btn btn-dark">Add</button>
            </form>
                </div>
            </div>

        </div>
    )
}

export default BlogForm