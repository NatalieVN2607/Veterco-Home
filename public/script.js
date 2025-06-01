// Toggle search bar visibility
const searchToggle = document.getElementById('searchToggle');
const searchBar = document.getElementById('searchBar');
searchToggle.addEventListener('click', () => {
  searchBar.classList.toggle('show');
});

// Toggle filter sidebar for mobile
const filterToggle = document.getElementById('filterToggle');
const filterSidebar = document.getElementById('filterSidebar');
filterToggle.addEventListener('click', () => {
  filterSidebar.classList.toggle('collapsed');
});

// Show sidebar after scrolling past hero
window.addEventListener('scroll', () => {
  const heroHeight = document.querySelector('.hero').offsetHeight;
  if (window.scrollY > heroHeight / 2) {
    filterSidebar.classList.remove('collapsed');
  } else {
    filterSidebar.classList.add('collapsed');
  }
});

// Reveal modules on scroll
const modules = document.querySelectorAll('.product-module');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.3 });
modules.forEach(module => observer.observe(module));

// Toggle main sidebar on mobile
const menuToggle = document.getElementById('menuToggle');
const mainSidebar = document.getElementById('mainSidebar');

menuToggle.addEventListener('click', () => {
  mainSidebar.classList.toggle('open');
});
