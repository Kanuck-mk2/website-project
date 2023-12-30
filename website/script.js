document.addEventListener('DOMContentLoaded', function () {
  document.body.style.opacity = 1;

  setTimeout(function () {
    document.querySelector('header').classList.add('fade-in');
  }, 500);

  setTimeout(function () {
    document.getElementById('main-container').classList.add('fade-in');
  }, 1000);

  loadContent('index.html');

  document.querySelectorAll('.navbar a').forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      let page = link.getAttribute('href');
      loadContent(page);
    });
  });
});
function loadContent(page) {
  console.log('loading content for page:', page);

  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.status == 200) {
        let tempDiv = document.createElement('div');
        tempDiv.innerHTML = this.responseText;

        let mainContent = tempDiv.querySelector('#main-content');

        if (mainContent) {
          document.getElementById('main-container').innerHTML =
            mainContent.innerHTML;
          // Show/hide containers based on the current page
          document.getElementById('image-container').style.display =
            page === 'about.html' ? 'none' : 'block';
          document.getElementById('text-container').style.display =
            page === 'about.html' ? 'none' : 'flex';
        } else {
          console.error('Element with ID "main-content" not found.');
        }
      } else {
        console.error('Failed to load content. Status:', this.status);
      }
    }
  };

  xhttp.open('GET', page, true);
  xhttp.send();
}
