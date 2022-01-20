import React from 'react';
import { useState } from "react";

const Student = (props) => {
  const [check, setCheck] = useState(false);
  const { name } = props;

  let decoration = check ? 'line-through' : 'none';

  return (
    <span
      onClick={() => setCheck(!check)}
      className="student"
      style={{ textDecoration: decoration }}
    >
      {name}
    </span>
  )
};

export default Student;