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
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Vishal from "../Components/Header/Header";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import Cart from "../Pages/Cart";
import ProductDetail from "../Pages/ProductDetail";
import SignInPage from "../Pages/SignIn.Layout";
import ProtectedView from "../Components/templates/ProtectedView/ProtectedView.Component";

const Layout = () => (
  <>
    <Vishal />
    <Outlet />
  </>
);
const appRouter = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/cart",
        element: (
          <ProtectedView>
            <Cart />
          </ProtectedView>
        ),
      },
      {
        path: "/signin",
        element: <SignInPage />,
      },
      {
        path: "/product/:productId",
        element: <ProductDetail />,
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
