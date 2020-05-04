import React from 'react'
import './App.scss'
import CarouselIntro from "../CarouselIntro/CarouselIntro"
import CarouselMultiple from "../CarouselMultiple/CarouselMultiple";

function App() {

	return (
		<React.Fragment>
			<h1 className="sr-only">Bootstrap controlled and multiple carousels</h1>
			<CarouselIntro/>
			<CarouselMultiple/>
		</React.Fragment>
	)
}

export default App
