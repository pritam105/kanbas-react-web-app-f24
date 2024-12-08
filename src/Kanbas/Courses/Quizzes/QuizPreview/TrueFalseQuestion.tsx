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

function TrueFalseQuestion({ question, answer, onChange }: QuestionProps) {
  return (
    <div>
      <h4>{question.title}</h4>
      <p>{question.questionText}</p>
      <label>
        <input
          type="radio"
          name={`question-${question._id}`}
          checked={answer === true}
          onChange={() => onChange(true)}
        />
        True
      </label>
      <label>
        <input
          type="radio"
          name={`question-${question._id}`}
          checked={answer === false}
          onChange={() => onChange(false)}
        />
        False
      </label>
    </div>
  );
}

export default TrueFalseQuestion;