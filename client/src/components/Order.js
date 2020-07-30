import React, { useState, useEffect } from "react";
import {
  Segment,
  Header,
  Table,
  Form,
  Checkbox,
  Button,
  Divider,
} from "semantic-ui-react";
import Address from "./Address";

function Order() {
  const [order, setOrder] = useState({
    shippingAddress: {
      street1: "23600 Kindred Ter",
      street2: "",
      zipCode: "20148",
      state: "VA",
    },
    products: [
      { id: 1, name: "Voltage Converter", quantity: "10", isFulfilled: false },
    ],
  });

  return (
    <Segment>
      <Header as="h2" icon>
        Order Items
      </Header>
      <Form>
        <Table celled singleLine fixed>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>#</Table.HeaderCell>
              <Table.HeaderCell>Product Name</Table.HeaderCell>
              <Table.HeaderCell>Quantity</Table.HeaderCell>
              <Table.HeaderCell>isFulfilled</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {order.products.map((product) => (
              <Table.Row key={product.id}>
                <Table.Cell>{product.id}</Table.Cell>
                <Table.Cell>{product.name}</Table.Cell>
                <Table.Cell>{product.quantity}</Table.Cell>
                <Table.Cell>
                  <Checkbox value={product.isFulfilled} />
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
        <Button primary>Save</Button>
      </Form>
      <Divider />
      <Address address={order.shippingAddress} />
    </Segment>
  );
}

export default Order;
