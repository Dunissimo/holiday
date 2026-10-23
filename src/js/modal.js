function trapFocus(dialog, event) {
  const focusable = [...dialog.querySelectorAll('button, [href], input, textarea')];
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable.at(-1);
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

export function initModal() {
  const modal = document.getElementById('request-modal');
  const form = document.getElementById('request-form');
  const success = document.getElementById('request-success');
  const openers = document.querySelectorAll('[data-open-modal="request"]');
  const closers = modal.querySelectorAll('[data-close-modal]');
  let lastFocus = null;

  const open = () => {
    lastFocus = document.activeElement;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('is-locked');
    modal.querySelector('input')?.focus();
  };

  const close = () => {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('is-locked');
    lastFocus?.focus();
  };

  openers.forEach((btn) => btn.addEventListener('click', open));
  closers.forEach((btn) => btn.addEventListener('click', close));

  document.addEventListener('keydown', (event) => {
    if (!modal.classList.contains('is-open')) return;
    if (event.key === 'Escape') close();
    if (event.key === 'Tab') trapFocus(modal.querySelector('.modal-dialog'), event);
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    success.classList.add('is-visible');
    form.reset();
  });
}
