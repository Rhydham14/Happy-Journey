import React from "react";
import Sidebar from "./Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './Footer';
import airasia from '../img/AirAsiaF.jpg';
import airf from '../img/AirF.jpg';
import aill from '../img/AllianceF.jpg';
import gofirst from '../img/GofirtF.jpeg';
import indiaGO from '../img/indigoF.jpg';
import jet from '../img/jetF.jpg';
import vist from '../img/VistaraF.jpg';
import airinda from '../img/AirIndia.jpg';
import imageUrl from '../img/bg-flight.jpg';

const img = {
  height: "200px",
  boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
  padding: "5px",
  
};

const Flight = ()=>{
    return(
        <>
           <div className="container-fluid" style={{backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover',}}>
      <div className="row">
        <Sidebar />
        <div className="col-sm-10">
            <h1 style={{textAlign:"center"}} className="text-danger">Flight Booking</h1>
          <div className="row">
            <div className="col-sm-6">
              <div className="col-sm-12 p-5 mt-5 mx-auto d-flex align-items-center" id="text">
                <form>
                  <div className="form-group">
                    <label htmlFor="firstName">Enter flight name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      name="fname"
                      placeholder="Enter First Name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Destination</label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      placeholder="Enter sestination place"
                      name="lname"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Source</label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      placeholder="Enter source place"
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
                    <label htmlFor="contact">Number of Guest</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="contact"
                      placeholder="Number of Guest"
                      name="contact"
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
            <img src={airasia} alt="User Image" id="img" style={img} />
          </div>
          <div className="col-sm-4">          
            <img src={aill} alt="User Image" id="img" style={img} />
          </div>
          <div className="col-sm-4">
            <img src={indiaGO} alt="User Image" id="img" style={img} />
          </div>
        </div>
        <div className="row text-center"id='img'>
          <div className="col-sm-4">
            <img src={gofirst} alt="User Image" id="img" style={img} />
          </div>
          <div className="col-sm-4 align-self-center">
          <div class="card p-5 bg-success ">
            <h3 class="card-body text-white">Choice your flight</h3>
          </div>
          </div>
          <div className="col-sm-4" id='img'>
            <img src={airf} alt="User Image" id="img" style={img} />
          </div>
        </div>
        <div className="row text-center" id="img">
          <div className="col-sm-4">
            <img src={jet} alt="User Image" id="img" style={img} />
          </div>
          <div className="col-sm-4">
            <img src={vist} alt="User Image" id="img" style={img} />
          </div>
          <div className="col-sm-4">
            <img src={airinda} alt="User Image" id="img" style={img} />
          </div>
        </div>
    </div>
            <Footer/>

        </>
    )
}

export default Flight;