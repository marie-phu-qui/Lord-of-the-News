import React from 'react'
// import request from 'superagent';

// import Nav from "./Nav";
import Header from "./Header";
import ArticleList from "./ArticleList";
import Footer from './Footer';
import TranslateButtons from './TranslateButtons';
import Animation from './Animation';
import Overlay from './Overlay';
// const googleNewsApi = 'https://newsapi.org/v2/top-headlines?country=nz&apiKey=4db317e841ff4a9ab8831f158ed48c29'

class App extends React.Component {
  constructor(props) {
    super(props)
    // this.getNews = this.getNews.bind(this)
  }

// Have commented out as this not not doing anything - fetchnews is being called within articleList component.

  // componentDidMount() {
  //   this.getNews()
  // }

  // getNews() {
  //   return request.get(googleNewsApi)
  //     .then(res => {
  //       this.setState({
  //         news: res.body
  //       })
  //     })
  // }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Overlay />
        <Animation />
        <TranslateButtons/>
        {/* <Nav /> */}
        <ArticleList />
        <Footer />
      </React.Fragment>
    )
  }
}

export default App


