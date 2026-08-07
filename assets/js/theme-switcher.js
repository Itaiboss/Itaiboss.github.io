document.addEventListener('DOMContentLoaded', () => {
  const savedMode = localStorage.getItem('site-mode');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyMode(savedMode || (systemPrefersDark ? 'space' : 'fantasy'));

  const savedBoring = localStorage.getItem('site-boring') === 'true';
  applyBoring(savedBoring);

  const modeBtn = document.querySelector('[data-mode-toggle]');
  if (modeBtn) {
    modeBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      applyMode(current === 'space' ? 'fantasy' : 'space');
    });
  }

  const boringBtn = document.querySelector('[data-boring-toggle]');
  if (boringBtn) {
    boringBtn.addEventListener('click', () => {
      const isBoring = document.body.classList.contains('theme-boring');
      applyBoring(!isBoring);
    });
  }
});

function applyMode(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('site-mode', theme);
  if (!document.body.classList.contains('theme-boring')) {
    document.body.className = document.body.className.replace(/theme-\S+/g, '').trim();
    document.body.classList.add(`theme-${theme}`);
  }
}

function applyBoring(isBoring) {
  localStorage.setItem('site-boring', isBoring);
  if (isBoring) {
    document.body.classList.add('theme-boring');
  } else {
    document.body.classList.remove('theme-boring');
    const theme = document.documentElement.getAttribute('data-theme');
    document.body.classList.add(`theme-${theme}`);
  }
}
