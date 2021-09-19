// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerText = dots[slideIndex-1].alt;
}

document.addEventListener(
  'keydown',
  function(event) {
    if(event.key === "Escape") {
      closeModal()
    }
  },
  false
)

function lightBoxFixClose() {
  const elements = document.querySelectorAll(".lightbox-close");
  for(const element of elements) {
      element.addEventListener("click", function() {
          const scrollY = window.scrollY;
          const scrollX = window.scrollX;
          setTimeout(function() {
              window.scrollTo({top: scrollY, left: scrollX});
          }, 1);
      });
  }
}

if (document.readyState === "complete" || document.readyState === "interactive") {
  setTimeout(lightBoxFixClose, 1);
} else {
  document.addEventListener("DOMContentLoaded", lightBoxFixClose, false);
}