import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import fourpeaks from '../traildetail/fourpeaks.jpg';
import './index.css';


const Gallery = () => (
    <AliceCarousel>
        <img src={fourpeaks} className="yours-custom-class" />
        <img src={fourpeaks} className="yours-custom-class" />
        <img src={fourpeaks} className="yours-custom-class" />
        <img src={fourpeaks} className="yours-custom-class" />
        <img src={fourpeaks} className="yours-custom-class" />
    </AliceCarousel>
)

export default Gallery;