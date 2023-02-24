export default async function Home() {
  const data = await fetch("https://unicode-8sqm.vercel.app/api/hello", {
    next: { revalidate: 10 },
  }).then((res) => res.json())

  return <h1>{data.jp}</h1>
}
