import React from "react";
import Header from "../dashboard/header";
import "./styles/products.css";
import ProductList from "./productList";

function Products() {
  return (
    <div>
      <Header />
      <ProductList/>
    </div>
  );
}

export default Products;
