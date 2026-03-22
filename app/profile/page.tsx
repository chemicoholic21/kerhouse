import { redirect } from "next/navigation"
import { developers } from "@/lib/data"

/** Old path; profiles live at /{username} */
export default function LegacyProfileRedirect() {
  const first = developers[0]
  if (!first) redirect("/")
  redirect(`/${first.username}`)
}
