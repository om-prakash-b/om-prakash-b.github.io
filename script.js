// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Active nav link on scroll
const sections = document.querySelectorAll('main section[id]');
const navItems = document.querySelectorAll('[data-nav]');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navItems.forEach((link) => {
          link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);
sections.forEach((section) => sectionObserver.observe(section));

// Scroll reveal
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
