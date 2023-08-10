import { GitIcon } from "../Icons/git-icon";
import { InIcon } from "../Icons/in-icon";
import { InstaIcon } from "../Icons/insta-icon";

import"./social-btns.scss";

export function SocialBtns(){
  return(
      <div id="contact">
        <a href="https://www.linkedin.com/in/gabrielneves-dev/" target="blank">
          <InIcon/>
        </a>
        <a href="https://github.com/GapNeves" target="blank">
          <GitIcon/>
        </a>
        <a href="https://www.instagram.com/_pereiiraa_/" target="blank">
          <InstaIcon/>
        </a>
      </div>
  )
}