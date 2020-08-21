import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Card, Segment, Form, Button } from "semantic-ui-react";
import styled from "styled-components";
import FlexBox from "./Flexbox";
import axios from "axios";

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

const ProductInfo = styled.div`
  margin-left: 1rem;
  font-size: 1.5rem;
`;

const StyledDiv = styled.div`
  margin: 1rem 0;
`;

function Product() {
  const { productId } = useParams();
  const [stock, setStock] = useState(intialValue);
  const isCustomer = useSelector((state) => state.isCustomer);

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setStock({ ...stock, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await axios.put(`/products/${productId}`, stock);
  }
  useEffect(() => {
    (async function () {
      const response = await axios.get(`/products/${productId}`);
      setStock(response.data);
    })();
  }, [productId]);

  const tactual = (
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
          data-cy="productDescription"
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
  );

  const customer = (
    <ProductInfo>
      <StyledDiv>Product Name: {stock.name}</StyledDiv>
      <StyledDiv>Description: {stock.description}</StyledDiv>
      <FlexBox justifyContent="space-between">
        <StyledDiv>Quantity: {stock.quantity}</StyledDiv>
        <StyledDiv>Price: {stock.price}</StyledDiv>
      </FlexBox>
      <Button primary>Add to Cart</Button>
    </ProductInfo>
  );

  return (
    <Segment>
      <FlexBox flexDirection="row">
        <Card
          image="/product.jpg"
          header={stock.name}
          description={stock.description}
        />
        {isCustomer ? customer : tactual}
      </FlexBox>
    </Segment>
  );
}

export default Product;
