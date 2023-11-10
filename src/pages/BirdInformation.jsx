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
                    <div className="card mb-3 custom-bg-card">
                        <div className='row'>
                            <h1 className="card-title text-center mt-4">{selectedBird ? selectedBird?.name?.spanish : ""}</h1>
                            <h4 className="card-subtitle text-center mb-4 fst-italic fw-light">{selectedBird ? selectedBird?.name?.latin : ""}</h4>
                            <div className="col-7">
                                <img src={selectedBird ? selectedBird?.images?.main : ""} className="card-img-top custom-photo-size" alt="..." />
                            </div>
                            <div className="col-5">
                                <h4>Ave Migratoria?</h4>
                                <p>{selectedBird?.migration ? "Si" : "No"}</p>
                                <hr />
                                <h4>Especie</h4>
                                <p>{selectedBird?.species ? selectedBird?.species : ""}</p>
                                <hr />
                                <h4>Dimorfismo</h4>
                                <p>{selectedBird?.dimorphism ? "Si" : "No"}</p>
                                <hr />
                                <h5>{selectedBird?.size ? "Medidas:" : ""}</h5>
                                <p>{selectedBird ? selectedBird?.size : ""}</p>
                                <hr />
                                <h5>{selectedBird?.map ? "Ubicacion:" : ""}</h5>
                                <p>{selectedBird ? selectedBird?.map?.title : ""}</p>
                                <hr />
                                {
                                    selectedBird?.audio ?
                                        <span className='d-flex flex-column justify-content-center align-items-center'>
                                            <h5 className="card-subtitle text-body-secondary mb-3">Canto</h5>
                                            <audio className='custom-audio-size' controls src={selectedBird ? selectedBird?.audio?.file : null} />
                                        </span>
                                        :
                                        ""
                                }
                            </div>
                        </div>
                        <div className="card-body p-4">
                            <h5>{selectedBird?.habitat ? "Habitat:" : ""}</h5>
                            <p>{selectedBird ? selectedBird?.habitat : ""}</p>
                            <h5>{selectedBird?.didyouknow ? "Sabias que:" : ""}</h5>
                            <p>{selectedBird ? selectedBird?.didyouknow : ""}</p>
                            <h5>{selectedBird ? selectedBird?.iucn?.title : ""}</h5>
                            <p>{selectedBird ? selectedBird?.iucn?.description : ""}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BirdInformation