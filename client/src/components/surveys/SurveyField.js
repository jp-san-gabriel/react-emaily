// SurveyField contains logic to render a single
// label and text input
import React from 'react';

export default({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      {/* the next line is equivalent to...
      <input onBlur={input.onBlur} onChange={input.onChange} /> */}
      <input { ...input }/>
      { touched && error }
    </div>
  );
}
