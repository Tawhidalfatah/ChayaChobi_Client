import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useAllInstructors = () => {
  const { data: allInstructors = [] } = useQuery({
    queryKey: ["allinstructors"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/allinstructors`
      );
      return res.data;
    },
  });
  return [allInstructors];
};

export default useAllInstructors;
