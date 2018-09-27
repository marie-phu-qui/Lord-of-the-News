import request from 'superagent'

export function getNews() {
  return request.get('/news')
}