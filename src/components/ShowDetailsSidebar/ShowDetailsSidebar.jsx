/* eslint-disable react/prop-types */


const ShowDetailsSidebar = ({show}) => {
    const {
       
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
        <div>
            <div>
                <p>
                  <b className=""> Network:</b>
                  <span className="text-[#33b0a4] mr-1"> {network?.name}.</span>
                  ({premiered?.slice(0, 4)}-{ended?.slice(0, 4)})
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
    );
};

export default ShowDetailsSidebar;