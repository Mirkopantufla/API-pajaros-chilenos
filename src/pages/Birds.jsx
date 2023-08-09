import React, { useContext, useState } from 'react'
import { Context } from '../context/AppContext';
import BirdCard from '../components/BirdCard';
import Pagination from 'react-js-pagination';
import { BsBackspaceFill, BsBackspaceReverseFill } from 'react-icons/bs'

const Home = () => {

    const { store, actions } = useContext(Context);

    const [page, setPage] = useState(1);

    const handlePageChange = page => {

        console.log(page)
        console.log(store?.birds?.length)

        if (page > 0) {
            setPage(page);
        }

    }

    return (
        <div className='container-fluid'>
            <div className="row bg-dark">
                <h1 className='text-light text-center mt-4'>Aves de Chile</h1>
                <div className="d-flex justify-content-between align-items-center mx-auto p-3 shadow">
                    {
                        store?.birds && (
                            <>
                                <BsBackspaceFill className={"fs-2 text-light" + (page > 1 ? "" : "disabled")}
                                    onClick={() => {
                                        if (page > 1) {
                                            setPage(page - 1)
                                        }
                                    }} />
                                <BsBackspaceReverseFill className={"fs-2 text-light" + (page <= (store?.birds?.length / 9) - 1 ? "" : "disabled")}
                                    onClick={() => {
                                        if (page <= (store?.birds?.length / 9) - 1) {
                                            setPage(page + 1)
                                        }
                                    }} />
                            </>
                        )
                    }
                </div>

                <div className="row">
                    {
                        //Valido si existen los 'birds' dentro de 'store', si hay, que me traiga 9 resultados de todo el array
                        //previamente guardado en el context
                        store.birds ?
                            store.birds.slice(page == 1 ? 0 : (9 * page) - 9, 9 * page).map((bird) => {
                                return (
                                    <BirdCard key={bird.sort} birdUID={bird.uid} birdNameTittle={bird.name.spanish} birdImage={bird.images.full} />
                                )
                            })
                            :
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                    }
                </div>
                <div className="d-flex justify-content-center align-items-center mt-3 fs-5">
                    {
                        !!store.birds && (
                            <Pagination
                                activePage={page}
                                totalItemsCount={store?.birds.length || 0}
                                itemsCountPerPage={9}
                                itemClass="page-item"
                                linkClass="page-link"
                                pageRangeDisplayed={5}
                                onChange={handlePageChange} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Home