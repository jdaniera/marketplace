import ServiceCard from '../ServicesCard';
import Link from 'next/link';
import styles from './ServiceCardSection.module.css';
import ServiceMentorshipCard from '../ServiceMentorshipCard';

export default function ServiceCardSection() {
    return(
        <>
         <div className={styles.classesContainer}>
         <div className={styles.classesInnerContainer}>
             <main className={styles.main}>
                <div className={styles.mentorshipCard}>
                <ServiceMentorshipCard/>
                </div>
                <div className={styles.classesCardContainer}>
                    <div className={styles.classCardSectionHeader}>
                    <p>Popular Services in Vancouver</p>
                    </div>
                    <div className={styles.classCardInnerContainer}>
                        <div> 
                        <ServiceCard
                            title='Furniture Building'
                            image='/images/serviceCardImages/furnitureBuilding.svg'
                            alt='Couch Image'
                            buttonText='More Info'
                            display= 'display: none;'
                        />
                        </div>
                        <div> 
                        <ServiceCard
                            title='Home Repairs'
                            image='/images/serviceCardImages/homeRepairs.svg'
                            alt='Couch Image'
                            buttonText='More Info'
                            link='/HomeRepairs'
                            />
                        </div>
                        <div> 
                        <ServiceCard
                            title='Outdoor Work'
                            image='/images/serviceCardImages/outdoorWork.svg'
                            alt='Couch Image'
                            buttonText='More Info'
                        />
                        </div>
                        <div>
                        <ServiceCard
                            title='Automotive Work'
                            image='/images/serviceCardImages/automotive.svg'
                            alt='Couch Image'
                            buttonText='More Info'
                        />
                        </div>
                        <div> 
                        <ServiceCard
                            title='Elementary Math Tutoring'
                            image='/images/serviceCardImages/tutoring.svg'
                            alt='Couch Image'
                            buttonText='More Info'
                        />
                        </div>
                        <div>
                        <ServiceCard
                            title={<span className="smallerText">Indoor Home Cleaning</span>}
                            image='/images/serviceCardImages/indoorCleaning.svg'
                            alt='Couch Image'
                            buttonText='More Info'
                        />
                        </div>
                        <div>
                        <ServiceCard
                            title='Moving Assistance'
                            image='/images/serviceCardImages/moving.svg'
                            alt='Couch Image'
                            buttonText='More Info'
                        />
                        </div>
                        <div>
                        <ServiceCard
                            title='Dog Walking'
                            image='/images/serviceCardImages/dogWalker.svg'
                            alt='Couch Image'
                            buttonText='More Info'
                        />
                        </div>
                    </div>
                </div>
             </main>
         </div>
     </div>
     </>
    )
}