import { useState } from 'react';
import Question from '../Question/Question';
import surveyQuestions from '@/data/surveyQuestions';
import Option1 from '@/components/Options/Option1';
import Option2 from '@/components/Options/Option2';
import Option3 from '@/components/Options/Option3';
import Option4 from '@/components/Options/Option4';
import Option5 from '@/components/Options/Option5';
import Option6 from '@/components/Options/Option6';
import Option7 from '@/components/Options/Option7';
import Option8 from '@/components/Options/Option8';
import Option9 from '@/components/Options/Option9';
import Option10 from '@/components/Options/Option10';
import Option11 from '@/components/Options/Option11';
import Option12 from '@/components/Options/Option12';
import styles from './Survey.module.css';

export default function Survey() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [recommendation, setRecommendation] = useState('');

  const handleAnswerClick = (answer) => {
    const nextQuestion = currentQuestion + 1;
    const newAnswers = [...answers, answer];

    if (nextQuestion < surveyQuestions.length) {
      setAnswers(newAnswers);
      setCurrentQuestion(nextQuestion);
    } else {
      displayRecommendation(newAnswers);
    }
  };

  const handleBackClick = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      // Remove the last answer when going back
      setAnswers(answers.slice(0, -1));
    }
  };

  const handleNextClick = () => {
    if (currentQuestion < surveyQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const displayRecommendation = (answers) => {
    if (answers.includes("one") && answers.includes("FoodDrink")) {
      setRecommendation(<Option1 />);
    } else if (answers.includes("one") && answers.includes("ArtsCrafts")) {
      setRecommendation(<Option2 />);
    } else if (answers.includes("one") && answers.includes("HealthFitness")) {
      setRecommendation(<Option3 />);
    } else if (answers.includes("one") && answers.includes("Outdoor")) {
      setRecommendation(<Option4 />);
    } else if (answers.includes("two") && answers.includes("FoodDrink")) {
      setRecommendation(<Option5 />);
    } else if (answers.includes("two") && answers.includes("ArtsCrafts")) {
      setRecommendation(<Option6 />);
    } else if (answers.includes("two") && answers.includes("HealthFitness")) {
      setRecommendation(<Option7 />);
    } else if (answers.includes("two") && answers.includes("Outdoor")) {
      setRecommendation(<Option8 />);
    } else if (answers.includes("three") && answers.includes("FoodDrink")) {
      setRecommendation(<Option9 />);
    } else if (answers.includes("three") && answers.includes("ArtsCrafts")) {
      setRecommendation(<Option10 />);
    } else if (answers.includes("three") && answers.includes("HealthFitness")) {
      setRecommendation(<Option11 />);
    } else if (answers.includes("three") && answers.includes("Outdoor")) {
      setRecommendation(<Option12 />);
    }
  };

  if (recommendation) {
    return <h1>{recommendation}</h1>;
  }

  return (
    <div className={styles.survey}>
      <Question
        question={surveyQuestions[currentQuestion]}
        onAnswerClick={handleAnswerClick}
      />
      <div className={styles.buttonContainer}>
        <button className={styles.backButton} onClick={handleBackClick} disabled={currentQuestion === 0}>
          Back
        </button>
        <button className={styles.nextButton} onClick={handleNextClick} disabled={currentQuestion === surveyQuestions.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
}
