import { useQuery } from "@tanstack/react-query";
import ShowCard from "../../components/ShowCard/ShowCard";

const Shows = () => {
  const { data: shows = [], isLoading: loading } = useQuery({
    queryKey: ["shows"],
    queryFn: async () => {
      const res = await fetch("https://api.tvmaze.com/search/shows?q=all");
      return res.json();
    },
  });

  return (
    <div className="mx-6">
      <h1 className="text-5xl font-semibold my-4">Shows</h1>
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {shows?.map((show, index) => (
          <ShowCard key={index} show={show}></ShowCard>
        ))}
      </div>
    </div>
  );
};

export default Shows;
