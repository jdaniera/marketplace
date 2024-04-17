import styles from './TabBar.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function TabBar() {
    return(
        <>
            <div className={styles.tabContainer}>
                <ul>
                    <li>
                        <Link href="/" passHref>
                            <Image 
                            src= "/images/tabButtons/home_default.svg"
                            alt="home button"
                            width={86}
                            height={77}/>
                        </Link>
                    </li>
                    <li>
                    <Image 
                        src= "/images/tabButtons/services_default.svg"
                        alt="services button"
                        width={86}
                        height={77}/>
                    </li>
                    <li>
                        <Image 
                        src= "/images/tabButtons/classes_default.svg"
                        alt="classes & workshops button"
                        width={86}
                        height={77}/>
                    </li>
                    <li>
                        <Image 
                        src= "/images/tabButtons/saved_default.svg"
                        alt="saved list button"
                        width={86}
                        height={77}/>
                    </li>
                    <li>
                        <Image 
                        src= "/images/tabButtons/profile_default.svg"
                        alt="profile button"
                        width={86}
                        height={77}/>
                    </li>
                </ul>
            </div>
        </>
    )
}