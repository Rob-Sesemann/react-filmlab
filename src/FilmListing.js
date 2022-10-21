import React, { Component } from 'react'
import FilmRow from './FilmRow';



export default class FilmListing extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       filter: 'all'
    }
  }

  handleFilterClick(filter){
    this.setState({
      filter: filter
    })
    
   console.log(`setting filter to ${filter}`)
    
}
  render() {

  
    const allFilms = this.props.FilmListing.map( film => (
      <FilmRow  filmDetails={() =>this.props.filmDetails(film)} film={film} key={film.id} onFaveToggle={() => this.props.onFaveToggle(film)} isFave={this.props.faves.includes(film)}></FilmRow>
   ))
    
    
   const faveFilm = this.props.faves.map( film => (
    <FilmRow  filmDetails={() =>this.props.filmDetails(film)} film={film} key={film.id} onFaveToggle={() => this.props.onFaveToggle(film)} isFave={this.props.faves.includes(film)}></FilmRow>
 ))
  
   
    return (
       <div className="film-list">
         <h1 className="section-title">FILMS</h1>
         <div className="film-list-filters">
         <div onClick={(e)=> this.handleFilterClick('all')} className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`}>
              ALL
            <span className="section-count">{this.props.FilmListing.length}</span>
          </div>
          <div   onClick={(e)=> this.handleFilterClick('faves')} className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`}>
            FAVES
            <span className="section-count">{this.props.faves.length}</span>
        </div>
       </div>
       
       {this.state.filter === 'all' ? (allFilms): (faveFilm) }

      </div>
    )
  }
}
