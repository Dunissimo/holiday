import './styles/tokens.css';
import './styles/base.css';
import './styles/layout.css';
import './styles/components.css';
import './styles/sections.css';

import { brand, nav, hero, services, portfolio, steps, clients } from './js/content.js';
import { icon } from './js/icons.js';
import { initNav } from './js/nav.js';
import { initModal } from './js/modal.js';
import { initGallery } from './js/gallery.js';

function renderNav() {
  const markup = nav.map((item) => `<a href="${item.href}">${item.label}</a>`).join('');
  document.getElementById('site-nav').innerHTML = markup;
  document.getElementById('footer-nav').innerHTML = markup;
}

function renderHero() {
  document.querySelector('.hero h1').textContent = hero.title;
  document.querySelector('.hero-lead').textContent = hero.lead;
  document.querySelector('.perks').innerHTML = hero.perks
    .map(
      (perk) => `
      <div class="perk">
        ${icon(perk.icon)}
        <strong>${perk.title}</strong>
        <span>${perk.caption}</span>
      </div>`,
    )
    .join('');
}

function renderServices() {
  document.getElementById('services-grid').innerHTML = services
    .map(
      (item) => `
      <article class="media-card">
        <img src="${item.image}" alt="${item.title}" loading="lazy">
        <p class="media-card-caption">${item.title}</p>
      </article>`,
    )
    .join('');
}

function renderPortfolio() {
  document.getElementById('portfolio-grid').innerHTML = portfolio
    .map(
      (item) => `
      <button class="media-card video-card" type="button" data-src="${item.src}" aria-label="Смотреть ${item.title}">
        <video src="${item.src}" muted playsinline preload="metadata" loop></video>
        <span class="play-badge">${icon('play')}</span>
      </button>`,
    )
    .join('');
}

function renderSteps() {
  const total = String(steps.length).padStart(2, '0');
  document.getElementById('steps-row').innerHTML = steps
    .map(
      (step, index) => `
      <article class="step-slide" style="--i: ${index}">
        <div class="step-slide-inner panel">
          <p class="section-kicker">Этапы работ · ${String(index + 1).padStart(2, '0')} / ${total}</p>
          <div class="step-icon">
            ${icon(step.icon)}
            <span class="num">${index + 1}</span>
          </div>
          <h3>${step.title}</h3>
          <p>${step.text}</p>
        </div>
      </article>`,
    )
    .join('');
}

function renderClients() {
  document.getElementById('clients-grid').innerHTML = clients
    .map(
      (name) => `
      <div class="client-card">
        ${icon('building')}
        <span>${name}</span>
      </div>`,
    )
    .join('');
}

function bindContacts() {
  document.querySelectorAll('[data-phone]').forEach((el) => {
    el.href = brand.phoneHref;
  });
  document.querySelectorAll('[data-telegram]').forEach((el) => {
    el.href = brand.telegramHref;
  });
}

renderNav();
renderHero();
renderServices();
renderPortfolio();
renderSteps();
renderClients();
bindContacts();
initNav();
initModal();
initGallery();
