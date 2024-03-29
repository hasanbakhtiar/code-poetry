import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import slugify from 'slugify';

const BlogDetails = () => {
    const { slug } = useParams();
    const blogs = useSelector(p => p);
    const blogDetails = blogs.filter(p => slugify(p.title) === slug);
    console.log(blogDetails);
    return (
        <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src={blogDetails[0].img} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
                </div>
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">{blogDetails[0].title}</h1>
                    <p className="lead">{blogDetails[0].desc}</p>
                
                </div>
            </div>
        </div>

    )
}

export default BlogDetails