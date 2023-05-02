export type Word = {
    word: string
    trans: string
    category: string
    image: string
  }
  
export interface WordState {
    words: Word[];
    loading: boolean;
    error: null | string;
}

export enum WordActionTypes {
    FETCH_WORDS = "FETCH_WORDS",
    FETCH_WORDS_SUCCESS = "FETCH_WORDS_SUCCESS",
    FETCH_WORDS_ERROR = "FETCH_WORDS_ERROR"
}

interface fetchWordsAction {
    type: WordActionTypes.FETCH_WORDS
}
interface fetchWordsSuccessAction {
    type: WordActionTypes.FETCH_WORDS_SUCCESS
    payload: any[]
}
interface fetchWordsErrorAction {
    type: WordActionTypes.FETCH_WORDS_ERROR
    payload: string
}

export type wordAction = fetchWordsAction | fetchWordsSuccessAction | fetchWordsErrorAction
