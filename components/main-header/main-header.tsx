
import Link from "next/link";

import Image from "next/image";
import logo from "../../assets/logo.png";
import classes from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";
import { Fragment } from "react";

const MainHeader = () => {
  return (
    <Fragment>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logo} priority alt="A plate with food on it" />
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
             
              <NavLink href="/meals">Browse Meals </NavLink>
            </li>
            <li>
            
              <NavLink href="/community">Foodies Community </NavLink>
            </li>
            <li>
              {/* <Link
                href="/share"
                className={
                  pathname.startsWith("/share") ? classes.active : undefined
                }
              >
                Share your meals
              </Link> */}
              <NavLink href="/share">Share your meals</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
};

export default MainHeader;
