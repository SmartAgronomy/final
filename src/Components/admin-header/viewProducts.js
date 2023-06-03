import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useCookies } from "react-cookie";
import AdminBar from './admin-header';
import "../pages/styles/admin-events.css"

function ViewProducts(){

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);;
    const [cookies] = useCookies(["access_token"]);

    const handleDeleteProduct = async (productId) => {
      try {
        const token = cookies.access_token; // Retrieve the JWT token from cookies
        await axios.delete(`http://localhost:8080/admin/products/${productId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        fetchProducts();
      } catch (error) {
        console.error('Failed to delete product:', error);
      }
    };
    

      const fetchProducts = async () => {
        try {
          const response = await axios.get('http://localhost:8080/admin/products');
          setProducts(response.data.products);
        } catch (error) {
          console.error('Failed to fetch products:', error);
        }
      };


      useEffect(() => {
        fetchProducts();
        fetchCategories();
      }, []);


      const fetchCategories = async () => {
        try {
          const response = await axios.get('http://localhost:8080/admin/categories');
          setCategories(response.data.categories || []);
        } catch (error) {
          console.error('Failed to fetch categories:', error);
        }
      };
    return(
<div>
<AdminBar />
<div class="product-container">

  <div class="product-list">
  <h1>Products List</h1>
  <div class="item-list">
<ul>
  {products.map((product) => (
    <div class="display-products">
    <li type="none" key={product._id}>

         {product.productImage && (
        <img
          src={product.productImage.location}
          alt={product.productImage.filename}
        />
      )}
<br></br>
   <div>
      <strong>{product.productName}</strong>
      <p>{product.productDescription}</p>
      <p>Price: {product.amount}/- per day</p>
      <p>{product.category.categoryName}</p>
      </div>
      <button onClick={() => handleDeleteProduct(product._id)}>
        Delete
      </button>
    </li>
    </div>
  ))}
</ul>
</div>
</div>
</div>
</div>
)
      }
      export default ViewProducts;
