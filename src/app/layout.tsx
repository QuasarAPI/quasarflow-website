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
  keywords: [
    'blockchain',
    'api',
    'stellar',
    'cryptocurrency',
    'web3',
    'developer tools',
    'blockchain development',
    'quasarflow',
  ],
  authors: [{ name: 'QuasarFlow Team' }],
  creator: 'QuasarFlow',
  publisher: 'QuasarFlow',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://quasarflow.dev',
    siteName: 'QuasarFlow API',
    title: 'QuasarFlow API - Blockchain Made Simple',
    description:
      'Blockchain abstraction API that simplifies Stellar network integration through REST endpoints. Build blockchain-powered applications without learning complex protocols.',
    images: [
      {
        url: '/preview.png',
        width: 1200,
        height: 630,
        alt: 'QuasarFlow API - Blockchain Made Simple',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@quasarflow',
    creator: '@quasarflow',
    title: 'QuasarFlow API - Blockchain Made Simple',
    description:
      'Blockchain abstraction API that simplifies Stellar network integration through REST endpoints. Build blockchain-powered applications without learning complex protocols.',
    images: ['/preview.png'],
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual verification code
  },
  alternates: {
    canonical: 'https://quasarflow.dev',
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-QJ78EPRBZB'
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-QJ78EPRBZB');
            `,
          }}
        />

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
