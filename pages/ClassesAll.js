import styles from '@/styles/Workshops.module.css'
import NavBar from '@/components/NavBar';
import TabBar from '@/components/TabBar';
import Image from 'next/image';
import ClassesCard from '@/components/ClassesCard';

export default function ClassesAll() {
    const headerTitle = 'Classes';
    const backButton = true;
    const pageLayout = 'layout1';
    const searchBar = true;

    return (
        <div className={styles.classesContainer}>
            <div className={styles.classesInnerContainer}>
                <NavBar layout={pageLayout} title={headerTitle} backButton={backButton} />
                <main className={styles.main}>
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
                                buttonText='More Info'
                                link='/ClassInfo'
                                id='pottery-class'
                            />
                        </div>
                        <div> 
                            <ClassesCard
                                title='Drumming Class'
                                subtitle='East Vancouver'
                                image='/images/classesAll/classAll02.svg'
                                alt='Drumming Image'
                                buttonText='More Info'
                                id='drumming-class'
                            />
                        </div>
                        <div> 
                            <ClassesCard
                                title='Cocktail Mixing Class'
                                subtitle='Granville Island'
                                image='/images/classesAll/classAll03.svg'
                                alt='Cocktail Mixing Image'
                                buttonText='More Info'
                                id='cooking-class'
                            />
                        </div>
                            <div> 
                                <ClassesCard
                                    title='Learn Sign Language Class'
                                    subtitle='West Vancouver'
                                    image='/images/classesAll/classAll04.svg'
                                    alt='Sign Language image'
                                    buttonText='More Info'
                                    id='asl-class'
                                />
                            </div>
                            <div>
                                <ClassesCard
                                    title='Comedy Class'
                                    subtitle='East Vancouver'
                                    image='/images/classesAll/classAll05.svg'
                                    alt='Stand Up Comedy Image'
                                    buttonText='More Info'
                                    id='comedy-class'
                                />
                            </div>
                            <div> 
                                <ClassesCard
                                    title='Puppy Training Class'
                                    subheader='Stanley Park'
                                    image='/images/classesAll/classAll06.svg'
                                    alt='Dog Image'
                                    buttonText='More Info'
                                    id='pottery-class'
                                />
                            </div>
                            <div>
                                <ClassesCard
                                    title='Wine Tasting Class'
                                    subtitle='Robson Street'
                                    image='/images/classesAll/classAll07.svg'
                                    alt='Wine Image'
                                    buttonText='More Info'
                                    id='wine-tasting-class'
                                />
                            </div>
                            <div> 
                            <ClassesCard
                                title='Ring Making Class'
                                subtitle='Kitsilano'
                                image='/images/classCard/classCard01.svg'
                                alt='Ring Making Image'
                                buttonText='More Info'
                                id='ring-class'
                            />
                            </div>
                            <div> 
                                <ClassesCard
                                    title='Knitting Class'
                                    subtitle='North Vancouver'
                                    image='/images/classCard/classCard02.svg'
                                    alt='Knitting Image'
                                    buttonText='More Info'
                                    id='knitting-class'
                                />
                            </div>
                            <div> 
                                <ClassesCard
                                    title='Cooking Class'
                                    subtitle='Vancouver'
                                    image='/images/classCard/classCard03.svg'
                                    alt='Knitting Image'
                                    buttonText='More Info'
                                    id='cooking-class'
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
