import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../pages/styles/admin-events.css"
import { useCookies } from "react-cookie";
import AdminBar from './admin-header';
import DeleteIcon from '@mui/icons-material/Delete';
import { Tooltip } from '@mui/material';

function ViewCategories() {

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

  const handleDeleteCategory = async (categoryId) => {
    try {
      const token = cookies.access_token; // Retrieve the JWT token from cookies
      await axios.delete(`http://localhost:8080/admin/categories/${categoryId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Category Deleted Successfully")
      fetchCategories();
      alert("Category Deleted Successfully")
    } catch (error) {
      console.error('Failed to delete product:', error);
    }
  };

  return (
    <div>
      <AdminBar />
      <div class="view-category-form">
        <h1>Product Categories List</h1>
        {categories.length > 0 ? (
          <table className="categories-table">
            <tr>
              <th>Category Name</th>
              <th>Category ID</th>
              <th></th>
            </tr>
            {categories.map((category) => (
              <>

                <tr>
                  <td>{category.categoryName}</td>
                  <td> {category._id}</td>
                  <Tooltip title="Delete"><DeleteIcon className="delete-categories" onClick={() => handleDeleteCategory(category._id)}>
                    Delete
                  </DeleteIcon></Tooltip>
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