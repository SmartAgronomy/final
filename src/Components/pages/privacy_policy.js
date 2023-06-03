import Header from "../dashboard/header";
import './styles/privacy_policy.css'
import AOS from 'aos'
import "aos/dist/aos.css";
import { useEffect } from "react";

function PrivacyPolicy(){
    useEffect(()=>{
        AOS.init({duration: 2000})
     },[])
    return(
       <div>
        <Header />
        <div class="privacy">
        <h1 data-aos="fade-right">Privacy Policy</h1>
        <p>At Digitalized Smart Agronomy, we are committed to protecting your privacy. This policy explains how we use and protect the information that you provide to us when you use our website.</p>
        <h2>Information We Collect</h2>
        <div class="info">
        <h3>We may collect the following information when you use our website or rental services:</h3>
        <ul>
            <li>Your name</li>
            <li>Contact information, including email address, phone number, and mailing address</li>
            <li>Payment information, including credit card or other billing information</li>
            <li>Demographic information such as postcode, preferences, and interests</li>
            <li>Equipment rental history and usage information</li>
        </ul>
        </div>
        <h2>How we use your information:</h2>
        <div class="info1">
        <h3>We require this information to understand your needs and provide you with a better service, and in particular, for the following reasons:</h3>
        <ul>
            <li>Internal record keeping</li>
            <li>To improve our products and services</li>
            <li>To send promotional emails about new products, special offers, or other information which we think you may find interesting, using the email address which you have provided</li>
            <li>To contact you for market research purposes, via email, phone, or mail</li>
            <li>Conduct market research and surveys to improve our products and services</li>
        </ul>
        </div>
        <h3>Security</h3>
        <p class="info2">We take reasonable steps to protect your personal information from unauthorized access, use, or disclosure. We use industry-standard security measures, such as encryption and firewalls, to safeguard your information.</p>
        <h3>Cookies:</h3>
        <p class="info2">Our website uses cookies to improve your browsing experience. Cookies are small files that are stored on your computer's hard drive that allow us to recognize you and personalize your experience on our website. You may choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer.</p>
        <h3>Third-party links:</h3>
        <p class="info2">Our website may contain links to other websites of interest. However, once you have used these links to leave our site, you should note that we do not have any control over that other website. Therefore, we cannot be responsible for the protection and privacy of any information which you provide while visiting such sites and such sites are not governed by this privacy statement. You should exercise caution and look at the privacy statement applicable to the website in question.</p>
        <h3>Updating your information:</h3>
        <p class="info2">You may update your personal information by contacting us through the contact information provided on our website.</p>
        <h3>Changes to our privacy policy:</h3>
        <p class="info2">We may change our privacy policy from time to time by updating this page. You should check this page regularly to ensure that you are happy with any changes.</p>
        </div>
        </div>
    );
}
export default PrivacyPolicy;