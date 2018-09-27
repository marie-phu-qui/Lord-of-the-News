import React from "react";
import { translate } from '../../server/lib/gollum'

const Article = props => {
  return (
    <div>
      <a href={props.url}>
        <h4>{translate(props.title)}</h4>
      </a>
      <p>
        {translate(props.content)}
      </p>
    </div>
  );
};

export default Article;