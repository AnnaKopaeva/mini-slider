import React, { Component } from 'react';

import '../style/carousel.css'
import Boy1 from '../images/boy_happy.png'
import Boy2 from '../images/boy_copy.png'

const carouselArray = [
  {
    id: 0,
    imgSrc: Boy1,
  }, {
    id: 1,
    imgSrc: Boy2,
  }, {
    id: 2,
    imgSrc: Boy1,
  }, {
    id: 3,
    imgSrc: Boy2,
  }, {
    id: 4,
    imgSrc: Boy1,
  }, {
    id: 5,
    imgSrc: Boy2,
  },
];

class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeIndex: 1,
      activeArray: [],
    }
  }

  componentDidMount(){
    let listSize = carouselArray.length,
        index;
    let { activeArray } = this.state;

    for (let i = 0; i < 40; i++) {
      index = i % listSize;
      activeArray.push(carouselArray[index])
    }
    this.setState({activeArray});
  }

  goToPrevSlide = () => {
    let { activeIndex, activeArray } = this.state;
    let newActiveIndex,
        listSize = carouselArray.length;

    if (activeIndex === 1) {
      newActiveIndex = activeArray.length - listSize;
      console.log(listSize)
    } else if (activeIndex <= activeArray.length) {
      newActiveIndex = activeIndex - 1;
    }

    this.setState({activeIndex: newActiveIndex});
  };

  goToNextSlide = () => {
    let { activeIndex, activeArray } = this.state;
    let newActiveIndex;

    if (activeIndex === activeArray.length - 1) {
      newActiveIndex = 1
    } else if (activeIndex <= activeArray.length) {
      newActiveIndex = activeIndex + 1;
    }

    this.setState({activeIndex: newActiveIndex});
  };

  render() {
    let { activeArray, activeIndex } = this.state;
    console.log(activeIndex);
    let listItems = activeArray.map((slide, key) =>
      <li
        key={key}
        className={(activeIndex === key || (activeIndex - 1) === key || (activeIndex +1) === key) ? 'carousel__slide carousel__slide--active' : 'carousel__slide'}>
        <img src={slide.imgSrc} alt="boy"/>
        <span>{slide.id}</span>
      </li>
    );
    return (
      <div className="carousel-container">
        <a
          href="#"
          className="carousel__arrow carousel__arrow--left"
          onClick={this.goToPrevSlide}
        >
          Назад
        </a>
        <ul className="carousel">
          {listItems}
        </ul>
        <a
          href="#"
          className="carousel__arrow carousel__arrow--right"
          onClick={this.goToNextSlide}
        >
          Вперед
        </a>
      </div>
    );
  }
}

export default Carousel;
