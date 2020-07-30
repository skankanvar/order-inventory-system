import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Segment, Form, Button } from "semantic-ui-react";
import styled from "styled-components";
import FlexBox from "./Flexbox";

const intialValue = {
  name: "",
  description: "",
  quantity: "",
  price: "",
};

const StyledForm = styled(Form)`
  &&&& {
    margin-left: 1rem;
  }
`;

function Product() {
  const { productId } = useParams();
  const [stock, setStock] = useState(intialValue);

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    console.log(stock);
    setStock({ ...stock, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(stock);
    setStock({ ...intialValue });
  }
  useEffect(() => {
    console.log(productId);
  }, [productId]);
  return (
    <Segment>
      <FlexBox flexDirection="row">
        <Card
          image="/product.jpg"
          header="Product Name"
          description="This is the product information"
        />
        <StyledForm onSubmit={handleSubmit}>
          <Form.Field>
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
            <Form.Field>
              <label>Quantity</label>
              <input
                type="text"
                placeholder="0"
                name="quantity"
                value={stock.quantity}
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Field>
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
            Edit Product
          </Button>
        </StyledForm>
      </FlexBox>
    </Segment>
  );
}

export default Product;
