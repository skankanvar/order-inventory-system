import React, { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Inventory() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async function () {
      const response = await axios.get("/products");
      setProducts(response.data);
    })();
  }, []);
  const history = useHistory();
  function handleProduct(id) {
    history.push(`/products/${id}`);
  }
  return (
    <Table celled selectable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>#</Table.HeaderCell>
          <Table.HeaderCell>Product Name</Table.HeaderCell>
          <Table.HeaderCell>Description</Table.HeaderCell>
          <Table.HeaderCell>Price</Table.HeaderCell>
          <Table.HeaderCell>Quantity</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {products.map((product, index) => (
          <Table.Row className="pro"
            key={product.id}
            onClick={() => {
              handleProduct(product.id);
            }}
          >
            <Table.Cell>{index + 1}</Table.Cell>
            <Table.Cell>{product.name}</Table.Cell>
            <Table.Cell>{product.description}</Table.Cell>
            <Table.Cell>{product.price}</Table.Cell>
            <Table.Cell>{product.quantity}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

export default Inventory;
