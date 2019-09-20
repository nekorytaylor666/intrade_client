import React from 'react';

import Header from './Header';

export default (props) => {
  return (
    <div>
      <Header {...props} />
      <div className="container">
      { props.children }
      </div>
    </div>
  );
};
