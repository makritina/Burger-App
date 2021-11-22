import React from "react"
import './Footer.css'


const Footer = () => {
    return(
        <div className="footer p-0 m-0">
          <div className="awards" >
            <h1>Best in Burger</h1>
            <h2>Awards 2021</h2>
          </div>
          <div className="information ">
          <div className="row offset-1 m-0" id="rowc">
            <div className="col-lg-4 col-12 mycolf">
              <h2 id="ph">Get to know us <i className="fas fa-hamburger"></i> </h2>
              <p className="p-0 " id="par" >At Beef Homemade Burgers we are passionate about fresh homemade burgers. All recipes are prepared with the finest ingredients, offering a unique food experience, in a friendly and warm atmosphere.</p>
            </div>
            <div className="col-lg-2 col-12 mycolf">
              <h2>Get in Touch <i className="fas fa-phone"></i></h2>
              <ul>
                <li>A: Greece, Thessaloniki</li>
                <li>E: example@gmail.com</li>
                <li>T: 555-444-666-999 </li>
              </ul>
            </div>
            <div className="col-lg-2 col-sm-12 mycolf">
              <h2>Locations <i className="fas fa-map-marker-alt"></i></h2>
              <ul>
                <li>Greece, Thessaloniki</li>
                <li>France, Paris</li>
                <li>Itali, Rome</li>
              </ul>
            </div>
            <div className="col-lg-2 col-sm-12 mycolf">
              <h2>Quick Links <i className="fas fa-link"></i></h2>
              <ul>
                <li>Menu</li>
                <li>e-food</li>
                <li>Cookies Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
            </div>
          </div>
          
        </div>

    )
}
export default Footer