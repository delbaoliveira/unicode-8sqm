export const runtime = "edge"

export default async function Home() {
  const data = await fetch("https://unicode-8sqm.vercel.app/api/hello").then(
    (res) => res.json(),
  )

  return (
    <div>
      <h1>{data.jp}</h1>
      <h2>{data.course?.name}</h2>
      <h2>{data.course?.description}</h2>
    </div>
  )
}
