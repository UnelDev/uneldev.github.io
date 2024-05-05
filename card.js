const cards = document.querySelectorAll(".card");

const strength = 0.5;

function rotateToMouse(e, card) {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const bounds = card.getBoundingClientRect();
  const leftX = mouseX - bounds.x;
  const topY = mouseY - bounds.y;
  const center = {
    x: leftX - bounds.width / 2,
    y: topY - bounds.height / 2,
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

  card.querySelector(".glow").style.backgroundImage = `
    radial-gradient(
      circle at
      ${center.x * 2 + bounds.width / 2}px
      ${center.y * 2 + bounds.height / 2}px,
      #ffffff22,
      #00000000
    )
  `;
}

cards.forEach((card) => {
  function handleMouseMove(e) {
    rotateToMouse(e, card);
  }

  card.addEventListener("mouseenter", () => {
    document.addEventListener("mousemove", handleMouseMove);
  });

  card.addEventListener("mouseleave", () => {
    document.removeEventListener("mousemove", handleMouseMove);
    card.style.transform = "";
    card.style.background = "";
    card.querySelector(".glow").style.backgroundImage = `none`;
  });
});
