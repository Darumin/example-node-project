import React from 'react';

import Square from './Square';
import Checklist from './Checklist';

const App = () => {
  const students = ['Kevin', 'Nick', 'Isaias', 'Fernando', 'Hank', 'Paul'];

  return (
    < >
      <Square />
      <Checklist students={students} />
    </>
  );
};

export default App;
