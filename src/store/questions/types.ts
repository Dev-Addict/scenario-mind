export const SET_QUESTIONS = 'SET_QUESTIONS';
export const SET_ANSWER = 'SET_ANSWER';

interface SetQuestions {
    type: typeof SET_QUESTIONS;
    payload: string[];
}

export type AnswerPayload = {
    index: number;
    answer: 1|2|3|4|5;
}

interface SetAnswer {
    type: typeof SET_ANSWER;
    payload: AnswerPayload
}

export interface QuestionsState {
    questions: string[];
    answers: (1|2|3|4|5|undefined)[];
}

export type QuestionsActionTypes = SetQuestions | SetAnswer;
