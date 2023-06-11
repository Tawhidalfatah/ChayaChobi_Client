import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useSelectedClasses from "../../hooks/useSelectedClasses";
import { Link } from "react-router-dom";

const SelectedClassRow = ({ selectedClass }) => {
  const { _id, class_name, class_image, price, instructor_name } =
    selectedClass;
  const [axiosSecure] = useAxiosSecure();
  const [, refetch] = useSelectedClasses();
  const handleDeleteSelectedClass = () => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "Selected class may not be available later.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Remove",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/selectedclass/${_id}`)
          .then((res) => {
            console.log(res.data);
            if (res.data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your selected class has been removed.",
                "success"
              );
            }
            refetch();
          })
          .catch((err) => console.log(err));
      }
    });
  };
  return (
    <tr>
      <th>1</th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={class_image} alt={class_name} />
            </div>
          </div>
        </div>
      </td>
      <td>
        {class_name}
        <br />
        <span className="badge badge-ghost badge-sm">{instructor_name}</span>
      </td>
      <td>{price}</td>
      <th>
        <button
          onClick={handleDeleteSelectedClass}
          className="btn btn-ghost btn-xs"
        >
          delete
        </button>
        <Link to={`/payment/${_id}`}>
          <button className="btn btn-ghost btn-xs">pay</button>
        </Link>
      </th>
    </tr>
  );
};

export default SelectedClassRow;
