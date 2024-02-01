/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ShowCard = ({ show }) => {

  const { id, name, type, image ,language} = show.show;

  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-103  duration-300 ...">
        <figure>
          <img
            className="bg-cover h-[300px] w-full "
            src={image?.medium}
            alt="tv-show image"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className=" font-medium"> <b>Type:</b> <span className="text-[#35a79b]">{type}</span></p>
          <p className=" font-medium"> <b>Language:</b> <span className="text-[#35a79b]">{language}</span></p>
          
          <div className="card-actions justify-end">
            <NavLink to={`/shows/${id}`}>
              <button className="btn bg-gray-800 text-white hover:bg-gray-700">
                Show Details
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCard;
