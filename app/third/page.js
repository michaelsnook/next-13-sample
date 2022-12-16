import '../../styles/globals.css'
import Link from 'next/link'

async function getData() {
  const index = Math.floor(Math.random() * 10)
  const res = await fetch(`https://catfact.ninja/fact`)
  return res.json()
}

export default async function Page() {
  const data = await getData()
  console.log(data)
  return (
    <>
      <p>
        <Link href="/breaking">navigate to breaking</Link>
      </p>
      <p>{data.fact}</p>
    </>
  )
}
