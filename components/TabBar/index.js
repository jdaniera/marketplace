import styles from './TabBar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function TabBar() {
    const router = useRouter();

    // const isActive = (href) => {
    //     return router.pathname === href;
    // }

    const isActive = (href) => {
        if (router.pathname === href) {
            return true;
        }
        if (href === '/Services' && (router.pathname === '/Mentorship' || router.pathname === '/Services' || router.pathname === '/Ansa' || router.pathname === '/HomeRepairs' || router.pathname === '/JamesPlunk' || router.pathname === '/BookService' || router.pathname === '/BookingPayment' || router.pathname === '/MentorApply')) {
            return true;
        } else if (href === '/Classes' && (router.pathname === '/Classes' || router.pathname === '/ClassInfo' || router.pathname === '/ClassesAll'|| router.pathname === '/BookingPaymentClasses' || router.pathname === '/Workshops')) {
            return true; 
        }
            return false;
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
                        <Link href="/Services" passHref>
                        <Image 
                            src= {isActive('/Services') ? "/images/tabButtons/services_active.svg" : "/images/tabButtons/services_default.svg"}
                            alt="services button"
                            width={86}
                            height={77}/>
                        </Link>
                    </li>
                    <li>
                        <Link href="/Classes" passHref>
                            <Image 
                                src= {isActive('/Classes') ? "/images/tabButtons/classes_active.svg" : "/images/tabButtons/classes_default.svg"}
                                alt="classes & workshops button"
                                width={86}
                                height={77}/>
                        </Link>
                    </li>
                    <li>
                        <Link href="/Saved" passHref>
                            <Image 
                                src= {isActive('/Saved') ? "/images/tabButtons/saved_active.svg" : "/images/tabButtons/saved_default.svg"}
                                alt="saved list button"
                                width={86}
                                height={77}/>
                        </Link>
                    </li>
                    <li>
                        <Link href="/Profile" passHref>
                            <Image 
                                src= {isActive('/Profile') ? "/images/tabButtons/profile_active.svg" : "/images/tabButtons/profile_default.svg"}
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
