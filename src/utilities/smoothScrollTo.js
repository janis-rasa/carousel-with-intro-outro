/**
 * Smooth scrolling with Promise to the selected targetElement using small instantaneous jumps of the scrollTo method
 *
 * @param {HTMLElement} targetElement                 Target HTML element. Required
 * @param {number} [scrollOffset = 0]                 Optional offset from Target in pixels. Default is 0
 * @param {number} [scrollStep = 15]                  Optional step size in pixels for the Scroll instant jump. Default is 15
 * @param {number} [scrollDelay = 15]                 Optional scroll delay in milliseconds between instant jumps. Default is 15
 * @param {HTMLElement} [scrollableElement = <html>]  Optional Scrollable HTML element. Default is html
 * @returns {Promise}                                 Promise object represents the end of the Scroll
 */

export const smoothScrollTo = (
	targetElement,
	scrollOffset = 0,
	scrollStep = 15,
	scrollDelay = 15,
	scrollableElement = document.querySelector("html")
) => {
	return new Promise((resolve, reject) =>
		_smoothScrollTo(
			resolve,
			reject,
			targetElement,
			scrollOffset,
			scrollStep,
			scrollDelay,
			scrollableElement
		)
	)
}

const _smoothScrollTo = (
	resolve,
	reject,
	targetElement,
	scrollOffset,
	scrollStep,
	scrollDelay,
	scrollableElement
) => {
	if (!document.contains(targetElement)) {
		reject("The Scroll targetElement does not exist!")
	} else if (!document.contains(scrollableElement)) {
		reject("The Scrollable element does not exist!")
	} else if (
		!(
			scrollableElement.scrollWidth > scrollableElement.clientWidth ||
			scrollableElement.scrollHeight > scrollableElement.clientHeight
		)
	) {
		reject("The Scrollable element cannot scroll right now!")
	}

	let i = scrollableElement.scrollTop
	const targetPosition = targetElement.getBoundingClientRect().top + i - scrollOffset
	let isScrollDown = false
	if (i < targetPosition) {
		isScrollDown = true
	}

	const id = setInterval(function () {
		scrollableElement.scrollTo({
			left: 0,
			top: i,
			behavior: "instant",
		})
		if (isScrollDown) {
			i = i + scrollStep
		} else {
			i = i - scrollStep
		}

		if ((i > targetPosition && isScrollDown) || (i < targetPosition && !isScrollDown)) {
			clearInterval(id)
			resolve("Scrolling is done!")
		}
	}, scrollDelay)
}
