import styles from './QuizCard.module.css';
import Image from 'next/image';

export default function QuizCard({ image, header, date, alt}) {
    return (
    <div className={styles.quizCardContainer}>
        <div className={styles.quizCardTitle}>
            <p>
                The Neighbourly Genie Reccomends!
            </p>
        </div>
        <div className={styles.quizCardInnerContainer}>
            <div className={styles.quizCardHeader}>
                <p>{header}</p>
            </div>
            <div className={styles.quizCardDate}>
                <p>{date}</p>
            </div>
            <div className={styles.quizCardImage}>
                <Image src={image} alt={alt} width={315} height={255}/>
            </div>
            <div className={styles.mentorshipButton}>
                <button>Book Now</button>
            </div>
        </div>
        <div className={styles.startOverButton}>
            <button>Start Over</button>
        </div>
    </div>
       
    );
}