import React from 'react'
import FilmPoster from './FilmPoster';
import Fave from './Fave';


export default function FilmRow (props) {
   
    const date = new Date(props.film.release_date)
    return (
        <div onClick={props.filmDetails}   className="film-row">
            <FilmPoster poster_path={props.film.poster_path} />
       

      
        <div className="film-summary">
          <h1>{props.film.title}</h1>
          <p>{date.getFullYear()}</p>
        </div>
        <Fave onFaveToggle={props.onFaveToggle}  isFave={props.isFave}></Fave>
      </div>
      
    )
  }



