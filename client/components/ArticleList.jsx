import React from "react";
import { connect } from "react-redux";
import { translate } from '../../server/lib/gollum'
<<<<<<< HEAD
import { nazgulify } from '../../server/lib/nazgul'

// import request from 'superagent';
=======
>>>>>>> 6d5f991a0204929e6ffc6c57e514dd7125742146

// import request from 'superagent';

import { fetchNews, fetchLanguage } from '../actions'
import Article from "./Article";

class ArticleList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
<<<<<<< HEAD
      language: nazgulify,
=======
      news: "",
      language: "",
>>>>>>> 6d5f991a0204929e6ffc6c57e514dd7125742146
    }
  this.gollumify = this.gollumify.bind(this)
  this.english = this.english.bind(this)
  }

gollumify() {
  this.setState({
    language: translate
  })
}

english() {
  this.setState({language: ""})
}

  render() {
    console.log(this.state)
    return (
      < div id="list_articles" className="container" >
      <button className="news-button" onClick={this.english}>English</button>
      <button className="gollum-button"  onClick={this.gollumify}>Gollumify</button>
        {
          this.props.news && JSON.parse(this.props.news).map((article, i) => {
            return (
              <Article
                key={i++}
<<<<<<< HEAD
                title={this.state.language(article.title)}
                content={article.content ? this.state.language(article.content) : article.content}
=======
                title=
                {
                  (this.state.language == translate) 
                  ? this.state.language(article.title) 
                  : (article.title)
                }
                content={article.content}
>>>>>>> 6d5f991a0204929e6ffc6c57e514dd7125742146
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