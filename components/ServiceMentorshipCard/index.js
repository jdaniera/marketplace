import Styles from './ServiceMentorshipCard.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function ServiceMentorshipCard() {
    return(
        <div className={Styles.serviceMentorshipCardContainer}>
            <div className={Styles.classesCardInnerContainer}>
                <div className={Styles.cardText}>
                    <div className={Styles.cardHeader}>
                        <h2>Mentorship Programs</h2>
                    </div>
                    <div className={Styles.cardBody}>
                        <p>Connect with a mentor and <br/> accelerate your professional growth</p>
                    </div>
                    </div>
                    <div className={Styles.buttonContainer}>
                    <Link href ='/Mentorship'><button>Explore Now</button></Link>
                    </div>
                <div className={Styles.imageContainer}>
                    <Link href='/Mentorship'>
                        <Image src="/images/serviceCardImages/mentorship-card-image.svg" width={398} height={172} alt="mentorship image" />
                    </Link>
                </div>
            </div>
        </div>
        
    ) 

}