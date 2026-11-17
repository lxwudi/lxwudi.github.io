(() => {
  'use strict';
  const root = document.documentElement;
  const languageButtons = [...document.querySelectorAll('[data-set-language]')];
  const readPreference = () => {
    try { return localStorage.getItem('lf-language'); } catch { return null; }
  };
  function setLanguage(language) {
    const lang = language === 'en' ? 'en' : 'zh';
    root.dataset.language = lang;
    root.lang = lang === 'en' ? 'en' : 'zh-CN';
    document.title = lang === 'en' ? 'Lingxiao Fu · Henan University' : '付凌霄 Lingxiao Fu · 河南大学';
    languageButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.setLanguage === lang)));
    try { localStorage.setItem('lf-language', lang); } catch { /* Optional preference storage. */ }
    updateAnnouncement();
  }
  const filters = [...document.querySelectorAll('[data-filter]')];
  const publications = [...document.querySelectorAll('.publication')];
  let activeFilter = 'all';
  function updateAnnouncement() {
    const count = publications.filter(paper => !paper.hidden).length;
    document.getElementById('filter-announcement').textContent = root.dataset.language === 'en'
      ? `Showing ${count} research ${count === 1 ? 'entry' : 'entries'}.`
      : `显示 ${count} 项科研工作。`;
  }
  filters.forEach(button => button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;
    filters.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    publications.forEach(paper => { paper.hidden = activeFilter !== 'all' && paper.dataset.status !== activeFilter; });
    updateAnnouncement();
  }));
  languageButtons.forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.setLanguage)));
  const requestedLanguage = new URLSearchParams(location.search).get('lang');
  setLanguage(requestedLanguage === 'en' || requestedLanguage === 'zh' ? requestedLanguage : readPreference());

  const menuButton = document.querySelector('.menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  function closeMenu() { mobileNav.hidden = true; menuButton.setAttribute('aria-expanded', 'false'); }
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open));
    mobileNav.hidden = !open;
  });
  mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !mobileNav.hidden) { closeMenu(); menuButton.focus(); }
  });
  const desktop = window.matchMedia('(min-width: 761px)');
  desktop.addEventListener('change', event => { if (event.matches) closeMenu(); });
  const navLinks = [...document.querySelectorAll('.main-nav a')];
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navLinks.forEach(link => {
          const active = link.hash === `#${entry.target.id}`;
          link.classList.toggle('active', active);
          if (active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-15% 0px -60% 0px' });
    document.querySelectorAll('#about, #research, #projects, #honors').forEach(section => observer.observe(section));
  }
})();
