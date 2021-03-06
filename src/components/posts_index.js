import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
import { Link } from "react-router-dom";
import _ from "lodash";
//import PropTypes from "prop-types";

class PostsIndex extends Component {
  static propTypes = {};

  static defaultProps = {};

  componentDidMount() {
    return this.props.fetchPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          {post.title}
        </li>
      );
    });
  }

  render() {
    return (
      <div className="PostsIndex">
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add a Post
          </Link>
        </div>
        <h3>posts</h3>
        <ul className="list-group">{this.renderPosts()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostsIndex);
