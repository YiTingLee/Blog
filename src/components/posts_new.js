import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {Field,reduxForm} from 'redux-form';

class PostsNew extends Component {
  renderField(field){
    return(
      <div className="form-group">
        <label>{field.label}</label>
        <input
          // onChange={field.input.onChange}
          // onFocus={field.input.onFocus}
          // onBlur={field.input.onBlur}
          className="form-control"
          {...field.input}
          type="text"
        />
      </div>
    );
  }

  render(){
    return(
      <form>
        <Field
          label="Title for Post"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Tags"
          name="tags"
          component={this.renderField}
        />
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
  form:'PostsNewForm'
})(PostsNew);
