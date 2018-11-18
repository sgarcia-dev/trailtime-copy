import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import fourpeaks from '../traildetail/fourpeaks.jpg'
//{/*src={trail.images[0]}*/}<img src={fourpeaks} />
const TrailImages = ({ trail }) => {
  return (
    <React.Fragment>
      <div class="container">
        <div class="mySlides">1 / 6</div>
        <img src={fourpeaks} className="width100" />
      </div>
      <div class="container">
        <div class="mySlides">2 / 6</div>
        <img src={fourpeaks} className="width100" />
      </div>
      <div class="container">
        <div class="mySlides">3 / 6</div>
        <img src={fourpeaks} className="width100" />
      </div>
      <div class="container">
        <div class="mySlides">4 / 6</div>
        <img src={fourpeaks} className="width100" />
      </div>
      <div class="container">
        <div class="mySlides">5 / 6</div>
        <img src={fourpeaks} className="width100" />
      </div>
      <div class="container">
        <div class="mySlides">6 / 6</div>
        <img src={fourpeaks} className="width100" />
      </div>
      <a class="prev" onclick="plusSlides(-1)">❮</a>
      <a class="next" onclick="plusSlides(1)">❯</a>
      <div class="caption-container">
        <p id="caption"></p>
      </div>
      <div class="row">
        <div class="column">
          <img class="demo cursor" src={fourpeaks} className="width100" onclick="currentSlide(1)" alt="fourpeaks" />
          <img class="demo cursor" src={fourpeaks} className="width100" onclick="currentSlide(2)" alt="The Woods" />
          <img class="demo cursor" src={fourpeaks} className="width100" onclick="currentSlide(3)" alt="The Woods" />
          <img class="demo cursor" src={fourpeaks} className="width100" onclick="currentSlide(4)" alt="The Woods" />
          <img class="demo cursor" src={fourpeaks} className="width100" onclick="currentSlide(5)" alt="The Woods" />
          <img class="demo cursor" src={fourpeaks} className="width100" onclick="currentSlide(6)" alt="The Woods" />
        </div>
      </div>
      <script>
        var slideIndex = 1;
        showSlides(slideIndex);

function plusSlides(n) {
          showSlides(slideIndex += n);
        }

function currentSlide(n) {
          showSlides(slideIndex = n);
        }

function showSlides(n) {
  var i;
                    var slides = document.getElementsByClassName("mySlides");
                    var dots = document.getElementsByClassName("demo");
                    var captionText = document.getElementById("caption");
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
        captionText.innerHTML = dots[slideIndex-1].alt;
      }
</script>
    </React.Fragment>
  );
}

export default TrailImages;