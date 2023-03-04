// import "./App.css";
import React from "react";
import { Title } from "./components/Header";
import Header from "./components/Header";
import { ReactDOM } from "react-dom/client";
import Body from "./components/Body";
import Footer from "./components/Footer";
import RestrauntCard from "./components/RestrauntCard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";

//Config Driven UI

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
      <RestrauntCard />
    </React.Fragment>
  );
};

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <AppLayout />,
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
// ]);

export default AppLayout;
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<RouterProvider router={appRouter} />);
