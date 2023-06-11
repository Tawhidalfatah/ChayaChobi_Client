import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Providers/AuthProvider";

const usePaymentHistory = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data: paymentHistories = [] } = useQuery({
    queryKey: ["payhistory", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payhistory/${user?.email}`);
      return res.data;
    },
  });
  return [paymentHistories];
};

export default usePaymentHistory;
