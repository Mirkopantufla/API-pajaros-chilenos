import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AiFillStar } from 'react-icons/ai'
import { Context } from '../context/AppContext'
import '../styles/BirdCard.css'

const BirdCard = ({ bird }) => {

    const { store, actions } = useContext(Context)

    const isFavorite = () => {

        let isFavorite = store?.favorites.filter((fav) => fav.uid == bird.uid)

        console.log(isFavorite)

        if (isFavorite.length != 0) {
            console.log('true')
            return true;
        }
        // console.log('false')
        return false;

    }

    return (
        <div className="col-12 offset-md-2 col-md-8 offset-lg-0 col-lg-6 col-xl-6">
            <div className="card mb-3">
                <div className="row">
                    <div className="col-md-6 col-lg-7">
                        <img src={bird.images.thumb} className="rounded-start bird-image" alt="..." />
                    </div>
                    <div className="col-md-6 col-lg-5">
                        <div className="card-body">
                            <div className='row'>
                                <h4 className="col-10 card-title ">{`${bird.name.spanish}`}</h4>
                                <small className='col-2 d-flex justify-content-end'>{bird.sort}</small>
                            </div>
                            <br />
                            <ul className='list-group'>
                                <li className='list-group-item'>
                                    <h5>Latín</h5>
                                    {bird.name.latin}
                                </li>
                                <li className='list-group-item'>
                                    <h5>Inglés</h5>
                                    {bird.name.english}
                                </li>
                            </ul>

                        </div>
                        <div className="d-flex justify-content-evenly align-items-center mb-2">
                            <Link to={`/birds/${bird.uid}`}>
                                <button type='button' className='btn-custom-primary'>Ver Mas</button>
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