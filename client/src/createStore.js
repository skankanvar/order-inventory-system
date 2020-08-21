import { createStore } from "redux";

const reducer = (state = {}, action) => {
  if (action.type === "SET_USER") {
    return action.user;
  }
  return { isCustomer: true, id: "12345" };
};

const store = createStore(reducer);

export default store;
