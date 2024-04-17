import styles from './TabBar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function TabBar() {
    const router = useRouter();

    const isActive = (href) => {
        return router.pathname === href;
        // checks to see if current page's path (useRouter().pathname) is === given path
    }

    return(
        <>
            <div className={styles.tabContainer}>
                <ul>
                    <li>
                        <Link href="/" passHref>
                            <Image 
                            src= {isActive('/') ? "/images/tabButtons/home_active.svg" :  "/images/tabButtons/home_default.svg"}
                            alt="home button"
                            width={86}
                            height={77}/>
                        </Link>
                    </li>
                    <li>
                        <Link href="/services.js" passHref>
                        <Image 
                            src= {isActive('/services.js') ? "/images/tabButtons/services_active.svg" : "/images/tabButtons/services_default.svg"}
                            alt="services button"
                            width={86}
                            height={77}/>
                        </Link>
                    </li>
                    <li>
                        <Link href="/classes.js" passHref>
                            <Image 
                                src= {isActive('/classes.js') ? "/images/tabButtons/classes_active.svg" : "/images/tabButtons/classes_default.svg"}
                                alt="classes & workshops button"
                                width={86}
                                height={77}/>
                        </Link>
                    </li>
                    <li>
                        <Link href="/saved.js" passHref>
                            <Image 
                                src= {isActive('/saved.js') ? "/images/tabButtons/saved_active.svg" : "/images/tabButtons/saved_default.svg"}
                                alt="saved list button"
                                width={86}
                                height={77}/>
                        </Link>
                    </li>
                    <li>
                        <Link href="/profile.js" passHref>
                            <Image 
                                src= {isActive('/profile.js') ? "/images/tabButtons/profile_active.svg" : "/images/tabButtons/profile_default.svg"}
                                alt="profile button"
                                width={86}
                                height={77}/>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}