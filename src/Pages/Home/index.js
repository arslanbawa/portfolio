import React from 'react'
import styles from './Home.module.css'
import Header from '../../Components/Header'
import Banner from '../../Components/Banner'
import About from '../../Components/About'
import Capibality from "../../Components/Capibality/Capibality";
import Clints from "../../Components/ClintSectionn/Clints";
import Userform from "../../Components/Form/Userform";
import Footer from "../../Components/Footer/Footer";





export default function Home() {
    return (
        <div >
            <Header />
            <Banner />
            <About />
            <Capibality />
            <Clints />
            <Userform />
            <Footer />

        </div>
    )
}
