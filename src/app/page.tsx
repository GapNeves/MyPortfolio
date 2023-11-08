import "./styles/home.scss";

import Pleasure from './components/pleasure/pleasure';
import About from './components/about/about';
import Header from './components/header/header';
import Works from './components/works/works';
import Main from './components/main/main';

export default function Home() {
  return (
    <div className="container">
      <Header />
      <Main />
      <Pleasure/>
      <About/>
      <Works/>
    </div>
  )
}
