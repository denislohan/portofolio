
let slide = 1;
showSlides(slide);
setInterval(() => changeSlide(1), 5000);

function changeSlide(n) {
  showSlides((slide += n));
}

function showSlides(n) {
  let i, summary, el;
  const slides = document.getElementsByClassName("blogs");
  if (n > slides.length) {
    slide = 1;
  }
  if (n < 1) {
    slide = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";

  }
  slides[slide - 1].style.display = "flex";
  el = slides[slide - 1].getElementsByClassName('blog-smry')[0]
  summary = el.innerText.substr(0,100)
  el.innerText = summary;
}
