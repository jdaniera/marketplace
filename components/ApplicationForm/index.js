import styles from './ApplicationForm.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function ApplicationForm() {
    return(
<form className={styles.formContainer}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="name">Preferred Pronouns:</label>
            <input type="text" id="pronouns" name="pronouns" required />

            <label htmlFor="career">Career:</label>
            <input type="text" id="career" name="career" />

            <label htmlFor="interests">Interests:</label>
            <input type="text" id="interests" name="interests" />

            <label htmlFor="reasons">Reasons for Application:</label>
            <textarea id="reasons" name="reasons" rows="4" required></textarea>

            <button type="submit">Submit</button>
        </form>
    );
}