import React, { Component } from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";

class PostsNew extends Component {
  static propTypes = {};

  static defaultProps = {};

  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
      </div>
    );
  }

  render() {
    return (
      <form>
        <Field label="Title" name="title" component={this.renderField} />
        <Field label="Tags" name="tags" component={this.renderField} />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
      </form>
    );
  }
}
export default reduxForm({
  form: "PostsNewForm"
})(PostsNew);
