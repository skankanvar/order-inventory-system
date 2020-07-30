import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  text-align: center;
  font-size: 0.81rem;
  padding: 0.75rem 0;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 2px 0px inset;
`;

function Footer() {
  return (
    <StyledDiv>
      <a
        href="https://www.tactuallabs.com/"
        target="
      _blank"
      >
        Terms & Conditions
      </a>
      <span>
        - Identifi &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&copy;{" "}
        {new Date().getFullYear()} Tactual Labs, LLC.
      </span>
    </StyledDiv>
  );
}

export default Footer;
