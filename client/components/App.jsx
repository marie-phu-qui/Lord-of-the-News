import React from 'react'

import { getNews } from '../utils/api'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.getNews = this.getNews.bind(this)
  }
  componentDidMount() {
    this.getNews()
  }
  render() {
    return (
      <div>
        <p>
          hello Gollum
        </p>
      </div>
    )
  }
}

export default App