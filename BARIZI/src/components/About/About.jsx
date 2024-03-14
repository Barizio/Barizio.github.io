import React from 'react'
import { getiImageUrl } from '../../utils'
import styles from "./About.module.css"

export const About = () => {
  return <section className={styles.container} id="about">
    <h2 className={styles.title}>About</h2>
    <div className={styles.content}>
        <img className={styles.aboutImage} src={getiImageUrl("about/aboutImage.png")} alt="Me sitting with a laptop" />
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={getiImageUrl("about/computerscienceIcon.png")} alt="Computer Science icon" />
                <div className={styles.aboutItemText}>
                    <h3>
                        Computer scientist
                    </h3>
                    <p>
                    Ever since I discovered computer science, 
                    I've been fascinated by its potential to shape the world around us.
                    From coding elegant algorithms to building complex systems, 
                    I'm drawn to the creativity and problem-solving it requires.
                    Exploring its interdisciplinary nature,
                    I'm constantly inspired by the diverse applications of technology. 
                    With each challenge,
                    I'm driven by a relentless curiosity to innovate and make meaningful contributions to the field.
                     </p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getiImageUrl("about/frontendIcon.png")} alt="Front-end icon" />
                <div className={styles.aboutItemText}>
                    <h3>
                        Front-end Developer
                    </h3>
                    <p>
                    Frontend development is my forte, 
                    where my skills as an intermediate developer truly shine.
                    I thrive on the challenge of translating designs into interactive, 
                    user-friendly experiences. Whether I'm perfecting the layout of a webpage or optimizing its performance,
                    I'm deeply committed to refining my craft. As I navigate the dynamic world of web technologies, 
                    I'm eager to continue honing my skills and exploring new techniques to create impactful digital experiences.
                     </p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getiImageUrl("about/machinelearningIcon.gif")} alt="machine learning icon" />
                <div className={styles.aboutItemText}>
                    <h3>
                        Machine Learning and Artificial Inteligence
                    </h3>
                    <p>
                    While frontend development is my current focus, 
                    I've recently found myself increasingly drawn to the fascinating realms of machine learning and artificial intelligence. 
                    The idea of teaching machines to learn and make decisions autonomously intrigues me deeply. As I delve into the fundamentals of these fields, 
                    I'm captivated by their potential to revolutionize industries and solve complex problems. 
                    My aspiration is to expand my skill set to encompass machine learning and AI, 
                    leveraging data-driven approaches to create intelligent systems that positively impact society. 
                    In the near future, I'm eager to venture into this exciting domain, exploring its possibilities and contributing to its advancements.
                     </p>
                </div>
            </li>
        </ul>
    </div>
  </section>
}
