import js from './images/images-technologies/javascript.png';
import node from './images/images-technologies/node.png';
import react from './images/images-technologies/react.png';
import mocha from './images/images-technologies/mocha.png';
import rtl from './images/images-technologies/rtl.png';
import sinon from './images/images-technologies/sinon.png';
import css from './images/images-technologies/css.png';
import sass from './images/images-technologies/sass.png';
import html from './images/images-technologies/html.png';
import docker from './images/images-technologies/docker.png';
import sequelize from './images/images-technologies/sequelize.png';
import redux from './images/images-technologies/redux.png';
import mysql from './images/images-technologies/mysqll.png';
import ts from './images/images-technologies/ts.png';
import chai from './images/images-technologies/chai.png';
import git from './images/images-technologies/git.png';
import api from './images/images-technologies/api.png';
import jest from './images/images-technologies/jest.png';
import express from './images/images-technologies/express.png';
import linux from './images/images-technologies/linux.png';
import hooks from './images/images-technologies/hooks.png';
import { StaticImageData } from 'next/image';

interface Technology {
  technology: string;
  image: StaticImageData;
}

const technologies: Technology[] = [
  { technology: 'JavaScript', image: js },
  { technology: 'TypeScript', image: ts },
  { technology: 'HTML', image: html },
  { technology: 'CSS', image: css },
  { technology: 'Sass', image: sass },
  { technology: 'React', image: react },
  { technology: 'ContextAPi', image: react },
  { technology: 'Redux', image: redux },
  { technology: 'Hooks', image: hooks },
  { technology: 'RTL', image: rtl },
  { technology: 'Jest', image: jest },
  { technology: 'Git', image: git },
  { technology: 'NodeJs', image: node },
  { technology: 'Express.js', image: express },
  { technology: 'Mocha', image: mocha },
  { technology: 'Chai', image: chai },
  { technology: 'Api Rest', image: api },
  { technology: 'Docker', image: docker },
  { technology: 'MySql', image: mysql },
  { technology: 'Sequelize', image: sequelize },
  { technology: 'Sinon', image: sinon },
  { technology: 'Linux', image: linux },
];

export default technologies;
