import React from "react";
import { Table } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

const response = {
  data: {
    orders: [
      {
        id: 1,
        createDate: new Date(),
        deliverBy: new Date(),
        isFulfilled: false,
      },
      {
        id: 2,
        createDate: new Date(),
        deliverBy: new Date(),
        isFulfilled: false,
      },
      {
        id: 3,
        createDate: new Date(),
        deliverBy: new Date(),
        isFulfilled: false,
      },
      {
        id: 4,
        createDate: new Date(),
        deliverBy: new Date(),
        isFulfilled: false,
      },
      {
        id: 5,
        createDate: new Date(),
        deliverBy: new Date(),
        isFulfilled: false,
      },
      {
        id: 6,
        createDate: new Date(),
        deliverBy: new Date(),
        isFulfilled: false,
      },
      {
        id: 7,
        createDate: new Date(),
        deliverBy: new Date(),
        isFulfilled: false,
      },
    ],
  },
};

function OrderHistory() {
  const history = useHistory();
  function handleProduct(id) {
    history.push(`/orders/${id}`);
  }
  return (
    <Table celled selectable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Order Id</Table.HeaderCell>
          <Table.HeaderCell>Create Date</Table.HeaderCell>
          <Table.HeaderCell>Deliver By</Table.HeaderCell>
          <Table.HeaderCell>Fulfilled</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {response.data.orders.map((order, index) => (
          <Table.Row
            key={order.id}
            onClick={() => {
              handleProduct(order.id);
            }}
          >
            <Table.Cell>{order.id}</Table.Cell>
            <Table.Cell>{order.createDate.toDateString()}</Table.Cell>
            <Table.Cell>{order.deliverBy.toDateString()}</Table.Cell>
            <Table.Cell>Not Fulfilled</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

export default OrderHistory;
