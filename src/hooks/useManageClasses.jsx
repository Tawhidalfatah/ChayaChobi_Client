import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useManageClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: allclasses, refetch } = useQuery({
    queryKey: ["allclasses"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allclasses");
      return res.data;
    },
  });
  return [allclasses, refetch];
};

export default useManageClasses;
