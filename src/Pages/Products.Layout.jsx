import { useCallback, useContext, useEffect } from "react";
import { ProductPageContext } from "../Context/ProductContext";
import styled from "styled-components";
import Pagination from "../Components/Pagination/Pagination";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { CartPageContext } from "../Context/CartContext";
const Products = () => {
  const {
    paginatedProducts,
    changeProductPerPage,
    productsPerPage,
    totalPages,
    currentPage,
    changePage,
  } = useContext(ProductPageContext);
  const { addToCart } = useContext(CartPageContext);
  const [queryParams, setQueryParams] = useSearchParams();
  const navigateTo = useNavigate();
  const name = queryParams.get("perPage") || "";
  useEffect(() => {
    if (name) {
      handleProductPerChange(Number(name));
    } else {
      const params = new URLSearchParams();
      params.append("perPage", productsPerPage);
      navigateTo({ search: params.toString() });
    }
  }, [name, productsPerPage, navigateTo]);

  const handleProductPerChange = useCallback(
    (val) => {
      setQueryParams((prevParams) => ({
        ...Object.fromEntries(prevParams),
        perPage: val,
      }));
      changeProductPerPage(Number(val));
    },
    [changeProductPerPage, setQueryParams]
  );

  const handlePageChange = useCallback(
    (page) => {
      changePage(page);
      navigateTo(page);
    },
    [changePage, navigateTo]
  );

  const renderer = paginatedProducts.map((item) => {
    return (
      <ProductContainer key={item.id}>
        <Link to={`/product/${item.id}`}>
          <Image src={item.thumbnail} alt={item.title} />
          <Title>{item.title}</Title>
          <ProductDesc>{item.description}</ProductDesc>
        </Link>
        <button onClick={() => addToCart(item)}>Add to Cart</button>
      </ProductContainer>
    );
  });

  return (
    <>
      <select onChange={(e) => handleProductPerChange(e.target.value)}>
        <option value="5" selected={queryParams.get("perPage") === "5"}>
          5
        </option>
        <option value="10" selected={queryParams.get("perPage") === "10"}>
          10
        </option>
        <option value="15" selected={queryParams.get("perPage") === "15"}>
          15
        </option>
      </select>
      <Container>{paginatedProducts && renderer}</Container>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onClick={handlePageChange}
      />
    </>
  );
};

export default Products;
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
`;
const ProductContainer = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
`;
const Image = styled.img`
  width: 100%;
  object-fit: contain;
  height: 150px;
`;
const Title = styled.h2`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;
const ProductDesc = styled.p`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;
