import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'QuasarFlow API - Blockchain Made Simple',
  description:
    'Blockchain abstraction API that simplifies Stellar network integration through REST endpoints. Build blockchain-powered applications without learning complex protocols.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Prevent hydration mismatch from browser extensions
              (function() {
                if (typeof window !== 'undefined') {
                  // Remove extension attributes that might cause hydration issues
                  const removeExtensionAttrs = () => {
                    const html = document.documentElement;
                    const attrsToRemove = [
                      'data-bybit-channel-name',
                      'data-bybit-is-default-wallet',
                      'data-metamask',
                      'data-coinbase',
                      'data-walletconnect'
                    ];
                    attrsToRemove.forEach(attr => {
                      if (html.hasAttribute(attr)) {
                        html.removeAttribute(attr);
                      }
                    });
                  };
                  
                  // Run immediately
                  removeExtensionAttrs();
                  
                  // Run after DOM is ready
                  if (document.readyState === 'loading') {
                    document.addEventListener('DOMContentLoaded', removeExtensionAttrs);
                  }
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
