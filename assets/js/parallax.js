document.addEventListener('DOMContentLoaded', () => {
  const strength = 25;

  let targetX = 0;
  let targetY = 0;

  let currentX = 0;
  let currentY = 0;

  const ease = 0.04; // lower = smoother/slower

  document.addEventListener('mousemove', (e) => {
    targetX = (e.clientX / window.innerWidth - 0.5) * strength;
    targetY = (e.clientY / window.innerHeight - 0.5) * strength;
  });


  function animate() {
    currentX += (targetX - currentX) * ease;
    currentY += (targetY - currentY) * ease;

    document.documentElement.style.setProperty(
      '--parallax-x',
      `${currentX}px`
    );

    document.documentElement.style.setProperty(
      '--parallax-y',
      `${currentY}px`
    );

    requestAnimationFrame(animate);
  }

  animate();
});
