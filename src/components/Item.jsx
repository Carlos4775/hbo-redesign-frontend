const Item = ({
  title,
  year,
  poster,
  rated,
  released,
  runtime,
  genre,
  director,
  writer,
  actors,
  plot,
  language,
  country,
  awards,
  imdbID,
  setOnClick,
}) => {
  return (
    <div
      className="my-2 px-2 w-1/2 overflow-hidden sm:my-3 sm:px-3 sm:w-1/6 md:my-4 md:px-4 md:w-1/3 lg:my-5 lg:px-5 lg:w-1/4 xl:my-4 xl:px-4 xl:w-1/6"
      onClick={setOnClick}
    >
      <div className="cursor-pointer">
        <img src={poster} alt="" />
        <div className="font-bold py-4">{title}</div>
        <p>{year}</p>
        <p>{rated}</p>
        <p>{released}</p>
        <p>{runtime}</p>
        <p>{genre}</p>
        <p>{director}</p>
        <p>{writer}</p>
        <p>{actors}</p>
        <p>{plot}</p>
        <p>{language}</p>
        <p>{country}</p>
        <p>{awards}</p>
        <p>{imdbID}</p>
      </div>
    </div>
  );
};

export default Item;
