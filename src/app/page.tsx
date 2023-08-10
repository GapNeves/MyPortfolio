import Pleasure from './components/pleasure/pleasure';
import About from './components/about/about';

import "./styles/home.scss";
import Header from './components/header/header';
import Works from './components/works/works';

export default function Home() {
  return (
    <div className="container">
      <Header />
      <Pleasure/>
      <About/>
      <Works/>
      <div className="projects">
        <p></p>
        <p></p>
        <p></p>
      </div>
    </div>
  )
}
