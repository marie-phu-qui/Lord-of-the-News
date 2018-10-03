import React from "react";
import { connect } from "react-redux";

import { fetchNews } from '../actions'
import Article from "./Article";

class ArticleList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    // this.fetchNews = this.fetchNews.bind(this)
  }

  render() {
    return (
      < div id="list_articles" className="container" >
        {this.props.loading && <img src="/images/ring.gif" alt="" />}


        {
          this.props.news && JSON.parse(this.props.news).map((article, i) => {
            return (
              <Article
                key={i++}
                title=
                {
                  (this.props.language)
                    ? this.props.language(article.title)
                    : (article.title)
                }

                content={
                  (this.props.language && article.content)
                    ? this.props.language(article.content)
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

const mapStateToProps = state => ({
  news: state.news,
  language: state.language,
  loading: state.loading,
})

const mapDispatchToProps = (dispatch) => {
  dispatch(fetchNews())
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);