import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const MyClasses = () => {
  const { user } = useContext(AuthContext);
  console.log(user?.email);
  const [axiosSecure] = useAxiosSecure();
  const { data: myClasses = [] } = useQuery({
    queryKey: ["myclasses", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/myclasses/${user?.email}`);

      return res.data;
    },
  });
  console.log(myClasses);
  return (
    <div className="overflow-x-auto w-full">
      <h2>My Classes: {myClasses.length}</h2>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MyClasses;
