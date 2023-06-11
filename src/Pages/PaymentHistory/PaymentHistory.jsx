import PaymentHistoryRow from "../../components/PaymentHistoryRow/PaymentHistoryRow";
import usePaymentHistory from "../../hooks/usePaymentHistory";

const PaymentHistory = () => {
  const [paymentHistories] = usePaymentHistory();

  return (
    <div>
      <h2>Payment History: {paymentHistories?.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class</th>
              <th>Class Info</th>
              <th>Price</th>
              <th>Purchased date</th>
              <th>Transaction id</th>
            </tr>
          </thead>
          <tbody>
            {paymentHistories.map((payment, index) => (
              <PaymentHistoryRow
                key={payment._id}
                payment={payment}
                index={index}
              ></PaymentHistoryRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
