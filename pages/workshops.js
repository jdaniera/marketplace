import styles from '@/styles/Workshops.module.css'
import NavBar from '@/components/NavBar';
import TabBar from '@/components/TabBar';
import Image from 'next/image';
import ClassesCard from '@/components/ClassesCard';

export default function Workshops() {
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
                        <p>Workshops in Vancouver</p>
                    </div>
                        <div className={styles.classCardInnerContainer}>
                            <div> 
                                <ClassesCard
                                    title='3-Day Graphic Design Workshop'
                                    location='South Vancouver'
                                    image='/images/workshops/workShop01.svg'
                                    alt='Computer Image'
                                />
                            </div>
                            <div> 
                                <ClassesCard
                                    title='4-Day Yoga and Wellness'
                                    location='North Vancouver'
                                    image='/images/workshops/workShop02.svg'
                                    alt='Yoga Image'
                                />
                            </div>
                            <div> 
                                <ClassesCard
                                    title='5-Day Coding Bootcamp'
                                    location='Online'
                                    image='/images/workshops/workShop03.svg'
                                    alt='Computer Image'
                                />
                            </div>
                            <div> 
                                <ClassesCard
                                    title='2-Day Public Speaking Workshop'
                                    location='Waterfront'
                                    image='/images/workshops/workShop04.svg'
                                    alt='Guy speaking image'
                                />
                            </div>
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
                            <div>
                                <ClassesCard
                                    title='2-Day Social Media Marketing'
                                    location='Gas Town'
                                    image='/images/workshops/workShop08.svg'
                                    alt='People Talking Image'
                                />
                            </div>
                            <div>
                                <ClassesCard
                                    title='2-Day Parenting Skills Workshop'
                                    location='West Vancouver'
                                    image='/images/workshops/workShop09.svg'
                                    alt='Mother and Child Image'
                                />
                            </div>
                            <div>
                                <ClassesCard
                                    title='2-Day Healthy Cooking'
                                    location='Robson Street'
                                    image='/images/workshops/workShop10.svg'
                                    alt='Mother and Child Image'
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