import React from 'react'
import './App.scss'
import Intro from "../Intro/Intro"

function App() {

	const setWindowHeight = () => {
		let windowHeight = window.innerHeight
		document.body.style.height = windowHeight + "px"
	}

	React.useEffect(() => {
		setWindowHeight()
		window.addEventListener('resize', setWindowHeight)

		return () => {
			window.removeEventListener('resize', setWindowHeight)
		}
	})

	return (
		<React.Fragment>
			<h1 className="sr-only">Bootstrap controlled carousel</h1>
			<Intro/>
		</React.Fragment>
	)
}

export default App
