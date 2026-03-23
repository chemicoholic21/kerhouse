import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { AuthProvider } from '@/components/auth-provider'
import { MessageDockProvider } from '@/components/message-dock-provider'
import { ThemeProvider } from '@/components/theme-provider'
import { TerminalProvider } from '@/components/terminal-provider'
import { Terminal } from '@/components/terminal'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-mono'
});

export const metadata: Metadata = {
  title: 'hackerhou.se | a home for human programmers',
  description:
    'Discover open source projects, meet developers, find roles, and more — a home for human programmers.',
  generator: 'v0.app',
  icons: {
    shortcut: '/favicon.ico',
    icon: [
      {
        url: '/favicon.ico',
      },
      {
        url: '/icon-light-32x32.png',
        sizes: '32x32',
        type: 'image/png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        sizes: '32x32',
        type: 'image/png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jetbrainsMono.variable} font-mono antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="auto"
          themes={["auto", "light", "dark", "monokai", "dracula", "solarized", "nord"]}
          disableTransitionOnChange
          enableSystem={false}
        >
          <AuthProvider>
            <MessageDockProvider>
              <TerminalProvider>
                {children}
                <Terminal />
              </TerminalProvider>
            </MessageDockProvider>
          </AuthProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
