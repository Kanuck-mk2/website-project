document.addEventListener('DOMContentLoaded', function () {
  document.body.style.opacity = 1;

  const header = document.querySelector('header');

  // Check if the header has not already been faded in
  if (!header.classList.contains('fade-in')) {
    setTimeout(function () {
      header.classList.add('fade-in');

      // Remove the fade-in class after a delay (e.g., 2000 milliseconds)
      setTimeout(function () {
        header.classList.remove('fade-in');
      }, 100);
    }, 100);
  }

  setTimeout(function () {
    document.getElementById('main-container').classList.add('fade-in');
  }, 1000);

  setTimeout(function () {
    document.querySelector('footer').classList.add('fade-in');
  }, 500);

  // Fix typos in the following lines
  const footerContent = document.getElementById("footer-content");
  const currentYear = new Date().getFullYear();
  footerContent.textContent += `©Kanuck Studios ${currentYear}`;
});
