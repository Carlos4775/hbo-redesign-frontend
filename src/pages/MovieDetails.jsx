import { ArrowLeftIcon, PlayIcon, SaveIcon } from "@heroicons/react/solid";
import { React, useEffect, useState } from "react";

import Cookies from "universal-cookie";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";

const MovieDetails = () => {
  const [data, setData] = useState([]);
  const [movie, setMovie] = useState("");
  const [movieListItem, setMovieListItem] = useState({
    id: "",
    imdbID: "",
    poster: "",
    status: false,
  });

  const history = useHistory();

  const tokenApi = "55f8ec93";

  const { id } = useParams();
  const idmovie = id;

  const backendURL = "https://localhost:44387/api/movieusers";

  const baseUrl = `https://www.omdbapi.com/?i=${idmovie}&apikey=${tokenApi}`;

  const saveMovie = async () => {
    try {
      const response = await axios.post(backendURL, movieListItem);
      setData(data.concat(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  const removeMovie = async () => {
    try {
      const response = await axios.put(
        `${backendURL}/${movieListItem.id}`,
        movieListItem
      );
      const respuesta = response.data;
      const dataAuxiliar = movie;
      dataAuxiliar.map((dataAuxiliarItem) => {
        if (dataAuxiliarItem.id === respuesta.id) {
          dataAuxiliarItem.status = !movieListItem.status;
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const cookies = new Cookies();
    const getByIdRequest = async () => {
      try {
        const response = await axios.get(baseUrl);
        const poster = response.data.Poster;
        setMovie(response.data);
        setMovieListItem({
          id: cookies.get("id"),
          imdbID: idmovie,
          poster,
        });
      } catch (error) {
        console.log(error);
      }
    };
    getByIdRequest();
  }, [baseUrl, idmovie]);
  return (
    <div>
      <div className="flex flex-wrap overflow-hidden relative">
        <div className="w-full overflow-hidden flex justify-center py-5">
          <p className="text-xl font-bold pt-10 sm:pt-0">{movie.Title}</p>
        </div>
        <ArrowLeftIcon
          className="w-10 h-8 mr-2 absolute sm:left-5 sm:top-4 md:left-16 lg:left-36 cursor-pointer"
          onClick={history.goBack}
        />
      </div>
      <div className="flex flex-wrap -mx-4 overflow-hidden sm:-mx-4 md:-mx-4 lg:-mx-4 xl:-mx-4 justify-center py-5">
        <div className="my-4 px-4 overflow-hidden sm:my-4 sm:px-4 sm:w-1/2 md:my-4 md:px-4 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2 xl:my-4 xl:px-4 xl:w-1/2 flex justify-center">
          <img src={movie.Poster} alt="" />
        </div>

        <div className="my-4 px-4 overflow-hidden sm:my-4 sm:px-4  md:my-4 md:px-4 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2 xl:my-4 xl:px-4 xl:w-1/2">
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
          </ul>
          <div className="my-4 py-4">
            {movieListItem.status ? (
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mr-5 rounded inline-flex items-center"
                onClick={removeMovie}
              >
                <SaveIcon className="w-4 h-4 mr-2 text-black" />
                <span>Remove</span>
              </button>
            ) : (
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mr-5 rounded inline-flex items-center"
                onClick={saveMovie}
              >
                <SaveIcon className="w-4 h-4 mr-2 text-black" />
                <span>Save</span>
              </button>
            )}

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
