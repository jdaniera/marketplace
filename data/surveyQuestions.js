import Image from 'next/image';
import styles from './surveyQuestions.module.css'

export const surveyQuestions = [
    {
      questionText: 'Who is going?',
      answerOptions: [
        { answerText: 'Solo', score: "one", image: <Image src="/images/gnome1.svg" alt="placeholder" width={190} height={210}/>},
        { answerText: 'Partner', score: "two", image: <Image src="/images/gnome2.svg" alt="placeholder" width={190} height={210} /> },
        { answerText: 'Group', score: "three", image: <Image src="/images/gnome3.svg" alt="placeholder" width={343} height={210} className={styles.soloImg}/> },
      ],
    },
    {
      questionText: 'What type of class are you in the mood for?',
      answerOptions: [
        { answerText: 'Food & Drink', score: "FoodDrink", image: <Image src="/images/placeholderImage.jpg" alt="placeholder" width={170} height={175} /> },
        { answerText: 'Arts & Crafts', score: "ArtsCrafts", image: <Image src="/images/placeholderImage.jpg" alt="placeholder" width={170} height={175} /> },
        { answerText: 'Health & Fitness', score: "HealthFitness", image: <Image src="/images/placeholderImage.jpg" alt="placeholder" width={170} height={175} /> },
        { answerText: 'Outdoor Activities', score: "Outdoor", image: <Image src="/images/placeholderImage.jpg" alt="placeholder" width={170} height={175} /> },
      ],
    }, 
    {
      questionText: 'If you had three hours to yourself, what would you do?',
      answerOptions: [
        { answerText: 'Beer & Wine Tasting', image: <Image src="/images/activity1.svg" alt="placeholder" width={161.5} height={178.5} /> },
        { answerText: 'Draw at a park', image: <Image src="/images/activity2.svg" alt="placeholder" width={161.5} height={178.5} />},
        { answerText: 'Picnic on a beach', image: <Image src="/images/activity3.svg" alt="placeholder" width={161.5} height={178.5} />},
        { answerText: 'Go on a hike', image: <Image src="/images/activity4.svg" alt="placeholder" width={161.5} height={178.5} />},
      ],
    },
    {
      questionText: 'What is your budget for this class?',
      answerOptions: [
        { answerText: 'Up to $50', image: <Image src="/images/money1.svg" alt="money gnome graphic 1" width={171} height={189} />},
        { answerText: 'Up to $100', image: <Image src="/images/money2.svg" alt="money gnome graphic 2" width={171} height={189} />},
        { answerText: 'Up to $250', image: <Image src="/images/money3.svg" alt="money gnome graphic 3" width={171} height={189} />},
        { answerText: 'Up to $500', image: <Image src="/images/money4.svg" alt="money gnome graphic 4" width={171} height={189} />},
      ],
    },
];
export default surveyQuestions;