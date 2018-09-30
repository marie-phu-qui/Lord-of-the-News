import { combineReducers } from 'redux'
// import news from './news'

const INITIAL_NEWS_STATE = ""
function news(state = INITIAL_NEWS_STATE, action) {
  switch (action.type) {
    case "RECEIVE_NEWS":
      return action.news
    default:
      return state
  }
}

const INITIAL_LANGUAGE_STATE = null
function language(state = INITIAL_LANGUAGE_STATE, action) {
  switch (action.type) {
    case "CHANGE_LANGUAGE":
      return action.language
    default:
      return state
  }
}

export default combineReducers({
  news,
  language
})
