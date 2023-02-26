import "./App.css";
import React from "react";

const Tittle = () => {
  return (
    <div>
      <img
        className="logo"
        alt="logo"
        src="https://tse1.mm.bing.net/th?id=OIP.CyhSuKiv6ThPyd8kdBwNhQHaHa&pid=Api&P=0"
      />
    </div>
  );
};

function App() {
  return (
    <div className="header">
      <Tittle />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}

const Body = () => {
  return <h4>Body</h4>;
};

const Footer = () => {
  return <h4>Footer</h4>;
};

const AppLayout = () => {
  return (
    <React.Fragment>
      {/* <Header /> */}
      <Body />
      <Footer />
    </React.Fragment>
  );
};

export default App;
