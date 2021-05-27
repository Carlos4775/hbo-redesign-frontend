import { useEffect, useState } from "react";
import axios from "axios";
import Item from "../components/Item";
import { useHistory } from "react-router-dom";

const Home = () => {
  const baseUrl = "http://www.omdbapi.com/?s=star&apikey=55f8ec93";

  const [movie, setMovie] = useState([]);

  const peticionGet = async () => {
    try {
      const response = await axios.get(baseUrl);
      setMovie(response.data.Search);
    } catch (error) {
      console.log(error);
    }
  };

  let history = useHistory();
  let path = `movie`;

  const redirect = (id) => {
    history.push(path + "/" + id);
  };

  useEffect(() => {
    peticionGet();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap -mx-2 overflow-hidden sm:-mx-3 md:-mx-4 lg:-mx-5 xl:-mx-4">
        {movie.map((gestor, i) => (
          <Item
            title={gestor.Title}
            year={"Año: " + gestor.Year}
            poster={gestor.Poster}
            setOnClick={() => redirect(gestor.imdbID)}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
