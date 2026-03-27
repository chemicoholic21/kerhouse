"use client"

import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { CheckIcon, Loader2 } from "lucide-react"

export default function EditGithubProfilePage() {
  const { data: session, status } = useSession()
  const [customMessage, setCustomMessage] = useState("")
  const [pat, setPat] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => setIsSuccess(false), 3000)
      return () => clearTimeout(timer)
    }
  }, [isSuccess])

  if (status === "loading") {
    return (
      <div className="layout-container py-8">
        <h1 className="text-3xl font-bold mb-4">Loading...</h1>
      </div>
    )
  }

  if (!session?.user?.githubUsername) {
    redirect("/sign-in")
    return null // Should not be reached
  }

  const githubUsername = session.user.githubUsername

  const generateReadmeContent = () => {
    return `# Hi, I'm ${githubUsername}! 👋\n\n${
      customMessage || "A passionate software developer from Earth."
    }\n\n---
\n### Connect with me:\n\n[<img align="left" alt="GitHub" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/github.svg" />](https://github.com/${githubUsername})\n\n---\n\n### My GitHub Stats:\n\nComing soon! (Placeholder for actual stats)\n`
  }

  const handleSubmit = async () => {
    setIsLoading(true)
    setIsSuccess(false)
    const readmeContent = generateReadmeContent()

    try {
      const response = await fetch("/api/github/readme", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ readmeContent, pat }),
      })

      if (response.ok) {
        setIsSuccess(true)
        toast({
          title: "Success!",
          description: (
            <div className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-green-500" />
              <span>GitHub Profile README updated and pushed!</span>
            </div>
          ),
        })
      } else {
        const errorData = await response.json()
        toast({
          title: "Error",
          description: errorData.message || "Failed to update GitHub Profile README.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Failed to push README:", error)
      toast({
        title: "Error",
        description: "An unexpected error occurred.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="layout-container py-8">
      <Toaster />
      <h1 className="text-3xl font-bold mb-4">Edit GitHub Profile README</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <p className="text-muted-foreground">
            Generate and update your personal GitHub Profile README.
          </p>

          <div className="space-y-4">
            <div>
              <Label htmlFor="githubUsername">GitHub Username</Label>
              <Input id="githubUsername" value={githubUsername} disabled className="bg-muted" />
            </div>

            <div>
              <Label htmlFor="pat">Personal Access Token (Optional)</Label>
              <Input 
                id="pat" 
                type="password" 
                placeholder="ghp_xxxxxxxxxxxx" 
                value={pat}
                onChange={(e) => setPat(e.target.value)}
              />
              <p className="text-xs text-muted-foreground mt-1">
                If the push fails with OAuth, providing a PAT with `repo` permissions usually fixes it.
              </p>
            </div>

            <div>
              <Label htmlFor="customMessage">Custom Message / Bio</Label>
              <Textarea
                id="customMessage"
                placeholder="A passionate software developer from Earth."
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                rows={5}
              />
            </div>

            <Button 
              onClick={handleSubmit} 
              disabled={isLoading || isSuccess}
              className={isSuccess ? "bg-green-600 hover:bg-green-700 text-white" : ""}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Updating...
                </>
              ) : isSuccess ? (
                <>
                  <CheckIcon className="mr-2 h-4 w-4" />
                  Pushed to GitHub!
                </>
              ) : (
                "Generate and Push to GitHub"
              )}
            </Button>

            <div className="mt-8 p-4 bg-muted rounded-md border border-dashed border-foreground/30">
              <h2 className="text-xl font-semibold mb-2">Preview</h2>
              <pre className="whitespace-pre-wrap text-sm">
                {generateReadmeContent()}
              </pre>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="p-4 bg-accent/50 rounded-lg border border-accent">
            <h2 className="font-semibold mb-2">How to get a PAT?</h2>
            <ol className="text-sm space-y-2 list-decimal list-inside text-muted-foreground">
              <li>Go to <a href="https://github.com/settings/tokens" target="_blank" className="text-primary hover:underline">GitHub Settings</a></li>
              <li>Click "Generate new token" (classic)</li>
              <li>Give it a name (e.g., "HackerHouse README")</li>
              <li>Select the <code className="bg-muted px-1 rounded">repo</code> scope</li>
              <li>Copy the generated token and paste it here</li>
            </ol>
          </div>

          <div className="p-4 bg-accent/50 rounded-lg border border-accent">
            <h2 className="font-semibold mb-2">Requirements</h2>
            <ul className="text-sm space-y-2 list-disc list-inside text-muted-foreground">
              <li>You must have a repository named <code className="bg-muted px-1 rounded">{githubUsername}</code></li>
              <li>The repository should be public</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
