import './styles/home.scss';

import Pleasure from './components/pleasure/pleasure';
import About from './components/about/about';
import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';
import Technologies from './components/technologies/technologies';

export default function Home() {
  return (
    <div className="container">
      <Header />
      <Main />
      <Pleasure />
      <Technologies />
      <About />
      <Footer />
    </div>
  );
}
