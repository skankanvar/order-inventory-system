import React, { useState } from "react";
import { Form, Button, Segment } from "semantic-ui-react";
import axios from "axios";

const intialValue = {
  name: "",
  description: "",
  quantity: "",
  price: "",
};

function Stock() {
  const [stock, setStock] = useState(intialValue);

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setStock({ ...stock, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await axios.post(`/products/`, stock);
    setStock({ ...intialValue });
  }

  return (
    <Segment>
      <Form onSubmit={handleSubmit}>
        <Form.Field required>
          <label>Product Name</label>
          <input
            placeholder="Product Name"
            name="name"
            value={stock.name}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Description</label>
          <input
            placeholder="Description"
            name="description"
            value={stock.description}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Group widths="equal">
          <Form.Field required>
            <label>Quantity</label>
            <input
              type="text"
              placeholder="0"
              name="quantity"
              value={stock.quantity}
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Field required>
            <label>Price</label>
            <input
              type="text"
              placeholder="0"
              name="price"
              value={stock.price}
              onChange={handleChange}
            />
          </Form.Field>
        </Form.Group>
        <Button type="submit" primary>
          Submit
        </Button>
      </Form>
    </Segment>
  );
}

export default Stock;
