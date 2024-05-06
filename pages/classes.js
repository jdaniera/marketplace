import ClassesFeaturedCard from "@/components/ClassesFeaturedCard";
import NavBar from "@/components/NavBar";
import styles from '@/styles/Classes.module.css'
import TabBar from "@/components/TabBar";
import ClassesCard from "@/components/ClassesCard";
import Image from 'next/image';
import Link from 'next/link';
import TakeQuizCard from "@/components/TakeQuizCard";

export default function Classes() {
    const headerTitle = 'Classes';
    const backButton = false;
    const pageLayout = 'layout1';
    const searchBar = true;

    return (
        <div className={styles.classesContainer}>
            <div className={styles.classesInnerContainer}>
                <main className={styles.main}>
                <NavBar layout={pageLayout} title={headerTitle} backButton={backButton} />
                <div className={styles.classCardSectionHeader}>
                    <p>Featured Class</p>
                    </div>
                <div className={styles.featuredCard}>
                    <ClassesFeaturedCard />
                </div>
                <div className={styles.takeQuizCard}>
                    <TakeQuizCard />
                </div>
                <div className={styles.classesCardContainer}>
                    <div className={styles.classCardSectionHeader}>
                    <p>Popular Classes in Vancouver</p>
                    </div>
                    <div className={styles.classCardInnerContainer}>
                        <div> 
                            <ClassesCard
                                title='Ring Making Class'
                                location='Kitsilano'
                                image='/images/classCard/classCard01.svg'
                                alt='Ring Making Image'
                                buttonText='more info'
                            />
                        </div>
                        <div> 
                            <ClassesCard
                                title='Knitting Class'
                                location='North Vancouver'
                                image='/images/classCard/classCard02.svg'
                                alt='Knitting Image'
                            />
                        </div>
                        <div> 
                            <ClassesCard
                                title='Cooking Class'
                                location='Vancouver'
                                image='/images/classCard/classCard03.svg'
                                alt='Knitting Image'
                            />
                        </div>
                        <div className={styles.viewMoreCardContainer}>
                            <div className={styles.viewMoreCard}>
                            <Link href='/ClassesAll'>
                                <div className={styles.viewMoreCardOverlay}></div>
                                    <div className={styles.viewMoreCardContent}>
                                        <p className={styles.viewMoreCardText}>View More</p>
                                        <Image src='/images/classCard/classCard04.svg' width={191} height={168} alt='Sushi Making image'/>
                                    </div>
                            </Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.classCardSectionHeader}>
                    <p>Workshops in Vancouver</p>
                    </div>
                    <div className={styles.classCardInnerContainer}>
                        <div> 
                            <ClassesCard
                                title='3-Day Technical Barber Workshop'
                                location='South Vancouver'
                                image='/images/classCard/classCard05.svg'
                                alt='Barber Image'
                            />
                        </div>
                        <div> 
                            <ClassesCard
                                title='2-Day Creative Writing Workshop'
                                location='West Vancouver'
                                image='/images/classCard/classCard06.svg'
                                alt='Page and Pen Image'
                            />
                        </div>
                        <div>
                            <ClassesCard
                                title='3-Day Photography Composition'
                                location='North Vancouver'
                                image='/images/classCard/classCard07.svg'
                                alt='Photo Image'
                            />
                        </div>
                        <div className={styles.viewMoreCardContainer}>
                            <div className={styles.viewMoreCard}> 
                            <Link href='/Workshops'>
                                <div className={styles.viewMoreCardOverlay}></div>
                                    <div className={styles.viewMoreCardContent}>
                                        <p className={styles.viewMoreCardText}>View More</p>
                                        <Image src='/images/classCard/classCard08.svg' width={191} height={168} alt='Sushi Making image'/>
                                    </div>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
                </main>
                <TabBar />
            </div>
        </div>

    )
}