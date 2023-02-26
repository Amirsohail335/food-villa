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

const Header = () => {
  return (
    <div className="header">
      <Tittle />
      <div className="nav-items">
        <ul>
          {/* <li>Home</li> */}
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}

const Body = () => {
  return (
    <div>
      <RestrauntCard/>
    </div>
  )
};

const Footer = () => {
  return <h4>Footer</h4>;
};

const RestrauntCard = () => {
  return(
    <div className="card">
      <img className="burger" alt="big-burger" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/ni4jj1hlo4zt7i3ioaow"/>
      <h2>Burgur King</h2>
      <h3>Burger American</h3>
      <h4>4.2 stars</h4>
    </div>
  )
}


const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

export default AppLayout;
