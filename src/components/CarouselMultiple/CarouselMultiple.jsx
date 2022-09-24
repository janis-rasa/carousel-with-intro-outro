import React from "react"
import Carousel from "react-bootstrap/Carousel"
import "./CarouselMultiple.scss"

const CarouselMultiple = (props) => {
	const carouselMultipleSlides = 4

	const slideItem = (itemIndex) => {
		let arrayLength = props.slidesData.length
		if (itemIndex >= arrayLength) {
			itemIndex = itemIndex - arrayLength
		}
		return (
			<figure className='carousel-item__figure col-12 col-sm-4 col-lg-3 mb-0' key={itemIndex}>
				<a
					href={props.slidesData[itemIndex].url}
					target='_blank'
					rel='noopener noreferrer'
					className='carousel-item__link'
				>
					<img
						src={props.slidesData[itemIndex].image}
						alt={props.slidesData[itemIndex].title}
						className='img-fluid carousel-item__img'
					/>
					<span className='carousel-item__caption'>{props.slidesData[itemIndex].title}</span>
				</a>
			</figure>
		)
	}

	const carouselSlides = props.slidesData.map((slide, index) => {
		let i,
			slideItems = []
		for (i = index; i < index + carouselMultipleSlides; i++) {
			slideItems = [...slideItems, slideItem(i)]
		}
		return <Carousel.Item key={index}>{slideItems}</Carousel.Item>
	})

	return (
		<section className='py-5'>
			<div className='container pb-5'>
				<h2 className='text-center'>Multiple carousel</h2>
			</div>
			<Carousel
				fade={false}
				indicators={false}
				interval={5000}
				pause={false}
				controls={true}
				className='carousel_multiple'
			>
				{carouselSlides}
			</Carousel>
		</section>
	)
}

export default CarouselMultiple
