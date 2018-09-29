import request from 'superagent'

const googleAPI_KEY = 'apiKey=4db317e841ff4a9ab8831f158ed48c29'
const country = 'country=nz&'

export function getNews() {
  console.log('hello')
  request.get('/news')
  // return request.get('https://newsapi.org/v2/top-headlines?' + country + googleAPI_KEY)
  //   .then(ApiRes => {
  //     res.json(ApiRes.body.articles)
  //   })
  // .catch(err => {
  //   console.log(err)
  // })
}
