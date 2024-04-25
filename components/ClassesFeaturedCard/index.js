import Styles from './ClassesFeaturedCard.module.css';
import Image from 'next/image';
import Link from 'next/link';


export default function ClassesFeaturedCard() {
    return(
        <div className={Styles.classesFeaturedCardContainer}>
            <div className={Styles.classesFeaturedCardInnerContainer}>
                <div className={Styles.skillLevelTag}>
                <div className={Styles.tagOne}><p>Beginner</p></div>
                <div className={Styles.tagTwo}><p>Intermediate</p></div>
                </div>
                <div className={Styles.imageContainer}>
                <Link href='/classInfo'>
                    <Image src="/images/classesFeaturedCard/potteryClassesImg.svg" width={397} height={168} alt="Classes Featured Card Image" />
                </Link>
                </div>
                <div className={Styles.featuredCardHeader}>
                <p>Pottery Class</p>
                    <Image src="/images/classesFeaturedCard/heartIcon.svg" width={16.7} height={15.5} alt="Heart Icon" />
                </div>
                <div className={Styles.featuredCardLocation}>
                <p>Kitsilano</p>
                </div>
                <div className={Styles.featuredCardButton}>
                <Link href='/classInfo'>
                <button>More info</button>
                </Link>
                </div>


            </div>
        </div>
        
    )

}