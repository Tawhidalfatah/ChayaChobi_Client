import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useMyClasses = () => {
  const { user, loading } = useContext(AuthContext);

  const [axiosSecure] = useAxiosSecure();
  const { data: myClasses = [], refetch } = useQuery({
    queryKey: ["myclasses", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/myclasses/${user?.email}`);

      return res.data;
    },
  });
  return [myClasses, refetch];
};

export default useMyClasses;
