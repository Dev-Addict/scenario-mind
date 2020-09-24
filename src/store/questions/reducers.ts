import {QuestionsActionTypes, QuestionsState, SET_ANSWER, SET_QUESTIONS} from "./types";

const initialState: QuestionsState = {
    questions: [],
    answers: []
};

export const questionsReducer = (state = initialState, action: QuestionsActionTypes): QuestionsState => {
    switch (action.type) {
        case SET_QUESTIONS:
            return {
                questions: action.payload,
                answers: new Array(action.payload.length)
            };
        case SET_ANSWER:
            const answers = {...state.answers};
            answers[action.payload.index] = action.payload.answer;

            return {
                questions: state.questions,
                answers
            };
        default:
            return state;
    }
};
