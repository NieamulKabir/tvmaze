import { useQuery } from "@tanstack/react-query";

import { useParams } from "react-router-dom";

const ShowDetails = () => {
  const { id } = useParams();

  const { data: show = {}} = useQuery({
    queryKey: ["show"],
    queryFn: async () => {
      const res = await fetch("https://api.tvmaze.com/search/shows?q=all");
      const allShow = await res.json();
      const data = allShow?.map((item) => item?.show);
      const sortedData = data?.find((i) => i.id == id);
      return sortedData;
    },
  });

 
  const {
    image,
    name,
    summary,
    network,
    type,
    runtime,
    premiered,
    ended,
    schedule,
    status,
    genres,
    officialSite,
    rating,
  } = show;
  return (
    <div className="mt-16 w-[90%] mx-auto pt-20 text-black lg:flex">
      <div className="hero min-h-screen bg-gray-300 rounded-xl">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image?.medium} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <p className="">
              <b className="text-lg">{name}</b> {summary}
            </p>
            <button className="btn bg-gray-800 hover:bg-gray-600 justify-start bottom-0 text-white mt-3">
              {" "}
              Book A Movie Ticket
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="card mt-3 ml-3 bg-gray-300 text-black">
          <div className="card-body px-4">
            <h2 className="text-left text-xl">Show Info,</h2>
            <div>
              <p>
                <b className=""> Network:</b>
                <span className="text-[#33b0a4] mr-1"> {network?.name}.</span>(
                {premiered?.slice(0, 4)}-{ended?.slice(0, 4)})
              </p>
              <p>
                <b>Schedule:</b>
                {schedule?.days[0]} at {schedule?.time} ({runtime}mins)
              </p>
              <p>
                <b>Status:</b>
                {status}{" "}
              </p>
              <p>
                <b>Show Type:</b>
                {type}{" "}
              </p>
              <p>
                <b>Genres:</b>
                {genres}{" "}
              </p>
              <p>
                <b className="pr-3">Official-site:</b>
                {officialSite}{" "}
              </p>
              <p>
                <b>Ratting:</b>
                {rating?.average}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
