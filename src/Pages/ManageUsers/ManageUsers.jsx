import { toast } from "react-hot-toast";
import placeholder from "../../assets/placeholder.png";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useManageUsers from "../../hooks/useManageUsers";

const ManageUsers = () => {
  const [allUsers, , refetch] = useManageUsers();
  const [axiosSecure] = useAxiosSecure();
  console.log(allUsers);

  const handleMakeAdmin = (email, user) => {
    axiosSecure.patch(`/user/admin/${email}`).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        toast.success(`${user} is an Admin now`);
      }
    });
  };
  const handleMakeInstructor = (email, user) => {
    axiosSecure.patch(`/user/instructor/${email}`).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        toast.success(`${user} is an Instructor now`);
      }
    });
  };
  return (
    <div>
      <h2>Manage Users {allUsers.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Avatar</th>
              <th>User Info</th>
              <th>Role</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {allUsers.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={user?.photo ? user.photo : placeholder}
                          alt={`User: ${user.name}`}
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {user?.name}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {user?.email}
                  </span>
                </td>
                <td>{user?.role}</td>
                <th>
                  <button
                    onClick={() => handleMakeInstructor(user.email, user.name)}
                    disabled={
                      user?.role === "instructor" || user?.role === "admin"
                    }
                    className="btn btn-ghost btn-xs"
                  >
                    Instructor
                  </button>
                  <button
                    onClick={() => handleMakeAdmin(user.email, user.name)}
                    disabled={user?.role === "admin"}
                    className="btn btn-ghost btn-xs"
                  >
                    Admin
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
