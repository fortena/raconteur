import React from 'react';

const Podcast = ({ match, location }) => {
  const { id } = match.params;
  return (
    <div>
      <div>podcast</div>
      <div>{id}</div>
    </div>
  );
};

export default Podcast;
