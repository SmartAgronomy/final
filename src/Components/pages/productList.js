import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cookies] = useCookies(["access_token"]);
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

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

  const handleSearch = () => {
    const filtered = products.filter((product) =>
      product.productName.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleCategoryFilter = (categoryName) => {
    const filtered = products.filter(
      (product) => product.categoryName === categoryName
    );
    setFilteredProducts(filtered);
  };

  const resetFilter = () => {
    setFilteredProducts([]);
    setSelectedCategory("");
  };

  return (
    <div className="product-list-container"> 
      <div>
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search products..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div>
        <select
          value={selectedCategory}
          onChange={(e) => handleCategoryFilter(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category._id} value={category.categoryName}>
              {category.categoryName}
            </option>
          ))}
        </select>
        <button onClick={resetFilter}>Reset Filter</button>
      </div>

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

export default ProductList;