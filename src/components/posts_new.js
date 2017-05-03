import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {Field,reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {createPost} from '../actions';

class PostsNew extends Component {
  renderField(field){
    // const {meta:{touched , error }} = field;
    const className =`form-group ${field.meta.touched && field.meta.error ? 'has-danger' : '' }`;

    return(
      <div className={className}>
        <label>{field.label}</label>
        <input
          // onChange={field.input.onChange}
          // onFocus={field.input.onFocus}
          // onBlur={field.input.onBlur}
          className="form-control"
          {...field.input}
          type="text"
        />
        <div className="text-help">
          {field.meta.touched ? field.meta.error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values){
    // this === component
    this.props.createPost(values, () =>{
      this.props.history.push('/');
    });
    console.log(values);
  }

  render(){
    const {handleSubmit} = this.props;

    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title for Post"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className = "btn btn-primary">submit</button>
        <Link className="btn btn-danger" to="/">Cancel</Link>
      </form>
    );
  }
}

function validate(values){

  const errors ={};
  // Validate the inputs from 'values'
  if(!values.title || values.title.length <3 ){
    errors.title = "Enter a title that is at least 3 characters";
  }
  if(!values.categories){
    errors.categories = "Enter some categories!";
  }
  if(!values.content){
    errors.content = "Enter some content!";
  }

  //If errors is empty, the form is fine to submit
  // If errors has any properties, redux form assumes form is invalid
  return errors;
}

export default reduxForm({
  validate:validate,
  form:'PostsNewForm'
})(
  connect(null,{createPost})(PostsNew)
);
