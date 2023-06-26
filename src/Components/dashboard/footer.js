import React from 'react';
import { Link } from "react-router-dom";
import footer_logo from "../Images/logo1.png"
import email from "../Images/email.webp"
import contact from "../Images/phone_icon.png"
import location from "../Images/location.png"
import "../pages/styles/Home-footer.css"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import Tooltip from '@mui/material/Tooltip';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Footer() {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  return (
    <div class="footer-page" data-aos="fade-up">
      <div class='footer-left'>
        <img class="footer_logo" src={footer_logo} />
        <h1 class='agro'>Agro<h1 class="nomy">Nomy</h1></h1>
        <p>Our rental equipment helps businesses of<br></br>  all sizes control costs and gain the flexibility <br></br>to take on larger jobs and a broader range<br></br>  of applications.Its smartest way to track and<br></br> manage the farm equipment on rent from us to you. </p>
        <div class="social-media">
          <Tooltip title="facebook" arrow>
            <FacebookIcon sx={{ color: "blue", marginRight: "20px" }} />
          </Tooltip>
          <Tooltip title="Twitter" arrow>
            <TwitterIcon sx={{ color: "skyblue", marginRight: "20px" }} />
          </Tooltip>
          <Tooltip title="Instagram" arrow>
            <InstagramIcon sx={{ color: "orange", marginRight: "20px" }} />
          </Tooltip>
          <Tooltip title="Youtube" arrow>
            <YouTubeIcon sx={{ color: "red", marginRight: "20px" }} />
          </Tooltip>
          <Tooltip title="Linked in" arrow>
            <LinkedInIcon sx={{ color: "skyblue", marginRight: "20px" }} />
          </Tooltip>


        </div>
      </div>
      <div class="footer-center">
        <div class='quick-links'>
          <h2>Quick Links</h2>
          <ul>
            <li><Link to="/products" >Products </Link> <br></br></li>
            <li><Link to="/privacy_policy" >Privacy Policy</Link><br></br></li>
            <li><Link to="#" >Terms and Conditions</Link><br></br></li>
            <li><Link to="/blogs" >Blogs</Link><br></br></li>
            <li><Link to="/about" >About us</Link><br></br></li>
            <li><Link to="/faq" >FAQ's</Link><br></br></li>
          </ul>
        </div>

        <div class='services'>
          <h2><MiscellaneousServicesIcon /> Services</h2>
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
          <h2> < ContactSupportIcon />Contact Us</h2>
          <Link to="/contact" ><img src={location} /><span>www.digitalizedSmartAgronomy.com</span></Link><br></br>
          <Link to="/contact" ><img src={email} /><span>agronomymaster60@gmail.com</span></Link><br></br>
          <Link to="/contact" a><img src={contact} /><span>+919380019642<br></br>
            +917019014365</span></Link>
        </div>
      </div>

    </div>
  )
}
export default Footer;