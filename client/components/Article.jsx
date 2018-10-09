import React from "react";
import { connect } from "react-redux";


class Article extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
  console.log(this.state.language && this.state.language)
  return (
    <div> 
      <a href={this.props.url}>
        <h4 className="text-success">{this.props.title}</h4>
      </a>
      <p>
        {this.props.content}
      </p>
    </div>
  )};
}

const mapStateToProps = state => ({
  language: state.language,
})


export default connect(mapStateToProps)(Article);