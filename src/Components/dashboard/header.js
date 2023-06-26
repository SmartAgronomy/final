import React from "react"
import { BrowserRouter, Link,NavLink, useNavigate } from "react-router-dom";
import cart from "../Images/cart.png"
import bars from "../Images/bars.png"
import reports from "../Images/reports_logo.webp"
import services from "../Images/services_logo.jpeg"
import languages from "../Images/language_logo.png"
import settings from "../Images/settings_logo.jpeg"
import FAQ from "../Images/FAQ_logo.jpeg"
import sign_in from "../Images/sign_in.jpg"
import logo from "../Images/Rent_logo-removebg-preview.png"
import NavDropdown from 'react-bootstrap/NavDropdown';
import Profile from "../pages/profile";
import logout_img from "../Images/logout-logo.png"
import { useCookies } from "react-cookie";
import { useState } from "react";
import profile_img from "../Images/reg-user.png"
import useUserAPI from "../useUserApi";
import profile_before from "../Images/pro.jpg"
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BeforeProfile from "../pages/beforeProfile"
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import "../pages/styles/cartcount.css";
import axios from "axios";
import { useEffect } from "react";
import Website_logo from "../Images/website-logo-new2.png";
import debounce from "lodash/debounce";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';





function Header() {

  const [cookies, setCookies] = useCookies(["access_token"]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

// const ul=document.querySelector('ul');
// const li=document.querySelector('li');
// li.forEach(el => {
//   el.addEventListener('click',()=>{
//     ul.querySelector('.active-root').classList.remove('active-root');

//     el.classList.add('active-root');
//   });
// });


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [cartCount, setCartCount] = useState(0);

  const navigate = useNavigate();

  const { isLogged, isAdmin, setIsLogged } = useUserAPI(cookies.access_token);

  console.log('isAdmin:', isAdmin);

  const [searchInput, setSearchInput] = useState("");

    const MIN_SEARCH_LENGTH = 3; // Minimum required length for search input
  const DEBOUNCE_DELAY = 500; // Delay in milliseconds

  const handleSearch = debounce(() => {
    if (searchInput.length < MIN_SEARCH_LENGTH) {
      return;
    }

    // Redirect to the Products page with the search query as a URL parameter
    navigate(`/products?search=${searchInput}`);
  }, DEBOUNCE_DELAY);




  useEffect(() => {
    // Fetch the cart data and update the cartCount
    const fetchCartCount = async () => {
      const userId = localStorage.getItem("userID");
      const token = cookies.access_token;
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      try {
        const response = await axios.post(
          "http://localhost:8080/api/getCart",
          { userId },
          { headers }
        );
        const cartData = response.data.data.cart || [];
        setCartCount(cartData.length);
      } catch (error) {
        console.log(error);
      }
    };

    if (cookies.access_token) {
      fetchCartCount();
    }
  }, [isLogged, cookies.access_token]);

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    setIsLogged(false);
    alert("You are Successfully Logged Out...!");
    navigate("/");
    window.location.reload();
  };
  const adminRouter = () => {
    if (isAdmin) {
      return <li><Link to="/admin">Admin</Link></li>;
    }
    return null;
  };




  return (
    <>
      <header>
        {/* <img class="website_logo" src={Website_logo} /> */}
        <div className="search_bar">
          <input
            className="search-input"
            type="text"
            placeholder="Search products..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <input
            className="search-btn"
            type="button"
            value="Search"
            onClick={handleSearch}
          />
        </div>
        <div class="cart">
        {isAdmin ? (
              <>
               

              </>
            ) : (
              <>
              <Link to="/cart">
                <Tooltip title="Cart">
                  <IconButton>
                <ShoppingCartIcon className="img"/>
                {cartCount > 0 && <h3 class="cart-notification">{cartCount}</h3>}
                </IconButton>
                </Tooltip>
              </Link>
                
              </>
            )}
          
        </div>
        <nav >
          <ul>



            {adminRouter()}

            <li class="active-root"><NavLink to="/" activeClassName="active-link"> Home</NavLink></li>

            <li><NavLink to="/blogs"> Blogs</NavLink>
            </li>
            <li><NavLink to="/products"> MarketPlace</NavLink>


            </li>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/contact">Contact Us</NavLink></li>
            <li class="slide"></li>



          </ul>


          <div class="button">
            {!cookies.access_token ? (
              <>
              <div className="Sign-in-up">
                <Link to="/signin">
                
                  <button> <LockOpenIcon/>  Sign in</button>
                  
                </Link>
                <Link to="/signup">
                  <button> <HowToRegIcon />  Sign Up</button>
                </Link>
                </div>
                <div className="Account-menu">
                <Box sx={{ display: 'block', alignItems: 'right', textAlign: 'left ', marginTop: '-43px', marginLeft: '170px', transform: 'none' }}>
                  <Tooltip title="Manage Profile">
                    <IconButton
                      onClick={handleClick}
                      size="small"
                      sx={{ ml: 2 }}
                      aria-controls={open ? 'account-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                    >
                      <Avatar />
                    </IconButton>
                  </Tooltip>
                </Box>
                </div>
                <Menu class="menu"
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  sx={{
                    width: '250px'
                  }}
                  onClose={handleClose}
                  onClick={handleClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: 'visible',
                      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                      mt: 1.5,
                      '& .MuiAvatar-root': {
                        width: 20,
                        height: 9,
                        ml: 0,
                        mr: 0,
                      },
                      '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 2,
                        height: 10,
                        bgcolor: 'background.paper',
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >

                  <MenuItem >
                    My account
                  </MenuItem>
                  <MenuItem>
                    <hr></hr></MenuItem>
                  <MenuItem>
                    <p>Please Sign Up to Manage<br></br> your Accounts.</p>
                  </MenuItem>



                </Menu>

              </>
            ) : (
              <>
                
                <button onClick={logout}><ExitToAppIcon/> Logout</button>

                
                <Link to="/profile">
                  <button ><AccountCircleIcon />  Profile</button>
                  
                </Link>
              </>
            )}
          </div>


        </nav>



      </header>

      <div class="logo111">
              <img src={logo} />
            </div>

      <div class="logo">
          <img class="website_logo" src={Website_logo} />
        </div>
      </>



  )
}
export default Header;
