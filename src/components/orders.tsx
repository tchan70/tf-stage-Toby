import { useFilteredOrders } from "../utils/orderFilter";
import "./orders.css";
import StatusLabel from "../utils/statusLabel";

export const Orders = () => {
  const filteredOrders = useFilteredOrders();

  return (
    <>
      <div className="orderContainer">
        {filteredOrders.map((order) => (
          <div className="orderBox" key={order.id}>
            <div>{order.productName}</div>
            <div className="orderDetails">
              <div>
                Order Date
                <br />
                {order.formattedDate}
              </div>
              <div>
                Order Status
                <br />
                <StatusLabel status={order.orderStatus} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};