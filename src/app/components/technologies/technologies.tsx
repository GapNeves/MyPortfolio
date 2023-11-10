import React from 'react';
import Image from 'next/image';
import technologies from '../technologies';
import technology from '../images/technology.png';

import './technologies.scss';

function Technologies() {
  return (
    <div className="technologies">
      <div className="tech-container">
        <h1>Tools and Technologies</h1>
        {technologies.map(({ technology, image }) => (
          <div key={technology}>
            <Image src={image} alt={technology} width={90} />
            <p>{technology}</p>
          </div>
        ))}
      </div>
      <div className="technology">
        <Image src={technology} alt="technology" />
      </div>
    </div>
  );
}

export default Technologies;
