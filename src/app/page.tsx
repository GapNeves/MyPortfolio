import './styles/home.scss';

import Pleasure from './components/pleasure/pleasure';
import About from './components/about/about';
import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';
import Technologies from './components/technologies/technologies';
import Works from './components/works/works';

export default function Home() {
  return (
    <div className="container">
      <Header />
      <Main />
      <Pleasure />
      <Technologies />
      <Works />
      <About />
      <Footer />
    </div>
  );
}
