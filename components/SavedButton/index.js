import Image from 'next/image';
import styles from './SavedButton.module.css';
import { useEffect, useState } from 'react';

export default function SavedButton({ title, subtitle, image, alt, link, buttonText, query, id, profilePic, name, rating, profession, price, type }) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const savedItemsArray = JSON.parse(localStorage.getItem('savedItems') || '[]');
    const isSaved = savedItemsArray.some(item => item.id === id);
    setSaved(isSaved);
  }, [id]);

  const toggleSaved = () => {
    if (saved) {
        removeFromLocalStorage(id);
    } else {
        saveToLocalStorage({ 
          id, title, subtitle, image, alt, link, buttonText, query, type,  // class card props
          profilePic, name, rating, profession, price // service card props
        });
    }
    setSaved(!saved);

    if(!saved) {const audio = new Audio('/audio/saved-sound.mp3');
    audio.play();
  }
};

const saveToLocalStorage = (item) => {
    const savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];

    savedItems.push(item);
    localStorage.setItem('savedItems', JSON.stringify(savedItems));
};

const removeFromLocalStorage = (id) => {
    const savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];

    const updatedItems = savedItems.filter(item => item.id !== id);
    localStorage.setItem('savedItems', JSON.stringify(updatedItems));
};

  return (
    <button
      className={styles.savedButton}
      onClick={toggleSaved}
    >
      {saved ? (
        <Image
          src="/images/classesFeaturedCard/heartIconFilled.svg"
          width={16.7}
          height={15.5}
          alt="Heart Icon"
        />
      ) : (
        <Image
          src="/images/classesFeaturedCard/heartIcon.svg"
          width={16.7}
          height={15.5}
          alt="Heart Icon"
        />
      )}
    </button>
    
  )
};