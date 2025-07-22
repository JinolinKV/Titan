import React, { Component } from 'react'

import '../pages/home.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export class Carousel extends Component {
  render() {
    return (
      <div>
        <div className="slider">
        
         <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Link to='./'><img src='./images/Raga_julysale_2025_d.webp' className="d-block w-100" alt="..."/></Link>
            </div>
            <div className="carousel-item">
              <Link to='./'><img src='./images/PremiumSale_June2025_D.webp' className="d-block w-100" alt="PremiumSaleJune"/></Link>
             
              
            </div>
            <div className="carousel-item">
              <Link to='./'><img src= './images\Raga_julysale_2025_d.webp'className="d-block w-100" alt="RagaJulysale"/></Link>
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
      </div>
    )
  }
}

export default Carousel
