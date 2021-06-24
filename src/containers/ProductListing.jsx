import React, { useEffect } from "react";

import ProductComponent from "./ProductComponent";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./../redux/actions/productActions";
function ProductListing() {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  console.log(products);
  return (
    <div style={{ marginTop: "20px" }} className="left ui grid container">
      <ProductComponent />
    </div>
  );
}

export default ProductListing;
