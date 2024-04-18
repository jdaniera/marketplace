import ServiceCard from '../ServicesCard';
import styles from './ServiceCardSection.module.css';

export default function ServiceCardSection() {
    return(
        <>
            <div className={styles.container}>
                <div className={styles.serviceCard}>
                    <ServiceCard
                    header='Furniture Building'
                    image='/images/serviceCardImages/furnitureBuilding.jpg'
                    alt='Couch Image'
                    />
                </div>
                <div className={styles.ServiceCard}>
                    <ServiceCard
                    header='Home Repairs'
                    image='/images/serviceCardImages/homeRepairs.jpg'
                    alt='Couch Image'
                    />
                </div>
                <div className={styles.ServiceCard}>
                    <ServiceCard
                    header='Outdoor Work'
                    image='/images/serviceCardImages/outddoorWork.jpg'
                    alt='Couch Image'
                    />
                </div>
                <div className={styles.ServiceCard}>
                    <ServiceCard
                    header='Automotive Work'
                    image='/images/serviceCardImages/automotive.jpg'
                    alt='Couch Image'
                    />
                </div>
                <div className={styles.ServiceCard}>
                    <ServiceCard
                    header='Tutoring'
                    image='/images/serviceCardImages/tutoring.jpg'
                    alt='Couch Image'
                    />
                </div>
                <div className={styles.ServiceCard}>
                    <ServiceCard
                    header={<span className="smallerText">Indoor Home Cleaning</span>}
                    image='/images/serviceCardImages/indoorCleaning.jpg'
                    alt='Couch Image'
                    />
                </div>
                <div className={styles.ServiceCard}>
                    <ServiceCard
                    header='Moving Assistance'
                    image='/images/serviceCardImages/moving.jpg'
                    alt='Couch Image'
                    />
                </div>
                <div className={styles.ServiceCard}>
                    <ServiceCard
                    header='Dog Walking'
                    image='/images/serviceCardImages/dogWalker.jpg'
                    alt='Couch Image'
                    />
                </div>
        </div>
        </>
    )
}