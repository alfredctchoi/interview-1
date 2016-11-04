import React from 'react'
import styles from './index.css'
import Button from '../containers/button'
import { message } from '../../../services/i18n/i18n-service'

const App = ({clickCount, buttonClick}) => (
  <div className={styles.app}>
    <div>
      { message('app.helloWorld', { name: 'Alfred Choi' }) }
    </div>
    <Button/>
  </div>
);

export default App;