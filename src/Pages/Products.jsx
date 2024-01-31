import React, { useContext } from "react";
import { ProductPageContext } from "../Context/ProductContext";

const Products = () => {
  const { paginatedProducts } = useContext(ProductPageContext);
  console.log(paginatedProducts);
  return (
    <div>
      {paginatedProducts &&
        paginatedProducts.map((item) => (
          <div key={item.id}>
            {item.images.map((img, i) => (
              <img src="https://i.imgur.com/dV4Nklf.jpeg" key={i} />
            ))}
            <h2>{item.title}</h2>
          </div>
        ))}
    </div>
  );
};

export default Products;
