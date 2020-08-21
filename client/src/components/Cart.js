import React from "react";
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

const response = {
  data: [
    {
      id: "1",
      name: "Microphone",
      description: "This is a description",
      quantity: "10",
      price: "15",
    },
    {
      id: "2",
      name: "Sound Sensor",
      description: "This is a sound sensor description",
      quantity: "10",
      price: "15",
    },
  ],
};

const Cart = () => {
  return (
    <Segment>
      <Header as="h1">Shopping Cart</Header>
      <Form>
        <List divided relaxed>
          {response.data.map((item) => (
            <List.Item key={item.id}>
              <List.Icon name="github" size="large" verticalAlign="middle" />
              <List.Content>
                <List.Header as="a">{item.name}</List.Header>
                <List.Description as="a">{item.description}</List.Description>
                <Form.Group>
                  <Form.Dropdown options={options} placeholder="Qty" />
                  <Delete type="submit" value="Delete" />
                </Form.Group>
              </List.Content>
            </List.Item>
          ))}
        </List>
        <Button primary>Submit Order</Button>
      </Form>
    </Segment>
  );
};

export default Cart;
