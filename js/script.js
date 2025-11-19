document.addEventListener("DOMContentLoaded", function() {
  const headerPlaceholder = document.getElementById("header-placeholder");
  const footerPlaceholder = document.getElementById("footer-placeholder");

  const mainImage = document.getElementById("main-image");
  const thumbnails = document.querySelectorAll(".thumbnail");

  if (thumbnails.length > 0) {
    thumbnails[0].classList.add("active-thumb");
  };

  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener("click", function() {
      thumbnails.forEach(thumbnail => {
        thumbnail.classList.remove("active-thumb");
      });
      thumbnail.classList.add("active-thumb");
      mainImage.src = thumbnail.src;
    });
  });

  fetch("/nav.html")
    .then(response => response.text())
    .then(data => {
      headerPlaceholder.innerHTML = data;

      const currentPage = window.location.pathname.split("/").pop();
      const navLinks = headerPlaceholder.querySelectorAll("nav a");

      navLinks.forEach(link => {
        const linkPage = link.getAttribute("href").split("/").pop();

        if (linkPage === currentPage) {
          link.classList.add("active");
        }
      });
    });

  fetch("/footer.html")
    .then(response => response.text())
    .then(data => {
      footerPlaceholder.innerHTML = data;
    });
});
