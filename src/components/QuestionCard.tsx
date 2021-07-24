import React from 'react';
import { AnswerObject } from '../App'
import { QuestionCardBox, QuestionCardButtons } from '../App.styles';
import Button from './Button';

type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNumber: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({
    question,
    answers,
    callback,
    userAnswer,
}) => (
    <QuestionCardBox>
        <p className="question" dangerouslySetInnerHTML={{ __html: question}}></p>
        <QuestionCardButtons>
            {answers.map((answer) => (
                <Button
                    key={answer}
                    answer={answer}
                    disabled={userAnswer ? true : false}
                    callback={callback}
                />
            ))}
        </QuestionCardButtons>
        {userAnswer?.answer ? 
            userAnswer?.correctAnswer === userAnswer?.answer ?
            <p className="feedback" id="feedback-correct">correto</p> : <p className="feedback error" id="feedback-error">Errado</p> 
            : null
        }
    </QuestionCardBox>
)

export default QuestionCard;