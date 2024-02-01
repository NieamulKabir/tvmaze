import { useQuery } from "@tanstack/react-query";

import { useParams } from "react-router-dom";

const ShowDetails = () => {
  const { id } = useParams();

  const { data: show = {} } = useQuery({
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

  // booking functionality
  const handleBook = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const schedule = form.schedule.value;
    const status = form.status.value;
    const rating = form.rating.value;

    const bookTicket = {
      name,
      schedule,
      status,
      rating,
    };

    console.log(bookTicket);
  };

  const defaultSchedule = schedule
    ? `${schedule.days[0]} at ${schedule.time}`
    : "";

  return (
    <div>
      <h1 className="mt-16 w-[90%] mx-auto py-6 text-4xl font-bold">Show Details - <span className="text-[#38b6aa]">{name}</span></h1>
      <div className="w-[90%] mx-auto  text-black lg:flex">
        <div className="hero min-h-screen bg-gray-300 rounded-xl">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={image?.medium}
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <p className="">
                <b className="text-lg">{name}</b> {summary}
              </p>
              {/* booking ticket form using a modal  */}
              <form onSubmit={handleBook}>
                <div className="card-actions justify-end">
                  {/* The button to open modal */}

                  {/* Put this part before </body> tag */}
                  <input
                    type="checkbox"
                    id="my-modal-6"
                    className="modal-toggle"
                  />
                  <div className="modal modal-bottom sm:modal-middle text-black">
                    <div className="modal-box relative md:mr-44 bg-gray-800 text-black">
                      <input
                        name="name"
                        type="text"
                        defaultValue={name}
                        placeholder="Movie Name"
                        className="input w-full input-bordered my-1 text-black font-semibold"
                        required
                      />
                      <input
                        name="schedule"
                        type="schedule"
                        defaultValue={defaultSchedule}
                        placeholder="schedule"
                        className="input w-full input-bordered my-1 "
                      />
                      <br />
                      <input
                        name="rating"
                        type="rating"
                        defaultValue={rating?.average}
                        placeholder="rating"
                        className="input w-full input-bordered my-1 "
                      />
                      <br />
                      <input
                        name="status"
                        type="status"
                        defaultValue={status}
                        placeholder="status"
                        className="input w-full input-bordered my-1 "
                      />
                      <br />
                      <input
                        className="btn w-[40%] absolute right-[30%] mt-4"
                        type="submit"
                        value="Submit"
                      />{" "}
                      <br />
                      <div className="modal-action mb-4">
                        <label
                          htmlFor="my-modal-6"
                          className="btn btn-sm btn-circle absolute right-2 top-2 "
                        >
                          ✕
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4 mr-4 ">
                    <label
                      htmlFor="my-modal-6"
                      className="btn bg-gray-800 hover:bg-gray-600 text-white flex  mt-10"
                    >
                      Book Ticket
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div>
          {/* show information  */}
          <div className="card mt-3 ml-3 bg-gray-300 text-black">
            <div className="card-body px-4">
              <h2 className="text-left text-xl">Show Info,</h2>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
