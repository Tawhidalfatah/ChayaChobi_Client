import { useQuery } from "@tanstack/react-query";

const Popular = () => {
  const { data: classes = [] } = useQuery({
    queryKey: ["popularclasses"],
    queryFn: async () => {
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/popularclasses`
      );
      return res.json();
    },
  });
  return (
    <div>
      <h2>Popular : {classes?.length}</h2>
    </div>
  );
};

export default Popular;
