import React from 'react'
import '../styles/Footer.css'
import { BsFillHouseDoorFill, BsMap } from 'react-icons/bs'
import { MdContactMail } from 'react-icons/md'

const Footer = () => {
    return (
        <footer className='container-fluid footer-color'>
            <div className="row">
                <div className="col-4 my-4">
                    <h3 className='text-center'>Contacto</h3>
                    <div className='d-flex justify-content-center align-items-center'>
                        <BsFillHouseDoorFill className='display-1 p-1 border border-dark border-3 rounded-circle' />
                        <ul className='d-flex flex-column align-items-center'>
                            <li className='list-group'>
                                Vestibulum imperdiet mattis velit
                            </li>
                            <li className='list-group'>
                                Maecenas ac ullamcorper nibh.
                            </li>
                            <li className='list-group'>
                                Vestibulum imperdiet mattis velit
                            </li>
                            <li className='list-group'>
                                Vestibulum imperdiet mattis velit
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-4 my-4">
                    <h3 className='text-center'>Contacto</h3>
                    <div className='d-flex justify-content-center align-items-center'>
                        <BsMap className='display-1 p-1 border border-dark border-3 rounded-circle' />
                        <ul className='d-flex flex-column align-items-center'>
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
                                Vestibulum imperdiet mattis velit
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-4 my-4">
                    <h3 className='text-center'>Contacto</h3>
                    <div className='d-flex justify-content-center align-items-center'>
                        <MdContactMail className='display-1 p-1 border border-dark border-3 rounded-circle' />
                        <ul className='d-flex flex-column align-items-center'>
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
                                Vestibulum imperdiet mattis velit
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer