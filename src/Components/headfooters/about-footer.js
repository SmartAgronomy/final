import React from 'react';
import {Link} from "react-router-dom";
import footer_logo from "../Images/logo1.png"
import email from "../Images/email.webp"
import contact from "../Images/phone_icon.png"
import location from "../Images/location.png"
import facebook from "../Images/facebook.jpg"
import twitter from "../Images/i4.jpg"
import instagram from "../Images/instagram_logo.webp"
import youtube from "../Images/youtube_logo.png"
import linked_in from "../Images/linked-in-logo.png"
import "../pages/styles/About-footer.css"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

function About_footer(){
  useEffect(()=>{
     AOS.init({duration :2000})
  },[])

    return(
        <div class="about-footer-page"data-aos="fade-up">
        <div class='footer-left'>
          <img class="footer_logo" src={footer_logo} />
          <h1 class='agro'>Agro<h1 class="nomy">Nomy</h1></h1>
            <p>Our rental equipment helps businesses of<br></br>  all sizes control costs and gain the flexibility <br></br>to take on larger jobs and a broader range<br></br>  of applications.Its smartest way to track and<br></br> manage the farm equipment on rent from us to you. </p>
            <div class="social-media">
              <img src={facebook} />
              <img src={twitter} />
              <img src={instagram} />
              <img src={youtube} />
              <img src={linked_in} />
            </div>
        </div>
        <div class="footer-center">
          <div class='quick-links'>
            <h2>Quick Links</h2>
           <ul>
               <li><Link to="#" >Products </Link> <br></br></li>
               <li><Link to="/privacy_policy" >Privacy Policy</Link><br></br></li>
               <li><Link to="#" >Terms and Conditions</Link><br></br></li>
               <li><Link to="#" >MarketPlace</Link><br></br></li>
               <li><Link to="/about" >About us</Link><br></br></li>
               <li><Link to="#" >Reports</Link><br></br></li>
               <li><Link to="#" >FAQ's</Link><br></br></li>
            </ul>
          </div>

          <div class='services'>
            <h2>Services</h2>
           <ul>
               <a href="#" >Rental</a><br></br>
               <a href="#" >Delivery and pickup</a> <br></br>
               <a href="#" >Maintainance and Repair</a><br></br>
               <a href="#" >Training and Suppport</a><br></br>
               <a href="#" >Customization</a><br></br>
               <a href="#" >Technical Support</a><br></br>
               <a href="#" >Upgrades</a><br></br>
               
            </ul>
          </div>
          <div class='contact-us'>
            <h2>Contact Us</h2>
            <Link to="/contact" ><img src={location}/><span>www.digitalizedSmartAgronomy.com</span></Link><br></br>
            <Link to="/contact" ><img src={email}/><span>rental@agriindia.org</span></Link><br></br>
            <Link to="/contact" a><img src={contact}/><span>+919380019642<br></br>
            +917019014365</span></Link>
          </div>
        </div>
        
      </div>
    )
}
export default About_footer;