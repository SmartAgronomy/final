import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import ProductsFooter from "../headfooters/products-footer";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cookies] = useCookies(["access_token"]);
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("search");
  const [value, setValue] = React.useState(4);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [searchQuery, products]);

  const openSuccessDialog = () => {
    setOpenDialog(true);
  };

  // Function to close the dialog
  const closeSuccessDialog = () => {
    setOpenDialog(false);
  };

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

    try {
      axios
        .post("http://localhost:8080/api/addToCart", _data, { headers })
        .then((res) => {
          console.log(res.data, "49");
          if (res.status === 200) {
            window.alert("Product added to cart successfully.");
            window.location.reload(); // Refresh the page
          }

        })
        .catch((err) => {
          console.log(err, "30");

          window.alert("Product is already present in your cart. Please place an order.");
          navigate("/cart");


        });
    } catch (error) {
      console.log(error, "Error occurred while making the request.");
      window.alert("An error occurred while making the request. Please try again.");
    }

    if (!token) {
      window.alert("Please Login To Continue");
    }
  };





  const handleCategoryFilter = (categoryName) => {
    const filtered = products.filter(
      (product) => product.category.categoryName === categoryName
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
        (product) => product.category.categoryName === selectedCategory
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  };

  return (
    <div>
      <div className="product-list-container">
        <div class="select-category">
          <select
            value={selectedCategory}
            onChange={(e) => handleCategoryFilter(e.target.value)}
          >
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
            <div class="all-filter-products">
              <h1>Filtered Results:</h1>
              {filteredProducts.length > 0 ? (
                <ul>
                  {filteredProducts.map((product) => (
                    <li key={product._id}>
                      {product.productImage && (
                        <img
                          src={product.productImage.location}
                          alt={product.productImage.filename}
                        />
                      )}
                      <strong>{product.productName}</strong>
                      <p>{product.productDescription}</p>
                      <p class="item-price">{product.amount}/- Only</p>
                      <p>{product.category.categoryName}</p>
                      <Box
                        sx={{
                          '& > legend': { mt: 2 },
                        }}
                      >
                        <Rating
                          name="simple-controlled"
                          value={value}
                          onChange={(event, newValue) => {
                            setValue(newValue);
                          }}
                        />
                      </Box>
                      <span class="free-delivery-txt">Free Delivery..!</span><br></br><br></br>

                      <div class="cart-btn">
                        <button onClick={() => handleAddToCart(product._id)}>
                          Add to Cart
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p class="no-products-found">No products found.</p>
              )}
            </div>
          </>
        ) : null}
        <div class="all-filter-products">
          <h1>All Products:</h1>
          <ul>
            {products.map((product) => (
              <li key={product._id}>
                {product.productImage && (
                  <img
                    src={product.productImage.location}
                    alt={product.productImage.filename}
                  />
                )}
                <strong>{product.productName}</strong>
                <p>{product.productDescription}</p>
                <p class="item-price">{product.amount}/- Only</p>
                <p><b>Product Type:{product.category.categoryName}</b></p>
                <Box
                  sx={{
                    '& > legend': { mt: 2 },
                  }}
                >
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </Box>
                <span class="free-delivery-txt">Free Delivery..!</span><br></br><br></br>

                <button onClick={() => handleAddToCart(product._id)}>
                  Add to Cart
                </button>
              </li>
            ))}
          </ul>
        </div>

      </div>
      <ProductsFooter />
    </div>
  );
}

export default ProductList;