import React, { Component } from 'react'

export class Banner extends Component {
  render() {
    return (
      <div>
        <div className="container-md boarder"  >
          <div id="carouselExampleIndicators" className="carousel slide " data-bs-ride="carousel">
          <div className="carousel-indicators">
          <div className="bottom-slider">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 3"></button>
        </div>
          </div>
          <div className="carousel-inner ">
            <div className="carousel-item active">
              <img src={TitanSimple} className="d-block w-100" alt="TitanSimple"/>
            </div>
            <div className="carousel-item">
              <img src={MobikwikJulysal} className="d-block w-100" alt="MobikwikJulysal"/>
            </div>
            <div className="carousel-item">
              <img src={SBIBanner} className="d-block w-100" alt="SBIBanner"/>
            </div>
            <div className="carousel-item">
              <img src= {Snapmint} className="d-block w-100" alt="Snapmint"/>
            </div>
            <div className="carousel-item">
              <img src={BFLBanner} className="d-block w-100" alt="BFLBanner"/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        
          </div>
         </div>
      </div>
    )
  }
}

export default Banner
