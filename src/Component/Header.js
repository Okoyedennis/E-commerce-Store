import React from "react";
import "../Style/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Button, Dropdown, ButtonGroup } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { useStateValue } from "./StateProvider";
const Header = () => {
  const [{ basket }] = useStateValue();
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
        <div className="header__option">
          <span className="header__optionLineOne">
            <Link className="nav__link" to="login">
              Hello Guest
            </Link>
          </span>
          <span className="header__optionLineTwo">
            <Link className="nav__link" to="login">
              {" "}
              Sign In
            </Link>
          </span>
        </div>

        {/*  */}

        <Dropdown className="bootstrap__dropdown" as={ButtonGroup}>
          <Button variant="warning">Category</Button>

          <Dropdown.Toggle split variant="warning" id="dropdown-split-basic" />

          <Dropdown.Menu>
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
          <ShoppingBasketIcon />
          <span className="header__optionLineTwo header__basketCount">
            {basket?.length}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Header;
