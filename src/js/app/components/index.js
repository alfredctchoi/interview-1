import React from 'react'
import InstagramListContainer from '../../instagram/containers/instagram-list-container'
import InstragramSearchInput from '../../instagram/components/instagram-search-input'
import styles from './index.css'

const App = ({clickCount, buttonClick}) => (
  <div>
    <div className={styles.pageTitle}>
      <h1>Telus Instasearch</h1>
    </div>
    <InstragramSearchInput />
    <InstagramListContainer />
  </div>
);

export default App;