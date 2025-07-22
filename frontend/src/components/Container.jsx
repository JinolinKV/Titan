import React, { Component } from 'react'

export class Container extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={TrendingFinalMen} alt="Trending for Men" className="img-fluid"/>
            </div>
            <div className="col-6">
              <img src={TrendingFinalWomen} alt="Trending for Women" className="img-fluid"/>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}

export default Container
