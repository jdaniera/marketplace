import { useState } from 'react';
import styles from './MentorForm.module.css'
import Image from 'next/image'

export default function MentorForm({ mentorName, userName, }) {

    const applicantProfiles = [
        { name: 'username' },
        { name: "I'm applying for someone else." }
    ];

    const preferredComm = [
        {comm: 'Email'},
        {comm: 'In Person'},
        {comm: 'Call'},
        {comm: 'Other'},
    ]
    
    // Default profile = user's profile
    const [selectedApplicant, setSelectedApplicant] = useState(applicantProfiles[0]); 
    
    const [selectedComm, setSelectedComm] = useState();

    const handleApplicantSwitch = (e) => {
        const selectedIndex = e.target.value;
        setSelectedApplicant(applicantProfiles[selectedIndex])
    };

    const handleSelectComm = (e) => {
        const selectedIndex = parseInt(e.target.value);
        setSelectedComm(preferredComm[selectedIndex]);
    };

    return(
        <>
            <div className={styles.outerFormContainer}>
                <div className={styles.mentorName}>
                    <h3>Application to be mentored by: {mentorName}</h3>
                </div>
                <div>
                    <p>Applicant:</p>
                    <select id='applicant' name='applicant' value={applicantProfiles.indexOf(selectedApplicant)} onChange={handleApplicantSwitch}>
                        {applicantProfiles.map((profile, index) => (
                            <option key={index} value={index}>{profile.name}</option>
                        ))}
                    </select>
                </div>
                <div className={styles.applicant}>
                    <Image/>
                    <p>{userName}</p>
                </div>
                <hr/>
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
                        <p>Preferred Communication Channel</p>
                            {preferredComm.map((comm, index) => (
                                <label for="communication" key={index} className={styles.radioButtons}>
                                    <input
                                        type="radio"
                                        name="communication"
                                        value={index}
                                        checked = {selectedComm === index} 
                                        onChange={handleSelectComm}
                                    />
                                    {comm.comm}
                                </label>
                            ))}
                        </div> 

                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}