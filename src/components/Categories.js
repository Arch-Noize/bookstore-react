import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../styles/Categories.module.css';

const Categories = () => {
  const status = useSelector((store) => store.categories.status);
  return (
    <h3 className={styles.status}>
      {status}
    </h3>
  );
};

export default Categories;