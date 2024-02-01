import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ShowDetailsCard from "../../components/ShowDetailsCard/ShowDetailsCard";

const ShowDetails = () => {
  const { showId } = useParams();
  const [show, setShow] = useState({});

  //load single data
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res?.json())
      .then((result) => {
        const data = result?.map((item) => item?.show);
        const sortedData = data?.find((i) => i.id == showId);
        setShow(sortedData);
      });
  }, [showId]);

  return (
    <div className="my-10  min-h-screen">
      <h1 className="mt-16 w-[90%] mx-auto py-6 text-4xl font-bold">
        Show Details - <span className="text-[#38b6aa]">{name}</span>
      </h1>
      <ShowDetailsCard show={show} />
    </div>
  );
};

export default ShowDetails;
