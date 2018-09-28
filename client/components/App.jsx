import React from 'react'
import request from 'superagent';

import Nav from "./Nav";
import Header from "./Header";
import ArticleList from "./ArticleList";
import Footer from './Footer';



// import { getNews } from '../utils/api'


const googleNewsApi = 'https://newsapi.org/v2/top-headlines?country=nz&apiKey=4db317e841ff4a9ab8831f158ed48c29'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      news: '',
    }
    this.getNews = this.getNews.bind(this)
  }
  componentDidMount() {
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
    return (
      <React.Fragment>
        <Header />
        <Nav />
        <ArticleList />
        <Footer />
      </React.Fragment>
    )
  }
}

export default App


