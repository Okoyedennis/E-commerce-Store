import React from "react";
import "../Style/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Button, Dropdown, ButtonGroup } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";
const Header = () => {
  const [{ basket, user }] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link className="link" to="/">
        <h2 className="header__logo">
          De<span>nn</span>is
        </h2>
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="search" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link className="nav__link" to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              Hello {user ? user.email : "Guest"}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Dropdown className="bootstrap__dropdown" as={ButtonGroup}>
          <Button variant="warning">Category</Button>

          <Dropdown.Toggle split variant="warning" id="dropdown-split-basic" />

          <Dropdown.Menu>
            <Dropdown.Item>
              <NavLink activeClassName="active" className="link" to="/">
                Home
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
              <NavLink
                activeClassName="active"
                className="link"
                to="/electronics"
              >
                Electronics
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
              <NavLink activeClassName="active" className="link" to="/jewelery">
                Jewelery
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
              <NavLink activeClassName="active" className="link" to="/men">
                Men
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
              <NavLink activeClassName="active" className="link" to="/women">
                Women
              </NavLink>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <Link className="link" to="/checkout">
        <div className="header__optionBasket">
          <ShoppingCartIcon />
          <span className="header__optionLineTwo header__basketCount">
            {basket?.length}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Header;
