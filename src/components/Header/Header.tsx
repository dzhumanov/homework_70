import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container w-50">
          <NavLink to={"/"} className="navbar-brand">
            Contacts
          </NavLink>
          <NavLink to={"/new-contact"} className="nav-item nav-link text-white">
            New Contact
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
