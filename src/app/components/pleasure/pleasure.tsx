import Image from "next/image";
import "../pleasure/pleasure.scss";

export default function Pleasure(){
  return(
      <div className="pleasure">
      <div>
        <h1>
        {`IT'S GREAT TO CELEBRATE SUCCESS, BUT IT'S MORE`}
        <br/>
        IMPORTANT TO LEARN FROM THE LESSONS OF FAILURE.
        <br/>
          - BILL GATES
        </h1>
        <h3>
        👋Pleasure my name is Gabriel,<br/>welcome to my portfolio.<br/>Feel free to call me and see my projects!
        </h3>
      </div>
          {/* <Image
            className="perfil"
            src="/perfil.png"
            alt="My Logo"
            width={350}
            height={250}
            priority
          /> */}
      </div>
  )
}