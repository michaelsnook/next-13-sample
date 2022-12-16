'use client'
import { useEffect } from 'react'
import '../../styles/globals.css'
import styles from './breaking.module.css'

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.log('here')
    console.error(error)
  }, [error])

  return (
    <div className={styles.error}>
      <div>ERROR</div>
      <p>Something went wrong!</p>
      <button onClick={() => reset()}>Reset error boundary</button>
    </div>
  )
}
