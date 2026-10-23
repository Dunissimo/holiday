const svgs = {
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M6.6 3.8c.4-.8 1.4-1 2.1-.5l2 1.5c.7.5.9 1.5.4 2.2L10 9.2a12.4 12.4 0 0 0 4.8 4.8l2.2-1.1c.7-.4 1.7-.2 2.2.4l1.5 2c.5.8.3 1.8-.5 2.2l-1.7 1c-1 .6-2.3.5-3.4-.1A18.6 18.6 0 0 1 5.7 8.9c-.6-1.1-.7-2.4-.1-3.4l1-1.7Z"/></svg>',
  telegram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M21 5 3.4 12.2c-.8.3-.8 1.4 0 1.7l4.4 1.6 1.7 4.6c.3.8 1.4.9 1.8.1L13 17l4.8 3.5c.7.5 1.7 0 1.8-.8L21 5Z"/><path d="m9.6 13.8 8.2-6.2"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3 5 6v6c0 4.2 2.8 7.8 7 9 4.2-1.2 7-4.8 7-9V6l-7-3Z"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="8"/><path d="M12 8v5l3 2"/></svg>',
  tools: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M13 3 6 14h6l-1 7 7-11h-6l1-7Z"/></svg>',
  pencil: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="m4 20 4.2-1.1L19 8.1 15.9 5 5.1 15.8 4 20Z"/></svg>',
  monitor: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/></svg>',
  wrench: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 0 0 5.4-5.4L16 11l-3-3 1.7-1.7Z"/></svg>',
  broom: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="m8 3 3 3M6 21c4-1 7-5 8.5-9.5L12 9 6 21ZM14.5 11.5 20 7"/></svg>',
  play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 7.5v9l8-4.5-8-4.5Z"/></svg>',
  building: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 20V8l8-4 8 4v12H4Z"/><path d="M10 20v-6h4v6"/></svg>',
};

export function icon(name) {
  return svgs[name] ?? '';
}
