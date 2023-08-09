import React from 'react'
import { Link } from 'react-router-dom'

const BirdCard = ({ birdUID, birdNameTittle, birdImage }) => {

    return (
        <div className="col-lg-4 col-md-6">
            <div className="card mb-3">
                <div className="row">
                    <div className="col-md-6 col-lg-5">
                        <img src={birdImage} className="img-fluid rounded-start" alt="..." style={{ minHeight: "100%" }} />
                    </div>
                    <div className="col-md-6 col-lg-7">
                        <div className="card-body">
                            <h5 className="card-title">{birdNameTittle}</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                            <Link to={`/birds/${birdUID}`}>
                                <button type='button' className='btn btn-primary'>Ver Mas</button>
                            </Link>
                            <button type='button' className='btn btn-primary'>Like</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BirdCard