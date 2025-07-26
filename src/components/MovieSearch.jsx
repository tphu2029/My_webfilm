import { useContext } from "react";
import PropTypes from "prop-types";
import { MovieContext } from "../context/MovieProvider";

const MovieSearch = ({ title, data }) => {
  const { handleTrailer } = useContext(MovieContext);

  return (
    <div className="text-white p-10 mb-10">
      <h2 className="uppercase text-xl mb-4 ">{title}</h2>
      <div className="grid gap-4 grid-cols-2  sm:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 ">
        {data &&
          data.map((item) => (
            <div
              key={item.id}
              className="w-[200px] h-[300px] relative group"
              onClick={() => handleTrailer(item.id)}
            >
              <div className="w-full h-full group-hover:scale-105 transition-transform duration-500 cursor-pointer">
                <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt={item.title}
                  className="h-full w-full object-cover "
                />
                <div className="absolute bottom-4 left-2">
                  <h3 className="uppercase text-md ">
                    {item.title || item.original_title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

MovieSearch.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default MovieSearch;
