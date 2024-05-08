const cards = document.querySelectorAll('.card');

const strength = 0.5;

function rotateToMouse(e, card) {
	const bounds = card.getBoundingClientRect();
	const mouseX = e.clientX - bounds.left;
	const mouseY = e.clientY - bounds.top;
	const center = {
		x: mouseX - bounds.width / 2,
		y: mouseY - bounds.height / 2
	};
	const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

	card.style.transform = `
    rotate3d(
      ${center.y / 100},
      ${-center.x / 100},
      0,
      ${Math.log(distance) * strength}deg
    )
  `;

	card.querySelector('.glow').style.backgroundImage = `
    radial-gradient(
      circle at
      ${mouseX}px
      ${mouseY}px,
      #ffffff22,
      #00000000
    )
  `;
}

cards.forEach(card => {
	function handleMouseMove(e) {
		rotateToMouse(e, card);
	}

	card.addEventListener('mouseenter', () => {
		card.addEventListener('mousemove', handleMouseMove);
	});

	card.addEventListener('mouseleave', () => {
		card.removeEventListener('mousemove', handleMouseMove);
		card.style.transform = '';
		card.style.background = '';
		card.querySelector('.glow').style.backgroundImage = `none`;
	});
});
