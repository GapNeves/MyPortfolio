import Image from "next/image";
import "../works/works.scss";
import { Elipse } from "../Icons/elipse";

export default function Works(){
  return(
      <div className="works">
        <div className="elipse">
          <Elipse/>
          <p>Lorem ipsum dolor sit amet,<br/>consectetur
            adipiscing elit.<br/>
            Praesent mattis nisl et vulputate<br/>sodales.
            Nulla egestas nisi<br/>quis quam ornare.
          </p>
        </div>
        <div className="elipse">
          <Elipse/>
          <p>Lorem ipsum dolor sit amet,<br/>consectetur
            adipiscing elit.<br/>
            Praesent mattis nisl et vulputate<br/>sodales.
            Nulla egestas nisi<br/>quis quam ornare.
          </p>
        </div>
        <div className="elipse">
          <Elipse/>
          <p>Lorem ipsum dolor sit amet,<br/>consectetur
            adipiscing elit.<br/>
            Praesent mattis nisl et vulputate<br/>sodales.
            Nulla egestas nisi<br/>quis quam ornare.
          </p>
        </div>
      </div>
  )
} 