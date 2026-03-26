import { SignInView } from "@/components/sign-in-view"
import { buildPageMetadata } from "@/lib/seo"

export const metadata = buildPageMetadata({
  title: "Sign In",
  description: "Sign in to Kerhouse to join the community.",
  path: "/sign-in",
})

export const revalidate = false

export default function SignInPage() {
  return <SignInView />
}
