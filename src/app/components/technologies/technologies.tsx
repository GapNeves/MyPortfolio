import React from 'react';
import Image from 'next/image';
import technologies from '../technologies';

import './technologies.scss';

function Technologies() {
  return (
    <div className="technologies">
      <div className="tech-container">
        <h1>Tools and Technologies</h1>
        {technologies.map(({ technology, image }) => (
          <div key={technology}>
            <Image src={image} alt={technology} width={100} />
            <p>{technology}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Technologies;
