import request from 'superagent'

const googleAPI_KEY = 'apiKey=4db317e841ff4a9ab8831f158ed48c29'
const country = 'country=nz&'

export function getNews() {
  console.log('hello')
  request.get('/news')
}
