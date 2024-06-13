import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import "./MovieList.css";
import Modal from "./Modal";

function MovieList() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [id, setId] = useState(0);

  // Fetching movies per page
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjZlZWIyYzQ5NzQ2Nzc2ZWNjYTRkNjQ0ZjBiMWI1NiIsInN1YiI6IjY2Njc2YTRhZWVhZGEwYTlkNWJlNzhiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._TqUxu7PLnxhDIb2tQ_jkFRMgvpyQWZoij2I5ECptTU",
      },
    };

    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setData([...data, ...response.results]));
  }, [page]);

  //fetching for sorting
  const handleSort = (e) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjZlZWIyYzQ5NzQ2Nzc2ZWNjYTRkNjQ0ZjBiMWI1NiIsInN1YiI6IjY2Njc2YTRhZWVhZGEwYTlkNWJlNzhiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._TqUxu7PLnxhDIb2tQ_jkFRMgvpyQWZoij2I5ECptTU",
      },
    };

    fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=${e.target.value}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setData(response.results));
  };

  //fetching for search
  const handleSearch = (e) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjZlZWIyYzQ5NzQ2Nzc2ZWNjYTRkNjQ0ZjBiMWI1NiIsInN1YiI6IjY2Njc2YTRhZWVhZGEwYTlkNWJlNzhiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._TqUxu7PLnxhDIb2tQ_jkFRMgvpyQWZoij2I5ECptTU",
      },
    };

    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${e.target.value}&include_adult=false&language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setData(response.results));
  };

  //increaing the page number by 1 when the button is clicked
  const loadMore = () => {
    setPage(page + 1);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleOpen = () => {
    setOpenModal(true);
  };

  return (
    <div>
      {openModal && <Modal onClose={handleClose} modalID={id} />}

      {/* SEARCH HTML */}
      <form>
        <input
          type="text"
          onChange={(e) => handleSearch(e)}
          placeholder="Search for a movie..."
        ></input>
      </form>

      {/* SORTING HTML */}
      <select onChange={(e) => handleSort(e)}>
        <option value="sort-by">Sort by</option>
        <option value="vote_average.desc">Vote Average Descending</option>
        <option value="vote_average.asc">Vote Average Ascending</option>
        <option value="title.desc">Title Descending</option>
        <option value="title.asc">Title Ascending</option>
        <option value="primary_release_date.desc">
          Release Date Descending
        </option>
        <option value="primary_release_date.asc">Release Date Ascending</option>
        <option value="popularity.desc">Popularity Descending</option>
        <option value="popularity.asc">Popularity Ascending</option>
      </select>

      {/* MOVIE CARD HTML */}
      <div className="moviesList">
        {data?.map((movie, index) => (
          <MovieCard
            handleOnClick={handleOpen}
            key={index}
            image={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
            title={movie.title}
            rating={movie.vote_average}
            idFunc={setId}
            id={movie.id}
          />
        ))}
      </div>

      {/* LOAD MORE HTML */}
      <div className="loadButton">
        <button id="click" onClick={loadMore}>
          Load More
        </button>
      </div>
    </div>
  );
}

export default MovieList;
