import React from "react";
import "./styles/about.css"
import Header from "../dashboard/header";
import AboutFooter from "../headfooters/about-footer";
import about from "../Images/about.jpeg"
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
              <img src={about} alt="about" />
              <h1>About Us</h1>
             </div>
             <div class="about-info">
                <div class="about" data-aos="fade-left">
                <h4>Welcome to Digitalized agronomy,</h4>
                <h1>About Digitalised Smart agronomy</h1><br></br>
                <p>
                Agriculture equipment rental industry,have the expertise and knowledge to help
                 you find the perfect equipment for your specific needs. Whether you're a small family farm or a large commercial operation, 
                 we have a wide range of equipment options to fit your budget and requirements.<br></br>
                 <br></br>
                 " Our team of experienced professionals is dedicated to helping you get the most out of your rental equipment." From the moment 
                 you contact us, we'll work closely with you to understand your needs and recommend the best equipment for your project. We pride 
                 ourselves on our quick response times, so you can always count on us to be there when you need us. </p>
                </div><br></br><br></br>
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
             </div>
            <AboutFooter />
        </div>
       
    )
}
export default About;