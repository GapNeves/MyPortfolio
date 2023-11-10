import Image from 'next/image';
import '../about/about.scss';
import about from '../images/about-me.png';

export default function About() {
  return (
    <div className="about">
      <Image src={about} alt="about me" className="photo-about" />
      <div className="about-me">
        <h1>About me</h1>
        <p>
          I am a graduate in Internet Computing Technology from Faculdade Tecnológica SENAI-MG and
          currently, I am dedicated to studying Web Development to improve my knowledge. My skills
          encompass strong knowledge of JavaScript, React, Node.JS, and other languages and
          frameworks relevant to web development. I hold a keen interest in agile methodologies such
          as Scrum and Kanban, which I find crucial for effective software project management. I
          seek environments that offer flexibility and personal development opportunities, with the
          ultimate goal of expanding my web development skills to make a positive impact on a global
          scale.
        </p>
      </div>
    </div>
  );
}
