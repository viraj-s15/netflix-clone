import React from "react"
import { useState, useEffect } from "react"
import axios from "../axios"
import "./css/Section.css"
import YouTube from "react-youtube"
import movieTrailer from "movie-trailer"

const imageUrl = "https://image.tmdb.org/t/p/original/"

const Section = (props) => {
	const [movieArray, setMovieArray] = useState([])
	const [trailerUrl, setTrailerUrl] = useState("")

	useEffect(() => {
		const handleRequests = async () => {
			const requests = await axios.get(props.movieUrl)
			setMovieArray(requests.data.results)
		}
		handleRequests()
	}, [props.URL])

	console.log(movieArray)

	const opts = {
		height: "800",
		width: "100%",
		playerVars: {
			autoplay: 1
		}
	}

	const handleTrailer = (movies) => {
		if (trailerUrl) {
			setTrailerUrl("")
		} else {
			movieTrailer(
				movies?.name || movies?.original_title || movies.original_name || ""
			)
				.then((url) => {
					const UrlParams = new URLSearchParams(new URL(url).search)
					setTrailerUrl(UrlParams.get("v"))
				})
				.catch((error) => console.log(error.message))
		}
	}

	return (
		<div className='section'>
			<h2>{props.title}</h2>
			<div className='section-images'>
				{movieArray.map((movies) => (
					<img
						onClick={() => {
							handleTrailer(movies)
						}}
						key={movies.id}
						className={props.isLongRow ? "section-image-long" : "section-image"}
						src={`${imageUrl}${
							props.isLongRow ? movies.poster_path : movies.backdrop_path
						}`}
						alt={movies.name}
					/>
				))}
			</div>
			{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
		</div>
	)
}

export default Section
