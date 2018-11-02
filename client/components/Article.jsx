import React from "react";

const Article = props => {
  return (
    <div> 
      <a href={props.url}>
        <h4 className="text-success">{props.title}</h4>
      </a>
      <p>
        {props.content}
      </p>
    </div>
  );
};



export default Article;