import React from 'react'
import about_img from '../../images/about_img.png'
import styles from './About.module.css'
// import Card from '../Card/Card'
import {useState} from 'react'
import about1 from '../../images/about1.png'
import about2 from '../../images/about2.png'
import about3 from '../../images/about3.png'
import about4 from '../../images/about4.png'
import about5 from '../../images/about5.png'
import about6 from '../../images/about6.png'
export default function About() {
    const [flag, setFlag] = useState(null)
    const [cardData, setCardData] = useState([
        {
            "id" : "1",
            "title" : "logo",
            "image" :about1
        },
        {
            "id" : "2",
            "title" : "logo",
            "image" :about2
        },
        {
            "id" : "3",
            "title" : "websites",
            "image" :about3
        },
        {
            "id" : "4",
            "title" : "mobile",
            "image" :about4
        },
        {
            "id" : "4",
            "title" : "mobile",
            "image" :about5
        },
        {
            "id" : "4",
            "title" : "websites",
            "image" :about6
        }
    ])
    return (
        <div className={styles.about}>
            <div class="container">
                <div className={styles.about_wrapper}>
                    <div className={styles.about_text_wrapper}>
                        <h2 className={styles.about_heading}>About Me</h2>
                        <p className={styles.about_para}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                        <p className={styles.about_para}> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <button className={styles.banner_btns}>Download CV</button>
                    </div>
                    <div>
                    <img src ={about_img} alt="about_img" className={styles.about_img} />
                    
                    </div>
                </div>
                <div className={styles.portfolio_heading_wrapper}>
                    <h3 className={styles.portfolio_heading}>Portfolio</h3>
                    <div>
                    <button className={styles.about_btns}> P </button>
                    <button className={styles.about_btns}> N </button>
                    </div>
                </div>
                <div>
                    <nav>
                        <ul className={styles.about_links_wrapper}>
                            <li className={styles.about_links}><a onClick={()=>setFlag(null)}>All</a></li>
                            <li className={styles.about_links}><a onClick={()=>setFlag("logo")}>Logo</a></li>                                                     
                            <li className={styles.about_links}><a onClick={()=>setFlag("websites")}>Websites</a></li>
                            <li className={styles.about_links}><a onClick={()=>setFlag("mobile")}>Mobile Apps</a></li>
                        </ul>
                    </nav>
                    <div className={styles.links_img_wrapper}>
                    {
                cardData.map((element) => {
                    if(element.title==flag){
                        return(
                            <div className={styles.images}>
                                <div className={styles.dng_img}>
                            <img src={element.image} className={styles.links_img} />
                            </div>
                                </div>
                        )
                    }
                    else if(flag==null){
                        return(
                            <div className={styles.dng_img}>
                            <img src={element.image} className={styles.links_img}/>
                            </div>
                        )
                    }
                })
            }
                    </div>
                </div>
            </div>
        </div>
    )
}
