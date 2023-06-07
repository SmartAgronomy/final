import React, { useEffect } from 'react';
import AOS from 'aos'
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
import Rotary from "../Images/rotary.jpg"
import Cultivator from "../Images/cultivator.jpeg"
import Pumps from "../Images/pumps.webp"
import Grass_cutter from "../Images/grass_cutter.webp"
import Importance from "../Images/agri-importance.jpeg"
import agri_market1 from "../Images/agri-rating.png"
import agri_market2 from "../Images/website-logo-new.jpeg"
import Footer from "../dashboard/footer"
import "../pages/styles/Home-footer.css"
import BeforeProfile from '../pages/beforeProfile';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import invert_arrows from "../Images/invert-arrows.png"
import Website_logo from "../Images/website-logo-new2.png"


function Main(){
    

     useEffect(()=>{
        AOS.init({duration: 2000})
     },[])


    return(
    <div>
       
       <div class="main" data-aos="fade-right">
          <h5 >Farm Equipment Rental</h5>
           <p>We will provide farm equipment rentals to advance the productivity of your Farm<br></br>
           A great opportunity for starting an online agricultural equipment Rental Platform.</p>
           <span>Lets, grow your business....</span><br></br>
           <Link to="/products"><button>Rent Now</button></Link>
       </div>

      <h1 class="heading">Our Brands</h1>
      <hr class="hr"></hr>
      <div class="prohhh">
      <Card className='cards' sx={{ maxWidth: 345,height:530 }}>
      <CardMedia
        sx={{ height: 250 }}
        image={Rotary}
        title="rotary"
      />
      <CardContent>
      <p><b>$1000.00</b></p>
        <Typography gutterBottom variant="h5" component="div">
          Rotary
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Agricultural Machine Mini Power Tiller Rotary Tiller Cultivator for Nepal,helps to improve soil health
        </Typography>
      </CardContent>
      <button className='card-btn'>Add to Cart</button>
    </Card>

    <Card className='cards' sx={{ maxWidth: 600, disply:"grid" }}>
      <CardMedia
        sx={{ height: 250 }}
        image={Grass_cutter}
        title="grass cutter"
      />
      <CardContent>
      <p><b>$600</b></p>
        <Typography gutterBottom variant="h5" component="div">
          Grass Cutter
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Heavy Duty Honda Grass Cutting Machine, Fuel Tank Capacity: 630ml at Rs 27000 in Dombivli
        </Typography>
      </CardContent>
      <button className='card-btn'> Add to Cart</button>
    </Card>

    <Card className='cards' sx={{ maxWidth: 550 }}>
      <CardMedia
        sx={{ height: 250 }}
        image={Cultivator}
        title="cultivator"
      />
      <CardContent>
      <p><b>$530.00</b></p>
        <Typography gutterBottom variant="h5" component="div">
          Cultivator
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Agricultural Machine Cultivator Weeder Land Cultivators for Tractor- Extra Heavy Duty 
        </Typography>
      </CardContent>
      <button className='card-btn'>Add to Cart</button>
    </Card>

    <Card className='cards' sx={{ maxWidth: 600 }}>
      <CardMedia
        sx={{ height: 250 }}
        image={Pumps}
        title="water pump"
      />
      <CardContent>
      <p><b>$990.00</b></p>
        <Typography gutterBottom variant="h5" component="div">
          Water Pump
        </Typography>
        <Typography variant="body2" color="text.secondary">
        1 HP Single Phase Water Pump Motor at Rs 9000 in Sawai Madhopur | ID: 17238689491.
        </Typography>
      </CardContent>
      <button className='card-btn'>Add to Cart</button>
    </Card>
    </div>
    <Link to="/products"><button class="more-products">More Products &minus;&#10095;</button></Link>
            <div class="importance" >
               <h2>Why Digitalized Smart Agronomy ?</h2>
               <div class="importance-para"><p>The farm equipment rental market is estimated to account for a value of USD 46.8 billion in 2020 and is projected to grow at a CAGR of 7.3% from 2020, to reach a value of USD 66.4 billion by 2025. The global market is projected to witness significant growth due to factors such as the rise in the global population, shortage of skilled labor, increasing mechanization trends and rising demand for food grain products have fueled technological advancements across the globe are some of the major factors fueling the demand for farm equipment rental.<br></br>
               <br></br>Investments in various agriculture machinery have also led to increased crop production, particularly in developing countries such as India, China, Vietnam, and Thailand. <br></br><br></br>
               Renting allows you to use the equipment without having to worry about selling it when you’re done.
               You don’t have the hassle of trying to resell the equipment when you rent, which is why renting can save time and money in many cases. Renting makes it easy for you to get the equipment you need for a specific job, use it and then return it when your work is complete.</p></div>
               <img  class="agri-importance-img" src={Importance} />
            </div>
            <div class="market" >
            <h2>Global Agricutural  Equipment Market</h2>
               <img class="img"src={agri_market1} alt="agricultural market"/>
               <img class="img"src={agri_market2} alt="agricultural market" />
               <img class="invert-arrows" src={invert_arrows} />
            </div>
            
           
            <Footer />
            
            
    </div>
    
    
    )
}
export default Main;