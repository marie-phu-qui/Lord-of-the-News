import React from "react";
import { connect } from "react-redux";

import Article from "./Article";

const ArticleList = props => {
  console.log(props.news);
  return (
    <div id="list_articles" className="container">
      {props.news &&
        props.news.map((article, i) => {
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

export default connect(mapStateToProps)(ArticleList);