import { wordReducer } from "./wordReduser";
import {combineReducers} from "redux"

export const rootReducer = combineReducers ( {
    word: wordReducer
})

export type RootState = ReturnType<typeof rootReducer>