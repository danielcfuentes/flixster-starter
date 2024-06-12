import PropTypes from 'prop-types';
import './MovieCard.css';

function MovieCard({handleOnClick, image, title, rating}){

    return(
        <div>
            <section className='movie' onClick={handleOnClick}>
                <img id= "movie-img" src={image} />
                <div className="text-card">
                    <h2>{title}</h2>
                    <p>Rating: ⭐️ {rating}</p>
                </div>

            </section>

        </div>
    );
}

MovieCard.propTypes = {
    handleOnClick: PropTypes.func.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  };

export default MovieCard;
