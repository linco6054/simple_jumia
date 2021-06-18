import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProducs,
  removeSelectedProducs,
} from "../redux/actions/productActions";
function ProductDetail() {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const { productId } = useParams();
  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => console.log(err.response));

    dispatch(selectedProducs(response.data));
  };
  console.log(product);
  useEffect(() => {
    if (productId && productId !== "") {
      fetchProductDetail();
    }
    return () => {
      dispatch(removeSelectedProducs());
    };
  }, [productId]);
  return (
    <div style={{ marginTop: "40px" }} className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>.......Loading </div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui vertical divider">AND</div>
          <div className="middle aligned ro">
            <div className="column lp">
              <img src={product.image} alt="" className="ui fluid image" />
            </div>
            <div className="column rp">
              <h1>{product.title}</h1>
              <h2>
                <a href="hh#" className="ui teal tag label">
                  {product.price}
                </a>
              </h2>
              <h3 className="ui brown block header">{product.category}</h3>
              <p>{product.description}</p>
              <div className="ui vertical animated button" tabIndex="0">
                <div className="hidden content">
                  <i className="shop icon"></i>
                </div>
                <div className="visible content">Add to Cart</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
