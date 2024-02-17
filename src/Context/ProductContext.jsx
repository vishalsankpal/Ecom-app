import { createContext, useEffect, useState } from "react";
const ProductPageContext = createContext();
// eslint-disable-next-line react/prop-types
const api = import.meta.env.VITE_PRODUCT_API;
const ProductPageProvider = ({ children }) => {
  const [prodcuts, setProdcuts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(5);
  const [totalPages, setTotalPages] = useState(1);
  // const [dark, setDark] = useState(false);
  // Product API call
  useEffect(() => {
    (async () => {
      try {
        const results = await fetch(api);
        const data = await results.json();
        console.log(data);
        setProdcuts(data.products);
      } catch (error) {
        console.error("Something went wrong", error);
      }
    })();
  }, []);
  // changeTheme = () => {
  //   dark
  //     ? document.getElementsByTagName("body")[0].classList.add("dark")
  //     : document.getElementsByTagName("body")[0].classList.remove("dark");
  // };
  // Page count
  useEffect(() => {
    setTotalPages(Math.ceil(prodcuts.length / productsPerPage));
  }, [prodcuts, productsPerPage]);
  // paginated Products
  const paginatedProducts = prodcuts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );
  // change page
  const changePage = (pageNumber) => setCurrentPage(pageNumber);
  // change Product per page
  const changeProductPerPage = (perPageNumber) => {
    setProductsPerPage(perPageNumber);
  };
  const value = {
    paginatedProducts,
    currentPage,
    totalPages,
    productsPerPage,
    changePage,
    changeProductPerPage,
  };
  return (
    <ProductPageContext.Provider value={value}>
      {children}
    </ProductPageContext.Provider>
  );
};

export default ProductPageProvider;
export { ProductPageContext };
