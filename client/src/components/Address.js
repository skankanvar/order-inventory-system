import React from "react";
import { Header, Label, Icon } from "semantic-ui-react";

function Address({ address = {} }) {
  return (
    <div>
      <Label>
        <Icon name="mail" />
        Shipping Address
      </Label>
      <div>{address.street1}</div>
      <div>{address.street2}</div>
      <div>{address.zipCode}</div>
      <div>{address.state}</div>
    </div>
  );
}

export default Address;
