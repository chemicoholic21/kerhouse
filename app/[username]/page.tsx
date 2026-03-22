import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { UserProfileView } from "@/components/user-profile-view"
import { developers } from "@/lib/data"

export function generateStaticParams() {
  return developers.map((d) => ({ username: d.username }))
}

export default async function UserProfilePage({
  params,
}: {
  params: Promise<{ username: string }>
}) {
  const { username: raw } = await params
  const username = decodeURIComponent(raw)
  const dev = developers.find((d) => d.username === username)
  if (!dev) notFound()

  return (
    <div className="min-h-screen">
      <Header />
      <UserProfileView dev={dev} />
    </div>
  )
}
