import React, { useState } from 'react';

const SortSelect = (props) => {
  return (
    <select onChange={e=>props.refresh(e.target.value)}>
      <option value="relevant">Relevance</option>
      <option value="helpful">Helpfulness</option>
      <option value="newest">Newest</option>
    </select>
  );
};

export default SortSelect;
