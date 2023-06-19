import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import "./styles/cart.css";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import QrReader from "qrcode.react"; // Import the QRCode component
import DialogContentText from '@mui/material/DialogContentText';



function Cart() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [cookies] = useCookies(["access_token"]);
  const [value, setValue] = useState(2);
  const [open, setOpen] = useState(false);
  const [agreeOpen, setAgreeOpen] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [userDataJson, setQRCodeValue] = useState(""); // Store the QR code value
  const [QRCodeValue, setScannedData] = useState("");
const [isQRCodeScanned, setIsQRCodeScanned] = useState(false);

  const handleOpenPopup = () => {
    setOpen(true);
  };

  const handleClosePopup = () => {
    setOpen(false);
  };
  const handleAgreeOpenPopup = () => {
    setAgreeOpen(true);
  };

  const handleAgreeClosePopup = () => {
    setAgreeOpen(false);
  };
  useEffect(() => {
    const userId = localStorage.getItem("userID");
    const token = cookies.access_token;
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .post("http://localhost:8080/api/getCart", { userId }, { headers })
      .then((res) => {
        const cartData = res.data?.data?.cart || [];
        const updatedCartData = cartData.map((product) => ({
          ...product,
          quantity: 1, // Set initial quantity to 1
        }));
        setData(updatedCartData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!cookies.access_token) {
    return (
      <div className="centered-container">
        <p>Please Login To Continue.. </p>
        <Link to="/signin" ><button>LOGIN</button></Link>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="centered-container">
        <p>Your cart is Empty now..!, Please select Products to add to Cart</p>
        <Link to="/products" ><button>Select Products</button></Link>
      </div>
    );
  }

  const handleRemoveFromCart = async (productId) => {
    const userId = localStorage.getItem("userID");
    const token = cookies.access_token;
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    try {
      await axios.post('http://localhost:8080/api/removeFromCart', { productId }, { headers });
      console.log("Product removed from cart successfully.");
      alert("Product Removed from the Cart Successfully")
      // Refresh cart data
      const response = await axios.post('http://localhost:8080/api/getCart', { userId }, { headers });
      const cartData = response.data?.data?.cart || [];
      const updatedCartData = cartData.map((product) => ({
        ...product,
        quantity: 1, // Set initial quantity to 1
      }));
      setData(updatedCartData);
    } catch (error) {
      const { message } = error.response.data;
      console.log(message);
      // Handle error message or perform any other actions
    }
  };

  const handleIncreaseQuantity = (productId) => {
    setData((prevData) => {
      const updatedData = prevData.map((product) => {
        if (product._id === productId) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product;
      });
      return updatedData;
    });
  };

  const handleDecreaseQuantity = (productId) => {
    setData((prevData) => {
      const updatedData = prevData.map((product) => {
        if (product._id === productId && product.quantity > 1) {
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        }
        return product;
      });
      return updatedData;
    });
  };

  const calculateTotalAmount = () => {
    let total = 0;
    data.forEach((product) => {
      total += product.amount * product.quantity;
    });
    return total;
  };



  const handleScanQRCode = (data) => {
    if (data) {
      setScannedData(data);
    } else {
      setScannedData(""); // No QR code data scanned
    }
  };
  
  const handleErrorQRCode = (error) => {
    console.log("QR code scanning error: ", error);
  };

  const handleMakePayment = () => {  
    // Get the product details
    const products = data.map((product) => ({
      productName: product.productName,
      quantity: product.quantity,
      amount: product.amount,
    }));
  
    // Combine username and product details
    const userData = {
      products
    };
  
    // Convert the user data to JSON string
    const userDataJson = JSON.stringify(userData);
  
    // Set the QR code value
    setQRCodeValue(userDataJson);
  
    // Place the order logic here
    setTimeout(() => {
      setOrderPlaced(true);
    });
  

      setTimeout(() => {
        navigate("/transactionsuccess");
      }, 3000);
    
  };
  
  
  return (
    <div className="cart-overlay">
      <div className="cart-container">
        <h1>Products Cart</h1>

        <div className="product-list">
          {data.map((product) => (
            <div
              key={product._id}
              className="product-item"
            >
              <img
                className="product-image"
                src={product.productImage.location}
                alt={product.productImage.filename}
              />
              <div className="product-details">
                <p>
                  {product.productName} in Category ({product.goryName})<br></br>
                </p>
                <Box
                  sx={{
                    '& > legend': { mt: 2 },
                  }}
                >
                  <Rating name="simple-controller" value={value} onChange={(event, newValue) => {
                    setValue(newValue);
                  }} />
                </Box>
                <span className="span">
                  {product.productDescription}
                </span>
              </div>
              <div className="remove-button">
                <p><b>PRICE: {product.amount} Only/-</b></p>
                <button
                  onClick={() => handleRemoveFromCart(product._id)}
                >
                  Delete Product
                </button>
              </div>
              <div>
                <div className="buy-button">
                  <p>
                    <b> Free Shipment..!</b>
                  </p>
                  <Button onClick={handleMakePayment}>Rent Now</Button>
                </div>
                <div className="quantity">
                  <button class="decrease" onClick={() => handleDecreaseQuantity(product._id)}>-</button>
                  <span>{product.quantity}</span>
                  <button class="increase" onClick={() => handleIncreaseQuantity(product._id)}>+</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="total">
          <h3>Total Cost: {calculateTotalAmount()} Only/-</h3>
          <button onClick={handleOpenPopup}>Rent all products</button>
        </div>

        <Dialog open={open} onClose={handleClosePopup}>
          <DialogTitle>Rent All Products</DialogTitle>
          <DialogContent>
            {orderPlaced ? (
              <div>
                <h3>TOTAL= ₹{calculateTotalAmount()} Only/-</h3>
              <QrReader
                delay={300}
                onError={handleErrorQRCode}
                onScan={handleScanQRCode}
                value={QRCodeValue}
              />

              </div>
            ) : (
              <div>
                <h3>Order Summary:</h3>
                {data.map((product) => (
                  <div key={product._id}>
                    <p>
                      Product: {product.productName}<br />
                      Quantity: {product.quantity}<br />
                      Amount: {product.amount * product.quantity}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </DialogContent>
          <DialogActions>
          
            {!orderPlaced ? (
              <>
              <Button onClick={handleAgreeOpenPopup}>Make Payment</Button>
            <Dialog
              open={agreeOpen}
              onClose={handleAgreeClosePopup}
            >
              <DialogTitle id="alert-dialog-title">
                Rental Terms and Conditions
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                By accessing and using our farm equipment rental service,
                 you agree to the following terms and conditions. <br></br>
                 * The rental agreement is formed directly between you and 
                  the Owner of the equipment. Don't worry about the equipment responsibility or liability.<br></br>
                 * While we strive to provide accurate information, we  guarantee 
                  the availability or accuracy of equipment listings. <br></br>
                  * You are responsible 
                  for verifying suitability, complying with laws, and ensuring your ability 
                  to operate the equipment safely and for obtaining 
                  insurance and hold the Administrators harmless from any claims.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleAgreeClosePopup}>Close</Button>
                <Button onClick={handleMakePayment} autoFocus>
                  Agree and Continue
                </Button>
              </DialogActions>
            </Dialog>
            </>
            ) : (
              <></>
            )}
            <Button onClick={handleClosePopup}>Close</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}

export default Cart;
