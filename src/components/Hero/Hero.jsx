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
          Ever since I discovered computer science,
          I've been fascinated by its potential to shape the world around us. From coding elegant algorithms to building complex systems,
          I'm drawn to the creativity and problem-solving it requires. Exploring its interdisciplinary nature, I'm constantly inspired by the diverse applications of technology.
          With each challenge, I'm driven by a relentless curiosity to innovate and make meaningful contributions to the field.
        </p>
        <a className={styles.contactBtn} href="mailto:adesokanadebare@gmail.com">Contact Me</a>

      </div>
      <img src={getiImageUrl("hero/heroImage.png")} alt="Hero Image of me" className={styles.heroImg} />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  )
}
