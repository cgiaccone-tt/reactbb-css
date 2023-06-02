import React from 'react';
import styles from './Child.module.css';

export default function Child() {
  return <div className={styles['App-link']}>Child</div>;
}

export function Child1() {
  return <div className={styles['App-link']}>Child1</div>;
}
