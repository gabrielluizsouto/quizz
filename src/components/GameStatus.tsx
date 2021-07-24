import React from 'react';
import { GameStatusBox } from '../App.styles';

type Props = {
    questionNumber: number;
    totalQuestions: number;
    score: number;
}

export const GameStatus: React.FC<Props> = ({
    questionNumber,
    totalQuestions,
    score
}) => (
    <GameStatusBox>
        <p className="questions-status">
            Question: {questionNumber} / {totalQuestions}
        </p>
        <p className="score">Score: {score}</p>
    </GameStatusBox>
)