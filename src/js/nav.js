export function initNav() {
  const header = document.querySelector('.site-header');
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav');
  const links = [...document.querySelectorAll('.nav a, .footer-nav a')];
  const sections = ['about', 'portfolio', 'steps']
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  const closeMenu = () => {
    nav?.classList.remove('is-open');
    burger?.setAttribute('aria-expanded', 'false');
  };

  burger?.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', String(open));
  });

  links.forEach((link) => {
    link.addEventListener('click', () => closeMenu());
  });

  const onScroll = () => {
    header?.classList.toggle('is-scrolled', window.scrollY > 8);

    const fromTop = window.scrollY + 120;
    let current = sections[0]?.id;
    for (const section of sections) {
      if (section.offsetTop <= fromTop) current = section.id;
    }

    document.querySelectorAll('.nav a').forEach((link) => {
      link.classList.toggle('is-active', link.getAttribute('href') === `#${current}`);
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}
