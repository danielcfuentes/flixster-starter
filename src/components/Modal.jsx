import PropTypes from "prop-types";
import "./Modal.css";

import { useEffect, useState } from "react";
const Modal = ({ onClose, modalID }) => {
  const [data, setData] = useState([]);
  const [buttonTextWatchList, setButtonText] = useState(false);
  const [buttonTextLike, setButtonTextLike] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const getModalVideo = async (movieId) => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const videosUrl = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`;

    const trailerUrl = await fetch(videosUrl)
      .then((response) => response.json())
      .then((response) =>
        response.results.find(
          (video) => video.site === "YouTube" && video.type === "Trailer"
        )
      )
      .then((trailer) => `https://www.youtube.com/embed/${trailer.key}`)
      .catch((error) => {
        console.error("Error fetching movie trailer:", error);
      });

    setTrailerUrl(trailerUrl);
  };

  useState(() => {
    getModalVideo(modalID);
  }, [modalID]);

  const handleClick = () => {
    if (buttonTextWatchList === false) {
      setButtonText(true);
    } else {
      setButtonText(false);
    }
  };

  const handleClickLike = () => {
    if (buttonTextLike === false) {
      setButtonTextLike(true);
    } else {
      setButtonTextLike(false);
    }
  };

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

  const handleToggleExpand = () => {
    setIsExpanded((prevState) => !prevState);
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  // HTML -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  return (
    <section className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={handleModalClick}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <div className="modal-image-wrapper">
          <img
            src={
              !data?.backdrop_path
                ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1f4C-cWV03_czRXhL1THkOdS9RDnAtPxRnA&s"
                : "https://image.tmdb.org/t/p/w500" + data.backdrop_path
            }
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
            <button
              className="action-button"
              onClick={handleClick}
              id="watchlist"
            >
              {buttonTextWatchList
                ? "➖ Remove from Watchlist"
                : "➕ Add to Watchlist"}
            </button>
            <button
              className="action-button"
              onClick={handleClickLike}
              id="like"
            >
              {buttonTextLike ? "👎 Unlike" : "👍 Like"}
            </button>
          </div>
          <div className="expand-section">
            <h2>Movie Trailer</h2>
            <button className="expand-button" onClick={handleToggleExpand}>
              {isExpanded ? "⌃" : "⌄"}
            </button>
            {isExpanded && (
              <iframe
                src={trailerUrl}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Movie Trailer"
                className="modal-movie-trailer"
              ></iframe>
            )}
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
