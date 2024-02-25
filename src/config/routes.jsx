// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   RouterProvider,
//   createBrowserRouter,
// } from "react-router-dom";
// import Home from "../Pages/Home";
// import Products from "../Pages/Products";
// import Header from "../Components/Header/Header";
// import Cart from "../Pages/Cart";
// import ProductDetail from "../Pages/ProductDetail";
// import SignInPage from "../Pages/SignIn.Layout";
// import ProtectedView from "../Components/templates/ProtectedView/ProtectedView.Component";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/products",
//     element: <Products />,
//   },
//   {
//     path: "/cart",
//     element: (
//       <ProtectedView>
//         <Cart />
//       </ProtectedView>
//     ),
//   },
//   {
//     path: "/signin",
//     element: <SignInPage />,
//   },
//   {
//     path: "/product/:productId",
//     element: <ProductDetail />,
//   },
// ]);
// const RoutesConfig = () => {
//   return (
//     // <Router>
//     //   <Header />
//     //   <Routes>
//     //     <Route path="/" element={<Home />}></Route>
//     //     {/* <Route path="/cart" element={<Home />}></Route> */}
//     //     <Route path="/products" element={<Products />}></Route>
//     //     <Route path="/cart" element={<Cart />}></Route>
//     //     <Route path="/signin" element={<SignInPage />}></Route>
//     //     <Route path="/product/:productId" element={<ProductDetail />}></Route>
//     //   </Routes>
//     // </Router>
//     <>
//       <RouterProvider router={router}>
//         <Header />
//       </RouterProvider>
//     </>
//   );
// };

// export default RoutesConfig;
import React, { Suspense } from "react";

import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
//import ProtectedView from "../Components/templates/ProtectedView/ProtectedView.Component";
const Home = React.lazy(() => import("../Pages/Home.Layout"));
const Products = React.lazy(() => import("../Pages/Products.Layout"));
const Cart = React.lazy(() => import("../Pages/Cart.Layout"));
const ProductDetail = React.lazy(() => import("../Pages/ProductDetail.Layout"));
const SignInPage = React.lazy(() => import("../Pages/SignIn.Layout"));
export const routesMap = {
  root: "/",
  home: "/home",
  products: "/products",
  cart: "/cart",
  productDetail: "/product/:productId",
  signInPage: "/signInPage",
};
const Layout = () => (
  <>
    <Header />
    <Outlet />
  </>
);
const appRouter = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: routesMap.root,
        element: (
          <Suspense fallback={<div className="loader"></div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: routesMap.home,
        element: (
          <Suspense fallback={<div className="loader"></div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: routesMap.products,
        element: (
          <Suspense fallback={<div className="loader"></div>}>
            <Products />
          </Suspense>
        ),
      },
      {
        path: routesMap.cart,
        element: (
          <Suspense fallback={<div className="loader"></div>}>
            {/* uncomment below code when protected routes implemented */}
            {/* <ProtectedView>
              <Cart />
            </ProtectedView> */}
            <Cart />
          </Suspense>
        ),
      },
      {
        path: routesMap.signInPage,
        element: (
          <Suspense fallback={<div className="loader"></div>}>
            <SignInPage />
          </Suspense>
        ),
      },
      {
        path: routesMap.productDetail,
        element: (
          <Suspense fallback={<div className="loader"></div>}>
            <ProductDetail />
          </Suspense>
        ),
      },
    ],
  },
]);

const RoutesConfig = () => {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default RoutesConfig;
