import React from 'react'

import { getNews } from '../utils/api'

import request from 'superagent';

const googleNewsApi = 'https://newsapi.org/v2/top-headlines?country=nz&apiKey=4db317e841ff4a9ab8831f158ed48c29'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      news: ''
    }

    this.getNews = this.getNews.bind(this)
  }
  componentDidMount() {
    console.log('hello1')
    this.getNews()
  }

  getNews() {
    return request.get(googleNewsApi)
      .then(res => {
        this.setState({
          news: res.body
        })
      })
  }

  render() {
    console.log(this.state.news.articles)
    return (
      <div>
        <p>
          hello
        </p>
      </div>
    )
  }
}

export default App