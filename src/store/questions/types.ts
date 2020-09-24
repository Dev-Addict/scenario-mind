export const SET_QUESTIONS = 'SET_QUESTIONS';
export const SET_ANSWER = 'SET_ANSWER';

export interface Question {
    text: string;
    option1: string;
    option2: string;
    option3: string;
    option4: string
}

interface SetQuestions {
    type: typeof SET_QUESTIONS;
    payload: Question[];
}

export type AnswerPayload = {
    index: number;
    answer: 1|2|3|4;
}

interface SetAnswer {
    type: typeof SET_ANSWER;
    payload: AnswerPayload
}

export interface QuestionsState {
    questions: Question[];
    answers: (1|2|3|4|undefined)[];
}

export type QuestionsActionTypes = SetQuestions | SetAnswer;
