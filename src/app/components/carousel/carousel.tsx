import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Carousel } from 'react-bootstrap';
// import { Elipse } from "../Icons/elipse";

export default function MyCarousel(){
  return (  
    <Carousel>
          <Carousel.Item>
            <Carousel.Caption>
                <div className="elipse">
                  <p>3-Lorem ipsum dolor sit amet,<br/>consectetur
                    adipiscing elit.<br/>
                    Praesent mattis nisl et vulputate<br/>sodales.
                    Nulla egestas nisi<br/>quis quam ornare.
                  </p>
                </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption>
                <div className="elipse">
                  <p>3-Lorem ipsum dolor sit amet,<br/>consectetur
                    adipiscing elit.<br/>
                    Praesent mattis nisl et vulputate<br/>sodales.
                    Nulla egestas nisi<br/>quis quam ornare.
                  </p>
                </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption>
                <div className="elipse">
                  <p>3-Lorem ipsum dolor sit amet,<br/>consectetur
                    adipiscing elit.<br/>
                    Praesent mattis nisl et vulputate<br/>sodales.
                    Nulla egestas nisi<br/>quis quam ornare.
                  </p>
                </div>
            </Carousel.Caption>
          </Carousel.Item>
    </Carousel>
  )
}