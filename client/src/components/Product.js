import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  Card,
  Segment,
  Form,
  Button,
  TextArea,
  Divider,
  List,
  Header,
} from "semantic-ui-react";
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
  const [enhancements, setEnchancements] = useState([]);
  const [enhancement, setEnhancement] = useState("");
  const isCustomer = useSelector((state) => state.isCustomer);
  const userId = useSelector((state) => state.id);
  const [buttonType, setButtonType] = useState("");

  function handleChange(e, data) {
    const name = e.target.name;
    const value = e.target.value;
    if (data) {
      setEnhancement(data.value);
    } else {
      setStock({ ...stock, [name]: value });
    }
  }

  async function handleSubmit(e) {
    const id = e.target.id;
    e.preventDefault();

    if (buttonType === "edit") {
      await axios.put(`/products/${productId}`, stock);
      alert("Product is edited");
    }
    if (buttonType === "delete") {
      await axios.delete(`/products/${productId}`);
      alert("Product is deleted");
    }
   
    // console.log(id);
    // if(id === "editproduct"){
    //   await axios.put(`/products/${productId}`, stock);
    //   alert("Product is edited");
    // }
    // if(id === "deleteproduct"){
    //   await axios.delete(`/products/${productId}`);
    //   alert("Product is deleted");
    // }
  
  }

  async function submitEnhacement() {
    await axios.post(`/enhancement/products/${productId}`, { enhancement });
    setEnhancement("");
    alert("Enhancement Submitted");
  }

  async function addToCart() {
    await axios.post(`/cart/users/${userId}`, {
      quantity: 1,
      productId: stock.id,
    });
    alert("Item added to cart");
  }

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(`/products/${productId}`);
        setStock(response.data);
        const enhancementResponse = await axios.get(
          `/enhancement/products/${productId}`
        );
        setEnchancements(enhancementResponse.data);
      } catch (e) {
        console.error(e);
      }
    })();
  }, [productId]);

  const tactual = (
    <div>
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
            id="description"
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
        <Button type="submit"  onClick={() => setButtonType("edit")} primary id="editproduct">
          Edit Product
        </Button>
        <Button type="submit"  onClick={() => setButtonType("delete")} primary id="deleteproduct">
          Delete Product
        </Button>
        <div>
          {enhancements.length > 0 && (
            <div>
              <Divider />
              <Header as="h3" content="Enhancement Request" />
              <List bulleted>
                {enhancements.map((enhancement) => (
                  <List.Item key={enhancement.id}>
                    {enhancement.enhancement}
                  </List.Item>
                ))}
              </List>
            </div>
          )}
        </div>
      </StyledForm>
    </div>
  );

  const customer = (
    <ProductInfo>
      <StyledDiv>Product Name: {stock.name}</StyledDiv>
      <StyledDiv>Description: {stock.description}</StyledDiv>
      <FlexBox justifyContent="space-between">
        <StyledDiv>Quantity: {stock.quantity}</StyledDiv>
        <StyledDiv>Price: {stock.price}</StyledDiv>
      </FlexBox>
      <Button primary onClick={addToCart}>
        Add to Cart
      </Button>
      <Divider />
      <Form>
        <TextArea
          placeholder="Submit Enhancement Request"
          value={enhancement}
          onChange={handleChange}
        />
        <StyledDiv>
          <Button primary onClick={submitEnhacement}>
            Submit
          </Button>
        </StyledDiv>
      </Form>
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
