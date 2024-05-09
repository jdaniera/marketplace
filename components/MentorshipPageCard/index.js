import styles from './MentorshipPageCard.module.css';
import Image from 'next/image';


export default function MentorshipPageCard() {
    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <div className={styles.header}>
                    <h2>Connect with a Mentor</h2>
                </div>
                <div className={styles.image}>
                    <Image src='/images/mentors/first-img.svg' alt='mentorship' width={398} height={201}/>
                </div>
                <div className={styles.quote}>
                    <p>“My mentor played a pivotal role in shaping my understanding of web development by providing personalized guidance and practical insights. Through regular one-on-one sessions, they shared their wealth of experience.”</p>
                </div>
                <div className={styles.name}>
                    <p> -Jon Christopher</p>
                </div>
            </div>
        </div>
    )

}