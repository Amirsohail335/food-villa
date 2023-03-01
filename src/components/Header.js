import { useState } from "react";

const Title = () => {
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
  const [title, setTitle] = useState("Food Villa");
  return (
    <div className="header">
      <Title />
      {/* <button onClick={() => setTitle("Food House  ")}>Change Title</button> */}

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
};

export default Header;
