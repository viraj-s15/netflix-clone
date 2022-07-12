import React, { useState, useEffect } from "react"
import "./css/TopMovie.css"
import axios from "../axios"
import request from "../request"
import movieTrailer from "movie-trailer"

const TopMovie = () => {
	const [movieArray, setMovieArray] = useState([])

	useEffect(() => {
		const handleRequests = async () => {
			const requests = await axios.get(request.getNetflixOriginals)
			setMovieArray(
				requests.data.results[
					Math.floor(Math.random() * requests.data.results.length)
				]
			)
			return requests
		}

		handleRequests()
	}, [])

	return (
		<div
			className='topmovie-container'
			style={{
				backgroundSize: "Cover",
				backgroundImage: `url("https://image.tmdb.org/t/p/original/${movieArray?.backdrop_path}")`,
				backgroundPosition: "center center"
			}}
		>
			<div className='topmovie-content'>
				<h1 className='topmovie-title'>
					{movieArray?.title || movieArray?.name || movieArray?.orignal_name}
				</h1>
				<div className='control-buttons'>
					<button className='control-button'>Play</button>
					<button className='control-button'>My list</button>
				</div>
				<h1 className='movie-description'>{movieArray?.overview}</h1>
			</div>
			<div className='bottom-fade'></div>
		</div>
	)
}

export default TopMovie
