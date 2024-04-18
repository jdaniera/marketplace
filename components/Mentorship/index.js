import styles from './Mentorship.module.css';
import Image from 'next/image';


export default function Mentorship() {
 return (
    <div className={styles.mentorshipContainer}>
        <div className={styles.mentorshipInnerContainer}>
            <div className={styles.mentorshipHeader}>
                <p>Mentorships</p>
            </div>
            <Image src="/images/mentorship/mentorshipPhoto.svg" alt="mentorship" width={360} height={176}/>
            <div className={styles.mentorshipText}>
            <p>Finding a long-term mentor to help you learn a new skill or discover a new passion is a hard choice. Neighbourly makes finding a Mentor simple and fast. Find one now!</p>
            </div>
            <div className={styles.mentorshipButton}>
                <button>Find Mentor</button>
            </div>
        </div>
    </div>
 )

}