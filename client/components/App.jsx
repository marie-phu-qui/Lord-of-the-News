import React from 'react'

import Header from "./Header";
import ArticleList from "./ArticleList";
import Footer from './Footer';
import TranslateButtons from './TranslateButtons';


export class App extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <React.Fragment>
        <Header />
        <TranslateButtons />
        <ArticleList />
        <Footer />
      </React.Fragment>
    )
  }
}

export default App


