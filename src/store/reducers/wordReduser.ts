
import { WordActionTypes, WordState, wordAction } from "../../types/words"


const initialState: WordState  = {
    words: [],
    loading: false,
    error: null
}

export const wordReducer = (state = initialState, action: wordAction) : WordState => {
    switch (action.type) {
        case WordActionTypes.FETCH_WORDS:
            return {
                loading: true, error: null, words: []
            }
        case WordActionTypes.FETCH_WORDS_SUCCESS: 
            return {
                loading: false, error: null, words: action.payload     
            }
        case WordActionTypes.FETCH_WORDS_ERROR: 
            return {
                loading: false, error: action.payload, words: []     
            }
        default:
            return state
    }
}