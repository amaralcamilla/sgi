import Logo from "../../assets/logo192_negative.png";

const Header = ({ children }) => {
  return (
    <header>
      <nav className="nav-bar">
        <img
          className="white-logo"
          src={Logo}
          alt="logo"
          width="50"
          height="50"
        />
        <div>{children}</div>
      </nav>
    </header>
  );
};

export default Header;
