import PropTypes from "prop-types";
import "./MovieCard.css";

function MovieCard({ handleOnClick, image, title, rating, idFunc, id }) {
  function handleClick() {
    idFunc(id);
    handleOnClick();
  }
  return (
    <div>
      <section className="movie" onClick={handleClick}>
        <img id="movie-img" src={image} />
        <div className="text-card">
          <h2 id="truncate">{title}</h2>
          <p>Rating: ⭐️ {rating}</p>
        </div>
      </section>
    </div>
  );
}

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  idFunc: PropTypes.func.isRequired,
  handleOnClick: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default MovieCard;
