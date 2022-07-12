export const APIKEY = "b4372f11d559140ad73d3f0d6c664202"

const request = {
	getTrending: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
	getNetflixOriginals: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
	getTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
	getActionMovies: `/discover/movie?api_key=${APIKEY}&with_genres=28`,
	getComedyMovies: `/discover/movie?api_key=${APIKEY}&with_genres=35`,
	getHorrorMovies: `/discover/movie?api_key=${APIKEY}&with_genres=27`,
	getRomanceMovies: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
	getDocumentaries: `/discover/movie?api_key=${APIKEY}&with_genres=99`
}

export default request
