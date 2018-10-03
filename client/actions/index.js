import request from 'superagent'

// Actions to show news data
export const requestDATA = () => {
  return {
    type: "REQUEST_DATA"
  }
}


export const showError = (errorMessage) => {
  return {
    type: "SHOW_ERROR",
    errorMessage: errorMessage
  }
}

export const receiveNews = (news) => {
  return {
    type: "RECEIVE_NEWS",
    news: news
  }
}

// Fetching from API
export function fetchNews() {
  return (dispatch) => {
    dispatch(requestDATA())
    return request
      .get('/api/v1/news')
      .then(res => {
        setTimeout(() => dispatch(receiveNews(res.text)), 3000)
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}

// Action for language change
export const changeLanguage = (language) => ({
  type: 'CHANGE_LANGUAGE',
  language
})
