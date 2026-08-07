document.addEventListener('DOMContentLoaded', () => {
  const el = document.querySelector('.hit-counter');
  if (!el) return;

  const site = el.dataset.goatcounterSite;
  const valueEl = el.querySelector('.hit-counter-value');
  if (!site || !valueEl) return;

  fetch(`https://${site}.goatcounter.com/counter/TOTAL.json`)
    .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
    .then((data) => {
      if (data && data.count) valueEl.textContent = data.count;
    })
    .catch(() => {
      valueEl.textContent = '—';
    });
});
