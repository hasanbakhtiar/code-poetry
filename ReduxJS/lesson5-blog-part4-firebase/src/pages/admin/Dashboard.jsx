import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { removeBlog, removeBlogFromDatabase } from '../../tools/action/blogAction';
import slugify from 'slugify';

const Dashboard = () => {
    const blogs = useSelector(p=>p);
    const dispatch = useDispatch()
    return (
        <div className="container">
            <h1 className='text-center my-5'>Dashboard</h1>
            <div className="d-flex align-items-center justify-content-center my-5">
                <div className="col-9">
                    <Link className='btn btn-dark' to="/dashboard/add">Add blog</Link>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Photo</th>
                                <th scope="col">Title</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {blogs.map((item,count)=>(
                                <tr key={count}>
                                <th scope="row">{count+1}</th>
                                <td><img src={item.img} width={100} alt={item.title} /></td>
                                <td>{item.title}</td>
                                <td><Link to={`/dashboard/edit/${slugify(item.title)}`} className='btn btn-warning'>Edit</Link></td>
                                <td><button onClick={()=>{
                                    dispatch(removeBlogFromDatabase(item.id))
                                }} className='btn btn-danger'>X</button></td>
                            </tr>
                            ))}
                            
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}

export default Dashboard