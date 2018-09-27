import request from 'superagent'


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

export function fetchNews() {
  return (dispatch) => {
    dispatch(requestDATA())
    return request
      .get('/api/v1/news')
      .then(res => {
        dispatch(receiveNews(res.text))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}