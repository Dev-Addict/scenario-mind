import {AnswerPayload, Question, QuestionsActionTypes, SET_ANSWER, SET_QUESTIONS} from "./types";

export const setQuestions = (questions: Question[]): QuestionsActionTypes => ({
    type: SET_QUESTIONS,
    payload: questions
});

export const setAnswer = (answerPayload: AnswerPayload): QuestionsActionTypes => ({
    type: SET_ANSWER,
    payload: answerPayload
});
