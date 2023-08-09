import React from 'react'
import { Link } from 'react-router-dom';
import { LuBird } from 'react-icons/lu'
import { MdOutlineQuestionMark } from 'react-icons/md'
import Bird from '../images/Bird.png'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand border border-dark px-2 rounded me-4" to="/">
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
                        <Link className='nav-link fs-4 d-flex align-items-center' to="/about">
                            <MdOutlineQuestionMark /> About
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar