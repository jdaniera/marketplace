import ServiceCard from '@/components/ServicesCard';
import styles from './MentorSection.module.css'

export default function MentorSection() {
    return(
        <>
            <div className={styles.container}>
                <div className={styles.serviceCard}>
                    <ServiceCard
                    header='Ansa Odoom'
                    subheader='Digital Marketing, SEO, Social Media Management'
                    image='/images/mentors/ansa-odoom.png'
                    alt='woman in professional attire'
                    buttonText='See More'
                    />
                </div>
                <div className={styles.ServiceCard}>
                    <ServiceCard
                    header='Robert Cash'
                    subheader='Senior Marketer, Investment Specialist, SEO'
                    image='/images/mentors/robert-cash.png'
                    alt='man in professional attire'
                    buttonText='See More'
                    />
                </div>
                <div className={styles.ServiceCard}>
                    <ServiceCard
                    header='Erica Roth'
                    subheader='Social Media Marketer, SEO'
                    image='/images/mentors/erica-roth.png'
                    alt='woman in professional attire'
                    buttonText='See More'
                    />
                </div>
                <div className={styles.ServiceCard}>
                    <ServiceCard
                    header='Emily Chen'
                    subheader='Leadership Skills Development, Team Management, Agile & Scrum'
                    image='/images/mentors/emily-chen.png'
                    alt='woman in professional attire'
                    buttonText='See More'
                    />
                </div>
                <div className={styles.ServiceCard}>
                    <ServiceCard
                    header='Frank Bosh'
                    subheader='Brand Manager'
                    image='/images/mentors/bill-bosh.png'
                    alt='man in professional attire'
                    buttonText='See More'
                    />
                </div>
                <div className={styles.ServiceCard}>
                    <ServiceCard
                    header='Maria Flores'
                    subheader='Community Development, Fundraising, Non-Profit Management'
                    image='/images/mentors/maria-flores.png'
                    alt='woman in professional attire'
                    buttonText='See More'
                    />
                </div>
                <div className={styles.ServiceCard}>
                    <ServiceCard
                    header='Jordan Thompson'
                    subheader='Personal Growth, Dating, Style Advisor'
                    image='/images/mentors/jordan-thompson.png'
                    alt='man in professional attire'
                    buttonText='See More'
                    />
                </div>
                <div className={styles.ServiceCard}>
                    <ServiceCard
                    header='Marcus Nguyen'
                    subheader='Business Growth, Investments, Real Estate'
                    image='/images/mentors/marcus-nguyen.png'
                    alt='man in professional attire'
                    buttonText='See More'
                    />
                </div>
        </div>
        </>
    )
}