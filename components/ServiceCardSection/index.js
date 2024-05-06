import ServiceCard from '../ServicesCard';
import Link from 'next/link';
import styles from './ServiceCardSection.module.css';

export default function ServiceCardSection() {
    return(
        
        <>
            <div className={styles.container}>
                <div className={styles.serviceCard}>
                    <ServiceCard
                    title='Furniture Building'
                    image='/images/serviceCardImages/furnitureBuilding.svg'
                    alt='Couch Image'
                    buttonText='See More'
                    />
                </div>
                <div className={styles.ServiceCard}>
                    <Link className={styles.LinkedCard} href="/homeRepairs">
                        <ServiceCard
                        title='Home Repairs'
                        image='/images/serviceCardImages/homeRepairs.svg'
                        alt='Couch Image'
                        buttonText='See More'
                        />
                    </Link> 
                </div>
                <div className={styles.ServiceCard}>
                    <ServiceCard
                    title='Outdoor Work'
                    image='/images/serviceCardImages/outdoorWork.svg'
                    alt='Couch Image'
                    buttonText='See More'
                    />
                </div>
                <div className={styles.ServiceCard}>
                    <ServiceCard
                    title='Automotive Work'
                    image='/images/serviceCardImages/automotive.svg'
                    alt='Couch Image'
                    buttonText='See More'
                    />
                </div>
                <div className={styles.ServiceCard}>
                    <ServiceCard
                    title='Tutoring'
                    image='/images/serviceCardImages/tutoring.svg'
                    alt='Couch Image'
                    buttonText='See More'
                    />
                </div>
                <div className={styles.ServiceCard}>
                    <ServiceCard
                    title={<span className="smallerText">Indoor Home Cleaning</span>}
                    image='/images/serviceCardImages/indoorCleaning.svg'
                    alt='Couch Image'
                    buttonText='See More'
                    />
                </div>
                <div className={styles.ServiceCard}>
                    <ServiceCard
                    title='Moving Assistance'
                    image='/images/serviceCardImages/moving.svg'
                    alt='Couch Image'
                    buttonText='See More'
                    />
                </div>
                <div className={styles.ServiceCard}>
                    <ServiceCard
                    title='Dog Walking'
                    image='/images/serviceCardImages/dogWalker.svg'
                    alt='Couch Image'
                    buttonText='See More'
                    />
                </div>
        </div>
        </>
    )
}