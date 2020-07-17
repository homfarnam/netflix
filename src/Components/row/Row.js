import React, { useState, useEffect } from "react";
import axios from "../../axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer'
import Poster from '../poster/Poster'

const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('')

  useEffect(() => {
    // if [] run one when the row loads, and dont run again
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  // console.table(movies); // ?

  const opts={
    height:'390',
    width:'100%',
    playerVars:{
      autoplay:1
    }
  }

  const handleClick = (movieName = '') =>{
      if(trailerUrl){
        setTrailerUrl('')
      } else{
        movieTrailer(movieName) 
          .then(url=>{
            // https://www.youtube.com/watch?v=1_IYL9ZMR_Y
              const urlParams = new URLSearchParams(new URL(url).search)
              setTrailerUrl(urlParams.get('v'))
          })
          .catch(error =>console.log(error) )
      }
  }

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className={"row__posters"}>
        {movies.map((movie) => (
          <Poster
            key={movie.id}
<<<<<<< HEAD
            onClick={()=> handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"} `}
            src={`${baseUrl}${
=======
            name={movie.name}
            large={isLargeRow}
            onClick={handleClick}
            image={`${baseUrl}${
>>>>>>> c09355d83475b1afc25dd6d3d87b4b3fdb4c9b9d
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
          />
        ))}
      </div>
     {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
