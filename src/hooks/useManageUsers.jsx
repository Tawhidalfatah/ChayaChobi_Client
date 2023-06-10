import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useManageUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { loading } = useContext(AuthContext);
  const {
    refetch,
    data: allUsers = [],
    isLoading: isUsersLoading,
  } = useQuery({
    queryKey: ["allusers"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get("/allusers");
      return res.data;
    },
  });
  return [allUsers, isUsersLoading, refetch];
};

export default useManageUsers;
