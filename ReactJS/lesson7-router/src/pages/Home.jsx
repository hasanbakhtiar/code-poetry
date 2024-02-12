import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="px-4 py-5 my-5 text-center" style={{height:"70vh"}}>
            <h1 className="display-5 fw-bold text-body-emphasis">Welcome to Best Shop!</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">
                    Amazon is guided by four principles: customer obsession rather than competitor focus, passion for invention, commitment to operational excellence, and long-term thinking. Amazon strives to be Earth’s most customer-centric company, Earth’s best employer, and Earth’s safest place to work.
                </p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <Link to="/about" type="button" className="btn btn-primary btn-lg px-4 gap-3">Learn More</Link>
                </div>
            </div>
        </div>

    )
}

export default Home