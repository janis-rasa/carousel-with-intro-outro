import React, { useRef, useState, useEffect } from "react"
import Carousel from "react-bootstrap/Carousel"
import { smoothScrollTo } from "../../utilities/smoothScrollTo"
import "./CarouselIntro.scss"
import { ReactComponent as ScrollDown } from "./ScrollDown.svg"

const CarouselIntro = (props) => {
	const getLastSlide = () => {
		return props.slidesData.length - 1
	}

	const [carouselIndex, setCarouselIndex] = useState(getLastSlide)

	let introRef = useRef(null)
	let itemRefs = useRef([])

	const setSectionHeight = () => {
		let windowHeight = window.innerHeight
		let element = introRef.current
		element.style.height = windowHeight + "px"
	}

	const setItemRef = (element) => {
		if (itemRefs.current.length < props.slidesData.length) {
			itemRefs.current = [...itemRefs.current, element]
		}
	}

	const slides = props.slidesData.map((slide, currentIndex) => (
		<Carousel.Item key={currentIndex}>
			<div className='carousel-bg' aria-hidden='true' style={slide.style} />
			<Carousel.Caption ref={setItemRef}>
				<h3 className='carousel-title'>{slide.title}</h3>
				<p className='carousel-lead lead mb-0'>{slide.text}</p>
			</Carousel.Caption>
		</Carousel.Item>
	))

	const handleSelect = (eventKey) => {
		const currentSlide = itemRefs.current[carouselIndex]
		const nextSlide = itemRefs.current[eventKey]
		// Add custom class for carousel sliding. See more in CarouselMultiple.scss
		currentSlide.classList.add("sliding")
		nextSlide.classList.remove("sliding")
		// Setting the delay between the slide event and their change
		setTimeout(() => {
			setCarouselIndex(eventKey)
		}, 500)
	}

	const carouselStart = () => {
		setCarouselIndex(0)
	}

	const scrollToNext = () => {
		const target = introRef.current.nextSibling
		smoothScrollTo(target)
	}

	useEffect(() => {
		setSectionHeight()
		carouselStart()
		window.addEventListener("resize", setSectionHeight)

		return () => {
			window.removeEventListener("resize", setSectionHeight)
		}
	}, [])

	if (props.slidesData.length) {
		return (
			<section ref={introRef} className='mb-5 position-relative'>
				<h2 className='visually-hidden'>Controlled carousel</h2>
				<Carousel
					className='carousel_intro'
					fade={true}
					activeIndex={carouselIndex}
					onSelect={handleSelect}
					pause={false}
					controls={true}
					indicators={true}
				>
					{slides}
				</Carousel>
				<button type='button' className='scroll-down' onClick={scrollToNext}>
					<ScrollDown />
				</button>
			</section>
		)
	}
}

export default CarouselIntro
