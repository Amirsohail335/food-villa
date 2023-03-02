import { useState , useEffect } from "react";

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
  // const [title, setTitle] = useState("Food Villa");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    console.log("useEffect");
  }, []);

  console.log("render")

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
