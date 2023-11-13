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
        {portfolio.map(({ id, image, projectName, subTitle, description, Rlink, Plink }) => (
          <SplideSlide key={id} className="work-item">
            <div className="work-content">
              <div className="image-content">
                <Image src={image} alt={projectName} />
              </div>

              <div className="text-content">
                <h2>{projectName}</h2>
                <h3>{subTitle}</h3>
                <p>{description}</p>
                <div className="button-content">
                  <a href={Plink} target="_blank" rel="noopener noreferrer">
                    <button>Projeto</button>
                  </a>
                  <a href={Rlink} target="_blank" rel="noopener noreferrer">
                    <button>Repositório</button>
                  </a>
                </div>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
