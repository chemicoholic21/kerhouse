import { GithubSignInButton } from "./auth-github-button"

export function SignInForm() {
  return (
    <div className="max-w-md w-full mx-auto border-2 border-dashed border-foreground/70 p-8 my-12">
      <h1 className="text-2xl font-bold mb-8 text-highlight text-center uppercase tracking-widest">
        Authentication
      </h1>
      
      <div className="space-y-6">
        <GithubSignInButton />
        
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-dashed border-foreground/30" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">Or</span>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider">Email Address</label>
            <input 
              type="email" 
              placeholder="hacker@hou.se"
              className="w-full border-2 border-foreground/30 bg-background px-3 py-2 text-sm focus:border-foreground focus:outline-none transition-colors"
            />
          </div>
          <button className="w-full border-2 border-highlight text-highlight py-2 text-sm font-bold hover:bg-highlight hover:text-highlight-foreground transition-colors uppercase tracking-widest">
            Send OTP
          </button>
        </div>
      </div>
      
      <p className="mt-8 text-center text-xs text-muted-foreground leading-relaxed">
        By continuing, you agree to build cool stuff and respect the human programmers.
      </p>
    </div>
  )
}
