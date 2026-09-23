(() => {
  const body = document.body;
  if (!body) return;
  const side = document.getElementById('demoSide');
  const toggle = document.getElementById('demoSideToggle');
  document.getElementById('demoProfileLink')?.addEventListener('click', () => { closeSide(); document.getElementById('openProfile')?.click(); });
  const openSide = () => { side?.classList.add('is-open'); toggle?.setAttribute('aria-expanded', 'true'); };
  const closeSide = () => { side?.classList.remove('is-open'); toggle?.setAttribute('aria-expanded', 'false'); };
  toggle?.addEventListener('click', () => side?.classList.contains('is-open') ? closeSide() : openSide());
  side?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeSide));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeSide(); });
  let touchStartX = 0;
  document.addEventListener('touchstart', event => { touchStartX = event.changedTouches[0].clientX; }, { passive: true });
  document.addEventListener('touchend', event => { const delta = event.changedTouches[0].clientX - touchStartX; if (touchStartX < 28 && delta > 45) openSide(); if (side?.classList.contains('is-open') && delta < -45) closeSide(); }, { passive: true });
  const savedTheme = localStorage.getItem('enciclostudio-demo-theme') || 'purple';
  const applyTheme = theme => {
    body.dataset.demoTheme = theme;
    localStorage.setItem('enciclostudio-demo-theme', theme);
    document.querySelectorAll('[data-demo-theme]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.demoTheme === theme)));
  };
  document.querySelectorAll('[data-demo-theme]').forEach(button => button.addEventListener('click', () => applyTheme(button.dataset.demoTheme)));
  applyTheme(savedTheme);
  const install = document.getElementById('installApp');
  install?.addEventListener('click', () => window.dispatchEvent(new CustomEvent('enciclostudio-install-request')));
})();
