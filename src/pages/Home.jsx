import "react-alice-carousel/lib/alice-carousel.css";

import { React, useCallback, useEffect, useState } from "react";

import AliceCarousel from "react-alice-carousel";
import Cookies from "universal-cookie/es6";
import Item from "../components/Item";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Home = () => {
  const cookies = new Cookies();
  //URL backend for movie list
  const backUrl = `https://localhost:44387/api/movieusers/${cookies.get("id")}`;

  //URLs movie types
  const horrorUrl = "https://www.omdbapi.com/?apikey=55f8ec93&s=horror";
  const comedyUrl = "https://www.omdbapi.com/?apikey=55f8ec93&s=comedy";
  const suspenseUrl = "https://www.omdbapi.com/?apikey=55f8ec93&s=suspense";
  const childUrl = "https://www.omdbapi.com/?apikey=55f8ec93&s=disney";

  const [movie, setMovie] = useState([]);
  const [horrorMovie, setHorrorMovie] = useState([]);
  const [comedyMovie, setComedyMovie] = useState([]);
  const [suspenseMovie, setSuspenseMovie] = useState([]);
  const [childMovie, setChildMovie] = useState([]);

  const peticionGet = useCallback(async () => {
    try {
      const response = await axios.get(backUrl);
      setMovie(response.data);
    } catch (error) {
      console.log(error);
    }
  }, [backUrl]);

  const peticionGetHorror = async () => {
    try {
      const response = await axios.get(horrorUrl);
      setHorrorMovie(response.data.Search);
    } catch (error) {
      console.log(error);
    }
  };

  const peticionGetSuspense = async () => {
    try {
      const response = await axios.get(suspenseUrl);
      setSuspenseMovie(response.data.Search);
    } catch (error) {
      console.log(error);
    }
  };

  const peticionGetComedy = async () => {
    try {
      const response = await axios.get(comedyUrl);
      setComedyMovie(response.data.Search);
    } catch (error) {
      console.log(error);
    }
  };

  const peticionGetChild = async () => {
    try {
      const response = await axios.get(childUrl);
      setChildMovie(response.data.Search);
    } catch (error) {
      console.log(error);
    }
  };

  const history = useHistory();
  const path = `home`;

  const responsive = {
    0: { items: 3 },
    568: { items: 4 },
    1024: { items: 6 },
  };

  const redirect = (id) => {
    history.push(`${path}/${id}`);
  };

  useEffect(() => {
    peticionGet();
    peticionGetHorror();
    peticionGetSuspense();
    peticionGetComedy();
    peticionGetChild();
  }, [peticionGet]);
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap -mx-2">
        {movie.length !== 0 && (
          <>
            <div className="px-2 my-5">
              <h1 className="font-bold text-xl sm:text-xl md:text-2xl">
                My list
              </h1>
            </div>

            <AliceCarousel
              mouseTracking
              responsive={responsive}
              items={movie.map((gestor) => (
                <Item
                  title={gestor.Title}
                  year={`Año: ${gestor.Year}`}
                  poster={gestor.poster}
                  setOnClick={() => redirect(gestor.imdbID)}
                  key={gestor.imdbID}
                  noText
                />
              ))}
            />
          </>
        )}
        <div className="px-2 my-5">
          <h1 className="font-bold text-xl sm:text-xl md:text-2xl">Horror</h1>
        </div>
        <AliceCarousel
          mouseTracking
          responsive={responsive}
          items={horrorMovie.map((gestor) => (
            <Item
              title={gestor.Title}
              year={`Año: ${gestor.Year}`}
              poster={gestor.Poster}
              setOnClick={() => redirect(gestor.imdbID)}
              key={gestor.imdbID}
              noText
            />
          ))}
        />
        <div className="px-2 my-5">
          <h1 className="font-bold text-xl sm:text-xl md:text-2xl">Suspense</h1>
        </div>
        <AliceCarousel
          mouseTracking
          responsive={responsive}
          items={suspenseMovie.map((gestor) => (
            <Item
              title={gestor.Title}
              year={`Año: ${gestor.Year}`}
              poster={gestor.Poster}
              setOnClick={() => redirect(gestor.imdbID)}
              key={gestor.imdbID}
              noText
            />
          ))}
        />
      </div>
      <div className="px-2 my-5">
        <h1 className="font-bold text-xl sm:text-xl md:text-2xl">Comedy</h1>
      </div>
      <AliceCarousel
        mouseTracking
        responsive={responsive}
        items={comedyMovie.map((gestor) => (
          <Item
            title={gestor.Title}
            year={`Año: ${gestor.Year}`}
            poster={gestor.Poster}
            setOnClick={() => redirect(gestor.imdbID)}
            key={gestor.imdbID}
            noText
          />
        ))}
      />
      <div className="px-2 my-5">
        <h1 className="font-bold text-xl sm:text-xl md:text-2xl">
          Child&apos;s movies
        </h1>
      </div>
      <AliceCarousel
        mouseTracking
        responsive={responsive}
        items={childMovie.map((gestor) => (
          <Item
            title={gestor.Title}
            year={`Año: ${gestor.Year}`}
            poster={gestor.Poster}
            setOnClick={() => redirect(gestor.imdbID)}
            key={gestor.imdbID}
            noText
          />
        ))}
      />
    </div>
  );
};

export default Home;
