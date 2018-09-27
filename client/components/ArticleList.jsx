import React from "react";
import { connect } from "react-redux";

import { fetchNews } from '../actions'

import Article from "./Article";

const ArticleList = (props) => {
  return (
    <div id="list_articles" className="container">
      {props.news &&
        JSON.parse(props.news).map((article, i) => {
          return (
            <Article
              key={i++}
              title={article.title}
              content={article.description}
              url={article.url} />
          )
        })
      }
    </div>
  );
};

const mapStateToProps = state => {
  return {
    news: state.news
  };
};

const mapDispatchToProps = (dispatch) => {
  dispatch(fetchNews())
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);