import React from "react";

const Article = props => {
  return (
    <div>
      <h4>{props.title}</h4>
      <a href='props.url'>
        <p>
          {props.content}
        </p>
      </a>
    </div>
  );
};

export default Article;