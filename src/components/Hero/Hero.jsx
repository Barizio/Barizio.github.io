import React from 'react'
import { getiImageUrl } from '../../utils';
import styles from "./Hero.module.css";
export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hi, I'm Adebare
        </h1>
        <p className={styles.description}>
          i do stuff i will put in later
        </p>
        <a className={styles.contactBtn} href="mailto:adesokanadebare@gmail.com">Contact Me</a>
      </div>
      <img src={getiImageUrl("hero/heroImage.png")} alt="Hero Image of me" className={styles.heroImg} />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  )
}
