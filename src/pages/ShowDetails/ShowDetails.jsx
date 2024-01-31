import { useQuery } from "@tanstack/react-query";

import { useParams } from "react-router-dom";

const ShowDetails = () => {
  const { id } = useParams();

  const { data: show = {}, isLoading: loading } = useQuery({
    queryKey: ["show"],
    queryFn: async () => {
      const res = await fetch("https://api.tvmaze.com/search/shows?q=all");
      const allShow = await res.json();
      const data = allShow?.map((item) => item?.show);
      const sortedData = data?.find((i) => i.id == id);
      return sortedData;
    },
  });

  console.log(show);
  return (
    <div className="mt-16 w-4/6 mx-auto">
      <h1>{show.name}</h1>
    </div>
  );
};

export default ShowDetails;
