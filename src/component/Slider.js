
import React, { Component } from 'react';
import {Button,} from 'react-bootstrap';
import apple from '../image/apple.jpg';
import chilli from '../image/chilli.jpg';
import tomato from '../image/tomato.jpg';
import { Carousel} from 'react-bootstrap';



class Slider extends React.Component {
    render() {
        return (
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={apple}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={apple}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={apple}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consecteturs.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

        );
        }
    }
    export default Slider;