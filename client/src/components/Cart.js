import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Segment, Header, List, Form, Button } from "semantic-ui-react";
import styled from "styled-components";

const Delete = styled(Form.Input)`
  &&&&& input {
    border: 0;
    color: #0066c0;
    cursor: pointer;
    margin: 0;
    padding: 0;
  }
`;

const options = [
  { key: 1, text: "1", value: 1 },
  { key: 2, text: "2", value: 2 },
  { key: 3, text: "3", value: 3 },
];

const Cart = () => {
  const [cart, setCart] = useState([]);
  const userId = useSelector((state) => {
    return state.id;
  });

  useEffect(() => {
    axios.get(`/cart/users/${userId}`).then(({ data }) => {
      setCart(data);
    });
  }, [userId]);

  async function handleDelete(id) {
    const message = await axios.delete(`/cart/${id}`);
    if (message) {
      setCart((oldCart) => oldCart.filter((item) => item.id !== id));
    }
  }

  async function handleChange(id, data) {
    await axios.put(`/cart/${id}`, { quantity: data.value });
    setCart((oldCart) =>
      oldCart.map((item) => {
        if (item.id === id) {
          item.quantity = data.value;
        }
        return item;
      })
    );
  }

  return (
    <Segment>
      <Header as="h1">Shopping Cart</Header>
      <Form>
        <List divided relaxed>
          {cart.map((item) => (
            <List.Item key={item.id}>
              <List.Icon name="github" size="large" verticalAlign="middle" />
              <List.Content>
                <List.Header as="a">{item.name}</List.Header>
                <List.Description as="a">{item.description}</List.Description>
                <Form.Group>
                  <Form.Dropdown
                    options={options}
                    placeholder="Qty"
                    value={item.quantity}
                    onChange={(e, data) => handleChange(item.id, data)}
                  />
                  <Delete
                    onClick={(e) => handleDelete(item.id)}
                    value="Delete"
                  />
                </Form.Group>
              </List.Content>
            </List.Item>
          ))}
        </List>
        <Button primary type="submit">
          Submit Order
        </Button>
      </Form>
    </Segment>
  );
};

export default Cart;
