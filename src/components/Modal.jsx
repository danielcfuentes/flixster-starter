import PropTypes from "prop-types";
import "./Modal.css";
import { useEffect, useState } from "react";
const Modal = ({ onClose, modalID }) => {
  const [data, setData] = useState([]);

  const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  // Fetching movie details by ID
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjZlZWIyYzQ5NzQ2Nzc2ZWNjYTRkNjQ0ZjBiMWI1NiIsInN1YiI6IjY2Njc2YTRhZWVhZGEwYTlkNWJlNzhiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._TqUxu7PLnxhDIb2tQ_jkFRMgvpyQWZoij2I5ECptTU",
      },
    };

    fetch(`https://api.themoviedb.org/3/movie/${modalID}`, options)
      .then((response) => response.json())
      .then((response) => {
        setData(response);
      });
  }, []);

  return (
    <section className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <div className="modal-image-wrapper">
          <img
            src={"https://image.tmdb.org/t/p/w500" + data.backdrop_path}
            alt="Movie Poster"
            className="modal-image"
          />
        </div>

        <div className="modal-details">
          <h1>{data.title}</h1>

          <div className="movieInfo">
            <p id="match"> {randomNumberInRange(1, 99)}% match</p>
            <p>{data.release_date}</p>
            <p id="age">{data.adult ? "PG-13" : "R"}</p>
            <p id="time"> {data.runtime} minutes</p>
            <p id="quality"> HD</p>
          </div>

          <strong>Overview: </strong>
          <p id="overview">{data.overview}</p>

          <strong>Genres: </strong>
          <p id="genre">
            {data.genres?.length > 0
              ? data.genres.map((genre) => genre.name).join(", ")
              : "Loading..."}
          </p>

          <div className="modal-actions">
            <button className="action-button">➕ My List</button>
            <button className="action-button">👍 Rate</button>
            <button className="action-button">⬇️ Download</button>
          </div>
        </div>
      </div>
    </section>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  modalID: PropTypes.number.isRequired,
};

export default Modal;
