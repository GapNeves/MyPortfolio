import Image from "next/image";
import "../about/about.scss";
import { CircleX } from "../Icons/circlex";

export default function About(){
  return(
      <div className="aboutme">
        <div className="who">
          <h1>
            WHO IS ME?🤨
          </h1>
          <CircleX/>
          <p>
            My name is Gabriel Pereira Neves,<br/>
            {"I'm from Minas Gerais,"}<br/> born and raised in Belo Horizonte:
          </p>
        </div>
        <div className="about">  
          <h1>
            ABOUT ME👨‍💻
          </h1>
          <p>
            I am a graduate in Internet Computing Technology from<br/> Faculdade Tecnológica SENAI-MG and currently,<br/>I am dedicated to studying Web Development<br/> to improve my knowledge.<br/>My skills encompass strong knowledge of JavaScript, React,<br/>Node.JS, and other languages and frameworks relevant<br/>to web development. I hold a keen interest in agile<br/>methodologies such as Scrum and Kanban,<br/>which I find crucial for effective software project management.<br/>I seek environments that offer flexibility and personal<br/>development opportunities, with the ultimate goal of<br/>expanding my web development skills to make<br/>a positive impact on a global scale.
          </p>
        </div>
      </div>
  )
} 