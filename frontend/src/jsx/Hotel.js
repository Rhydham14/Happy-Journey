import React from "react";
import Sidebar from "./Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './Footer';
import h1 from '../img/h1.jpg';
import h2 from '../img/h2.jpg';
import h3 from '../img/h3.jpg';
import h4 from '../img/h4.jpg';
import h5 from '../img/h5.jpg';
import h6 from '../img/h6.jpg';
import h7 from '../img/h7.jpg';
import h8 from '../img/h8.jpg';
import imageUrl from '../img/bg-hotel.jpg';
const img = {
  height: "200px",
  boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
  padding: "5px",
  
};

const Hotel = ()=>{
    return(
        <>
            <div className="container-fluid" style={{backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover',}}>
                <div className="row">
                <Sidebar /> 
                    <div className="col-sm-10">
                    <h1 style={{textAlign:"center"}} className="text-danger">Hotel Booking</h1>
                    <div className="row">
            <div className="col-sm-6">
              <div className="col-sm-12 p-5 mt-5 mx-auto d-flex align-items-center" id="text">
                <form>
                  <div className="form-group">
                    <label htmlFor="firstName">Name of Hotel</label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      name="fname"
                      placeholder="Name of Hotel"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Name of place</label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      placeholder="Name of place"
                      name="lname"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      name="email"
                    />
                    {/* <small id="emailHelp" class="form-text text-dark">
                      We'll never share your email with anyone else.
                    </small> */}
                  </div>
                 
                  {/* {!valid && (
                    <span style={{ color: "red" }}>
                      Passwords must match and be at least 8 characters long
                    </span>
                  )} */}
                  <div className="form-group">
                    <label htmlFor="contact">Contact Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="contact"
                      placeholder="Enter Contact Number"
                      name="contact"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="number">Enter guest number</label>
                    <input
                      type="number"
                      className="form-control"
                      id="number"
                      placeholder="Enter guest number"
                      name="dob"
                    />
                  </div>

                  <button type="submit" className="btn btn-dark mt-2">
                    Payment
                  </button>
                </form>
              </div>
            </div>
            <div className="col-sm-6">

            </div>
          </div>
                    </div>
                </div>
                <div className="row text-center" id='img'>
          <div className="col-sm-4">
            <img src={h1} alt="User Image" id="img" style={img} />
          </div>
          <div className="col-sm-4">          
            <img src={h3} alt="User Image" id="img" style={img} />
          </div>
          <div className="col-sm-4">
            <img src={h5} alt="User Image" id="img" style={img} />
          </div>
        </div>
        <div className="row text-center" id='img'>
          <div className="col-sm-4">
            <img src={h4} alt="User Image" id="img" style={img} />
          </div>
          <div className="col-sm-4 align-self-center">
          <div class="card p-5 bg-success ">
            <h3 class="card-body text-white">Choice your hotel</h3>
          </div>
          </div>
          <div className="col-sm-4" id='img'>
            <img src={h2} alt="User Image" id="img" style={img} />
          </div>
        </div>
        <div className="row text-center" id="img">
          <div className="col-sm-4">
            <img src={h6} alt="User Image" id="img" style={img} />
          </div>
          <div className="col-sm-4">
            <img src={h7} alt="User Image" id="img" style={img} />
          </div>
          <div className="col-sm-4">
            <img src={h8} alt="User Image" id="img" style={img} />
          </div>
        </div>
            </div>
            <Footer/>

        </>
    )
}

export default Hotel;