import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AiFillStar } from 'react-icons/ai'
import { Context } from '../context/AppContext'
import '../styles/BirdCard.css'

const BirdCard = ({ bird }) => {

    const { store, actions } = useContext(Context)

    const isFavorite = () => {

        let isFavorite = store?.favorites.filter((fav) => fav.uid == bird.uid)

        if (isFavorite.length != 0) {
            console.log('true')
            return true;
        }
        // console.log('false')
        return false;

    }

    return (
        <div className="col-sm-12 offset-md-2 col-md-8 offset-lg-0 col-lg-4">
            <div className="card mb-3" style={{ minHeight: "95%" }}>
                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <img src={bird.images.full} className="rounded-start bird-image" alt="..." />
                    </div>
                    <div className="col-md-6 col-lg-8">
                        <div className="card-body">
                            <h5 className="card-title">{bird.name.spanish}</h5>
                            <br />
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>

                        </div>
                        <div className="d-flex justify-content-evenly align-items-center p-2">
                            <Link to={`/birds/${bird.uid}`}>
                                <button type='button' className='btn btn-primary'>Ver Mas</button>
                            </Link>
                            <AiFillStar
                                className={`fs-1 border border-2 rounded border-dark ${isFavorite() ? 'custom-star-active' : 'custom-star'}`}
                                type='button'
                                onClick={() => actions?.addFavorite(bird)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BirdCard