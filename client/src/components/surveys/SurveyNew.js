//SurveyNew shows SurveyForm and SurveyFormReview
import React, { Component } from 'react';
import SurveyForm from './SurveyForm';

class SurveyNew extends Component {

  state = { showFormReview: false };

  render() {
    return (
      <div>
        <SurveyForm />
      </div>
    );
  }
};

export default SurveyNew;
