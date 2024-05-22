const myElements = document.querySelectorAll('.enterAnimation');

myElements.forEach(myElement => {
	let isAnimated = false;

	const observerEnter = new IntersectionObserver(entries => {
		if (entries[0].isIntersecting && !isAnimated) {
			myElement.style.animation = 'enterAnimationAnim 0.5s linear forwards';
			isAnimated = true;
		}
	});

	const observerLeave = new IntersectionObserver(entries => {
		if (!entries[0].isIntersecting && isAnimated) {
			myElement.style.animation = 'none';
			isAnimated = false;
		}
	});

	observerEnter.observe(myElement);
	observerLeave.observe(myElement);
});

const images = document.querySelectorAll('.enterAnimationImage');
images.forEach(myElement => {
	let isAnimated = false;

	const observerEnter = new IntersectionObserver(entries => {
		if (entries[0].isIntersecting && !isAnimated) {
			myElement.style.animation = 'enterAnimationImageAnim 0.5s linear forwards';
			isAnimated = true;
		}
	});

	const observerLeave = new IntersectionObserver(entries => {
		if (!entries[0].isIntersecting && isAnimated) {
			myElement.style.animation = 'none';
			isAnimated = false;
		}
	});

	observerEnter.observe(myElement);
	observerLeave.observe(myElement);
});
