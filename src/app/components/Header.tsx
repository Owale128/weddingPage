import Link from 'next/link';
import style from '../sass/Header.module.scss';
import React from 'react';

export const Header = () => {

    return(
    <div>
      <header className={style.header}>
        <nav className={style.nav}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/rsvp">RSVP</Link>
        </nav>
      </header>
    </div>
    )
}