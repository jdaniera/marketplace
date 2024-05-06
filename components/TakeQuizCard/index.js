import styles from './TakeQuizCard.module.css';
import Image from 'next/image';
import Link from 'next/link';



export default function TakeQuizCard() {
    return (
        <div className={styles.takeQuizCardContainer}>
            <div className={styles.takeQuizCardInnerContainer}>
                <div className={styles.takeQuizContent}>
                <h1>Out of Ideas</h1>
                <p>Take our quiz and receive a personalized recommendation tailored to your preferences, interests, and needs!</p>
                <Link href="/Quiz">
                <button>Take Quiz</button>
                </Link>
                </div>
            </div>
        </div>
    )
}