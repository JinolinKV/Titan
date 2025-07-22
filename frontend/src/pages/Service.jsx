import React from 'react';
import Marquee from '../components/Marquee'
import HeaderRole from '../components/HeaderRole'
import Navbar from '../components/Navbar'



const Service = () => {
  return (
    <div><Marquee/>
        <HeaderRole/>
        <Navbar/>
    <div className="container my-5">
      <div className="row align-items-center shadow p-4 rounded bg-light">
        
        <div className="col-md-6 mb-3 mb-md-0 text-center">
          <img
            src="/images/service.png"
            alt="Service"
            className="img-fluid rounded"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>

       
        <div className="col-md-6">
          <h3 className="mb-4">Check Service Availability</h3>
          <form>
            <div className="mb-3">
              <label htmlFor="pin" className="form-label">
                
              </label>
              <input
                type="text"
                className="form-control"
                id="pin"
                placeholder="Enter your PIN code"
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Service;
