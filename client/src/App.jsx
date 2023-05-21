import { useState } from 'react'
import styles from './index.module.css'
import sqlLogo from './assets/sql.png'

function App() {
  const [query, setQuery] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(query)
  }

  return (
    <>
      <main className={styles.main}>
        <img src={sqlLogo} alt="sql-logo" className={styles.icon} />
        <h3>
          SQL Query Builder
        </h3>

        <form 
          className={styles.form} 
          onSubmit={onSubmit}
          >
          <input 
            type="text" 
            placeholder="Describe your query here" 
            className={styles.input} 
            name='query description'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <input type='submit' value='BUILD' className={styles.submit} />
        </form>
      </main>
    </>
  )
}

export default App
