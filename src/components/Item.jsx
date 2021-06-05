const Item = ({ title, poster, setOnClick }) => {
  return (
    <div className="my-2 px-2 overflow-hidden" onClick={setOnClick}>
      <div className="cursor-pointer">
        <img src={poster} alt={title} />
      </div>
    </div>
  );
};

export default Item;
