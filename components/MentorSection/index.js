import ClassesCard from '../ClassesCard'
import styles from './MentorSection.module.css'
import Link from 'next/link'

export default function MentorSection() {
    return(
        <>
            <div className={styles.header}>
                <h2>Featured Mentors</h2>
            </div>
            <div className={styles.container}>
                <div className={styles.serviceCard}>
                    <ClassesCard
                        title='Ansa Odoom'
                        subtitle='Digital Marketing, SEO, Social Media Management'
                        image='/images/mentors/ansa-odoom.png'
                        alt='woman in professional attire'
                        buttonText='See More'
                        link='/Ansa'
                    />
                </div>
                <div className={styles.ServiceCard}>
                    <ClassesCard
                        title='Robert Cash'
                        subtitle='Senior Marketer, Investment Specialist, SEO'
                        image='/images/mentors/robert-cash.png'
                        alt='man in professional attire'
                        buttonText='See More'
                    />
                </div>
                <div className={styles.ServiceCard}>
                    <ClassesCard
                        title='Erica Roth'
                        subtitle='Social Media Marketer, SEO, Agile & Scrum'
                        image='/images/mentors/erica-roth.png'
                        alt='woman in professional attire'
                        buttonText='See More'
                    />
                </div>
                <div className={styles.ServiceCard}>
                    <ClassesCard
                        title='Emily Chen'
                        subtitle='Leadership Skills Development, Team Management'
                        image='/images/mentors/emily-chen.png'
                        alt='woman in professional attire'
                        buttonText='See More'
                    />
                </div>
                <div className={styles.ServiceCard}>
                    <ClassesCard
                        title='Frank Bosh'
                        subtitle='Brand Manager, Non-Profit Management'
                        image='/images/mentors/bill-bosh.png'
                        alt='man in professional attire'
                        buttonText='See More'
                    />
                </div>
                <div className={styles.ServiceCard}>
                    <ClassesCard
                    title='Maria Flores'
                    subtitle='Community Development, Fundraising'
                    image='/images/mentors/maria-flores.png'
                    alt='woman in professional attire'
                    buttonText='See More'
                    />
                </div>
                <div className={styles.ServiceCard}>
                    <ClassesCard
                    title='Jordan Thompson'
                    subtitle='Personal Growth, Dating, Style Advisor'
                    image='/images/mentors/jordan-thompson.png'
                    alt='man in professional attire'
                    buttonText='See More'
                    />
                </div>
                <div className={styles.ServiceCard}>
                    <ClassesCard
                    title='Marcus Nguyen'
                    subtitle='Business Growth, Investments, Real Estate'
                    image='/images/mentors/marcus-nguyen.png'
                    alt='man in professional attire'
                    buttonText='See More'
                    />
                </div>
        </div>
        </>
    )
}