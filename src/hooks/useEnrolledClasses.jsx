import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useEnrolledClasses = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data: enrolledClasses = [] } = useQuery({
    queryKey: ["enrolledclasses", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/enrolledclasses/${user?.email}`);
      return res.data;
    },
  });
  return [enrolledClasses];
};

export default useEnrolledClasses;
