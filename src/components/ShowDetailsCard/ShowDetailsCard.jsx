/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import ShowDetailsSidebar from "../ShowDetailsSidebar/ShowDetailsSidebar";

const ShowDetailsCard = ({ show }) => {
  const {
    id,
    image,
    name,
    summary,

    schedule,
    status,

    rating,
  } = show;

  const { register, handleSubmit, reset } = useForm();
  // booking functionality
  const onSubmit = (data) => {
    const bookTicket = {
      id,
      userName: data.name,
      email: data.email,
      name,
      schedule,
      status,
      rating,
    };

    // Retrieve existing tickets from local storage
    const tickets = JSON.parse(localStorage.getItem("tickets")) || [];
    if (tickets.length > 0) {
      const isExist = tickets.find((b) => b.id === id);
      console.log(isExist);
      if (isExist) {
        toast.error("Already Booked");
        return;
      } else {
        localStorage.setItem(
          "tickets",
          JSON.stringify([...tickets, bookTicket])
        );
      }
    } else {
      // If there are no existing tickets, simply add the new ticket to the local storage
      localStorage.setItem("tickets", JSON.stringify([bookTicket]));
    }
    toast.success("Ticket successfully Booked...");
  };

  const defaultSchedule = schedule
    ? `${schedule?.days[0]} at ${schedule?.time}`
    : "";

  return (
    <div>
      <div className="w-[90%] mx-auto  text-black lg:flex">
        <div className=" bg-gray-300 rounded-xl">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={image?.medium}
              className=" rounded-lg shadow-2xl w-full h-full lg:w-1/2"
            />
            <div>
              <p className="">
                <b className="text-lg">{name}</b> {summary}
              </p>
              {/* booking ticket form using a modal  */}
              <form
                onSubmit={handleSubmit((data) => {
                  onSubmit(data);
                  reset();
                })}
              >
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
                        {...register("name")}
                        name="name"
                        type="name"
                        placeholder="User Name"
                        className="input w-full input-bordered my-1 text-black font-semibold"
                        required
                      />
                      <input
                        {...register("email")}
                        name="email"
                        type="email"
                        placeholder="Enter Your Email"
                        className="input w-full input-bordered my-1 text-black font-semibold"
                        required
                      />
                      <input
                        {...register("movieId")}
                        name="movieId"
                        type="text"
                        defaultValue={id}
                        className="input w-full input-bordered my-1 text-black font-semibold"
                        required
                      />
                      <input
                        {...register("movieName")}
                        name="movieName"
                        type="text"
                        defaultValue={name}
                        className="input w-full input-bordered my-1 text-black font-semibold"
                        required
                      />
                      <input
                        {...register("schedule")}
                        name="schedule"
                        type="schedule"
                        defaultValue={defaultSchedule}
                        className="input w-full input-bordered my-1 "
                      />
                      <br />
                      <input
                        {...register("rating")}
                        name="rating"
                        type="rating"
                        defaultValue={rating?.average}
                        className="input w-full input-bordered my-1 "
                      />
                      <br />
                      <input
                        {...register("status")}
                        name="status"
                        type="status"
                        defaultValue={status}
                        className="input w-full input-bordered my-1 "
                      />
                      <br />
                      <input
                        className="btn w-[40%] absolute right-[30%] mt-4"
                        type="submit"
                        value="Book"
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
              <ShowDetailsSidebar show={show} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowDetailsCard;
