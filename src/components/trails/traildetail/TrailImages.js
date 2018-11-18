import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import ImageGallery from 'react-image-gallery';
import fourpeaks from '../traildetail/fourpeaks.jpg'
//{/*src={trail.images[0]}*/}<img src={fourpeaks} />

/*const TrailImages = ({ trail }) => {
  return (
    <React.Fragment>
    </React.Fragment>
  );
}

export default TrailImages;*/


export default class TrailImages extends React.Component {

  render() {

    const images = [
      {
        original: 'http://lorempixel.com/1000/600/nature/1/',
        thumbnail: 'http://lorempixel.com/250/150/nature/1/',
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/2/',
        thumbnail: 'http://lorempixel.com/250/150/nature/2/'
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/3/',
        thumbnail: 'http://lorempixel.com/250/150/nature/3/'
      }
    ]

    return (
      <ImageGallery items={images} />
    );
  }

}


/* 
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
*/