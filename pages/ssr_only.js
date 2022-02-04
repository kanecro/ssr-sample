function Page2({ props }) {
  return <div>Next stars: {props}</div>
}

export async function getServerSideProps() {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const json = await res.json()
  console.log(json.message)
  return { props:  { props: json.message }}
}

export default Page2;
[]