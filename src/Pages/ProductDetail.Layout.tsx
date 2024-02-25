import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { CartPageContext } from "../Context/CartContext";
import { JsxElement } from "typescript";
const api = import.meta.env.VITE_PRODUCT_API;
interface IProduct {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}
const ProductDetail = (): JSX.Element => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<IProduct | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { addToCart } = useContext(CartPageContext);
  //we need to call api for product
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${api}/${productId}`);
        if (!response.status) {
          throw new Error("Failed to fetch product");
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [productId]);
  //we need to use skeleton preloader
  if (loading) {
    return <div className="loader"></div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }
  //We need to use Helmet for updating title and meta tags
  return (
    <div>
      <ProductDetailWrapper>
        <ProdutDetailRow>
          <LeftColumn>
            {product.images.map((imgItem, i) => (
              <Image src={imgItem} alt={`${product.title}-${i}`} key={i} />
            ))}
          </LeftColumn>
          <RightColumn>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>{product.discountPercentage}%</p>
            <p>{product.price}</p>
            <p>{product.rating}</p>
            <button onClick={addToCart}>Add to Cart</button>
          </RightColumn>
        </ProdutDetailRow>
      </ProductDetailWrapper>
    </div>
  );
};

export default ProductDetail;

const ProductDetailWrapper = styled.div``;
const ProdutDetailRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const LeftColumn = styled.div`
  flex: 0 0 50%;
  padding-right: 15px;
  display: flex;
  flex-direction: column;
`;
const RightColumn = styled.div`
  flex: 0 0 50%;
  padding-left: 15px;
`;
const Image = styled.img`
  width: 100%;
`;
