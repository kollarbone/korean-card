import { useDispatch } from "react-redux"
import {bindActionCreators} from "redux"
import * as WordActionCreators from '../store/action-creator/word'

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(WordActionCreators, dispatch)
}