import Image from 'next/image';

export const surveyQuestions = [
    {
      questionText: 'Who is going?',
      answerOptions: [
        { answerText: 'Solo', score: "one", image: <Image src="/images/solo.png" alt="placeholder" width={97} height={175} />},
        { answerText: 'Partner', score: "two", image: <Image src="/images/partner.png" alt="placeholder" width={170} height={175} /> },
        { answerText: 'Group', score: "three", image: <Image src="/images/group.png" alt="placeholder" width={375} height={180} /> },
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
        { answerText: 'Beer & Wine Tasting', image: <Image src="/images/beertasting.svg" alt="placeholder" width={170} height={175} /> },
        { answerText: 'Draw at a park', image: <Image src="/images/drawingpark.svg" alt="placeholder" width={170} height={175} />},
        { answerText: 'Picnic on a beach', image: <Image src="/images/Asset19.svg" alt="placeholder" width={170} height={175} />},
        { answerText: 'Go on a hike', image: <Image src="/images/hike.svg" alt="placeholder" width={170} height={175} />},
      ],
    },
    {
      questionText: 'What is your budget for this class?',
      answerOptions: [
        { answerText: 'Up to $50', image: <Image src="/images/placeholderImage.jpg" alt="placeholder" width={170} height={175} />},
        { answerText: 'Up to $100', image: <Image src="/images/placeholderImage.jpg" alt="placeholder" width={170} height={175} />},
        { answerText: 'Up to $250', image: <Image src="/images/placeholderImage.jpg" alt="placeholder" width={170} height={175} />},
        { answerText: 'Up to $500', image: <Image src="/images/placeholderImage.jpg" alt="placeholder" width={170} height={175} />},
      ],
    },
];
export default surveyQuestions;