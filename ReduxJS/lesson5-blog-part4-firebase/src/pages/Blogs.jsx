import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import slugify from 'slugify'

const Blogs = () => {
    const blogs = useSelector(p => p)

    return (
        <section className='blog'>
            <div className="container my-5">
                <div className="row g-4">
                    {blogs.map(item=>(
                        <div key={item.id} className="mycard col-12 col-sm-12 col-md-4">
                        <div className="card">
                            <img height={300} style={{objectFit:"contain"}} src={item.img} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{item.title.slice(0,30)}...</h5>
                                <p className="card-text">{item.desc.slice(0,100)}...</p>
                                <Link to={`/${slugify(item.title)}`} className="btn btn-primary">Read more</Link>
                            </div>
                        </div>

                    </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Blogs