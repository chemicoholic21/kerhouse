import { NextResponse } from "next/server"
import { auth } from "@/auth"
import { Octokit } from "@octokit/rest"

export async function POST(req: Request) {
  const session = await auth()

  if (!session || !session.accessToken || !session.user?.githubUsername) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
  }

  const { accessToken } = session
  const githubUsername = session.user.githubUsername

  try {
    const { readmeContent, pat } = await req.json()

    if (!readmeContent) {
      return NextResponse.json({ message: "README content is required" }, { status: 400 })
    }

    // Use the provided PAT if available, otherwise fall back to the session access token
    const authToUse = pat || accessToken
    const octokit = new Octokit({ auth: authToUse })

    const repoName = githubUsername // GitHub special repository is username/username
    const filePath = "README.md"
    const commitMessage = "Update GitHub Profile README from hackerhou.se"
    const content = Buffer.from(readmeContent).toString("base64")

    let sha: string | undefined

    try {
      // Try to get the existing README.md to retrieve its SHA
      const { data } = await octokit.rest.repos.getContent({
        owner: githubUsername,
        repo: repoName,
        path: filePath,
      })

      if (data && !Array.isArray(data) && "sha" in data) {
        sha = data.sha
      }
    } catch (error: any) {
      // If the file doesn't exist, GitHub API will return a 404 error
      if (error.status !== 404) {
        console.error("Error getting README.md:", error)
        return NextResponse.json({ message: "Error accessing repository" }, { status: 500 })
      }
    }

    if (sha) {
      // Update existing file
      await octokit.rest.repos.createOrUpdateFileContents({
        owner: githubUsername,
        repo: repoName,
        path: filePath,
        message: commitMessage,
        content: content,
        sha: sha,
      })
    } else {
      // Create new file
      await octokit.rest.repos.createOrUpdateFileContents({
        owner: githubUsername,
        repo: repoName,
        path: filePath,
        message: commitMessage,
        content: content,
      })
    }

    return NextResponse.json({ message: "README updated successfully" }, { status: 200 })
  } catch (error: any) {
    console.error("Error updating README:", error)
    return NextResponse.json({ message: "Error updating README", error: error.message }, { status: 500 })
  }
}
