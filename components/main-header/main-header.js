'use client';

import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import MainHeaderBackground from "@/components/main-header/main-header-background";

export default function MainHeader() {
    const path = usePathname();
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="food plate" priority />
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Check meals</NavLink>
            </li>
            <li>
              <NavLink href="/community" >Foodies community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
