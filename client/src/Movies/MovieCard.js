import React from 'react';

const MovieCard = props => {
  const { title, director, metascore, stars } = props.movie;

  const clickHandler= ()=>{
    props.addToSavedList(props.movie)
  }
  
  return(
    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      {props.addToSavedList?<div className="save-button" onClick={clickHandler} >Save</div>:null}
    </div>
  );
};

export default MovieCard;
