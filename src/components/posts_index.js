import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
//import PropTypes from "prop-types";

class PostsIndex extends Component {
  static propTypes = {};

  static defaultProps = {};

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return <div className="PostsIndex">Posts Index</div>;
  }
}
export default connect(
  null,
  { fetchPosts }
)(PostsIndex);
