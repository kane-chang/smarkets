import { redirect } from "next/navigation"


export default function Home() {
  redirect('/boxing')
  return (
    <h1>Homepage</h1>
  )
}