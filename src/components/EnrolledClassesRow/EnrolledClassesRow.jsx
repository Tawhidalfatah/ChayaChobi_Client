const EnrolledClassesRow = ({ cls, index }) => {
  const { instructor_name, instructor_email, class_name, class_image } = cls;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={class_image} alt={class_name} />
            </div>
          </div>
          <div>
            <div className="font-bold">{instructor_name}</div>
          </div>
        </div>
      </td>
      <td>
        {class_name}
        <br />
        <span className="badge badge-ghost badge-sm">{instructor_email}</span>
      </td>
    </tr>
  );
};

export default EnrolledClassesRow;
