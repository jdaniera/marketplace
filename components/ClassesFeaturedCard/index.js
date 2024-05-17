import Styles from './ClassesFeaturedCard.module.css';
import Image from 'next/image';
import Link from 'next/link';
import SavedButton from '../SavedButton';


export default function ClassesFeaturedCard() {

    const handleSaveClassCard = () => {
        saveToLocalStorage({ id, title, subtitle, image, alt, link, buttonText, query, type: 'class' });
      };


    return(
        <div className={Styles.classesFeaturedCardContainer}>
            <div className={Styles.classesFeaturedCardInnerContainer}>
                <div className={Styles.skillLevelTag}>
                <div className={Styles.tagOne}><p>Beginner</p></div>
                <div className={Styles.tagTwo}><p>Intermediate</p></div>
                </div>
                <div className={Styles.imageContainer}>
                <Link href='/ClassInfo'>
                    <Image src="/images/classesFeaturedCard/potteryClassesImg.svg" width={397} height={168} alt="Classes Featured Card Image" />
                </Link>
                </div>
                <div className={Styles.featuredCardHeader}>
                <p>Pottery Class</p>
                <SavedButton 
                    title='Pottery Class'
                    subtitle='{subtitle}'
                    image='/images/classesFeaturedCard/potteryClassesImg.svg'
                    alt='woman doing pottery'
                    link='/ClassInfo'
                    buttonText='More Info'
                    query=''
                    id='pottery-class'
                    type="class"
                    onClick={handleSaveClassCard}
                />
                </div>
                <div className={Styles.featuredCardLocation}>
                <p>Kitsilano</p>
                </div>
                <div className={Styles.featuredCardButton}>
                <Link href='/ClassInfo'>
                <button>More info</button>
                </Link>
                </div>


            </div>
        </div>
        
    )

}