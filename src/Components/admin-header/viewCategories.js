import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../pages/styles/admin-events.css"
import { useCookies } from "react-cookie";
import AdminBar from './admin-header';

function ViewCategories(){

    const [categories, setCategories] = useState([]);;
    const [cookies] = useCookies(["access_token"]);

    useEffect(() => {
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
          <div class="view-category-form">
            <h1>Product Categories List</h1>
{categories.length > 0 ? (
  <table className="categories-table">
    <tr>
       <th>Category Name</th>
       <th>Category ID</th>
      </tr>
    {categories.map((category) => (
      <>
      
      <tr>
           <td>{category.categoryName}</td>
           <td> {category._id}</td>
      </tr>
      </>
    ))}
  </table>
) : (
  <p>No categories found.</p>
)}
        </div>
        </div>
    )
}
export default ViewCategories;