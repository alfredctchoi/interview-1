import React from 'react'
import styles from './index.css'
import Button from '../containers/button'

const App = ({clickCount, buttonClick}) => (
  <div className={styles.app}>
    <div>
      Hello World
    </div>
    <Button/>
  </div>
);

export default App;