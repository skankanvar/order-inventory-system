import React, { useState, useEffect } from "react";
import { Menu } from "semantic-ui-react";
import { useHistory, useLocation } from "react-router-dom";
function SideNav() {
  const [activeItem, setActiveItem] = useState("/products");
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location.pathname]);

  function handleClick(item) {
    history.push(item);
    setActiveItem(item);
  }

  return (
    <Menu vertical color="grey">
      <Menu.Item
        active={activeItem === "/products"}
        onClick={() => {
          handleClick("/products");
        }}
      >
        View Inventory
      </Menu.Item>
      <Menu.Item
        active={activeItem === "/addStock"}
        onClick={() => {
          handleClick("/addStock");
        }}
      >
        Add Stock
      </Menu.Item>
      <Menu.Item
        active={activeItem === "/orders"}
        onClick={() => {
          handleClick("/orders");
        }}
      >
        Order History
      </Menu.Item>
    </Menu>
  );
}

export default SideNav;
