import React from "react"
import "./App.scss"
import CarouselIntro from "../CarouselIntro/CarouselIntro"
import CarouselMultiple from "../CarouselMultiple/CarouselMultiple"
import { slidesDataIntro, slidesDataMultiple } from "../../store/store.js"

function App() {
	return (
		<React.Fragment>
			<h1 className='visually-hidden'>Bootstrap controlled and multiple carousels</h1>
			<CarouselIntro slidesData={slidesDataIntro} />
			<CarouselMultiple slidesData={slidesDataMultiple} />
		</React.Fragment>
	)
}

export default App
