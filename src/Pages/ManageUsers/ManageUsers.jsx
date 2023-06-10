import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import placeholder from "../../assets/placeholder.png";

const ManageUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { loading } = useContext(AuthContext);
  const { data: allUsers = [], isLoading: isUsersLoading } = useQuery({
    queryKey: ["allusers"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get("/allusers");
      return res.data;
    },
  });
  console.log(allUsers);
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
                  <button className="btn btn-ghost btn-xs">Instructor</button>
                  <button className="btn btn-ghost btn-xs">Admin</button>
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
