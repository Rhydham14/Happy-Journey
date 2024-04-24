import React from "react";
import Sidebar from "./Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './Footer';

const Contact = ()=>{
    return(
        <>
            <div className="container-fluid">
                <div className="row">
                <Sidebar /> 
                    <div className="col-sm-10">
                    <h1 style={{textAlign:"center"}} className="text-danger">Contact us</h1>
                    <form action="#">
        <div className="row animate-box">
          <div className="col-md-6">
            <h3 className="section-title text-danger">Our Address</h3>
            <ul className="contact-info" style={{ color: '#848484', lineHeight: '40px', listStyleType: 'none' }}>
              <li><i className="fa fa-map-marker"></i>&nbsp;&nbsp;&nbsp;&nbsp;Rajkot , Kalawad Road 360005</li>
              <li><i className="fa fa-phone" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;+91 8799106293</li>
              <li><i className="fa fa-envelope"></i><a href="#" style={{ color: '#848484' }}>&nbsp;&nbsp;&nbsp;&nbsp;Tripsport@gmail.com</a></li>
            </ul>
          </div>

         
        </div>
        <br />
        <br />
        <div className="map p-5 w-100">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118147.81619357022!2d70.75125592070049!3d22.27347193453466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c98ac71cdf0f%3A0x76dd15cfbe93ad3b!2sRajkot%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1580373214011!5m2!1sen!2sin" width="100%" height="450" frameBorder="0" style={{ border: '0' }} title="Google Maps"></iframe>
        </div>
        <br />
        <br />
      </form>
                    </div>
                </div>
            </div>
            <Footer/>

        </>
    )
}

export default Contact;