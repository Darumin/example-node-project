import React from 'react';
import Student from './Student';

const Checklist = (props) => {
  const { students } = props;

  const mapped = (students.map(name => 
    <Student name={name} />
  ));
  
  return(
    <div id="checklist">
      {mapped}
    </div>
  );
};

export default Checklist;