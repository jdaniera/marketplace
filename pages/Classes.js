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
    const pageLayout = 'layout1';
    const searchBar = true;
    const backButton = true;
    const settings = false;

    return (
        <div className={styles.classesContainer}>
            <div className={styles.classesInnerContainer}>
                <NavBar layout={pageLayout} title={headerTitle} backButton={backButton} searchBar={searchBar} settings={settings} />
                <main className={styles.main}>
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
                                subtitle='Kitsilano'
                                image='/images/classCard/classCard01.svg'
                                alt='Ring Making Image'
                                buttonText='View Class'
                                link='/ClassInfo'
                                id='ring-class'
                                type='class'
                            />
                        </div>
                        <div> 
                            <ClassesCard
                                title='Knitting Class'
                                subtitle='North Vancouver'
                                image='/images/classCard/classCard02.svg'
                                alt='Knitting Image'
                                buttonText='View Class'
                                link='/ClassInfo'
                                id='knitting-class'
                                type='class'
                            />
                        </div>
                        <div> 
                            <ClassesCard
                                title='Cooking Class'
                                subtitle='Vancouver'
                                image='/images/classCard/classCard03.svg'
                                alt='Cooking Image'
                                buttonText='View Class'
                                link='/ClassInfo'
                                id='cooking-class'
                                type='class'
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
                                subtitle='South Vancouver'
                                image='/images/classCard/classCard05.svg'
                                alt='Barber Image'
                                buttonText='View Class'
                                link='/ClassInfo'
                                id='barber-workshop'
                                type='class'
                            />
                        </div>
                        <div> 
                            <ClassesCard
                                title='2-Day Creative Writing Workshop'
                                subtitle='West Vancouver'
                                image='/images/classCard/classCard06.svg'
                                alt='Page and Pen Image'
                                buttonText='View Class'
                                link='/ClassInfo'
                                id='writing-workshop'
                                type='class'
                            />
                        </div>
                        <div>
                            <ClassesCard
                                title='3-Day Photography Composition'
                                subtitle='North Vancouver'
                                image='/images/classCard/classCard07.svg'
                                alt='Photo Image'
                                buttonText='View Class'
                                link='/ClassInfo'
                                id='photography-workshop'
                                type='class'
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
