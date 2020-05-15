import React, { Component } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import c1 from '../../../static/images/toilet paper rolls/main/carousel1.png';
import c2 from '../../../static/images/toilet paper rolls/main/carousel2.jpg';
import c3 from '../../../static/images/toilet paper rolls/main/charminKid.png';
import c4 from '../../../static/images/toilet paper rolls/main/toiletTongue.png';
import c5 from '../../../static/images/toilet paper rolls/main/paper_2020.png';




class DemoCarousel extends Component {
    constructor() {
        super();

        this.setState = {
            AutoPlay: true
        }
    }
    render() {
        return (
            <Carousel autoPlay={this.props.AutoPlay} >
                <div>
                    <img src={c1} />
                    <p className="carousel-img"> 1</p>
                </div>
                <div>
                    <img src={c2} />
                    <p className="carousel-img"> 2</p>
                </div>
                <div>
                    <img src={c3} />
                    <p className="carousel-img"> 3</p>
                </div>
                <div>
                    <img src={c4} />
                    <p className="carousel-img"> 4</p>
                </div>
                <div>
                    <img src={c5} />
                    <p className="carousel-img"> 5</p>
                </div>
            </Carousel>
        );
    }
};
 

export default DemoCarousel;