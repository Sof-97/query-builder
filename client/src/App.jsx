import { useState } from 'react'
import styles from './index.module.css'
import sqlLogo from './assets/sql.png'

function App() {
  const [query, setQuery] = useState('')
  const [sqlQuery, setSqlQuery] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    const builtQuery = await generateQuery()
    setSqlQuery(builtQuery)
  }

  const generateQuery = async () => {
    const response = await fetch('http://localhost:3005/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query })
    })
    const data = await response.json()
    return data.response.trim()
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
          <pre className={styles.sqlQuery}>
            {sqlQuery}
          </pre>
        </form>
      </main>
    </>
  )
}

export default App
