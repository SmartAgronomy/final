import React, { useEffect } from 'react';
import AOS from 'aos'
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
import Rotary from "../Images/rotary.jpg"
import Cultivator from "../Images/cultivator.jpeg"
import Pumps from "../Images/pumps.webp"
import Grass_cutter from "../Images/grass_cutter.webp"
import agri_market1 from "../Images/agri-rating.png"
import agri_market2 from "../Images/website-logo-new.jpeg"
import imp from "../Images/agri-importance.png"
import Footer from "../dashboard/footer"
import "../pages/styles/Home-footer.css"
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import invert_arrows from "../Images/invert-arrows.png"
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import qr from "../Images/qrcode.png"
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import DomainVerificationIcon from '@mui/icons-material/DomainVerification';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';

function Main() {
  const [open, setOpen] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleOpenPopup = () => {
    setOpen(true);
  };

  const handleClosePopup = () => {
    setOpen(false);
  };
  const handleRentAllProducts = () => {
    // Place the order logic here
    // Show order placed message after 5 seconds
    setTimeout(() => {
      setOrderPlaced(true);
    }, 5000);
  };


  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])


  return (
    <div>

      <div class="main" data-aos="fade-right">
        <h5 >Farm Equipment Rental</h5>
        <p>We will provide farm equipment rentals to advance the productivity of your Farm<br></br>
          A great opportunity for starting an online agricultural equipment Rental Platform.</p>
        <span>Lets, grow your business....</span><br></br>
        <Link to="/products"><button>Rent Now</button></Link>
      </div>


      <h1 class="our-services">OUR SERVICES</h1><hr class="our-services-hrr"></hr>
      <div class="main-services">
        
        <div className='service1'>
          <AirportShuttleIcon sx={{height:'50px'}}/>
            <h2>DELIVERY</h2>
            <p> We Offer delivery of rented equipment to farmers in 
                remote locations, thereby enabling them to increase their productivity and yields.</p>
        </div>
        <div className='service2'>
          <DomainVerificationIcon sx={{height:'50px'}}/>
        <h2>MAINTAINANCE</h2>
        <p>The project includes implementing a 
maintenance system to ensure that all rented equipment is in excellent 
working condition.</p>
        </div>
        <div className='service3'>
          <MiscellaneousServicesIcon sx={{height:'50px'}}/>
        <h2>RENTAL</h2>
        <p>This Application digitizing the process of renting the agricultural 
equipments by the farmers .We aim at allows 
farmers to get their equipments on Rent.</p>
        </div>
      </div>

      <h1 class="heading">Our Brands</h1><hr class="our-brands-hrr"></hr>
      <div class="prohhh">
        <Card className='cards' sx={{ maxWidth: 345, height: 530 }}>
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
          <Link to=""><button className='card-btn' onClick={handleOpenPopup}>Rent Now</button></Link>
        </Card>
        <Dialog open={open} onClose={handleClosePopup}>
          <DialogTitle>Rent Now</DialogTitle>
          <DialogContent>
            {orderPlaced ? (
              <div className="order-placed-successfully">
                <p>Equipments Rented Successfully..!</p>
                <span>Thank you for your Order... &#128522;</span>
              </div>
            ) : (
              <div className="order-summary">

                <img src={qr} alt="QR Code" /><br></br><br></br>
                <span>Scan Now to Dispatch Your Order....</span>
              </div>
            )}
          </DialogContent>
          <DialogActions>
            {!orderPlaced ? (
              <Button className="rent-now-in-rentall-btn" onClick={handleRentAllProducts}>Rent Now</Button>
            ) : (
              <div></div>
            )}
            <Button className="cancel-btn" onClick={handleClosePopup}>Close</Button>
          </DialogActions>
        </Dialog>

        <Card className='cards' sx={{ maxWidth: 600, disply: "grid" }}>
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
          <Link to=""><button className='card-btn' onClick={handleOpenPopup}>Rent Now</button></Link>
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
          <Link to=""><button className='card-btn' onClick={handleOpenPopup}>Rent Now</button></Link>
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
          <Link to=""><button className='card-btn' onClick={handleOpenPopup}>Rent Now</button></Link>s
        </Card>
      </div>
      <Link to="/products"><button class="more-products">More Products &minus;&#10095;</button></Link>
      <div class="importance" >
        <h2>Why Digitalized Smart Agronomy ?</h2>
        <div class="importance-para"><p>The farm equipment rental market is estimated to account for a value of USD 46.8 billion in 2020 and is projected to grow at a CAGR of 7.3% from 2020, to reach a value of USD 66.4 billion by 2025. The global market is projected to witness significant growth due to factors such as the rise in the global population, shortage of skilled labor, increasing mechanization trends and rising demand for food grain products have fueled technological advancements across the globe are some of the major factors fueling the demand for farm equipment rental.<br></br>
          <br></br>Investments in various agriculture machinery have also led to increased crop production, particularly in developing countries such as India, China, Vietnam, and Thailand. <br></br><br></br>
          Renting allows you to use the equipment without having to worry about selling it when you’re done.
          You don’t have the hassle of trying to resell the equipment when you rent, which is why renting can save time and money in many cases. Renting makes it easy for you to get the equipment you need for a specific job, use it and then return it when your work is complete.</p>
          <img src={imp}/>
          </div>
      </div>

      <div class="market" >
        <h2>Global Agricutural  Equipment Market</h2>
        <img class="img" src={agri_market1} alt="agricultural market" />
        <img class="img" src={agri_market2} alt="agricultural market" />
        <img class="invert-arrows" src={invert_arrows} />
      </div>


      <Footer />


    </div>


  )
}
export default Main;