import Image from "next/image";
import "../header/header.scss";
import { SocialBtns } from "../social-btns/social-btns";

export default function Header(){
  return(
    <div>
      <div className="header">
        <div className="logo">
          <Image
            src="/white-logo.png"
            alt="My Logo"
            width={95}
            height={120}
            priority
          />
        </div>
        <div className="contact">
          <SocialBtns/>
        </div>
      </div>
      <hr/>
    </div>
  )
}