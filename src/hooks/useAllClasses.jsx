import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useAllClasses = () => {
  const { data: approvedClasses } = useQuery({
    queryKey: ["approvedclasses"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/approvedclasses`
      );
      return res.data;
    },
  });
  return [approvedClasses];
};

export default useAllClasses;
