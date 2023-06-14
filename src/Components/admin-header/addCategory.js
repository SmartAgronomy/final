import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useCookies } from "react-cookie";
import AdminBar from './admin-header';


function AddCategory(){
    const [categoryName, setCategoryName] = useState('');
    const [categoryAdded, setCategoryAdded] = useState(false);
    const [cookies] = useCookies(["access_token"]);
    const [categories, setCategories] = useState([]);
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
          alert("New category added successfully");
          setCategoryName('');
          setCategoryAdded(true);
          fetchCategories();
        } catch (error) {
          console.error('Failed to add category:', error);
        }
      };
return(
  <div>
  <AdminBar />
<form class="add-category-form" onSubmit={handleAddCategory}>
        
          <h1>Add Category List</h1>
          <input
            type="text"
            placeholder='Name'
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
       
        
        <button type="submit">Add Category</button>
      </form>
      </div>
)
}
export default AddCategory;