import React, { useState } from 'react'
import Axios from 'axios'
import { API_KEY, API_URL } from './config/config'

function Genre(props) {
	//Integer
	const genreNumList = props.genreId
	
	//String
	const [GenreList, setGenreList] = useState([]) 
	
	genreNumList.map((genre) => {
		switch(genre){
			case 12: 
				setGenreList(...GenreList, "Adventure")  
			case 16: 
				setGenreList(...GenreList, "Animation")
			case 35: 
				setGenreList(...GenreList, "Comedy")
			case 80: 
				setGenreList(...GenreList, "Crime")
			case 99: 
				setGenreList(...GenreList, "Documentary")
			case 18: 
				setGenreList(...GenreList, "Drama")
			case 10751: 
				setGenreList(...GenreList, "Family")
			case 14: 
				setGenreList(...GenreList, "Fantasy")
			case 36: 
				setGenreList(...GenreList, "History") 
			case 27: 
				setGenreList(...GenreList, "Horror") 
			case 10402: 
				setGenreList(...GenreList, "Music") 
			case 9648: 
				setGenreList(...GenreList, "Mystery") 
			case 10749: 
				setGenreList(...GenreList, "Romance")
			case 878: 
				setGenreList(...GenreList, "Science Fiction") 
			case 10770: 
				setGenreList(...GenreList, "TV Movie") 
			case 53: 
				setGenreList(...GenreList, "Thriller") 
			case 10752: 
				setGenreList(...GenreList, "War") 
			case 37: 
				setGenreList(...GenreList, "Western") 
		}
	})
	
	return (
		<p className="movie_genre">{GenreList}</p>
	)
	
}

export default Genre