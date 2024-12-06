import axios from "axios";
import OrderItem from "../components/OrderItem";
import { useUserIDContext } from "../components/Context";

function Order() {
  const { UserID } = useUserIDContext();
  console.log(UserID);
  const CheckoutHandler = async ({ name, amount }) => {
    try {
      const {
        data: { createOrder },
      } = await axios.post("http://localhost:8080/api/payment/checkout", {
        name,
        amount: "440",
        userId: UserID,
      });
      console.log({ createOrder });

      var options = {
        key: "rzp_test_a7JVRRNBkx0D4w", // Enter the Key ID generated from the Dashboard
        amount: createOrder.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "Mitesh Dixit",
        description: "Test Transaction",
        image: "https://images.app.goo.gl/51qG8knarW6QtfdZA",
        order_id: createOrder.order_id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        callback_url: "http://localhost:8080/api/payment/checkout-verification",
        prefill: {
          name: "Gaurav Kumar",
          email: "gaurav.kumar@example.com",
          contact: "9000090000",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      var rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error("Payment failed", error);
    }
  };

  return (
    <div>
      <OrderItem onCheckout={CheckoutHandler} />
    </div>
  );
}

export default Order;
