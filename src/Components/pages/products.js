import React from "react";
import Header from "../dashboard/header";
import ProductsFooter from "../headfooters/products-footer";
import "./styles/products.css";
import ProductList from "./productList";

function Products() {
  return (
    <div>
      <Header />
      <ProductList/>
      <ProductsFooter />
    </div>
  );
}

export default Products;
