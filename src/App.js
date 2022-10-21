import React, { Component } from 'react'
import './App.css';
import FilmListing from './FilmListing'
import FilmDetails from './FilmDetails'
import TMDB from './TMDB'
import axios from "axios"




export default class App extends Component {

 
  constructor(props) {
    super(props)
  
    this.state = {
       films: TMDB.films,
       faves: [],
       current: {}
    }
    this.handleFaveToggle = this.handleFaveToggle.bind(this)
  }  
  
   handleDetailsClick= (film) => {
    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`

    axios({
      method: 'GET',
      url: url
    }).then(response => {
      console.log(response) // take a look at what you get back!
  console.log(`Fetching details for ${film.title}`);
  this.setState({ current: response.data })
    })
   
   }
 


  handleFaveToggle(films) {
    const faves =this.state.faves.slice()
    const filmIndex = faves.indexOf(films)
    if (filmIndex >= 0){
      faves.splice(filmIndex,1)
      this.setState({ faves: faves})
      console.log(faves)
    }
    else{
      faves.push(films)
      this.setState({ faves: faves})
      console.log(faves)
    }
  }

  render() {
 
    return (
    <div className="film-library">
       <FilmListing filmDetails={this.handleDetailsClick} FilmListing={this.state.films}  faves={this.state.faves} onFaveToggle={this.handleFaveToggle} />
       <FilmDetails film={this.state.current}/>
    </div>
 
    )
  }
}
