import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { LuBird } from 'react-icons/lu'
import { MdOutlineQuestionMark } from 'react-icons/md'
import { BsFillTrashFill } from 'react-icons/bs'
import Bird from '../images/Bird.png'
import { Context } from '../context/AppContext';

const Navbar = () => {

    const { store, actions } = useContext(Context);

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">

            <Link className="navbar-brand border border-dark px-2 rounded me-4 ms-2" to="/">
                <img src={Bird} alt="" style={{ height: "40px" }} />
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className='nav-link fs-4 d-flex align-items-center' to="/birds">
                        <LuBird className='me-1 fw-5' />Birds
                    </Link>
                    {/* <Link className='nav-link fs-4 d-flex align-items-center' to="/about">
                        <MdOutlineQuestionMark /> About
                    </Link> */}
                </div>
                <div className="navbar-nav ms-auto">

                </div>
                <div className="dropstart ms-auto">
                    <Link
                        to="/birds"
                        className='nav-link fs-4 d-flex align-items-center me-2'
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        {
                            <small
                                className="rounded bg-light p-1 text-dark">
                                {store?.favorites?.length > 0 ? store?.favorites?.length : ""}
                            </small>
                        }
                        <LuBird className='me-1 fw-5' />
                        Favoritos
                    </Link>
                    <ul className="dropdown-menu">
                        {
                            store.favorites.length >= 1 ?
                                store?.favorites?.map((favorite, index) => {
                                    return (
                                        <li key={index}
                                            className="bg-dark text-light rounded m-1 d-flex justify-content-between p-2 fs-5">
                                            <Link
                                                href={`/birds/${favorite?.uid}`}
                                                className="p-2 m-auto"
                                                style={{ width: "200px" }}
                                            >
                                                {favorite?.name?.spanish}
                                            </Link>
                                            <span className="m-auto pe-auto border border-light rounded-2 p-2 trashButton">
                                                <BsFillTrashFill className="fs-5 mx-2" onClick={() => actions.deleteFavorite(favorite)} />
                                            </span>
                                        </li>
                                    )
                                })
                                :
                                <li className="bg-dark text-light rounded m-1 d-flex justify-content-between p-2 fs-5">
                                    <p className="p-2 m-auto" style={{ width: "150px" }}>No birds added yet...</p>
                                </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar