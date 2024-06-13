import PropTypes from 'prop-types';
import './Modal.css';
import { useEffect, useState } from 'react';
const Modal= ({onClose, modalID}) => {
    const [data, setData] = useState([]);

    // Fetching movie details by ID
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjZlZWIyYzQ5NzQ2Nzc2ZWNjYTRkNjQ0ZjBiMWI1NiIsInN1YiI6IjY2Njc2YTRhZWVhZGEwYTlkNWJlNzhiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._TqUxu7PLnxhDIb2tQ_jkFRMgvpyQWZoij2I5ECptTU'
            }
          };

          fetch(`https://api.themoviedb.org/3/movie/${modalID}`, options)
            .then(response => response.json())
            .then(response => {setData(response);
            console.log("genre: ", response.genres[0].name);
            console.log("Response results: ", response);})
            .catch(err => console.error(err));


    },[]);




// console.log(modalID);
// console.log(data);


    return (
        <section id = "playlistModal" className = "modal-overlay">
            <div className = "modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                    <h1>{data.title}</h1>

                    <img src={"https://image.tmdb.org/t/p/w500" +data.backdrop_path} alt="Movie Poster" />

                    <p>Release Date: {data.release_date}</p>

                    <p>Overview: {data.overview}</p>

                    <p>Genres: {data.genres?.length > 0 ? (
                        data.genres.map(genre => genre.name).join(', ')
                        ) : 'Loading...'}
                    </p>



            </div>
        </section>
    );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  modalID: PropTypes.number.isRequired,
//   movieID: PropTypes.string.isRequired,
};

export default Modal;
