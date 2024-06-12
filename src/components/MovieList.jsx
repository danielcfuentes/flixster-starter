import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import "./MovieList.css";
import Search from "./Search";
// import React from "react";
// import { BsSearch } from 'react-icons/bs';

function MovieList(){
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [searchVal, setSearchVal] = useState();

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjZlZWIyYzQ5NzQ2Nzc2ZWNjYTRkNjQ0ZjBiMWI1NiIsInN1YiI6IjY2Njc2YTRhZWVhZGEwYTlkNWJlNzhiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._TqUxu7PLnxhDIb2tQ_jkFRMgvpyQWZoij2I5ECptTU'
            }
        };

        fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`, options)
            .then(response => response.json())
            .then(response => setData([...data, ...response.results]))
            .catch(err => console.error(err));
    }, [page]);

    // console.log(data);


    const loadMore = () => {
        setPage(page +1);
        // console.log(page);

    };

    // function handleSearchClick (){
    //     if (searchVal === ""){ setData(data); return; }
    //     const filterBySearch = data.filter((item) => {
    //         if (item.title.toLowerCase().includes(searchVal.toLowerCase())) {return item}
    //     })
    //     setData(filterBySearch);
    // }
    const handleSearch = (e) => {
        const options = {
            method: 'GET',
            headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjZlZWIyYzQ5NzQ2Nzc2ZWNjYTRkNjQ0ZjBiMWI1NiIsInN1YiI6IjY2Njc2YTRhZWVhZGEwYTlkNWJlNzhiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._TqUxu7PLnxhDIb2tQ_jkFRMgvpyQWZoij2I5ECptTU'
            }
        };

        fetch(`https://api.themoviedb.org/3/search/movie?query=${e.target.value}&include_adult=false&language=en-US&page=1`, options)
            .then(response => response.json())
            .then(response => setData(response.results))
            .catch(err => console.error(err));

        console.log("search query", e.target.value);
        console.log("data", data);
    }


    return(
        <div>

            <form>
                <input  type="text" onChange={e => handleSearch(e)}>
                </input>


                {/* <button type="submit" onClick={}> Submit </button> */}
            </form>

            {/* <Search /> */}

            <div className="moviesList">
                {data?.map((movie, index) => (
                    <MovieCard key={index} image={"https://image.tmdb.org/t/p/w500" + movie.poster_path} title={movie.title} rating={movie.vote_average}/>
                ))}

            </div>



            <div className="loadButton">
                <button id="click"onClick={loadMore}
                    >Load More</button>
            </div>


        </div>


    );
}

export default MovieList;
