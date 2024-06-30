///////////////////slider below

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

//////////////content slider below

var myContents = document.querySelectorAll('.my-content');
var slides = ['img/post.png', 'img/page.png', 'img/404.png', 'img/index.png'];
var start = 0;

function slider() {
    if (start < slides.length) {
        start = start + 1;
    } else {
        start = 1;
    }

    myContents.forEach(function (content, index) {
        var img = content.querySelector('img');
        var hoverText = content.querySelector('.hover-text');

        if (img && hoverText) {
            img.src = slides[start - 1];
        }
    });
}

setInterval(slider,2000);