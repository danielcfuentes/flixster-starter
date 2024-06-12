import PropTypes from 'prop-types';
import './MovieCard.css';
function MovieCard({image, title, rating}){
    return(
        <div>
            <section className='movie'>
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
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  };

export default MovieCard;
