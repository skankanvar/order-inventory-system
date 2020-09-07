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
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Address from "./Address";

function Order() {
  let { orderId } = useParams();
  const userId = useSelector((state) => {
    return state.id;
  });
  const userType = useSelector((state) => state.type);
  const [order, setOrder] = useState({});

  async function handleFulfill() {
    await axios.put(`/orders/${orderId}`, { fulfilled: true });
    setOrder((order) => ({ ...order, isFulfilled: true }));
    alert("Order is fulfilled");
  }

  useEffect(() => {
    (async function () {
      const response = await axios.get(`/orders/${orderId}`);
      const orderResponse = response.data[0];
      const products = JSON.parse(orderResponse.products).products;
      const shippingAddress = JSON.parse(orderResponse.shippingAddress);
      console.log(shippingAddress);
      setOrder({
        shippingAddress,
        products,
        isFulfilled: orderResponse.fulfilled,
      });
    })();
  }, [orderId]);

  return (
    <Segment>
      <Header as="h2" icon>
        Order Items
      </Header>
      <Form>
        <Table celled singleLine fixed>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Product Id</Table.HeaderCell>
              <Table.HeaderCell>Product Name</Table.HeaderCell>
              <Table.HeaderCell>Quantity</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {order.products?.map((product) => (
              <Table.Row key={product.id}>
                <Table.Cell>{product.id}</Table.Cell>
                <Table.Cell>{product.name}</Table.Cell>
                <Table.Cell>{product.quantity}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
        {!userType && (
          <Button primary disabled={order.isFulfilled} onClick={handleFulfill}>
            Save
          </Button>
        )}
      </Form>
      <Divider />
      <Address address={order.shippingAddress} />
    </Segment>
  );
}

export default Order;
