import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Menu } from "semantic-ui-react";
import { useHistory, useLocation } from "react-router-dom";
function SideNav() {
  const [activeItem, setActiveItem] = useState("/products");
  const history = useHistory();
  const location = useLocation();
  const isCustomer = useSelector((state) => state.isCustomer);

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location.pathname]);

  function handleClick(item) {
    history.push(item);
    setActiveItem(item);
  }

  return (
    <Menu vertical color="grey">
      <Menu.Item id="viewinventory"
        active={activeItem === "/products"}
        onClick={() => {
          handleClick("/products");
        }}
      >
        View Inventory
      </Menu.Item>
      {isCustomer ? null : (
        <Menu.Item
          active={activeItem === "/addStock"}
          onClick={() => {
            handleClick("/addStock");
          }} id="addstock"
        >
          Add Stock
        </Menu.Item>
      )}
      <Menu.Item
        active={activeItem === "/orders"}
        onClick={() => {
          handleClick("/orders");
        }} id="orders"
      >
        Order History
      </Menu.Item>
    </Menu>
  );
}

export default SideNav;
