
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate, useLocation } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cookies] = useCookies(["access_token"]);
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("search");

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [searchQuery, products]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/admin/products");
      setProducts(response.data.products || []);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:8080/admin/categories");
      setCategories(response.data.categories || []);
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    }
  };

  const handleAddToCart = (productId) => {
        const _productId = productId;
        const userId = localStorage.getItem("userID");
        const token = cookies.access_token;
    
        console.log({ productId: _productId, userId });
        const _data = { productId: _productId, userId };
        const headers = {
          Authorization: `Bearer ${token}`,
        };
    
        axios
          .post("http://localhost:8080/api/addToCart", _data, { headers })
          .then((res) => {
            console.log(res.data, "49");
            if (res.data.code === 200) {
              // Handle success if needed
            }
          })
          .catch((err) => {
            console.log(err, "30");
          });
    
        if (!token) {
          alert("Please Login To Continue");
        }
      };

  const handleCategoryFilter = (categoryName) => {
    const filtered = products.filter(
      (product) => product.categoryName === categoryName
    );
    setFilteredProducts(filtered);

    if (categoryName) {
      setSelectedCategory(categoryName);
    } else {
      resetFilter();
    }
  };

  const resetFilter = () => {
    setFilteredProducts([]);
    setSelectedCategory("");
    navigate("/products"); // Clear the search query in the URL
  };

  const filterProducts = () => {
    if (searchQuery) {
      const filtered = products.filter((product) =>
        product.productName.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else if (selectedCategory) {
      const filtered = products.filter(
        (product) => product.categoryName === selectedCategory
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  };

  return (
    <div className="product-list-container">
      <div>
        <select
          value={selectedCategory}
          onChange={(e) => handleCategoryFilter(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="sort-category">Sort by Category</option>
          {categories.map((category) => (
            <option key={category._id} value={category.categoryName}>
              {category.categoryName}
            </option>
          ))}
        </select>
        <button onClick={resetFilter}>Clear Filters</button>
      </div>

      {searchQuery || selectedCategory ? (
        <>
          <h2>Filtered Results:</h2>
          {filteredProducts.length > 0 ? (
            <ul>
              {filteredProducts.map((product) => (
                <li key={product._id}>
                  <strong>{product.productName}</strong>
                  <p>{product.productDescription}</p>
                  <p>Amount: {product.amount}</p>
                  <p>{product.categoryName}</p>
                  {product.productImage && (
                    <img
                      src={product.productImage.location}
                      alt={product.productImage.filename}
                    />
                  )}
                  <button onClick={() => handleAddToCart(product._id)}>
                    Add to Cart
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p>No products found.</p>
          )}
        </>
      ) : null}

      <h2>All Products:</h2>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <strong>{product.productName}</strong>
            <p>{product.productDescription}</p>
            <p>Amount: {product.amount}</p>
            <p>{product.categoryName}</p>
            {product.productImage && (
              <img
                src={product.productImage.location}
                alt={product.productImage.filename}
              />
            )}
            <button onClick={() => handleAddToCart(product._id)}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
