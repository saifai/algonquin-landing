// Password gate
const gate = document.getElementById('passwordGate');
const form = document.getElementById('passwordForm');
const errorEl = document.getElementById('passwordError');
const PASSWORD = '1234';

if (gate) {
  // Already unlocked this session?
  if (sessionStorage.getItem('unlocked') === 'true') {
    gate.classList.add('hidden');
  }
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const val = document.getElementById('passwordInput').value;
    if (val === PASSWORD) {
      sessionStorage.setItem('unlocked', 'true');
      gate.classList.add('hidden');
    } else {
      errorEl.textContent = 'Incorrect password.';
      document.getElementById('passwordInput').value = '';
    }
  });
}

// Navbar scroll effect + sticky CTA visibility
const navbar    = document.getElementById('navbar');
const navbarCta = document.getElementById('navbarCta');
const mobileCta = document.getElementById('mobileCta');
const heroCta   = document.querySelector('.hero .btn-cta');

function onScroll() {
  const scrollY = window.scrollY;

  // Frosted navbar after 60px
  if (navbar) navbar.classList.toggle('scrolled', scrollY > 60);

  // Show sticky CTA once the hero CTA scrolls out of view
  const heroCtaBottom = heroCta
    ? heroCta.getBoundingClientRect().bottom
    : 300;
  const pastHero = heroCtaBottom < 0;

  if (navbarCta) navbarCta.classList.toggle('visible', pastHero);
  if (mobileCta) mobileCta.classList.toggle('visible', pastHero);

  // Back to top
  if (backToTop) backToTop.classList.toggle('visible', scrollY > 500);
}

window.addEventListener('scroll', onScroll, { passive: true });

// Back to top
const backToTop = document.getElementById('backToTop');
if (backToTop) {
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// FAQ accordion
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const isOpen = btn.getAttribute('aria-expanded') === 'true';
    // Close all
    document.querySelectorAll('.faq-question').forEach(b => {
      b.setAttribute('aria-expanded', 'false');
      b.nextElementSibling.classList.remove('open');
    });
    // Open clicked (if it was closed)
    if (!isOpen) {
      btn.setAttribute('aria-expanded', 'true');
      btn.nextElementSibling.classList.add('open');
    }
  });
});

// Facebook Pixel — paste your pixel code below
// Example:
// !function(f,b,e,v,n,t,s){...}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
// fbq('init', 'YOUR_PIXEL_ID');
// fbq('track', 'PageView');
