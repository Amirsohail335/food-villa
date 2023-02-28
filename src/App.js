import "./App.css";
import React from "react";
import { Title } from "./components/Header";
import Header from "./components/Header";
import { ReactDOM } from "react-dom/client";
import Body from "./components/Body";
import Footer from "./components/Footer";
import RestrauntCard from "./components/RestrauntCard";

const config = [
  {
    type: "carousal",
    cards: [
      {
        offerName: "50% off",
      },
      {
        offerName: "No Delivery Charge",
      },
    ],
  },

  {
    type: "restaurant",
    cards: [
      {
        offerName: "50% off",
      },
      {
        offerName: "No Delivery Charge",
      },
    ],
  },
];

//Config Driven UI

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
      {/* <RestrauntList /> */}
    </React.Fragment>
  );
};

export default AppLayout;
