import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useCookies } from "react-cookie";
import AdminBar from './admin-header';

function AddProducts() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [productImage, setProductImage] = useState('');
  const [productImageFilename, setProductImageFilename] = useState('');
  const [productImageLocation, setProductImageLocation] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const [categoryAdded, setCategoryAdded] = useState(false);
  const [cookies] = useCookies(["access_token"]);


useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/admin/products');
      setProducts(response.data.products);
    } catch (error) {
      console.error('Failed to fetch products:', error);
    }
  };

  
  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      const token = cookies.access_token;
      const response = await axios.post('http://localhost:8080/admin/products', {
        productName,
        productDescription,
        amount,
        productImage: {
          filename: productImageFilename,
          location: productImageLocation,
        },
        categoryId: selectedCategory,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
        
      console.log('Product added successfully:', response.data);
      setProductName('');
      setProductDescription('');
      setAmount('');
      setProductImageFilename('');
      setProductImageLocation('');
      setSelectedCategory('');
      fetchProducts();
    } catch (error) {
      console.error('Failed to add product:', error);
    }
  };
  
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
  
  const handleAddCategory = async (e) => {
    e.preventDefault();
  
    try {
      const token = cookies.access_token; // Retrieve the JWT token from cookies
      await axios.post(
        'http://localhost:8080/admin/categories',{
          headers: {
            Authorization: `Bearer ${token}`,
          },
          categoryName,
        },
      );
      console.log('Category added successfully');
      setCategoryName('');
      setCategoryAdded(true);
      fetchCategories();
    } catch (error) {
      console.error('Failed to add category:', error);
    }
  };
  
  
  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:8080/admin/categories');
      setCategories(response.data.categories || []);
    } catch (error) {
      console.error('Failed to fetch categories:', error);
    }
  };
  


  

  return (
    <div>
      <AdminBar />
    
      <form class="add-products-form" onSubmit={handleAddProduct}>
        <h1>Add Products List</h1>
          <input
            type="text"
            value={productName}
            placeholder="Name"
            onChange={(e) => setProductName(e.target.value)}
          />
        
       
        
          
          <input
            value={productDescription}
            placeholder="Description"
            onChange={(e) => setProductDescription(e.target.value)}
            rows={1}
          ></input>
       
       
        
          
          <input
            type="text"
            value={amount}
            placeholder="Price"
            onChange={(e) => setAmount(e.target.value)}
          />
       
        
        
          
          <input
            type="text"
            placeholder="Image Filename"
            value={productImageFilename}
            onChange={(e) => setProductImageFilename(e.target.value)}
          />
        
       
        
          <input
            type="text"
            placeholder="Image Link Address"
            value={productImageLocation}
            onChange={(e) => setProductImageLocation(e.target.value)}
          />
        
        
        
          <select
              value={selectedCategory}

              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">Select a category</option>
              {categories && categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.categoryName}
                </option>
              ))}
            </select>
   
       <br></br>
        <button type="submit">Add Product</button>
      </form>
      </div>
      )
      }
      export default AddProducts;