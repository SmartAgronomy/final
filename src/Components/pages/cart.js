import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import "./styles/cart.css"
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

function Cart() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [cookies] = useCookies(["access_token"]);
  const [value, setValue] = useState(2);


  useEffect(() => {
    const userId = localStorage.getItem("userID");
    const token = cookies.access_token;
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .post("http://localhost:8080/api/getCart", { userId }, { headers })
      .then((res) => {
        console.log("Cart Added Successfully");
        const cartData = res.data?.data?.cart || [];
        setData(cartData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!cookies.access_token) {
    return <p>Please login to view the cart.</p>;
  }

  const handelRemoveFromCart = async (productId) => {
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
      setData(cartData);
    } catch (error) {
      const { message } = error.response.data;
      console.log(message);
      // Handle error message or perform any other actions
    }
  };



  // ...


  return (
    <div className="cart-overlay">
      <div className="cart-container">
        <h1>Products Cart</h1>
        <span>10 products found</span>
        
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
                <span class="span">
                  {product.productDescription}
                </span>

              </div>
              <div class="remove-button">
              <p><b>PRICE: {product.amount} Only/-</b></p>
              <button
                
                onClick={() => handelRemoveFromCart(product._id)}
              >
               Delete Product
              </button>

              </div>
              <div class="buy-button">
                <p>
                 <b> Free Shipment..!</b>
                </p>
              <button>
               Rent Now
              </button>
              </div>
              
            </div>
          ))}
        </div>
        <div class="total">
          <hr></hr><br></br>
        <h3>Total Cost</h3>
        <hr></hr><br></br>
        <button> Rent all products</button>
        </div>
      </div>
      
    </div>
  );
}

export default Cart;