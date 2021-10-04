import React from 'react'
import logo from '../../images/logo.png'
import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.header}>
        <div class ="container">
            <div className={styles.header_wrapper} >
            <div>
                <img src ={logo} alt="logo" className={styles.logo}/>
            </div>
                <nav className={styles.header_nav}>
                <ul className={styles.nav_wrapper}>
                    <li><a>About</a></li>
                    <li><a>Portfolio</a></li>
                    <li><a>Contect</a></li>
                </ul>
                <button>Get Started</button>
                </nav>
             </div>
        </div>
        </div>
    )
}
export default Header;
