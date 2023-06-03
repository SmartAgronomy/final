import React from "react";
import "./styles/about.css"
import Header from "../dashboard/header";
import About_footer from "../headfooters/about-footer";
import about from "../Images/about.jpeg"
import Contact from "../Images/phone_icon.png"
import Email from "../Images/email.webp"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'
function About(){
    useEffect(()=>{
        AOS.init({duration :2000})
     },[])
    return(
        
        <div>
            <Header />
              <div class="center-img" >
              <img src={about} />
              <h1>About Us</h1>
             </div>
             <div class="about-info">
                <div class="about" data-aos="fade-left">
                <h4>Welcome to our Website</h4>
                <h1>About Digitalised Smart agronomy</h1>
                <p>Welcome to Digitalized agronomy,<br></br>
                Agriculture equipment rental industry,have the expertise and knowledge to help
                 you find the perfect equipment for your specific needs. Whether you're a small family farm or a large commercial operation, 
                 we have a wide range of equipment options to fit your budget and requirements.<br></br>
                 <br></br>
                 " Our team of experienced professionals is dedicated to helping you get the most out of your rental equipment." From the moment 
                 you contact us, we'll work closely with you to understand your needs and recommend the best equipment for your project. We pride 
                 ourselves on our quick response times, so you can always count on us to be there when you need us. </p>
                </div>
                 <div class="vision" data-aos="fade-up">
                 <h1>Our Vision</h1>
                 <p>"Our vision at Digitalized Smart Agronomy is to be the leading provider of agriculture equipment rentals in the Midwest. We aim to be the
                     go-to source for farmers who need reliable, high-quality equipment to maintain their land and grow healthy crops. We are committed
                      to providing exceptional customer service, quick response times, and affordable pricing, all while helping farmers minimize costs and
                       maximize efficiency. Our goal is to help farmers succeed by providing them with the tools they need to achieve their goals."</p>
                       <br></br>
                       <br></br>
                 </div>
                      <div class="mision" data-aos="fade-up">
                      <h1>Our Mission</h1>
                       <p> "Our mission is to provide farmers with the tools they need to grow healthy crops and maintain their land, all while minimizing costs and maximizing efficiency."
                        <br></br> <br></br> It will reflect the values and goals of the company, while also addressing the needs and concerns of their customers in the farming community.
                       As technology continues to evolve, there are always new and improved farming equipment options becoming available. An agriculture equipment rental website could include
                         a commitment to staying up-to-date with the latest innovations and offering cutting-edge equipment to their customers.
                       </p>
                       
                      </div>
                      <div class="more-info" data-aos="fade-up">
                      <p>
                       We look forward to helping you succeed with your farming operations!
                       If you have any questions about our equipment or services, please don't hesitate to contact us. You can reach us by phone or by email...
                       
                       </p>
                       </div>
                       {/* <div class="contact_us">
                              <img src={Contact} />
                              <h5 class="h5_1">Call Us on </h5>
                              <h5 class="h5_2">+91 9380019642</h5>
                       </div>
                       <div class="email">
                              <img src={Email} />
                              <h5 class="h5_1">Email us</h5>
                              <h5 class="h5_2">rental@agriindia.org</h5>
                       </div> */}
                       
             </div>
            <About_footer />
        </div>
       
    )
}
export default About;