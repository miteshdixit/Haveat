import  { useEffect, useState } from 'react';
import axios from 'axios';
import { useUserIDContext } from './Context';

const History = () => {
  const { UserID } = useUserIDContext();
  const userId = UserID;
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log(userId)
  // Function to fetch order history by user ID
  const fetchOrderHistory = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/history/order/${userId}`);
      return response.data.orders;
    } catch (error) {
      console.error('Error fetching order history:', error);
      throw error; 
    }
  };

  useEffect(() => {
    const loadOrders = async () => {
      try {
        const orders = await fetchOrderHistory(userId);
        setOrders(orders);
      } catch (err) {
        setError('Failed to fetch order history.');
      } finally {
        setLoading(false);
      }
    };

    loadOrders();
  }, [userId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  console.log(orders)
  return (
    <div>
      <h2>Order History</h2>
      {orders.length > 0 ? (
        <ul>
          {orders.map(order => (
            <li key={order._id}>
              Order ID: {order.order_id} - Amount: {order.amount} - Status: {order.status}
            </li>
          ))}
        </ul>
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};

export default History;
