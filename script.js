// Highlight current page in navigation
const links = document.querySelectorAll('.nav-link');
const path = window.location.pathname;

links.forEach(link => {
  if (link.href.includes(path.split('/').pop())) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});
