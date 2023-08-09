import React, { useContext, useEffect } from 'react'
import { Context } from '../context/AppContext'
import { useParams } from 'react-router'
import '../styles/BirdInformation.css'

const BirdInformation = () => {

    const { store: { selectedBird }, actions } = useContext(Context)
    const params = useParams()

    useEffect(() => {

        actions.cleanSelectedBird();
        actions.getSpecificBird(params.uid);

    }, [])


    return (
        <div className='container-fluid custom-wallpaper'>
            <div className="row">
                <div className="offset-1 col-10 my-5">
                    <div className="card mb-3">
                        <div className='row'>
                            <h2 className="card-title text-center mt-4">{selectedBird ? selectedBird?.name?.spanish : ""}</h2>
                            <h4 className="card-subtitle text-center mb-4 fst-italic fw-light">{selectedBird ? selectedBird?.name?.latin : ""}</h4>
                            <div className="col-7">
                                <img src={selectedBird ? selectedBird?.images?.main : ""} className="card-img-top custom-photo-size" alt="..." />
                            </div>
                            <div className="col-5">
                                <h4 className="card-subtitle text-body-secondary">Ave Migratoria?</h4>
                                <p>{selectedBird?.migration ? "Si" : "No"}</p>
                                <hr />
                                <h4 className="card-subtitle text-body-secondary">Especie</h4>
                                <p>{selectedBird?.species ? selectedBird?.species : ""}</p>
                                <hr />
                                <h4 className="card-subtitle text-body-secondary">Dimorfismo</h4>
                                <p>{selectedBird?.dimorphism ? "Si" : "No"}</p>
                                <hr />
                                <h5 className="card-subtitle text-body-secondary">{selectedBird?.size ? "Medidas:" : ""}</h5>
                                <p>{selectedBird ? selectedBird?.size : ""}</p>
                                <hr />
                                <h5 className="card-subtitle text-body-secondary">{selectedBird?.map ? "Ubicacion:" : ""}</h5>
                                <p>{selectedBird ? selectedBird?.map?.title : ""}</p>
                                <hr />
                                {
                                    selectedBird?.audio ?
                                        <>
                                            <h5 className="card-subtitle text-body-secondary text-center">Canto</h5>
                                            <audio className='d-flex justify-self-center' controls src={selectedBird ? selectedBird?.audio?.file : null} />
                                        </>
                                        :
                                        ""
                                }
                            </div>
                        </div>
                        <div className="card-body">
                            <h5 className="card-subtitle text-body-secondary">{selectedBird?.habitat ? "Habitat:" : ""}</h5>
                            <p>{selectedBird ? selectedBird?.habitat : ""}</p>
                            <h5 className="card-subtitle text-body-secondary">{selectedBird?.didyouknow ? "Sabias que:" : ""}</h5>
                            <p>{selectedBird ? selectedBird?.didyouknow : ""}</p>
                            <h5 className="card-subtitle text-body-secondary">{selectedBird ? selectedBird?.iucn.title : ""}</h5>
                            <p>{selectedBird ? selectedBird?.iucn.description : ""}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BirdInformation