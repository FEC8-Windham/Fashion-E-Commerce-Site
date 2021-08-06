import React, { useState } from 'react';
import { Select } from '../Styles/ReviewStyles';

const SortSelect = (props) => {
  return (
    <Select onChange={e=>props.refresh(e.target.value)}>
      <option value="relevant">Relevance</option>
      <option value="helpful">Helpfulness</option>
      <option value="newest">Newest</option>
    </Select>
  );
};

export default SortSelect;
