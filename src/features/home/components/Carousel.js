import React, { Component } from "react";
import Slider from "react-slick";
import './homestyle.css'
import { IMAGE_URL } from '../../../networks/api';
import {loadSlider} from '../../../networks/SliderFetcher';
const prevArrow = <img src="chevron-left-solid.svg" />
const nextArrow = <img src="chevron-right-solid.svg" />

export default class CarouselTest extends Component {
    constructor(props) {
        super(props)
        this.state = {
            slider:[],
        }
    }
    componentDidMount() {
        this.loadSlider();
    }
    loadSlider = () =>{
        loadSlider((error, data) => {
            if (error != null) console.log("error is " + error)
            else {
                this.setState({slider : data.data})
            }
        })
    }
    render() {
        const settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            lazyload: true,
            autoplayspeed: 7000,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: false,
			initialSlide: 0,
            prevArrow,
            nextArrow,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        infinite: true,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        prevArrow: '',
                        nextArrow: ''
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        prevArrow: '',
                        nextArrow: ''
                    }
                }
            ]
        };
        return (
            <div  id="carousel_container">
            
            <Slider {...settings} >
            {
               this.state.slider.map((i,k) =>
                <div key={k}>
                    <img className=" w-100 slick-prev-inner slick-next-inner  carousel_gp_img" src={ IMAGE_URL + '/' +i.slider_img} alt="ssm_img1"style={{opacity: 0.8}} />
                </div>
                )
            }
            </Slider>
            </div>
        );
    }
}