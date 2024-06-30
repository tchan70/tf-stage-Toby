import { useState, useEffect } from "react";
import { Orders } from "../components/orders";
import { FiltersBar } from "../components/filterBar";
import { RemoveFilter } from "../components/removeFilter";
import { OrdersContext } from "../contexts/ordersContext";
import { OrderCount } from "../utils/orderCount";
const OrdersPage = () => {
  const [filter, setFilter] = useState("");
  const [orderCount, setOrderCount] = useState(0);

  useEffect(() => {
    document.title = `(${orderCount}) My Orders`;
  }, [orderCount]);

  return (
    <OrdersContext.Provider value={[filter, setFilter]}>
      <FiltersBar />
      <RemoveFilter />
      <OrderCount setOrderCount={setOrderCount} />
      <Orders />
    </OrdersContext.Provider>
  );
};

export default OrdersPage;