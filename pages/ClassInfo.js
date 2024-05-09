import styles from '../styles/ClassInfo.module.css';
import Image from 'next/image';
import TabBar from '@/components/TabBar';
import NavBar from '@/components/NavBar';
import Link from 'next/link';

export default function ClassInfo() {

    const headerTitle = 'Pottery Class';
    const pageLayout = 'layout1';
    const backButton = true;

    return (
        <>
        <NavBar layout={pageLayout} title={headerTitle} backButton={backButton} />
            <div className={styles.classInfoContainer}>
                    <div className={styles.classInfoInnerContainer}>
                    <main className={styles.main}>
                        <div className={styles.classInfoHeader}>
                            <p>Hosted By: <span>Leonardo Gillard</span></p>
                        </div>
                        <div className={styles.skillLevelTag}>
                            <div className={styles.tagOne}><p>Beginner</p></div>
                            <div className={styles.tagTwo}><p>Intermediate</p></div>
                            </div>
                            <div className={styles.imageContainer}>
                                <Image src="/images/classInfo/classInfo01.svg" width={397} height={296} alt="Pottery Image" />
                            </div>
                            <div className={styles.otherImageContainer}>
                                <div className={styles.otherImage}>
                                    <Image src="/images/classInfo/classInfo02.svg" width={88} height={88} alt="Pottery Image" />
                                </div>
                                <div className={styles.otherImage}>
                                    <Image src="/images/classInfo/classInfo03.svg" width={88} height={88} alt="Pottery Image" />
                                </div>
                                <div className={styles.otherImage}>
                                    <Image src="/images/classInfo/classInfo04.svg" width={88} height={88} alt="Pottery Image" />
                                </div>
                                <div className={styles.viewMoreCardContainer}>
                                    <div className={styles.viewMoreCard}>
                                    <Link href='/ClassesAll'>
                                        <div className={styles.viewMoreCardOverlay}></div>
                                            <div className={styles.viewMoreCardContent}>
                                                <p className={styles.viewMoreCardText}>View More</p>
                                                <Image src='/images/classInfo/classInfo05.svg' width={88} height={88} alt='Pottery Image'/>
                                            </div>
                                    </Link>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.classInfoButton}>
                                <button>Enroll Now</button>
                            </div>
                            <div className={styles.classInfoDescription}>
                                <div className={styles.classInfoDecriptionContent}><p>Date:<span>September 10th, 2024</span></p></div>
                                <div className={styles.classInfoDecriptionContent}><p>Size:<span>10-15 People</span></p></div>
                                <div className={styles.classInfoDecriptionContent}><p>Time:<span>10:00 AM - 1:00 PM</span></p></div>
                                <div className={styles.classInfoDecriptionContent}><p>Price:<span>$115.00</span></p></div>
                            </div>
                            <div className={styles.classDescription}>
                                <h2>Class Description</h2>
                                <p>In the cozy studio of "ClayCraft Haven" in Kitsilano, participants embark on a journey of tactile artistry and creative exploration, crafting delicate vessels and intricate sculptures. Guided by expert instructors, they learn the rich history and techniques of pottery, shaping their visions into tangible forms with each patient touch. Amidst the soothing hum of spinning wheels and the camaraderie of fellow enthusiasts, friendships bloom and individual styles emerge. As each piece is fired and glazed, participants witness their creations transform into enduring works of art, reflecting their dedication and creativity.</p>
                            </div>
                        </main>
                        </div>
            </div>
        <TabBar/>
        </>
    )
}
