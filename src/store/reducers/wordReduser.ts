
import { WordActionTypes, WordState, wordAction } from "../../types/words"


const initialState: WordState  = {
    words: [],
    loading: false,
    error: null,
    category: [
        "fruits",
        "drinks",],
}

export const wordReducer = (state = initialState, action: wordAction) : WordState => {
    switch (action.type) {
        case WordActionTypes.FETCH_WORDS:
            return {
                loading: true, error: null, words: [], category: []
            }
        case WordActionTypes.FETCH_WORDS_SUCCESS: 
            return {
                loading: false, error: null, words: action.payload, category: []    
            }
        case WordActionTypes.FETCH_WORDS_ERROR: 
            return {
                loading: false, error: action.payload, words: [], category: []     
            }
        default:
            return state
    }
}