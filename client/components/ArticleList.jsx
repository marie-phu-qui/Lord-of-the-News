import React from "react";
import { connect } from "react-redux";
import { translate } from '../../server/lib/gollum'
// import request from 'superagent';


import { fetchNews, fetchLanguage } from '../actions'

import Article from "./Article";

class ArticleList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      language: translate,
    }
    // this.translate = this.translate.bind(this)
  }

  // componentDidMount() {
  //   this.translate()
  // }

  // translate() {
  //   this.setState({
  //     language: translate()
  //   })
  // }

  render() {
    console.log(this.state)
    return (
      < div id="list_articles" className="container" >
        {
          this.props.news &&
          //this.state.language(
          JSON.parse(this.props.news).map((article, i) => {
            return (
              <Article
                key={i++}
                title={this.state.language(article.title)}
                content={article.content ? this.state.language(article.content) : article.content}
                url={article.url} />
            )
          })
        }
      </div >
    );
  };
}

const mapStateToProps = state => {
  return {
    news: state.news,
    language: state.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  dispatch(fetchNews())
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);