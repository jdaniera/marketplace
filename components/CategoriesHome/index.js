import styles from './CategoriesHome.module.css';
import Image from 'next/image';

export default function CategoriesHome() {
    return (
        <div className={styles.categoryContainer}>
            <div className={styles.categoryHeading}>
                <p>Popular Services</p>
            </div>
            <div className={styles.categoryInnerContainer}>
                <button className={styles.category}>
                    <Image src="/images/homeIcons/icon1.svg" alt="icon 1" width={53} height={62} />
                    <span>Tutoring</span>
                </button>
                <button className={styles.category}>
                    <Image src="/images/homeIcons/icon2.svg" alt="icon 2" width={53} height={62} />
                    <span className={styles.homeRepairText}>Home <br/> Repair</span>
                </button>
                <button className={styles.category}>
                    <Image src="/images/homeIcons/icon3.svg" alt="icon 3" width={52} height={65} />
                    <span>Outdoor</span>
                </button>
                <button className={styles.category}>
                    <Image src="/images/homeIcons/icon4.svg" alt="icon 4" width={51} height={62} />
                    <span>Cleaning</span>
                </button>
            </div>

            <div className={styles.categoryHeading}>
                <p>Popular Classes</p>
            </div>
            
            <div className={styles.categoryInnerContainer}>
                <button className={styles.category}>
                    <Image src="/images/homeIcons/icon5.svg" alt="icon 5" width={59.5} height={62} />
                    <span>Photography</span>
                </button>
                <button className={styles.category}>
                    <Image src="/images/homeIcons/icon6.svg" alt="icon 6" width={62} height={62} />
                    <span>Painting</span>
                </button>
                <button className={styles.category}>
                    <Image src="/images/homeIcons/icon7.svg" alt="icon 7" width={56} height={62} />
                    <span>Baking</span>
                </button>
                <button className={styles.category}>
                    <Image src="/images/homeIcons/icon8.svg" alt="icon 8" width={69.2} height={63} />
                    <span>Yoga</span>
                </button>
            </div>
        </div>
    );
}