import { createContext, useEffect, useState } from "react";
import * as React from "react";
interface IContext {
  paginatedProducts: IProduct[];
  currentPage: number;
  totalPages: number;
  productsPerPage: number;
  changePage: (pageNumber: number) => void;
  changeProductPerPage: (pageNumber: number) => void;
}
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
//Question what need to set instead of undefined
const ProductPageContext = createContext<IContext | undefined>(undefined);
const api = import.meta.env.VITE_PRODUCT_API;
const ProductPageProvider = ({ children }): JSX.Element => {
  const [prodcuts, setProdcuts] = useState<IProduct[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productsPerPage, setProductsPerPage] = useState<number>(5);
  const [totalPages, setTotalPages] = useState<number>(1);
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
  const changePage = (pageNumber): void => setCurrentPage(pageNumber);
  // change Product per page
  const changeProductPerPage = (perPageNumber): void => {
    setProductsPerPage(perPageNumber);
  };
  const value: IContext = {
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
