import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export class Card extends Component {
  render() {
    return (
      <div className="container my-5">
        <div className="row g-4">
          
          <div className="col-md-6">
            <div className="card border-0 shadow-none">
              <Link to="/men">
                <img
                  src="./images/TrendingFinal_Men_D.webp"
                  className="img-fluid"
                  alt="Trending for Men"
                />
              </Link>
            </div>
          </div>

         
          <div className="col-md-6">
            <div className="card border-0 shadow-none">
              <Link to="/women">
                <img
                  src="./images/TrendingFinal_Women_D.webp"
                  className="img-fluid"
                  alt="Trending for Women"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
