import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Footer.css'
import { BsFillHouseDoorFill, BsMap } from 'react-icons/bs'
import { MdContactMail } from 'react-icons/md'

const Footer = () => {

    const classnameLink = "link-offset-2 link-offset-3-hover link-underline-opacity-0 link-underline-opacity-75-hover";

    return (
        <footer className='container-fluid footer-color'>
            <div className="row">
                <div className="col-lg-4 my-4">
                    <h3 className='text-center'>Birds Index</h3>
                    <div className='d-flex justify-content-center align-items-top'>
                        <BsFillHouseDoorFill className='display-1 p-1 border border-dark' />
                        <ul className='d-flex flex-column align-items-start fs-5'>
                            <li className='list-group'>
                                <Link
                                    className={classnameLink}
                                    to='/'>
                                    Donec in mollis mauris
                                </Link>
                            </li>
                            <li className='list-group'>
                                <Link
                                    className={classnameLink}
                                    to='/'>
                                    Lorem ipsum dolor sit amet
                                </Link>
                            </li>
                            <li className='list-group'>
                                <Link
                                    className={classnameLink}
                                    to='/'>
                                    Proin varius et magna quis
                                </Link>
                            </li>
                            <li className='list-group'>
                                <Link
                                    className={classnameLink}
                                    to='/'>
                                    Aenean malesuada magna eu rhoncus
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4 my-4">
                    <h3 className='text-center'>Ubicación</h3>
                    <div className='d-flex justify-content-center align-items-top'>
                        <BsMap className='display-1 p-2 border border-dark' style={{ width: "85px" }} />
                        <ul className='d-flex flex-column align-items-start fs-5'>
                            <li className='list-group'>
                                Curabitur varius lectus nec tempus finibus.
                            </li>
                            <li className='list-group'>
                                Fusce vitae orci a odio pulvinar feugiat.
                            </li>
                            <li className='list-group'>
                                Aenean mattis, 1657
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4 my-4">
                    <h3 className='text-center'>Contacto</h3>
                    <div className='d-flex justify-content-center align-items-top'>
                        <MdContactMail className='display-1 p-1 border border-dark' />
                        <ul className='d-flex flex-column align-items-start fs-5'>
                            <li className='list-group'>
                                Mirko Sergei Pasten Carcamo
                            </li>
                            <li className='list-group'>
                                Lampa, Region Metropolitana, Chile
                            </li>
                            <li className='list-group'>
                                mirko.pasten.dev@gmail.com
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer