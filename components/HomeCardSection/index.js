import HomeCard from '../HomeCard';
import styles from './HomeCardSection.module.css';

export default function HomeCardSection() {
    return (
        <div className={styles.homeCardSectionContainer}>
            <div className={styles.homeCardSectionHeader}><p>Your Upcoming Bookings</p></div>
            <div className={styles.homeCardSectionInnerContainer}>
                <div className={styles.homeCard}>
                <HomeCard
                    header='French Pastries Bootcamp'
                    date='Saturday, March 23, 2024'
                    image='/images/homeCardImages/homeCard1.svg'
                    alt='Baking Image'
                />
                </div>
                <div className={styles.homeCard}>
                <HomeCard
                    header='Drumming 101'
                    date='Monday, March 26, 2024'
                    image='/images/homeCardImages/homeCard2.svg'
                    alt='Drumming Image'
                />
                </div>
                <div className={styles.homeCard}>
                <HomeCard
                    header='Cocktail Mixing Class'
                    date='Monday, April 8, 2024'
                    image='/images/homeCardImages/homeCard3.svg'
                    alt='Cocktail Image'
                />
                </div>
            </div>
        </div>
    )
}