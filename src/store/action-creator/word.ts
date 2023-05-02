import { Words } from "../../data/Words"
import { WordActionTypes, wordAction } from "../../types/words"
import {Dispatch} from "redux"

export const fetchWords = () => {
    return async (dispatch: Dispatch<wordAction>) => {
        try {
            dispatch({type: WordActionTypes.FETCH_WORDS})
            const response = [...Words]
            dispatch({
                type: WordActionTypes.FETCH_WORDS_SUCCESS,
                payload: response
            })
        } catch (e) {
            dispatch({
                type: WordActionTypes.FETCH_WORDS_ERROR, 
                payload: "Произошла ошибка при загрузке слов"
            })
        }
    }
}