import ServiceCard from '../ServicesCard';
import Link from 'next/link';
import styles from './ServiceCardSection.module.css';
import ServiceMentorshipCard from '../ServiceMentorshipCard';
import SavedButton from '../SavedButton';

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
                            id='furnitureBuilding'
                        />
                        </div>
                        <div> 
                        <ServiceCard
                            title='Home Repairs'
                            image='/images/serviceCardImages/homeRepairs.svg'
                            alt='Couch Image'
                            buttonText='More Info'
                            link='/HomeRepairs'
                            id='homeRepairs'
                            />
                        </div>
                        <div> 
                        <ServiceCard
                            title='Outdoor Work'
                            image='/images/serviceCardImages/outdoorWork.svg'
                            alt='Couch Image'
                            buttonText='More Info'
                            id='outdoorWork'
                        />
                        </div>
                        <div>
                        <ServiceCard
                            title='Automotive Work'
                            image='/images/serviceCardImages/automotive.svg'
                            alt='Couch Image'
                            buttonText='More Info'
                            id='automotiveWork'
                        />
                        </div>
                        <div> 
                        <ServiceCard
                            title='Elementary Math Tutoring'
                            image='/images/serviceCardImages/tutoring.svg'
                            alt='Couch Image'
                            buttonText='More Info'
                            id='tutoring'
                        />
                        </div>
                        <div>
                        <ServiceCard
                            title={<span className="smallerText">Indoor Home Cleaning</span>}
                            image='/images/serviceCardImages/indoorCleaning.svg'
                            alt='Couch Image'
                            buttonText='More Info'
                            id='indoorCleaning'
                        />
                        </div>
                        <div>
                        <ServiceCard
                            title='Moving Assistance'
                            image='/images/serviceCardImages/moving.svg'
                            alt='Couch Image'
                            buttonText='More Info'
                            id='moving'
                        />
                        </div>
                        <div>
                        <ServiceCard
                            title='Dog Walking'
                            image='/images/serviceCardImages/dogWalker.svg'
                            alt='Couch Image'
                            buttonText='More Info'
                            id='dogWalking'
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