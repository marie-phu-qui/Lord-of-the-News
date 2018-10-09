import React from "react";
import { connect } from "react-redux";

import { fetchNews } from '../actions'
import Article from "./Article";

class ArticleList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <div>
        {this.props.loading && <img className="img-ring" src="/images/ring.gif" alt="Responsive image"/>}
        <br/>
          <div  id="list_articles" className="container"> 
          <ul className="list-group">
            <li className="list-group-item">
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
        </li>
        </ul>
      </div >
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