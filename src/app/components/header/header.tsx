import Image from 'next/image';
import './header.scss';
import perfilPotho from '../images/perfil-potho.png';
import photoHeader from '../images/not-and-books.jpg';
import { SocialBtns } from '../social-btns/social-btns';

export default function Header() {
  return (
    <div className="header">
      <div className="header-container">
        <Image
          src={perfilPotho}
          alt="My photo"
          width={70}
          height={70}
          priority
          className="header-photo"
        />
        <SocialBtns />
      </div>
    </div>
  );
}
