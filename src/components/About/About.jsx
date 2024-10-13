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
                    Since discovering computer science, my passion for innovation has only grown stronger, 
                    particularly in how technology can be used to bridge gaps and drive meaningful change. 
                    I’m deeply committed to revolutionizing the African tech space by developing solutions that address local challenges and empower communities.
                     The idea of creating technology that not only solves problems but also fosters growth, connectivity, and development excites me. I believe Africa holds immense potential, 
                     and my goal is to push boundaries and introduce cutting-edge advancements that elevate the continent's presence in the global tech arena. With every project, 
                    I'm driven to contribute to a future where Africa is recognized as a leader in innovation and technological progress.
                     </p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getiImageUrl("about/frontendIcon.png")} alt="Full Stack icon" />
                <div className={styles.aboutItemText}>
                    <h3>
                        Full Stack Developer
                    </h3>
                    <p>
                    As a full-stack developer,
                     my skills truly shine in both frontend and backend development. 
                     I thrive on the challenge of building seamless, user-friendly experiences while ensuring the underlying systems are robust and scalable. 
                     Whether I'm translating designs into interactive web interfaces or optimizing server-side performance, 
                     I'm deeply committed to refining my craft. As I navigate the dynamic world of web technologies, 
                     I'm eager to continue honing my skills and exploring new techniques to deliver impactful and well-rounded digital solutions.
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
