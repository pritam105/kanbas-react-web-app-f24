import React from 'react';

interface QuestionProps {
    question: {
      _id: string;
      title: string;
      questionText: string;
      choices?: { text: string; isCorrect: boolean }[];
      isTrue?: boolean;
      correctAnswers?: string[];
    };
    answer: any;
    onChange: (answer: any) => void;
  }
  
function MultipleChoiceQuestion({ question, answer, onChange }: QuestionProps) {
  return (
    <div>
      <h4>{question.title}</h4>
      <p>{question.questionText}</p>
      {question.choices && question.choices.map((choice, index) => (
        <label key={index}>
          <input
            type="radio"
            name={`question-${question._id}`}
            checked={answer === choice.text}
            onChange={() => onChange(choice.text)}
          />
          {choice.text}
        </label>
      ))}
    </div>
  );
}

export default MultipleChoiceQuestion;
