export default async function Home() {
  const data = await fetch("/api/hello", {
    next: { revalidate: 60 },
  }).then((res) => res.json())

  console.log(data)

  return <h1></h1>
}
