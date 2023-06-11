const PaymentHistoryRow = ({ payment, index }) => {
  const { class_name, class_image, transactionId, price, date } = payment;
  const convertedDate = new Date(date);
  const options = { month: "long", day: "numeric", year: "numeric" };
  const readableDate = convertedDate.toLocaleDateString("en-US", options);

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={class_image} />
            </div>
          </div>
        </div>
      </td>
      <td>{class_name}</td>
      <td>{price}</td>
      <td>{readableDate}</td>
      <th>
        <td>{transactionId}</td>
      </th>
    </tr>
  );
};

export default PaymentHistoryRow;
