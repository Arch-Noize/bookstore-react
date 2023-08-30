import React from 'react';
import { useSelector } from 'react-redux';

const Categories = () => {
  const status = useSelector((store) => store.categories.status);
  return (
    <h3>
      {status}
    </h3>
  );
};

export default Categories;
