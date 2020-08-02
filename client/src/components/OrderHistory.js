import React, { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function OrderHistory() {
  const [orders, setOrders] = useState([]);
  const history = useHistory();
  function handleProduct(id) {
    history.push(`/orders/${id}`);
  }

  useEffect(() => {
    (async function () {
      const response = await axios.get("/orders");
      setOrders(response.data);
    })();
  }, []);

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
        {orders.map((order, index) => (
          <Table.Row
            key={order.id}
            onClick={() => {
              handleProduct(order.id);
            }}
          >
            <Table.Cell>{order.id}</Table.Cell>
            <Table.Cell>{order.createDate}</Table.Cell>
            <Table.Cell>{order.deliverBy}</Table.Cell>
            <Table.Cell>
              {order.fulfilled ? "Fulfilled" : "Not Filfilled"}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

export default OrderHistory;
