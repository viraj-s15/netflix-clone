import React from "react"
import Section from "./components/Section"
import request from "./request"
import TopMovie from "./components/TopMovie"
import Navbar from "./components/Navbar"

const App = () => {
	return (
		<>
			<Navbar />
			<div className='App'>
				<TopMovie movieUrl={request.getNetflixOriginals} />
				<Section
					title='Netflix Originals'
					movieUrl={request.getNetflixOriginals}
					isLongRow={true}
				/>
				<Section title='Top Rated' movieUrl={request.getTrending} />
				<Section title='Action' movieUrl={request.getActionMovies} />
				<Section title='Comedy' movieUrl={request.getComedyMovies} />
				<Section title='Horror' movieUrl={request.getHorrorMovies} />
				<Section title='Romance' movieUrl={request.getRomanceMovies} />
				<Section title='Documentaries' movieUrl={request.getDocumentaries} />
			</div>
		</>
	)
}

export default App
