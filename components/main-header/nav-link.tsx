"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import classes from "./nav-link.module.css";

interface Props {
  href: string;
  children: ReactNode;
}

const NavLink = ({ children, href }: Props) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={
        pathname.startsWith(href)
          ? `${classes.link} ${classes.active}`
          : classes.link
      }
    >
      {children}
    </Link>
  );
};

export default NavLink;
