import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle =  createGlobalStyle`
    body {
        color: white;
        background-color: #2C2E43;
        font-family: 'Roboto', sans-serif;
    }

    
    button {
        margin-bottom: 8px;
        background-color: #595260;
        color: white;
        width: 300px;
        height: auto;
        min-height: 50px;
        border-radius: 10px;
        box-shadow: 2px 2px 1px black;

        :hover {
            opacity: 0.8;
        }
    }

    h1 {
        margin-bottom: 0px;
    }

    .button-disabled {
        opacity: 0.8;
    }

    .next {
        background-color: gray;
        max-width: 200px;
    }

    .App {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const GameStatusBox =  styled.div`
    width: 100%;
    display: inline-flex;
    justify-content: space-around;
    /* align-items: flex-end; */

    div {
        font-size: small;
    }
`

export const QuestionCardBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        text-align: center;
        margin-top: 2px;
        margin-bottom: 10px;
    }
    
    .question {
        font-size: x-large;
    }

    .feedback {
        margin-bottom: 5px;
        margin-top: 0;
    }

    #feedback-error {
        background-color: red;
    }

    #feedback-correct {
        background-color: green;
    }

`

export const QuestionCardButtons = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;

    p {
        width: 70%;
    }

`