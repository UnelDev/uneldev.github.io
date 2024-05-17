const glows = document.querySelectorAll('.glow');

function glowEffect(e, glow) {
	const rect = glow.getBoundingClientRect();
	const mouseX = e.clientX - rect.left;
	const mouseY = e.clientY - rect.top;

	glow.style.backgroundImage = `
    radial-gradient(
      circle at
      ${mouseX}px
      ${mouseY}px,
      #ffffff22,
      #25252500 50%,
      #00000000 100%
    )
  `;
}

glows.forEach(glow => {
	function handleMouseMove(e) {
		glowEffect(e, glow);
	}

	glow.addEventListener('mouseenter', () => {
		glow.addEventListener('mousemove', handleMouseMove);
	});

	glow.addEventListener('mouseleave', () => {
		glow.removeEventListener('mousemove', handleMouseMove);
		glow.style.backgroundImage = `none`;
	});
});
