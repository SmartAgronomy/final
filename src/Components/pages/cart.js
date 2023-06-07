
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import "./styles/cart.css";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import qr from "../Images/Scan_Now_to_Dispatch_your_Order.png"

function Cart() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [cookies] = useCookies(["access_token"]);
  const [value, setValue] = useState(2);
  const [open, setOpen] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleOpenPopup = () => {
    setOpen(true);
  };

  const handleClosePopup = () => {
    setOpen(false);
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
    return <p>Please login to view the cart.</p>;
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

  const handleRentAllProducts = () => {
    // Place the order logic here
    // Show order placed message after 5 seconds
    setTimeout(() => {
      setOrderPlaced(true);
    }, 5000);
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
                  {product.productName} in Category ({product.category.categoryName})<br></br>
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
                  <button>
                    Rent Now
                  </button>
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
                <p>Order Placed Successfully!</p>
                <p>Please wait while we process your order.</p>
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
                <img src={qr} alt="QR Code" />
              </div>
            )}
          </DialogContent>
          <DialogActions>
            {!orderPlaced ? (
              <Button onClick={handleRentAllProducts}>Rent Now</Button>
            ) : (
              <Button disabled>Processing...</Button>
            )}
            <Button onClick={handleClosePopup}>Close</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}

export default Cart;
