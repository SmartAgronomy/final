import { useState, useEffect } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';

const useUserAPI = (token) => {
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [cart, setCart] = useState([])
  const [history, setHistory] = useState([]);
  const [cookies] = useCookies(["access_token"]);

  useEffect(() => {
    const getUser = async () => {
      try {
        // JWT token from cookies
        const token = cookies.access_token; 
        const response = await axios.get("http://localhost:8080/api/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setIsLogged(true);
        setIsAdmin(response.data.isAdmin); // Set the isAdmin value from the API response
        // setCart(response.data.cart);
      } catch (error) {
        alert(error.response.data.msg);
      }
    };

    if (token) {
      getUser();
    }
  }, [token]);


  const addCart = async (product) => {
    try {
      if (!isLogged) {
        return alert("Please login to continue buying");
      }
  
      const check = cart.every((item) => item._id !== product._id);
  
      if (check) {
        const updatedCart = [...cart, { ...product, quantity: 1 }];
        setCart(updatedCart);
  
        await axios.post('http://localhost:8080/api/addcart', { cart: updatedCart });
      } else {
        alert("This product has already been added to cart.");
      }
    } catch (error) {
      console.error("Failed to add product to cart:", error);
    }
  };
  

  return {
    isLogged,
    setIsLogged,
    isAdmin,
    setIsAdmin,
    cart: [cart, setCart],
    addCart: addCart,
    history,
    setHistory,
  };
};

export default useUserAPI;
