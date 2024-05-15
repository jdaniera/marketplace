import { useState } from 'react';
import styles from './MentorForm.module.css'
import Image from 'next/image'
import Confirmation from '@/components/Confirmation';

export default function MentorForm({ }) {

    const [showConfirmation, setShowConfirmation] = useState(false);

    const preferredCommOptions = [
        { label: 'Email', icon: '/images/mentor-buttons/email.svg' },
        { label: 'In Person', icon: '/images/mentor-buttons/in-person.svg' },
        { label: 'Call', icon: '/images/mentor-buttons/call.svg' },
        { label: 'Other', icon: '/images/mentor-buttons/other.svg' }
     ];
    
    const [selectedComm, setSelectedComm] = useState([]);

    const handleSelectComm = (comm) => {
        if (selectedComm.includes(comm)) {
            setSelectedComm(selectedComm.filter(option => option !== comm));
        } else {
            setSelectedComm([...selectedComm, comm]);
        }
    };

    return(
        <>
            <div className={styles.outerFormContainer}>
                <div className={styles.mentorName}>
                    <div className={styles.pageHeader}><p>Mentee Application</p></div>
                </div>
                <div>
                    <div className={styles.editButton}><p>Edit</p></div>
                        <div className={styles.profileContainer}>
                            <div className={styles.profileInnerContainer}>
                                <div className={styles.pfp}><Image src="/images/bookingPaymentImages/jalenPFP.svg" alt="Jalen smith pfp" width={58} height={58} /></div>
                                <div className={styles.name}><p>Jalen Smith</p></div>
                            </div>
                        </div>  
                    <hr/>
                </div>

                <form action="/submit" method="post" className={styles.formContainer}>
                
                    <label for="name">Preferred Pronouns:</label>
                    <input type="text" id="pronouns" name="pronouns" placeholder='Enter Your Preferred Pronoun(s)'/>

                    <label for="career">Career:</label>
                    <input type="text" id="career" name="career" placeholder='Enter Your Career'/>

                    <label for="interests">Interests:</label>
                    <input type="text" id="interests" name="interests" placeholder='Enter Your Interests'/>

                    <label for="reasons">Reasons for Application:</label>
                    <textarea id="reasons" name="reasons" placeholder='Enter Your Reasons' required></textarea>
                    <div className={styles.commContainer}>
                        <p>Preferred Communication Channel:</p>
                        <div className={styles.buttonContainer}>
                            {preferredCommOptions.map((option, index) => (
                                <button 
                                    key={index} 
                                    className={selectedComm.includes(option.label) ? `${styles.selectedButton} ${styles.circularButton}` : `${styles.button} ${styles.circularButton}`} 
                                    onClick={() => handleSelectComm(option.label)}
                                >
                                    <img src={option.icon} alt={option.label} />
                                    <p>{option.label}</p>
                                </button>
                            ))}
                        </div>
                    </div> 
                    <div className={styles.submitButtonOuterContainer}>
                        <div className={styles.submitButtonInnerContainer}>
                            <button type="submit" onClick={() => setShowConfirmation(true)}>Submit Application</button>
                            {showConfirmation && <Confirmation className={showConfirmation ? 'confirmation show' : 'confirmation'} />}
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}