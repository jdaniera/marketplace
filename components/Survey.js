import { useState } from 'react';
import Question from './Question';
import surveyQuestions from '../data/surveyQuestions';
import Option1 from './Option1';
import Option2 from './Option2';
import Option3 from './Option3';
import Option4 from './Option4';
import Option5 from './Option5';
import Option6 from './Option6';
import Option7 from './Option7';
import Option8 from './Option8';
import Option9 from './Option9';
import Option10 from './Option10';
import Option11 from './Option11';
import Option12 from './Option12';

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

  const displayRecommendation = (answers) => {
    if (answers.includes("one") && answers.includes("FoodDrink")) {
      let recommendation = <Option1 />;
      setRecommendation(recommendation);
      return;
    } else if (answers.includes("one") && answers.includes("ArtsCrafts")) {
      let recommendation = <Option2 />;
      setRecommendation(recommendation);
      return;
    } else if (answers.includes("one") && answers.includes("HealthFitness")) {
      let recommendation = <Option3 />;
      setRecommendation(recommendation);
      return;
    } else if (answers.includes("one") && answers.includes("Outdoor")) {
      let recommendation = <Option4 />;
      setRecommendation(recommendation);
      return;
    }
    else if (answers.includes("two") && answers.includes("FoodDrink")) {
      let recommendation = <Option5 />;
      setRecommendation(recommendation);
      return;
    } else if (answers.includes("two") && answers.includes("ArtsCrafts")) {
      let recommendation = <Option6 />;
      setRecommendation(recommendation);
      return;
    } else if (answers.includes("two") && answers.includes("HealthFitness")) {
      let recommendation = <Option7 />;
      setRecommendation(recommendation);
      return;
    } else if (answers.includes("two") && answers.includes("Outdoor")) {
      let recommendation = <Option8 />;
      setRecommendation(recommendation);
      return;
    }
    else if (answers.includes("three") && answers.includes("FoodDrink")) {
      let recommendation = <Option9 />;
      setRecommendation(recommendation);
      return;
    } else if (answers.includes("three") && answers.includes("ArtsCrafts")) {
      let recommendation = <Option10 />;
      setRecommendation(recommendation);
      return;
    } else if (answers.includes("three") && answers.includes("HealthFitness")) {
      let recommendation = <Option11 />;
      setRecommendation(recommendation);
      return;
    } else if (answers.includes("three") && answers.includes("Outdoor")) {
      let recommendation = <Option12 />;
      setRecommendation(recommendation);
      return;
    }
  };

  if (recommendation) {
    return <h1>{recommendation}</h1>;
  }

  return (
    <div className="survey">
      <Question
        question={surveyQuestions[currentQuestion]}
        onAnswerClick={handleAnswerClick}
      />
    </div>
  );
}