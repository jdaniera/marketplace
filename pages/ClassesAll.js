import styles from '@/styles/Workshops.module.css'
import NavBar from '@/components/NavBar';
import TabBar from '@/components/TabBar';
import Image from 'next/image';
import ClassesCard from '@/components/ClassesCard';

export default function ClassesAll() {
    const headerTitle = 'Workshops';
    const backButton = true;
    const pageLayout = 'layout1';
    const searchBar = true;

    return (
        <div className={styles.classesContainer}>
            <div className={styles.classesInnerContainer}>
                <main className={styles.main}>
                <NavBar layout={pageLayout} title={headerTitle} backButton={backButton} />
                <div className={styles.classesCardContainer}>
                    <div className={styles.classCardSectionHeader}>
                        <p>Classes in Vancouver</p>
                    </div>
                        <div className={styles.classCardInnerContainer}>
                            <div> 
                            <ClassesCard
                                title='Pottery Class'
                                subtitle='Kitsilano'
                                image='/images/classesAll/classAll01.svg'
                                alt='Pottery Image'
                            />
                        </div>
                        <div> 
                            <ClassesCard
                                title='Drumming Class'
                                subtitle='East Vancouver'
                                image='/images/classesAll/classAll02.svg'
                                alt='Drumming Image'
                            />
                        </div>
                        <div> 
                            <ClassesCard
                                title='Cocktail Mixing Class'
                                subtitle='Granville Island'
                                image='/images/classesAll/classAll03.svg'
                                alt='Cocktail Mixing Image'
                            />
                        </div>
                            <div> 
                                <ClassesCard
                                    title='Learn Sign Language Class'
                                    subtitle='West Vancouver'
                                    image='/images/classesAll/classAll04.svg'
                                    alt='Sign Language image'
                                />
                            </div>
                            <div>
                                <ClassesCard
                                    title='Comedy Class'
                                    subtitle='East Vancouver'
                                    image='/images/classesAll/classAll05.svg'
                                    alt='Stand Up Comedy Image'
                                />
                            </div>
                            <div> 
                                <ClassesCard
                                    title='Puppy Training Class'
                                    subheader='Stanley Park'
                                    image='/images/classesAll/classAll06.svg'
                                    alt='Dog Image'
                                />
                            </div>
                            <div>
                                <ClassesCard
                                    title='Wine Tasting Class'
                                    subtitle='Robson Street'
                                    image='/images/classesAll/classAll07.svg'
                                    alt='Wine Image'
                                />
                            </div>
                            <div> 
                            <ClassesCard
                                title='Ring Making Class'
                                subtitle='Kitsilano'
                                image='/images/classCard/classCard01.svg'
                                alt='Ring Making Image'
                            />
                            </div>
                            <div> 
                                <ClassesCard
                                    title='Knitting Class'
                                    subtitle='North Vancouver'
                                    image='/images/classCard/classCard02.svg'
                                    alt='Knitting Image'
                                />
                            </div>
                            <div> 
                                <ClassesCard
                                    title='Cooking Class'
                                    subtitle='Vancouver'
                                    image='/images/classCard/classCard03.svg'
                                    alt='Knitting Image'
                                />
                            </div>
                        </div>
                    </div>
                </main>
                <TabBar />
            </div>
        </div>

    )
}
