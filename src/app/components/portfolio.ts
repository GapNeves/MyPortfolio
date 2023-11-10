import recipesApp from '../../public/images/receitas.png';
import portfolio from '../../public/images/portfolio.png';
import { StaticImageData } from "next/image";

interface Technology {
  image: StaticImageData;
  screen: string;
  projectName: string;
  subTitle: string;
  description: string;
  skills: string[];
  Rlink: string;
  Plink: string;
}

const projects = [
  {
      image: recipesApp,
      screen: 'mobile-img',
      projectName: 'Recipes App (Mobile)',
      subTitle: 'Front-end',
      description: 'Recipes App is a mobile application that allows you to access a wide variety of recipes, including meals and drinks. With it, you can search by food name and recipe name.',
      skills: ['JavaScript', 'React', 'CSS', 'BrowserRouter', 'ContextAPI', 'RTL', 'Redux', 'Bootstrap'],
      Rlink: 'https://github.com/GapNeves/App-de-Receitas',
      Plink: 'https://app-de-receitas-psi.vercel.app/',
  },
  {
      image: portfolio,
      screen: 'desktop-img',
      projectName: 'Portfolio',
      subTitle: 'Front-end',
      description: `Explore my portfolio to discover my key projects and get in touch with me. From web development, it's a showcase of my best work, providing a glimpse into my skills and achievements.`,
      skills: ['JavaScript', 'React', 'CSS', 'ContextAPI' ],
      Rlink: 'https://github.com/GapNeves/MyPortfolio',
      Plink: 'https://devsgabriel.vercel.app/',
  },
];

export default projects;