import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './Movie.css'
import Axios from 'axios'
import { API_URL, API_KEY } from '../config/config'


function Movie(props){
	
	return(
		<Link to={{
				pathname: `/movie/${props.movieId}`,
				state: {
					release_date: props.release_date,
					title: props.title,
					overview: props.overview,
					genre: props.genre,
					image: props.image,
				}
			}}>
			<div className="movie">
					<img src={props.image} alt={props.title} title={props.title} />
				<div className="movie_data">
					<h3 className="movie_title">{props.title}</h3>
					<h5 className="movie_release_date">{props.release_date}</h5>
					<ul className="movie_genres">
						{(props.genre).map((genre, index) => 
							<li key={index} className="genres_genre">{genre}</li>
					)}
					</ul>
					<p className="movie_overview">{props.overview.slice(0, 180)}...</p>
				</div>
			</div> 
		</Link>
	)
}

Movie.propTypes = {
	movieId: PropTypes.number,
	title: PropTypes.string,
	overview: PropTypes.string,
	image: PropTypes.string,
	release_date: PropTypes.string,
}

export default Movie