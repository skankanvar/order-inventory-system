import React from "react";
import { Table } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

const response = {
  data: {
    products: [
      {
        id: 1,
        productName: "Television",
        description: "Viewing device",
        price: "99.00",
        quatity: "10",
      },
      {
        id: 2,
        productName: "Sensor",
        description: "Sound Sensor",
        price: "99.00",
        quatity: "10",
      },
      {
        id: 3,
        productName: "Sensor",
        description: "Sound Sensor",
        price: "99.00",
        quatity: "10",
      },
      {
        id: 4,
        productName: "Sensor",
        description: "Sound Sensor",
        price: "99.00",
        quatity: "10",
      },
      {
        id: 5,
        productName: "Sensor",
        description: "Sound Sensor",
        price: "99.00",
        quatity: "10",
      },
      {
        id: 6,
        productName: "Sensor",
        description: "Sound Sensor",
        price: "99.00",
        quatity: "10",
      },
      {
        id: 7,
        productName: "Sensor",
        description: "Sound Sensor",
        price: "99.00",
        quatity: "10",
      },
    ],
  },
};

function Inventory() {
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
        {response.data.products.map((product, index) => (
          <Table.Row
            key={product.id}
            onClick={() => {
              handleProduct(product.id);
            }}
          >
            <Table.Cell>{index + 1}</Table.Cell>
            <Table.Cell>{product.productName}</Table.Cell>
            <Table.Cell>{product.description}</Table.Cell>
            <Table.Cell>{product.price}</Table.Cell>
            <Table.Cell>{product.quatity}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

export default Inventory;
