const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function initGallery() {
  const lightbox = document.getElementById('lightbox');
  const player = document.getElementById('lightbox-video');
  const cards = document.querySelectorAll('.video-card');

  const close = () => {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('is-locked');
    player.pause();
    player.removeAttribute('src');
    player.load();
  };

  const open = (src) => {
    player.src = src;
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('is-locked');
    player.play().catch(() => {});
  };

  cards.forEach((card) => {
    const preview = card.querySelector('video');

    card.addEventListener('click', () => open(card.dataset.src));

    if (!reducedMotion && preview) {
      card.addEventListener('mouseenter', () => preview.play().catch(() => {}));
      card.addEventListener('mouseleave', () => {
        preview.pause();
        preview.currentTime = 0;
      });
    }
  });

  lightbox.querySelectorAll('[data-close-lightbox]').forEach((el) => {
    el.addEventListener('click', close);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && lightbox.classList.contains('is-open')) close();
  });
}
