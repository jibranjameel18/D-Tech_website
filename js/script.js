// js/script.js
// Mobile menu, active nav link, neon ripple, tilt effect

document.addEventListener('DOMContentLoaded', () => {
  // ✅ Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('show');
      menuToggle.classList.toggle('open');
    });
  }

  // ✅ Active link highlight
  const path = window.location.pathname.split('/').pop();
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === path ||
       (path === '' && link.getAttribute('href') === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ✅ Neon ripple effect for all buttons
  document.body.addEventListener('click', e => {
    const btn = e.target.closest('.btn, .btn-primary, .btn-outline, button');
    if (!btn) return;

    const ripple = document.createElement('span');
    ripple.className = 'ripple';

    const rect = btn.getBoundingClientRect();
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;

    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });

  // ✅ Neon glow on hover (ALL BUTTONS)
  const buttons = document.querySelectorAll('.btn, .btn-primary, .btn-outline, button');

  buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      btn.classList.add('neon-active');
    });

    btn.addEventListener('mouseleave', () => {
      btn.classList.remove('neon-active');
    });
  });

  // ✅ Neon 3D tilt for cards
  const tiltElements = document.querySelectorAll('.project-card, .card, .team-card');
  
  tiltElements.forEach(el => {
    el.addEventListener('mousemove', ev => {
      const rect = el.getBoundingClientRect();
      const x = ev.clientX - rect.left;
      const y = ev.clientY - rect.top;
      const rotateX = ((y / rect.height) - 0.5) * 6;
      const rotateY = ((x / rect.width) - 0.5) * -6;

      el.style.transform = `translateY(-6px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      el.style.boxShadow = `0 0 20px rgba(170, 0, 255, 0.7), 0 0 60px rgba(170, 0, 255, 0.4)`;
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
      el.style.boxShadow = '';
    });
  });
});
