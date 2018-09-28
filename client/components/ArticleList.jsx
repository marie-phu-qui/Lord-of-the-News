import React from "react";
import { connect } from "react-redux";
import { translate } from '../../server/lib/gollum'
import { nazgulify } from '../../server/lib/nazgul'

// import request from 'superagent';

// import request from 'superagent';

import { fetchNews, fetchLanguage } from '../actions'
import Article from "./Article";

class ArticleList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      news: "",
      language: "",
    }
    this.gollumify = this.gollumify.bind(this)
    this.english = this.english.bind(this)
    this.nazgulify = this.nazgulify.bind(this)
  }

  gollumify() {
    this.setState({
      language: translate
    })
  }

  nazgulify() {
    this.setState({
      language: nazgulify
    })
  }

  english() {
    this.setState({ language: "" })
  }

  render() {
    return (
      < div id="list_articles" className="container" >
        <button className="news-button" onClick={this.english}>English</button>
        <button className="gollum-button" onClick={this.gollumify}>Gollumify</button>
        <button className="nazgul-button" onClick={this.nazgulify}>Nazgul</button>
        {
          this.props.news && JSON.parse(this.props.news).map((article, i) => {
            return (
              <Article
                key={i++}
                title=
                {
                  (this.state.language)
                    ? this.state.language(article.title)
                    : (article.title)
                }

                content={
                  (this.state.language && article.content)
                    ? this.state.language(article.content)
                    : (article.content)
                }
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


