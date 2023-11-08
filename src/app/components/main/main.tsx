import Image from "next/image";
import "./main.scss";

export default function Main(){
  return(
    <div className="main">
      <div className="main-container">
        <h1>
        👋Hi, my name is Gabriel!
        </h1>
        <h1 className="h1-dev">
          DESENVOLVEDOR FULL SATACK
        </h1>
        <h2>
        {"Welcome to my portfolio! Discover my journey as a developer, with expertise in JavaScript, TypeScript, React, and more. Explore my projects and my passion for agile methodologies like Scrum and Kanban. Learn about what I've built so far."}
        </h2>
      </div>
      <hr/>
    </div>
  )
}