import Image from "next/image";
import "../about/about.scss";
import technologies from "../technologies";

export default function About(){
  return(
    <div className="about">


      <div className="about-header">  
        <h1>ABOUT ME</h1>
        <h1>TOOLS AND TECHNOLOGY</h1>
      </div>


      <div className="about-coutainer">

        <section className="about-me">
          <p>
            I am a graduate in Internet Computing Technology from Faculdade Tecnológica SENAI-MG and currently, I am dedicated to studying Web Development  to improve my knowledge. My skills encompass strong knowledge of JavaScript, React, Node.JS, and other languages and frameworks relevant to web development. I hold a keen interest in agile methodologies such as Scrum and Kanban, which I find crucial for effective software project management. I seek environments that offer flexibility and personal development opportunities, with the ultimate goal of expanding my web development skills to make a positive impact on a global scale.
          </p>
        </section>

        <div className="technologies">
          {
            technologies.map(({technology, image}) => (
              <div key={technology}>
                <Image
                  src={image} 
                  alt={technology}
                  width={65}
                />
                <p>{technology}</p>
              </div>
            ))
          }
        </div>
      </div>

    </div>
  )
} 