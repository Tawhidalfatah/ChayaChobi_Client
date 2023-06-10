import { toast } from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useManageClasses from "../../hooks/useManageClasses";

const ManageClassesRow = ({ cls, index, handleSendFeedback }) => {
  const [axiosSecure] = useAxiosSecure();
  const [, refetch] = useManageClasses();
  const handleApprove = (id) => {
    axiosSecure.patch(`/class/approve/${id}`).then((res) => {
      if (res.data.modifiedCount) {
        toast.success("Class approved");
        refetch();
      }
    });
  };
  const handleDeny = (id) => {
    axiosSecure.patch(`/class/deny/${id}`).then((res) => {
      if (res.data.modifiedCount) {
        toast.success("Class Denied");
        refetch();
      }
    });
  };
  return (
    <tr key={cls._id}>
      <th>{index + 1}</th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={cls.class_image} alt={cls.class_name} />
            </div>
          </div>

          <div className="font-bold">{cls.class_name}</div>
        </div>
      </td>
      <td>
        {cls.instructor_name}
        <br />
        <span className="badge badge-ghost badge-sm">
          {cls.instructor_email}
        </span>
      </td>
      <td>{cls.available_seats}</td>
      <td>{cls.price}</td>
      <td>{cls.status}</td>
      <td>
        <button
          disabled={cls.status === "approved" || cls.status === "denied"}
          onClick={() => handleApprove(cls._id)}
          className="btn btn-ghost btn-xs"
        >
          Approve
        </button>
        <button
          disabled={cls.status === "approved" || cls.status === "denied"}
          onClick={() => handleDeny(cls._id)}
          className="btn btn-ghost btn-xs"
        >
          Deny
        </button>
        <button
          onClick={() => handleSendFeedback(cls)}
          className="btn btn-ghost btn-xs"
        >
          Send Feedback
        </button>
      </td>
    </tr>
  );
};

export default ManageClassesRow;
