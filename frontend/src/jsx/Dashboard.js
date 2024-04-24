import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../jsx/Sidebar";
import "../css/Dashboard.css";
import { useLocation } from 'react-router-dom';
import Footer from './Footer';
import japan from '../img/japan.jpg';
import italy from '../img/itly.jpg';
import india from '../img/india.jpg';
import singapor from '../img/singapor.jpg';
import paris from '../img/paris.jpg';
import dubai from '../img/dubai.jpg';
import thailand from '../img/thaialnd.jpg';
import portugal from '../img/portugal.jpg';

const img = {
  height: "200px",
  boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
  padding: "5px",
  
};

const Dashboard = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const fname = searchParams.get('fname');
  return (
    
    <>
      <div className="container-fluid " id="dash" >  
        <div className="row" >
          <Sidebar />
          <div className="col-sm-10 ">

            <div id="bdtxt">
            <div className="d-flex justify-content-center align-items-center"  style={{ perspective: '1000px' }}>
     
    </div>             
              <p className=" text-center" style={{fontSize:"20px"}}>
              <span style={{fontSize:"30px",}} className="text-danger">P</span>lan your happiness and begin your life with
              <h1 className="text-danger text-center">Happy Journey</h1>
              Life begin with happiness
              </p>
              <p>{fname}</p>
            </div>
          </div>
            
        </div>
        
        <div className="row text-center" id='img'>
          <div className="col-sm-4">
            <img src={japan} alt="User Image" id="img" style={img} />
          </div>
          <div className="col-sm-4">          
            <img src={india} alt="User Image" id="img" style={img} />
          </div>
          <div className="col-sm-4">
            <img src={paris} alt="User Image" id="img" style={img} />
          </div>
        </div>
        <div className="row text-center"id='img'>
          <div className="col-sm-4">
            <img src={singapor} alt="User Image" id="img" style={img} />
          </div>
          <div className="col-sm-4 align-self-center">
          <div class="card p-5 bg-success ">
            <h3 class="card-body text-white">Choice your world</h3>
          </div>
          </div>
          <div className="col-sm-4" id='img'>
            <img src={italy} alt="User Image" id="img" style={img} />
          </div>
        </div>
        <div className="row text-center" id="img">
          <div className="col-sm-4">
            <img src={dubai} alt="User Image" id="img" style={img} />
          </div>
          <div className="col-sm-4">
            <img src={thailand} alt="User Image" id="img" style={img} />
          </div>
          <div className="col-sm-4">
            <img src={portugal} alt="User Image" id="img" style={img} />
          </div>
        </div>
        </div>  
      
        <Footer/>
    </>
  );
};

export default Dashboard;