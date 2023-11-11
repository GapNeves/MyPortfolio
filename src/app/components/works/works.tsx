'use client';

import React from 'react';
import Image from 'next/image';
import './works.scss';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import portfolio from '../portfolio';

import '@splidejs/react-splide/css/sea-green';

export default function Works() {
  return (
    <div className="works">
      <h1>Works</h1>
      <Splide>
        {portfolio.map(({ id, image, projectName, subTitle, description }) => (
          <SplideSlide key={id} className="work-item">
            <div className="work-content">
              <div className="image-content">
                <Image src={image} alt={projectName} />
              </div>

              <div className="text-content">
                <h1>{projectName}</h1>
                <h2>{subTitle}</h2>
                <p>{description}</p>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
