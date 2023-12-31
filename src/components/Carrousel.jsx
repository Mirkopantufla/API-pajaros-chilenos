import React from 'react'
import '../styles/Carrousel.css'

const Carrousel = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="true">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner" >
                <div className="carousel-item active">
                    <img src="https://picsum.photos/id/337/1500/1000" className="d-block w-100 carrousel-img" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://picsum.photos/id/324/1500/1000" className="d-block w-100 carrousel-img" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Proin tortor lorem, posuere eget risus ut, interdum pellentesque dolor. Ut convallis vehicula sapien.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://picsum.photos/id/340/1500/1000" className="d-block w-100 carrousel-img" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Non tempus orci suscipit non. Morbi odio mi, eleifend nec massa id, dapibus porttitor libero. Duis lacinia placerat lobortis. Proin eu enim a ligula hendrerit bibendum.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://picsum.photos/id/347/1500/1000" className="d-block w-100 carrousel-img" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Fourth slide label</h5>
                        <p>Donec dapibus vestibulum feugiat. Proin in condimentum enim. Nullam lobortis metus viverra consequat sollicitudin.</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carrousel