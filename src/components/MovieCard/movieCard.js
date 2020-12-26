import React, { useState } from 'react';

const MovieCard = ({ movie }) => {
  // MOVIE TITLE
  const title =
    movie.title.substring(0, 30) + (movie.title.length > 30 ? '...' : '');

  // MOVIE OVERVIEW
  const description =
    movie.overview.substring(0, 500) +
    (movie.overview.length > 500 ? '...' : '');

  const showMovieDetails = () => {
    console.log('show moviee details');
  };

  return (
    <>
      <div className="movieWrapper" onClick={showMovieDetails}>
        <h1 className="title">{title}</h1>
        <h5 className="release">{movie.release_date}</h5>
        <p className="stack">{description}</p>
        <div className="imdb">
          <button className="imdb_btn">IMDB {movie.vote_average}</button>
        </div>
        <div className="trailer">
          <button className="trailer_btn">Teaser</button>
        </div>
        <div className="img">
          <img
            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
            alt={movie.title + ' poster image'}
          />
        </div>
      </div>
    </>
  );
};

export default MovieCard;

// TODO adding only youtube teaser function
