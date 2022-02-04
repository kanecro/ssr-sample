import Head from 'next/head'
import styles from '../styles/Home.module.css'

function Page({ stars }) {
  return <div>Next stars: {stars}</div>
}
Page.getInitialProps = async (ctx) => {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const json = await res.json()
  console.log("hello")
  return { stars: json.stargazers_count }
}

export default Page