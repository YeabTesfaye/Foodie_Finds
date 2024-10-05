import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/logo.png";
import classes from "./main-header.module.css";
import MainHeaderBackground from './main-header-background'

const MainHeader = () => {
  return (
    <>
    <MainHeaderBackground />
      <header cla ssName={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logo} priority alt="A plate with food on it" />
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href="/meals">Browse Meals </Link>
            </li>
            <li>
              <Link href="/community">Foodies Community </Link>
            </li>
            <li>
              <Link href="/meals"></Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
