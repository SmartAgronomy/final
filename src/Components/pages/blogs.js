import { useState } from "react";
import Header from "../dashboard/header";
import Footer from "../dashboard/footer";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "../pages/styles/blogs.css"
import { Link } from "react-router-dom";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

function Blogs(){
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    }
    return(
        <div>
            <Header />
            <div className="blog">
            <h1>Blogs</h1>
            <div className="blog-container">
            <Card sx={{ maxWidth: 300 }} className="cards">
      
      <CardMedia
        component="img"
        sx={{
            maxHeight:200,
            objectFit:'fill'
        }}
        image="https://image.isu.pub/220228151245-09f70c9423086f437e7e054a47b0f560/jpg/page_1_thumb_large.jpg"
        alt="Paella dish"
      />
      <CardContent>

      <Typography color="text.primary" sx={{fontSize:'20px',fontWeight:600}}>
      Articles and Guides
        </Typography>
        <a href="https://www.agritechtomorrow.com/tag/tools-and-equipment "><Typography color="text.primary" sx={{fontSize:'15px'}}>
        https://www.agritechtomorrow.com/tag/tools-and-equipment        </Typography></a>
        <Typography variant="body2" color="text.secondary">
        "The Ultimate Guide to Equipment Selection for Small-Scale Farmers" or " Essential Maintenance Tips for Harvesters.<br></br><br></br>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
     
    </Card>

    <Card sx={{ maxWidth: 300 }} className="cards">
      
      <CardMedia className="card-image"
        component="img"
        sx={{
            maxHeight:200,
            objectFit:'fill'
        }}
        image="https://s3-ap-southeast-2.amazonaws.com/imotor-cms/images_cms/0bae2b2c-87fe-4e4f-bff3-5c14e288ff29.jpg"
        alt="Paella dish"
      />
      <CardContent>

      <Typography color="text.primary" sx={{fontSize:'20px',fontWeight:600}}>
Industry News</Typography>
<a href="https://www.futuremarketinsights.com/reports/agriculture-equipment-market   "><Typography color="text.primary" sx={{fontSize:'15px'}}>
https://www.futuremarketinsights.com/reports/agriculture-equipment-market        </Typography></a>
        <Typography variant="body2" color="text.secondary">
        "New Technology Showcased at Agricultural Equipment Expo": What Farmers Need to Know":"Trends Shaping the Future of Farming Equipment"<br></br><br></br>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
     
    </Card>

    <Card sx={{ maxWidth: 300 }} className="cards">
      
      <CardMedia
        component="img"
        sx={{
            maxHeight:200
        }}
        image="data:image/jpeg;base64,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"
        alt="Paella dish"
      />
      <CardContent>

      <Typography color="text.primary" sx={{fontSize:'20px',fontWeight:600}}>
Success Stories        </Typography>
<a href="the-evolution-of-agricultural-technology/6039/"><Typography color="text.primary" sx={{fontSize:'15px'}}>https://www.innovationnewsnetwork.com/the-evolution-of-agricultural-technology/6039/
 </Typography></a>

        <Typography variant="body2" color="text.secondary">
        "From Small-Scale to Thriving: How Johnson Family Farm Transformed with a Rental Equipment"<br></br><br></br>
                </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
     
    </Card>

    <Card sx={{ maxWidth: 300 }} className="cards">
      
      <CardMedia
        component="img"
        sx={{
            maxHeight:200,objectFit:'fill'
        }}
        image="data:image/jpeg;base64,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"
        alt="Paella dish"
      />
      <CardContent>

      <Typography color="text.primary" sx={{fontSize:'20px',fontWeight:600}}>
Seasonal Tips        </Typography>
<a href="https://www.holtags.com/guide-to-farm-equipment-maintenance "><Typography color="text.primary" sx={{fontSize:'15px'}}>
https://www.holtags.com/guide-to-farm-equipment-maintenance     </Typography></a>
        <Typography variant="body2" color="text.secondary">
        "Preparing Your Equipment for Spring Planting: Tips for Maintenance and Calibration" or "Maximizing Efficiency in Harvest Season."        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
     
    </Card>

    <Card sx={{ maxWidth: 300 }} className="cards">
      
      <CardMedia
        component="img"
        sx={{
            maxHeight:200,
            objectFit:'fill'
        }}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRODxskcs_0nsUo-LCsulMUT7pfGUrxrihsfA&usqp=CAU"
        alt="Paella dish"
      />
      <CardContent>

      <Typography color="text.primary" sx={{fontSize:'20px',fontWeight:600}}>
Expert Interviews        </Typography>
<a href="https://www.mdpi.com/journal/agriculture/special_issues/agriculture_machinery"><Typography color="text.primary" sx={{fontSize:'15px'}}>
https://www.mdpi.com/journal/agriculture/special_issues/agriculture_machinery       </Typography></a>
        <Typography variant="body2" color="text.secondary">
        "In Conversation with Agricultural Consultant Sarah Thompson: Top Tips for Equipment Selection" or "Expert Advice from Farmer John Parker."    <br></br><br></br>  </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
     
    </Card>

    <Card sx={{ maxWidth: 300 }} className="cards">
      
      <CardMedia
        component="img"
        sx={{
            maxHeight:200,
            objectFit:'fill'
        }}
        image="https://khetigaadi.com/images/campaign-banner/campaign-1685080238.jpg"
        alt="Paella dish"
      />
      <CardContent>

      <Typography color="text.primary" sx={{fontSize:'20px',fontWeight:600}}>
Customer Testimonials        </Typography>
<a href="https://www.kubota.co.in/products/testimonials/ "><Typography color="text.primary" sx={{fontSize:'15px'}}>
https://www.kubota.co.in/products/testimonials/       </Typography></a>
        <Typography variant="body2" color="text.secondary">
        "Renting equipment from Farm Equipment Rentals has been a game-changer for our farm. Excellent service and top-notch machinery!   <br></br><br></br>     </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
     
    </Card>

    <Card sx={{ maxWidth: 300 }} className="cards">
      
      <CardMedia
        component="img"
        sx={{
            maxHeight:200,
            objectFit:'fill'
        }}
        image="https://www.fieldking.com/blogs/wp-content/uploads/2022/11/Agriculture-Machine.jpg"
        alt="Paella dish"
      />
      <CardContent>
      <Typography color="text.primary" sx={{fontSize:'20px',fontWeight:600}}>
      Eqipment Reviews
        </Typography>
        <a href="https://www.fieldking.com/blogs/agriculture-machinery/ "><Typography color="text.primary" sx={{fontSize:'15px'}}>
        https://www.fieldking.com/blogs/agriculture-machinery/     </Typography></a>
        <Typography variant="body2" color="text.secondary">
        "John Deere 5000 Series Tractor Review: A Versatile Workhorse for Every Farm" or "Case IH Combine Harvester Review: Enhancing Efficiency in Crop Harvesting."<br></br>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
     
    </Card>

    <Card sx={{ maxWidth: 300 }} className="cards">
      
      <CardMedia
        component="img"
        sx={{
            maxHeight:200,objectFit:'fill'
        }}
        image="https://www.e-consystems.com/images/card-images/case-studies/auto-farming-case-study.jpg"
        alt="Paella dish"
      />
      <CardContent>
      <Typography color="text.primary" sx={{fontSize:'20px',fontWeight:600}}>
Case Studies        </Typography>
<a href="https://www.e-consystems.com/resources/case-studies/auto-farming-case-study.asp  "><Typography color="text.primary" sx={{fontSize:'15px'}}>
https://www.e-consystems.com/resources/case-studies/auto-farming-case-study.asp    </Typography></a>
        <Typography variant="body2" color="text.secondary">
        "How Smith Farms Increased Yield by 20% with a Precision Planter Rental" or "Reducing Costs and Time"<br></br>    </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
     
    </Card>
    </div>
    </div>
            <Footer />
        </div>
    );
}
export default Blogs;