import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import slug from 'react-slugify';
import { ProductContext } from '../context/ProductContext';
const ProductDetails = () => {

    const [productdata] = useContext(ProductContext);
    const { url } = useParams();
    const detailsData = productdata.filter(p => slug(p.title) == url);
    return (
        <>
            {productdata.length === 0 ? <h1>Loading...</h1> : <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <div id="carouselExample" className="carousel slide">
                            <div className="carousel-inner">
                                {detailsData[0].images.map((item,c)=>(
                                    <div key={c} className={`carousel-item ${c === 0 ? "active":""}`}>
                                    <img height={300} style={{objectFit:"contain"}} src={item} className="d-block w-100" alt="..." />
                                </div>
                                ))}
                                
                            
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>

                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">{detailsData[0].title}</h1>
                        <p className="lead">{detailsData[0].description}</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <Link to="/products" className="btn btn-outline-secondary btn-lg px-4">Back</Link>
                            <button type="button" className="btn btn-danger btn-lg px-4 me-md-2">{detailsData[0].price} $</button>
                        </div>
                    </div>
                </div>
            </div>}
        </>

    )
}

export default ProductDetails