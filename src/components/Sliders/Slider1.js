import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Typography } from "@material-ui/core";
import React, { Component } from "react";
import Heading1 from '../Headings/Heading1'
import Slider from "react-slick";
import image2 from '../../assets/images/portfolio-4.jpg'
import image5 from '../../assets/images/portfolio-7.jpg'

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      arrows:false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 991.98,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 575.98,
          settings: {
            slidesToShow: 1,
          }
        },
      ]  
    };
    const images=[
        {
            img:image2,
            title:'Jack Wilshere'
        },
        {
            img:image5,
            title:'Anna Wilshere'
        },
        {
            img:image2,
            title:'Robert Wilshere'
        },
        {
            img:image5,
            title:'Dianna Wilshere'
        },
    ]
    return (
      <div className="text-center pb-5 pt-md-5 pt-4 slider-container first-container">
        <Heading1 component="h3" title="Client's Evaluation"/>
        <Slider {...settings}>
          {images.map((image)=>(  
            <div className="mt-md-4 mt-3" key={image.title}>
                <img className="slider-image" src={image.img} alt="Client Opinions"/>
                <Typography className="mt-3 text-white font-weight-bold" color="secondary" variant="h6" component="h4">{image.title}</Typography>
                <Typography className="mt-1 slider-paragraph mb-4" color="secondary" variant="body1" component="p">There are many variations of passages of Lorem Ipsum available,but the majority have suffered alteration.</Typography>
            </div>
          ))}  
          
        </Slider>
      </div>
    );
  }
}