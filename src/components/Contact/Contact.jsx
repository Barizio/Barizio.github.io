import React from 'react'
import {getiImageUrl} from "../../utils"
import styles from "./Contact.module.css"

export const Contact = () => {
  return <footer id='contact' className={styles.container}>
    <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out</p>
    </div>
    <ul className={styles.links}>
        <li className={styles.link}>
        <img src={getiImageUrl("contact/emailIcon.png")} alt="emailicon" />
        <a href="mailto:adesokanadebare@gmail.com" target='_blank'>adebareadesokan@gmail.com</a>
        </li>

        <li className={styles.link}>
        <img src={getiImageUrl("contact/linkedinIcon.png")} alt="linkedinicon" />
        <a href="www.linkedin.com/in/adebare-adesokan-570b7b260" target='_blank'>linkedin.com/Adebare Adesokan</a>
        </li>

        <li className={styles.link}> 
        <img src={getiImageUrl("contact/githubIcon.png")} alt="githubicon" />
        <a href="https://github.com/Barizio" target='_blank'>github.com/Adebare-Adesokan</a>
        </li>
    </ul>
  </footer>
}
