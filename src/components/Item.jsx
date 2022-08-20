const Item = ({ title, poster, setOnClick }) => {
  return (
    <div className="my-2 px-2 overflow-hidden">
      <div className="cursor-pointer" onClick={setOnClick}>
        <img
          src={poster}
          alt={title}
          draggable={false}
          className="h-32 sm:h-48 md:h-60 lg:h-64 xl:h-72 2xl:h-96"
        />
      </div>
    </div>
  );
};

export default Item;
