import React from "react";
import Header from "../dashboard/header";
import ProductsFooter from "../headfooters/products-footer";
import "./styles/products.css";
import ProductList from "./productList";

function Products() {
  return (
    <div>
      <Header />
      <div className="products-head">
        <h1>Choose by Categories</h1>
      </div>
      <ProductList/>
      <ProductsFooter />
    </div>
  );
}

export default Products;
