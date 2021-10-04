import React from 'react'
import banner from '../../images/banner.png'
import behance from '../../images/behance.png'
import dribbble from '../../images/dribbble.png'
import insta from '../../images/insta.png'
import linkedin from '../../images/linkedin.png'
import pinterest from '../../images/pinterest.png'
import backgroung_img from '../../images/backgroung_img.png'
import styles from './Banner.module.css'
export default function Banner() {
    return (
        <div className={styles.banner}>
            <div class="container">
                {/* <div>
                     <img src ={backgroung_img} alt="backgroung_img" />
                </div> */}
                <div className={styles.banner_wrapper}>
                    <div className={styles.banner_text}>
                        <h1><span>Hello, I am</span> <br/> Arslan Bawa</h1>
                        <p className={styles.heading_para}>A young <a>UI/UX</a> designer with crazy for mobile & web design.</p>
                        <div className={styles.find_links}>
                            <p className={styles.links_para}>Find Me on</p>
                            <div className={styles.links_img}>
                            <img src ={behance} alt="behance" />
                            <img src ={dribbble} alt="dribbble" />
                            <img src ={insta} alt="insta" />
                            <img src ={linkedin} alt="linkedin" />
                            <img src ={pinterest} alt="pinterest" />
                            </div>
                        </div>
                        <div className={styles.btns}>
                            <button className={styles.banner_btns}>Hire Me</button>
                            <button className={styles.banner_btns}>Portfolio</button>
                        </div>
                    </div>
                    <div>
                    <img src ={banner} alt="banner" className={styles.banner_img} />
                    </div>
                </div>

            </div>
        </div>
    )
}
