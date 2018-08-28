// SurveyField contains logic to render a single
// label and text input
import React from 'react';

export default({ input }) => { 
  return (
    <div>
      {/* the next line is equivalent to...
      <input onBlur={input.onBlur} onChange={input.onChange} /> */}
      <input { ...input }/>
    </div>
  );
}
