import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Menu } from "semantic-ui-react";
import styled from "styled-components";

const StyledMenu = styled(Menu)`
  &&&& {
    /* background-color: lightgray; */
  }
`;

function Header() {
  const [activeItem, setActiveItem] = useState("/");
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
    <StyledMenu fixed="top">
      <Menu.Item
        name="Home"
        active={activeItem === "/inventory"}
        onClick={() => {
          handleClick("/inventory");
        }}
      />
      {isCustomer && (
        <Menu.Item
          name="Cart"
          position="right"
          active={activeItem === "/cart"}
          onClick={() => {
            handleClick("/cart");
          }}
        />
      )}
    </StyledMenu>
  );
}

export default Header;
