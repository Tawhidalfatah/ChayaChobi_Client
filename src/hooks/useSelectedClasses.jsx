import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useSelectedClasses = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data: selectedClasses = [], refetch } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const res = await axiosSecure.get(`/selectedclasses/${user?.email}`);
      return res.data;
    },
  });
  return [selectedClasses, refetch];
};

export default useSelectedClasses;
