
export const surveyQuestions = [
    {
      questionText: 'Who is going to the class?',
      answerOptions: [
        { answerText: 'Solo', score: "one" },
        { answerText: 'Partner', score: "two" },
        { answerText: 'Group', score: "three" },
      ],
    },
    {
      questionText: 'What type of class are you in the mood for?',
      answerOptions: [
        { answerText: 'Food & Drink', score: "FoodDrink" },
        { answerText: 'Arts & Crafts', score: "ArtsCrafts" },
        { answerText: 'Health & Fitness', score: "HealthFitness" },
        { answerText: 'Outdoor Activities', score: "Outdoor" },
      ],
    }, 
    {
      questionText: 'If you had three hours to yourself, what would you do?',
      answerOptions: [
        { answerText: 'Beer & Wine Tasting' },
        { answerText: 'Draw at a park'},
        { answerText: 'Picnic on a beach'},
        { answerText: 'Go on a hike'},
      ],
    },
    {
      questionText: 'What is your budget for this class?',
      answerOptions: [
        { answerText: 'Up to $50'},
        { answerText: 'Up to $100'},
        { answerText: 'Up to $250'},
        { answerText: 'Up to $500'},
      ],
    },
];
export default surveyQuestions;