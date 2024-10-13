import { Link } from '@chakra-ui/react';
import React from 'react';

import styles from './navbar.module.css';

const NavLinks = () => {
  return (
    <ul className={ styles.mainContainer }>
      <li key={ 1 } className={ styles.links }>
        <Link href="https://bless.net/">
          <button className={ styles.buttonsFont }>BLESS NET</button>
        </Link>
      </li>
      <li key={ 2 } className={ styles.links }>
        <Link href="https://bridge.bless.net/">
          <button className={ styles.buttonsFont }>BLESS BRIDGE</button>
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
