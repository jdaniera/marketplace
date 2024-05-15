import Image from 'next/image';
import styles from './SavedButton.module.css';
import { useEffect, useState } from 'react';

export default function SavedButton({ title, subtitle, image, alt, link, buttonText, query, id }) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const savedItemsArray = JSON.parse(localStorage.getItem('savedItems') || '[]');
    const isSaved = savedItemsArray.some(item => item.id === id);
    setSaved(isSaved);
  }, [id]);

  const toggleSaved = () => {
    const savedItemsArray = JSON.parse(localStorage.getItem('savedItems') || '[]');
    let updatedItemsArray;
    // use let so it can update itself each time an item is added

    if (saved) {
        updatedItemsArray = savedItemsArray.filter(item => item.id !== id);
      // check to see if item with the same prompt is already on saved list
    } else {
        updatedItemsArray = [...savedItemsArray, 
          { 
              title,
              subtitle,
              image,
              alt,
              link,
              id,
              buttonText,
              query,
          }];
      }

    localStorage.setItem('savedItems', JSON.stringify(updatedItemsArray));
    setSaved(!saved);
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