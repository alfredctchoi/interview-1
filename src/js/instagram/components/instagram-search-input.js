import React from 'react'
import styles from './instagram-search-input.css'

const SearchInput = () => (
  <div className={styles.searchContainer}>
    <input type="text"/>
    <button type="button">Search</button>
  </div>
);

export default SearchInput;