//SurveyForm shows a form for a user to add input
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class SurveyForm extends Component {
  render() {
    return (
      <div>
        SurveyForm!
      </div>
    );
  }
};

export default reduxForm()(SurveyForm);
