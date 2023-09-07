import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Footer.css'
import { BsFillHouseDoorFill, BsMap } from 'react-icons/bs'
import { MdContactMail } from 'react-icons/md'

const Footer = () => {

    const classnameLink = "link-offset-2 link-offset-3-hover link-underline-dark link-underline-opacity-0 link-underline-opacity-75-hover text-dark";

    return (
        <footer className='container-fluid footer-color'>
            <div className="row">
                <div className="col-lg-4 my-4">
                    <h3 className='text-center'>Birds Index</h3>
                    <div className='d-flex justify-content-center align-items-top'>
                        <BsFillHouseDoorFill className='display-1 p-1 border border-dark' />
                        <ul className='d-flex flex-column align-items-center fs-5'>
                            <li className='list-group'>
                                <Link
                                    className={classnameLink}
                                    to='/'>
                                    Vestibulum imperdiet mattis velit
                                </Link>
                            </li>
                            <li className='list-group'>
                                <Link
                                    className={classnameLink}
                                    to='/'>
                                    Vestibulum imperdiet mattis velit
                                </Link>
                            </li>
                            <li className='list-group'>
                                <Link
                                    className={classnameLink}
                                    to='/'>
                                    Vestibulum imperdiet mattis velit
                                </Link>
                            </li>
                            <li className='list-group'>
                                <Link
                                    className={classnameLink}
                                    to='/'>
                                    Vestibulum imperdiet mattis velit
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
                                Vestibulum imperdiet mattis velit
                            </li>
                            <li className='list-group'>
                                Vestibulum imperdiet mattis velit
                            </li>
                            <li className='list-group'>
                                Vestibulum imperdiet mattis velit
                            </li>
                            <li className='list-group'>
                                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
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