import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { productId } = useParams();
  //we need to call api for product
  //we need to use skeleton preloader
  //We need to use Helmet for updating title and meta tags
  return <div>This is product detail page {productId}</div>;
};

export default ProductDetail;
