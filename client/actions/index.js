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

// export const requestFUNC = () => {
//   return {
//     type: "REQUEST_FUNC"
//   }
// }

// export const receiveLanguage = (language) => {
//   return {
//     type: "RECEIVE_LANGUAGE",
//     language: language
//   }
// }

// export function fetchNews() {
//   return (dispatch) => {
//     dispatch(requestFUNC())
//     return request
//       .get('/api/v1/news')
//       .then(res => {
//         dispatch(receiveLanguage(res.text))
//       })
//       .catch(err => {
//         dispatch(showError(err.message))
//       })
//   }
// }