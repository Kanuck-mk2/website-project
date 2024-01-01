document.addEventListener('DOMContentLoaded', function () {
  document.body.style.opacity = 1;

  setTimeout(function () {
    document.querySelector('header').classList.add('fade-in');
  }, 500);

  setTimeout(function () {
    document.getElementById('main-container').classList.add('fade-in');
  }, 1000);

  // Fix typos in the following lines
  const footerContent = document.getElementById("footer-content");
  const currentYear = new Date().getFullYear();
  footerContent.textContent += ` ${currentYear}`;
});
