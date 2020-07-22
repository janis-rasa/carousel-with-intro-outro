import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './CarouselMultiple.scss'

function CarouselMultiple() {
	const slidesData = [
		{
			id: 0,
			image: 'https://picsum.photos/id/237/500/250.jpg',
			title: 'Lorem Ipsum',
			url: '#'
		},
		{
			id: 1,
			image: 'https://picsum.photos/id/238/500/250.jpg',
			title: 'Dolor sit amet',
			url: '#'
		},
		{
			id: 2,
			image: 'https://picsum.photos/id/239/500/250.jpg',
			title: 'Consectetur adipiscing elit',
			url: '#'
		},
		{
			id: 3,
			image: 'https://picsum.photos/id/240/500/250.jpg',
			title: 'Phasellus leo ante',
			url: '#'
		},
		{
			id: 4,
			image: 'https://picsum.photos/id/241/500/250.jpg',
			title: 'Consectetur a condimentum vel',
			url: '#'
		},
		{
			id: 5,
			image: 'https://picsum.photos/id/242/500/250.jpg',
			title: 'Sodales id lectus',
			url: '#'
		},
		{
			id: 6,
			image: 'https://picsum.photos/id/243/500/250.jpg',
			title: 'Pellentesque laoreet',
			url: '#'
		}
	]

	const carouselMultipleSlides = 4

	const slideItem = (itemIndex) => {
		let arrayLength = slidesData.length
		if (itemIndex >= arrayLength) {
			itemIndex = itemIndex - arrayLength
		}
		return (
			<figure className="carousel-item__figure col-12 col-sm-4 col-lg-3 mb-0" key={itemIndex}>
				<a
					href={slidesData[itemIndex].url}
					target="_blank"
					rel="noopener noreferrer"
					className="carousel-item__link"
				>
					<img
						src={slidesData[itemIndex].image}
						alt={slidesData[itemIndex].title}
						className="img-fluid carousel-item__img"
					/>
					<span className="carousel-item__caption">{slidesData[itemIndex].title}</span>
				</a>
			</figure>
		)
	}

	const carouselSlides = slidesData.map((slide, index) => {
		let i, slideItems = []
		for (i = index; i < (index + carouselMultipleSlides); i++) {
			slideItems = [...slideItems, slideItem(i)]
		}
		return (
			<Carousel.Item
				key={index}
			>
				{slideItems}
			</Carousel.Item>
		)
	})

	return (
		<section className="py-5">
			<div className="container pb-5">
				<h2 className="text-center">Multiple carousel</h2>
			</div>
			<Carousel
				fade={false}
				indicators={true}
				interval={5000}
				pause={false}
				controls={true}
				className="carousel_multiple"
			>
				{carouselSlides}
			</Carousel>
		</section>
	)
}

export default CarouselMultiple
