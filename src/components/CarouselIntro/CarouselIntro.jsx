import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './CarouselIntro.scss'

function CarouselIntro() {
	const slidesData = [
		{
			title: 'Can you believe',
			text: 'Than a react-bootstrap carousel can be more controlled?',
			style: {
				backgroundImage: 'url("images/close-up-of-leaf-326055.jpg")'
			}
		},
		{
			title: 'Check this out',
			text: 'And you will see',
			style: {
				backgroundImage: 'url("images/landscape-nature-sky-person-33688.jpg")'
			}
		},
	]

	const itemRef = React.useRef(slidesData.map(() => React.createRef()))

	const introRef = React.useRef()

	const setSectionHeight = () => {
		let windowHeight = window.innerHeight
		let element = introRef.current
		element.style.height = windowHeight + "px"
	}

	const slides = slidesData.map(
		(slide, index) => {
			return (
				<Carousel.Item
					key={index}
					ref={itemRef.current[index]}
				>
					<div
						className="carousel-bg"
						aria-hidden="true"
						style={slide.style}
					/>
					<Carousel.Caption>
						<h3 className="carousel-title">{slide.title}</h3>
						<p className="carousel-lead lead mb-0">{slide.text}</p>
					</Carousel.Caption>
				</Carousel.Item>
			)
		}
	)

	const getLastSlide = () => {
		return slidesData.length - 1
	}

	const [index, setIndex] = React.useState(getLastSlide)

	const handleSelect = (selectedIndex) => {
		let element = itemRef.current[index].current
		// Add custom class for carousel sliding. See more in CarouselMultiple.scss
		element.classList.add("sliding")
		// Setting the delay between the slide event and their change
		setTimeout(() => {
			setIndex(selectedIndex)
		}, 500)
	}


	const carouselStart = () => {
		setIndex(0)
	}

	React.useEffect(() => {
		setSectionHeight()
		carouselStart()
		window.addEventListener('resize', setSectionHeight)

		return () => {
			window.removeEventListener('resize', setSectionHeight)
		}
	}, [])

	return (
		<section
			ref={introRef}
			className="mb-5"
		>
			<h2 className="sr-only">Controlled carousel</h2>
			<Carousel
				className="carousel_intro"
				fade={true}
				activeIndex={index}
				onSelect={handleSelect}
				pause={false}
				controls={false}
				indicators={true}
			>
				{slides}
			</Carousel>
		</section>
	)
}

export default CarouselIntro
