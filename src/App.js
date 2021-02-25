import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { API_KEY, API_URL, IMAGE_BASE_URL } from './config/config';
import replacePoster from './config/replaceimage/SON.jpg';
import Axios from 'axios';
import Movie from './Movie';
import './css/App.css';
import Genre from './Genre'


function App() {
	
	const [Count, setCount] = useState(0) ;
	const [Loading, setLoading] = useState(true);
	const [Movies, setMovies] = useState([]);
	
	const apiAddress = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`
	
	useEffect(() => {
		
		getMovies(apiAddress)
		
	}, [])
	
	
	const getMovies = (api) => {
		Axios.get(api)
			.then(response => {
				console.log('Movies', response.data.results)
				setMovies(...Movies, response.data.results)
				setLoading(false)
			})
			.catch((err) => {
				console.log("Error in importing movie list from api url: ", err);
			})
	}
	
	
	return (
		<section className="container">
			{Loading ? (
				<div className="loader">
					<span className="loader_text">Loading...</span>
				</div>
			) : (
				<div className="movies">
					{Movies.map(movie => (
						<Movie
							key={movie.id}
							movieId={movie.id}
							title={movie.original_title}
							overview={movie.overview}
							image={movie.poster_path ?`${IMAGE_BASE_URL}w500${movie.poster_path}`: replacePoster }
							release_date={movie.release_date}
							genre={movie.genre_ids}
						/>
					))}
						
				</div>
			)}
						
		</section>
	)
}

export default App;
