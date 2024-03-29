import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const BlogForm = ({comingblog,editdata}) => {
    const [img,setImg]=useState(editdata?editdata.img:""); 
    const [title,setTitle]=useState(editdata?editdata.title:""); 
    const [desc,setDesc]=useState(editdata?editdata.desc:""); 

    const formSubmit =e=>{
            e.preventDefault();
            if (!title || !desc || !img) {
                alert('please, fill input')
            }else{
                comingblog({
                    title:title,
                    img:img,
                    desc:desc
                })
            }
    }
    
    return (
        <div className="container">
            <div className="d-flex align-items-center justify-content-center">
                <div className="col-9">
                <form onSubmit={formSubmit}>
                <div className="mb-3">
                    <label className="form-label">Image url</label>
                    <input value={img} onChange={e=>setImg(e.target.value)} type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input value={title} onChange={e=>setTitle(e.target.value)} type="text" className="form-control" />
                </div>

                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <div className="form-floating">
                        <textarea onChange={e=>setDesc(e.target.value)} value={desc} className="form-control"  style={{ height: 100 }} />
                    </div>

                </div>


                <button type="submit" className="btn btn-dark">{editdata?"Edit":"Add"}</button>
            </form>
                </div>
            </div>

        </div>
    )
}

export default BlogForm