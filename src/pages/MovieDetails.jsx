import axios from "axios";
import { useEffect, useState } from "react";
import { PlayIcon, SaveIcon } from "@heroicons/react/solid";
import { useParams } from "react-router";

const MovieDetails = () => {
  const tokenApi = "55f8ec93";
  let { id } = useParams();
  var idmovie = id;
  const baseUrl =
    "http://www.omdbapi.com/?i=" + idmovie + "&apikey=" + tokenApi;
  const [movie, setMovie] = useState("");

  useEffect(() => {
    const getByIdRequest = async () => {
      try {
        const response = await axios.get(baseUrl);
        setMovie(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getByIdRequest();
  }, [baseUrl]);

  return (
    <div>
      <div className="flex flex-wrap overflow-hidden">
        <div className="w-full overflow-hidden flex justify-center py-5">
          <p className="text-xl font-bold">{movie.Title}</p>
        </div>
      </div>
      <div className="flex flex-wrap -mx-4 overflow-hidden sm:-mx-4 md:-mx-4 lg:-mx-4 xl:-mx-4 justify-center py-5">
        <div className="my-4 px-4 w-1/2 overflow-hidden sm:my-4 sm:px-4 sm:w-1/2 md:my-4 md:px-4 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2 xl:my-4 xl:px-4 xl:w-1/2 flex justify-center">
          <img src={movie.Poster} alt="" />
        </div>

        <div className="my-4 px-4 w-1/2 overflow-hidden sm:my-4 sm:px-4 sm:w-1/2 md:my-4 md:px-4 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2 xl:my-4 xl:px-4 xl:w-1/2">
          <ul className="leading-10">
            <li>
              <span className="font-bold pr-4">Title:</span> {movie.Title}
            </li>
            <li>
              <span className="font-bold pr-4">Year:</span> {movie.Year}
            </li>
            <li>
              <span className="font-bold pr-4">Rated:</span> {movie.Rated}
            </li>
            <li>
              <span className="font-bold pr-4">Released:</span> {movie.Released}
            </li>
            <li>
              <span className="font-bold pr-4">Runtime:</span> {movie.Runtime}
            </li>
            <li>
              <span className="font-bold pr-4">Genre:</span> {movie.Genre}
            </li>
            <li>
              <span className="font-bold pr-4">Director:</span> {movie.Director}
            </li>
            <li>
              <span className="font-bold pr-4">Actors</span>
              <br />
              {movie.Actors}
            </li>
            <li>
              <span className="font-bold pr-4">Language:</span> {movie.Language}
            </li>
            <li>{movie.imdbID}</li>
          </ul>
          <div className="my-4 py-4">
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mr-5 rounded inline-flex items-center">
              <SaveIcon className="w-4 h-4 mr-2 text-black" />
              <span>Save</span>
            </button>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
              <PlayIcon className="w-4 h-4 mr-2 text-black" />
              <span>Play</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
