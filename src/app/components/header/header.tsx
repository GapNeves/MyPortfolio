import Image from "next/image";
import "../header/header.scss";
import { SocialBtns } from "../social-btns/social-btns";

export default function Header(){
  return(
    <main>
      <div className="header">
        <Image
          id="logo"
          src="/white-logo.png"
          alt="My Logo"
          width={95}
          height={120}
          priority
        />
        <SocialBtns/>
      </div>
      <hr/>
    </main>
  )
}