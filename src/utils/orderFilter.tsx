import { useEffect, useState, useContext } from "react";
import { OrdersContext } from "../contexts/ordersContext";
import ordersData from "../orders.json";
import { formatDate } from "./dateFormatter";

interface Order {
  id: string;
  productName: string;
  dateOrdered: string;
  orderStatus: string;
  formattedDate?: string;
}

export const useFilteredOrders = (): Order[] => {
  const [filter] = useContext(OrdersContext);
  const [filteredOrders, setFilteredOrders] = useState<Order[]>([]);

  const orderStatusFilter = (orders: Order[], orderStatus: string): Order[] => {
    return orders.filter((order) => order.orderStatus === orderStatus);
  };

  useEffect(() => {
    let filtered: Order[];
    if (filter === "") {
      filtered = ordersData;
    } 

    else {
      filtered = orderStatusFilter(ordersData, filter);
    }

    const processedOrders = filtered.map(order => ({
      ...order,
      formattedDate: formatDate(order.dateOrdered),
    }));

    setFilteredOrders(processedOrders);
  }, [filter]);

  return filteredOrders;
};