import React from 'react';
import '../css/Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="pt-2">
      <div id="footer">
        <div className="container">
          <div className="row row-bottom-padded-md">
            <div className="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
               <h3 className='text-dark'>About Travel</h3>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
            <div className="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
               <h3 className='text-dark'>Top Flights Routes</h3>
              <ul>
                <li><a>Manila flights</a></li>
                <li><a>Dubai flights</a></li>
                <li><a>Bangkok flights</a></li>
                <li><a>Tokyo Flight</a></li>
                <li><a>New York Flights</a></li>
              </ul>
            </div>
            <div className="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
               <h3 className='text-dark'>Top Hotels</h3>
              <ul>
                <li><a>Boracay Hotel</a></li>
                <li><a>Dubai Hotel</a></li>
                <li><a>Singapore Hotel</a></li>
                <li><a>Manila Hotel</a></li>
              </ul>
            </div>
            <div className="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
               <h3 className='text-dark'>Interest</h3>
              <ul>
                <li><a>Beaches</a></li>
                <li><a>Family Travel</a></li>
                <li><a>Budget Travel</a></li>
                <li><a>Food &amp; Drink</a></li>
                <li><a>Honeymoon and Romance</a></li>
              </ul>
            </div>
            <div className="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
               <h3 className='text-dark'>Best Places</h3>
              <ul>
                <li><a>Boracay Beach</a></li>
                <li><a>Dubai</a></li>
                <li><a>Singapore</a></li>
                <li><a>Hongkong</a></li>
              </ul>
            </div>
            <div className="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
               <h3 className='text-dark'>Affordable</h3>
              <ul>
                <li><a>Food &amp; Drink</a></li>
                <li><a>Fare Flights</a></li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-md-offset-3 text-center">
              <p className="fh5co-social-icons">
                <a href="https://www.facebook.com/profile.php?id=100019758829441"><i className="icon-facebook2"></i></a>
                <a href="https://instagram.com/utsav_makwana_309?igshid=itq38hgr241r"><i className="icon-instagram"></i></a>
              </p>
            </div>
          </div>
          <p className="text-center pb-3">All Rights Reserved By Trip Spot 2023 | Design By Happy Jounery</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
