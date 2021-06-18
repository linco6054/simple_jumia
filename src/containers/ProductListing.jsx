import React, { useEffect } from "react";
import axios from "axios";
import ProductComponent from "./ProductComponent";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "./../redux/actions/productActions";
function ProductListing() {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetchProduct = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log(err);
      });
    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  console.log(products);
  return (
    <div style={{ marginTop: "20px" }} className="left ui grid container">
      <ProductComponent />
    </div>
  );
}

export default ProductListing;
