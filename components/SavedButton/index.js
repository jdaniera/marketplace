import Image from "next/image"
import styles from './SavedButton.module.css'
import { useState } from "react"

export default function SavedButton({ prompt, dateTime, sendPrompt}) {

    const [load, setLoad] = useState(false);
    const [saved, setSaved] = useState(false);

    const toggleSaved = () => {
        sendPrompt(prompt);
        setSaved(!saved);
        console.log("saved", saved);
        addToSaved(); // call saveItems function when saved button is clicked
        console.log("button clicked"); // check if button click works
    }

    const addToSaved = () => {

        // convert string to object to add multiple items to local storage in array
        var savedItemsArray = JSON.parse(
            localStorage.getItem('savedItems') || '[]'
        );

        var savedItems = {
            promptKey: prompt,
        }

        if (prompt){
            savedItemsArray.push(savedItems);

            // local storage have to convert object to string 
            localStorage.setItem('savedItems', JSON.stringify(savedItemsArray))
        }
    }

    return(
        <>
            <button
                className={styles.heartButton}
                onClick={(e) => {
                    sendPrompt(e, prompt)
                    toggleSaved()
                    setLoad(true)
                }}
            >
                {saved ? (
                   <Image 
                    src="/images/classesFeaturedCard/heartIconFilled.svg" 
                    width={16.7} 
                    height={15.5} 
                    alt="Heart Icon" /> )
                : (
                    <Image 
                        src="/images/classesFeaturedCard/heartIcon.svg" 
                        width={16.7} 
                        height={15.5} 
                        alt="Heart Icon" /> 
                )
                }
            </button>
        </>
    )
}