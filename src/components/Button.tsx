import React from 'react';

type Props = {
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled: boolean;
    answer: string;
}

const Button: React.FC<Props> = ({
    answer,
    callback,
    disabled,
}) => (
    <button className={disabled ? 'button-disabled' : 'button-enabled'} disabled={disabled} value={answer} onClick={callback}>
        <span dangerouslySetInnerHTML={{ __html: answer}}></span>
    </button>
)

export default Button;