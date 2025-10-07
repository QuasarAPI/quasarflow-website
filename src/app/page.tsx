import Link from 'next/link'
import TerminalCode from '@/components/terminal-code'

export default function Home() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800'>
      {/* Navigation */}
      <nav className='sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/80'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='flex h-16 items-center justify-between'>
            <div className='flex items-center'>
              <h1 className='text-2xl font-bold text-slate-900 dark:text-white'>
                Quasar<span className='text-blue-600'>Flow</span>
              </h1>
            </div>
            <div className='hidden md:block'>
              <div className='ml-10 flex items-baseline space-x-4'>
                <Link
                  href='/docs'
                  className='rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
                >
                  Documentation
                </Link>
                <Link
                  href='/api'
                  className='rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
                >
                  API Reference
                </Link>
                <Link
                  href='/examples'
                  className='rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
                >
                  Examples
                </Link>
                <a
                  href='https://github.com/QuasarAPI/quasarflow-api'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700'
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className='relative overflow-hidden'>
        <div className='mx-auto max-w-7xl px-4 pt-20 pb-16 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <div className='mb-8 inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200'>
              <span className='mr-2 h-2 w-2 animate-pulse rounded-full bg-blue-600'></span>
              Self-hosted API Gateway for Stellar Network
            </div>

            <h1 className='mb-6 text-4xl font-bold text-slate-900 md:text-6xl dark:text-white'>
              Build Blockchain Apps
              <br />
              <span className='text-blue-600'>Without the Complexity</span>
            </h1>

            <p className='mx-auto mb-8 max-w-3xl text-xl text-slate-600 dark:text-slate-300'>
              The official Go backend for QuasarFlow, a self-hosted API gateway
              for the Stellar network. Eliminates blockchain complexity through
              simple REST endpoints. No crypto knowledge required.
            </p>

            <div className='flex flex-col items-center justify-center gap-4 sm:flex-row'>
              <Link
                href='/docs'
                className='inline-flex items-center rounded-lg bg-blue-600 px-8 py-3 font-medium text-white transition-colors hover:bg-blue-700'
              >
                Get Started
                <svg
                  className='ml-2 h-4 w-4'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 5l7 7-7 7'
                  />
                </svg>
              </Link>
              <a
                href='https://github.com/QuasarAPI/quasarflow-api'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center rounded-lg border border-slate-300 px-8 py-3 font-medium text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800'
              >
                <svg
                  className='mr-2 h-4 w-4'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                </svg>
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className='bg-white py-16 dark:bg-slate-800'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='mb-12 text-center'>
            <h2 className='mb-4 text-3xl font-bold text-slate-900 dark:text-white'>
              Simple REST API
            </h2>
            <p className='text-lg text-slate-600 dark:text-slate-300'>
              Build blockchain features with familiar HTTP requests
            </p>
          </div>

          <TerminalCode
            code={`# Create a blockchain wallet
curl -X POST https://quasarflow.dev/api/v1/wallets \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"network": "testnet"}'

# Check wallet balance
curl https://quasarflow.dev/api/v1/wallets/{id}/balance \\
  -H "Authorization: Bearer YOUR_TOKEN"

# Send payments
curl -X POST https://quasarflow.dev/api/v1/wallets/{id}/payment \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"to": "GABC123...", "amount": "10", "asset": "XLM"}'`}
            language='bash'
            title='Terminal'
          />
        </div>
      </section>

      {/* Features */}
      <section className='bg-slate-50 py-20 dark:bg-slate-900'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='mb-16 text-center'>
            <h2 className='mb-4 text-3xl font-bold text-slate-900 dark:text-white'>
              Why Choose QuasarFlow?
            </h2>
            <p className='mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-300'>
              Enterprise-grade blockchain infrastructure that scales with your
              business
            </p>
          </div>

          <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
            <div className='rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800'>
              <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900'>
                <svg
                  className='h-6 w-6 text-blue-600 dark:text-blue-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M13 10V3L4 14h7v7l9-11h-7z'
                  />
                </svg>
              </div>
              <h3 className='mb-2 text-xl font-semibold text-slate-900 dark:text-white'>
                Lightning Fast
              </h3>
              <p className='text-slate-600 dark:text-slate-300'>
                Built on Stellar&apos;s fast, low-cost network. Transactions
                settle in seconds, not minutes.
              </p>
            </div>

            <div className='rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800'>
              <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900'>
                <svg
                  className='h-6 w-6 text-green-600 dark:text-green-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                  />
                </svg>
              </div>
              <h3 className='mb-2 text-xl font-semibold text-slate-900 dark:text-white'>
                Enterprise Security
              </h3>
              <p className='text-slate-600 dark:text-slate-300'>
                AES-256-GCM encryption, JWT authentication, and comprehensive
                security headers.
              </p>
            </div>

            <div className='rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800'>
              <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900'>
                <svg
                  className='h-6 w-6 text-purple-600 dark:text-purple-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
                  />
                </svg>
              </div>
              <h3 className='mb-2 text-xl font-semibold text-slate-900 dark:text-white'>
                Developer Friendly
              </h3>
              <p className='text-slate-600 dark:text-slate-300'>
                Simple REST API with comprehensive documentation and code
                examples.
              </p>
            </div>

            <div className='rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800'>
              <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900'>
                <svg
                  className='h-6 w-6 text-orange-600 dark:text-orange-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                  />
                </svg>
              </div>
              <h3 className='mb-2 text-xl font-semibold text-slate-900 dark:text-white'>
                External Wallet Support
              </h3>
              <p className='text-slate-600 dark:text-slate-300'>
                Verify ownership of existing Stellar wallets using SEP-10
                standards.
              </p>
            </div>

            <div className='rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800'>
              <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 dark:bg-red-900'>
                <svg
                  className='h-6 w-6 text-red-600 dark:text-red-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                  />
                </svg>
              </div>
              <h3 className='mb-2 text-xl font-semibold text-slate-900 dark:text-white'>
                Production Ready
              </h3>
              <p className='text-slate-600 dark:text-slate-300'>
                Built with Clean Architecture, comprehensive testing, and Docker
                support. MIT licensed.
              </p>
            </div>

            <div className='rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800'>
              <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900'>
                <svg
                  className='h-6 w-6 text-indigo-600 dark:text-indigo-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
                  />
                </svg>
              </div>
              <h3 className='mb-2 text-xl font-semibold text-slate-900 dark:text-white'>
                Scalable Infrastructure
              </h3>
              <p className='text-slate-600 dark:text-slate-300'>
                Built to handle enterprise workloads with rate limiting and
                monitoring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Status */}
      <section className='bg-gradient-to-r from-blue-50 to-indigo-50 py-16 dark:from-slate-800 dark:to-slate-700'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='mb-12 text-center'>
            <h2 className='mb-4 text-3xl font-bold text-slate-900 dark:text-white'>
              Project Status
            </h2>
            <p className='text-lg text-slate-600 dark:text-slate-300'>
              Active development with enterprise-grade features
            </p>
          </div>

          <div className='grid gap-6 md:grid-cols-4'>
            <div className='text-center'>
              <div className='mb-2 text-3xl font-bold text-blue-600 dark:text-blue-400'>
                0
              </div>
              <div className='text-sm text-slate-600 dark:text-slate-300'>
                GitHub Stars
              </div>
            </div>
            <div className='text-center'>
              <div className='mb-2 text-3xl font-bold text-green-600 dark:text-green-400'>
                2
              </div>
              <div className='text-sm text-slate-600 dark:text-slate-300'>
                Forks
              </div>
            </div>
            <div className='text-center'>
              <div className='mb-2 text-3xl font-bold text-purple-600 dark:text-purple-400'>
                10
              </div>
              <div className='text-sm text-slate-600 dark:text-slate-300'>
                Commits
              </div>
            </div>
            <div className='text-center'>
              <div className='mb-2 text-3xl font-bold text-orange-600 dark:text-orange-400'>
                MIT
              </div>
              <div className='text-sm text-slate-600 dark:text-slate-300'>
                License
              </div>
            </div>
          </div>

          <div className='mt-8 text-center'>
            <div className='inline-flex items-center rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800 dark:bg-green-900 dark:text-green-200'>
              <span className='mr-2 h-2 w-2 rounded-full bg-green-600'></span>
              Active Development
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className='bg-white py-20 dark:bg-slate-800'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='mb-16 text-center'>
            <h2 className='mb-4 text-3xl font-bold text-slate-900 dark:text-white'>
              Perfect For
            </h2>
            <p className='text-lg text-slate-600 dark:text-slate-300'>
              From fintech to gaming, QuasarFlow powers blockchain features
              across industries
            </p>
          </div>

          <div className='grid gap-8 md:grid-cols-3'>
            <div className='text-center'>
              <div className='mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900'>
                <svg
                  className='h-8 w-8 text-blue-600 dark:text-blue-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1'
                  />
                </svg>
              </div>
              <h3 className='mb-2 text-xl font-semibold text-slate-900 dark:text-white'>
                Fintech Applications
              </h3>
              <p className='text-slate-600 dark:text-slate-300'>
                Add crypto wallet functionality to banking apps and enable
                cryptocurrency payments in e-commerce platforms.
              </p>
            </div>

            <div className='text-center'>
              <div className='mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900'>
                <svg
                  className='h-8 w-8 text-green-600 dark:text-green-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </div>
              <h3 className='mb-2 text-xl font-semibold text-slate-900 dark:text-white'>
                Gaming & Digital Assets
              </h3>
              <p className='text-slate-600 dark:text-slate-300'>
                Manage in-game assets on blockchain and create NFT marketplaces
                for digital collectibles.
              </p>
            </div>

            <div className='text-center'>
              <div className='mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900'>
                <svg
                  className='h-8 w-8 text-purple-600 dark:text-purple-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
                  />
                </svg>
              </div>
              <h3 className='mb-2 text-xl font-semibold text-slate-900 dark:text-white'>
                Enterprise Solutions
              </h3>
              <p className='text-slate-600 dark:text-slate-300'>
                Add blockchain capabilities to business systems and enable
                cross-border payments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='bg-blue-600 py-20'>
        <div className='mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8'>
          <h2 className='mb-4 text-3xl font-bold text-white'>
            Ready to Build the Future?
          </h2>
          <p className='mx-auto mb-8 max-w-2xl text-xl text-blue-100'>
            Start building blockchain-powered applications today. No crypto
            knowledge required.
          </p>
          <div className='flex flex-col justify-center gap-4 sm:flex-row'>
            <Link
              href='/docs'
              className='inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 font-medium text-blue-600 transition-colors hover:bg-blue-50'
            >
              Get Started
              <svg
                className='ml-2 h-4 w-4'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </Link>
            <a
              href='https://github.com/QuasarAPI/quasarflow-api'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center justify-center rounded-lg border border-blue-300 px-8 py-3 font-medium text-white transition-colors hover:bg-blue-700'
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className='bg-white py-20 dark:bg-slate-800'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='mb-16 text-center'>
            <h2 className='mb-4 text-4xl font-bold text-slate-900 dark:text-white'>
              Roadmap 2025-2026
            </h2>
            <p className='mx-auto max-w-3xl text-xl text-slate-600 dark:text-slate-300'>
              Our development roadmap for 2025, focusing on Go API enhancements,
              Stellar network integration, and enterprise-grade features.
            </p>
          </div>

          <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
            {/* Q1 2025 */}
            <div className='relative'>
              <div className='h-full rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 p-6 dark:from-slate-700 dark:to-slate-600'>
                <div className='mb-4 flex items-center'>
                  <div className='mr-3 h-3 w-3 rounded-full bg-blue-500'></div>
                  <h3 className='text-xl font-bold text-slate-900 dark:text-white'>
                    Q1 2025
                  </h3>
                </div>
                <div className='space-y-3'>
                  <div className='flex items-start'>
                    <div className='mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-green-500'></div>
                    <span className='text-sm text-slate-700 dark:text-slate-300'>
                      Core API v1.0 Release
                    </span>
                  </div>
                  <div className='flex items-start'>
                    <div className='mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-green-500'></div>
                    <span className='text-sm text-slate-700 dark:text-slate-300'>
                      Docker Support
                    </span>
                  </div>
                  <div className='flex items-start'>
                    <div className='mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-green-500'></div>
                    <span className='text-sm text-slate-700 dark:text-slate-300'>
                      Basic Wallet Operations
                    </span>
                  </div>
                  <div className='flex items-start'>
                    <div className='mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-green-500'></div>
                    <span className='text-sm text-slate-700 dark:text-slate-300'>
                      JWT Authentication
                    </span>
                  </div>
                </div>
                <div className='mt-4 border-t border-blue-200 pt-4 dark:border-slate-500'>
                  <span className='text-xs font-medium text-blue-600 dark:text-blue-400'>
                    COMPLETED
                  </span>
                </div>
              </div>
            </div>

            {/* Q2 2025 */}
            <div className='relative'>
              <div className='h-full rounded-2xl bg-gradient-to-br from-green-50 to-emerald-100 p-6 dark:from-slate-700 dark:to-slate-600'>
                <div className='mb-4 flex items-center'>
                  <div className='mr-3 h-3 w-3 rounded-full bg-green-500'></div>
                  <h3 className='text-xl font-bold text-slate-900 dark:text-white'>
                    Q2 2025
                  </h3>
                </div>
                <div className='space-y-3'>
                  <div className='flex items-start'>
                    <div className='mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-green-500'></div>
                    <span className='text-sm text-slate-700 dark:text-slate-300'>
                      Payment Processing
                    </span>
                  </div>
                  <div className='flex items-start'>
                    <div className='mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-green-500'></div>
                    <span className='text-sm text-slate-700 dark:text-slate-300'>
                      Transaction History
                    </span>
                  </div>
                  <div className='flex items-start'>
                    <div className='mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-green-500'></div>
                    <span className='text-sm text-slate-700 dark:text-slate-300'>
                      External Wallet Verification
                    </span>
                  </div>
                  <div className='flex items-start'>
                    <div className='mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-green-500'></div>
                    <span className='text-sm text-slate-700 dark:text-slate-300'>
                      Webhook Support
                    </span>
                  </div>
                </div>
                <div className='mt-4 border-t border-green-200 pt-4 dark:border-slate-500'>
                  <span className='text-xs font-medium text-green-600 dark:text-green-400'>
                    COMPLETED
                  </span>
                </div>
              </div>
            </div>

            {/* Q3 2025 */}
            <div className='relative'>
              <div className='h-full rounded-2xl bg-gradient-to-br from-yellow-50 to-orange-100 p-6 dark:from-slate-700 dark:to-slate-600'>
                <div className='mb-4 flex items-center'>
                  <div className='mr-3 h-3 w-3 rounded-full bg-yellow-500'></div>
                  <h3 className='text-xl font-bold text-slate-900 dark:text-white'>
                    Q3 2025
                  </h3>
                </div>
                <div className='space-y-3'>
                  <div className='flex items-start'>
                    <div className='mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-yellow-500'></div>
                    <span className='text-sm text-slate-700 dark:text-slate-300'>
                      Advanced Stellar Operations
                    </span>
                  </div>
                  <div className='flex items-start'>
                    <div className='mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-yellow-500'></div>
                    <span className='text-sm text-slate-700 dark:text-slate-300'>
                      Rate Limiting & Throttling
                    </span>
                  </div>
                  <div className='flex items-start'>
                    <div className='mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-yellow-500'></div>
                    <span className='text-sm text-slate-700 dark:text-slate-300'>
                      API Analytics & Monitoring
                    </span>
                  </div>
                  <div className='flex items-start'>
                    <div className='mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-yellow-500'></div>
                    <span className='text-sm text-slate-700 dark:text-slate-300'>
                      Performance Optimization
                    </span>
                  </div>
                </div>
                <div className='mt-4 border-t border-yellow-200 pt-4 dark:border-slate-500'>
                  <span className='text-xs font-medium text-yellow-600 dark:text-yellow-400'>
                    IN PROGRESS
                  </span>
                </div>
              </div>
            </div>

            {/* Q4 2025 */}
            <div className='relative'>
              <div className='h-full rounded-2xl bg-gradient-to-br from-purple-50 to-pink-100 p-6 dark:from-slate-700 dark:to-slate-600'>
                <div className='mb-4 flex items-center'>
                  <div className='mr-3 h-3 w-3 rounded-full bg-purple-500'></div>
                  <h3 className='text-xl font-bold text-slate-900 dark:text-white'>
                    Q4 2025
                  </h3>
                </div>
                <div className='space-y-3'>
                  <div className='flex items-start'>
                    <div className='mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-purple-500'></div>
                    <span className='text-sm text-slate-700 dark:text-slate-300'>
                      Enhanced Stellar SDK Integration
                    </span>
                  </div>
                  <div className='flex items-start'>
                    <div className='mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-purple-500'></div>
                    <span className='text-sm text-slate-700 dark:text-slate-300'>
                      Multi-Asset & Token Support
                    </span>
                  </div>
                  <div className='flex items-start'>
                    <div className='mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-purple-500'></div>
                    <span className='text-sm text-slate-700 dark:text-slate-300'>
                      Advanced Security & Encryption
                    </span>
                  </div>
                  <div className='flex items-start'>
                    <div className='mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-purple-500'></div>
                    <span className='text-sm text-slate-700 dark:text-slate-300'>
                      Enterprise API Management
                    </span>
                  </div>
                </div>
                <div className='mt-4 border-t border-purple-200 pt-4 dark:border-slate-500'>
                  <span className='text-xs font-medium text-purple-600 dark:text-purple-400'>
                    PLANNED
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Future Vision */}
          <div className='mt-16 text-center'>
            <div className='rounded-2xl bg-gradient-to-r from-slate-50 to-blue-50 p-8 dark:from-slate-800 dark:to-slate-700'>
              <h3 className='mb-4 text-2xl font-bold text-slate-900 dark:text-white'>
                Looking Ahead to 2026
              </h3>
              <p className='mx-auto mb-6 max-w-3xl text-lg text-slate-600 dark:text-slate-300'>
                Our vision extends beyond 2025 with plans for advanced Stellar
                network features, enhanced Go API capabilities, and
                enterprise-grade blockchain solutions.
              </p>
              <div className='mx-auto grid max-w-4xl gap-6 md:grid-cols-3'>
                <div className='text-center'>
                  <div className='mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900'>
                    <svg
                      className='h-6 w-6 text-blue-600 dark:text-blue-400'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M13 10V3L4 14h7v7l9-11h-7z'
                      />
                    </svg>
                  </div>
                  <h4 className='mb-2 font-semibold text-slate-900 dark:text-white'>
                    Advanced Stellar Features
                  </h4>
                  <p className='text-sm text-slate-600 dark:text-slate-300'>
                    Smart contracts, complex transactions, and advanced Stellar
                    network capabilities
                  </p>
                </div>
                <div className='text-center'>
                  <div className='mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900'>
                    <svg
                      className='h-6 w-6 text-green-600 dark:text-green-400'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                      />
                    </svg>
                  </div>
                  <h4 className='mb-2 font-semibold text-slate-900 dark:text-white'>
                    Stellar DeFi Integration
                  </h4>
                  <p className='text-sm text-slate-600 dark:text-slate-300'>
                    Stellar DEX integration, liquidity pools, and automated
                    market makers
                  </p>
                </div>
                <div className='text-center'>
                  <div className='mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900'>
                    <svg
                      className='h-6 w-6 text-purple-600 dark:text-purple-400'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                      />
                    </svg>
                  </div>
                  <h4 className='mb-2 font-semibold text-slate-900 dark:text-white'>
                    Go API Excellence
                  </h4>
                  <p className='text-sm text-slate-600 dark:text-slate-300'>
                    High-performance Go API, advanced monitoring, and
                    enterprise-grade reliability
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-slate-900 py-12 text-white'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='grid gap-8 md:grid-cols-4'>
            <div>
              <h3 className='mb-4 text-2xl font-bold'>
                Quasar<span className='text-blue-400'>Flow</span>
              </h3>
              <p className='text-slate-400'>
                Making blockchain development simple and accessible for
                everyone.
              </p>
            </div>

            <div>
              <h4 className='mb-4 font-semibold'>Documentation</h4>
              <ul className='space-y-2 text-slate-400'>
                <li>
                  <Link
                    href='/docs'
                    className='transition-colors hover:text-white'
                  >
                    Getting Started
                  </Link>
                </li>
                <li>
                  <Link
                    href='/api'
                    className='transition-colors hover:text-white'
                  >
                    API Reference
                  </Link>
                </li>
                <li>
                  <Link
                    href='/examples'
                    className='transition-colors hover:text-white'
                  >
                    Examples
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className='mb-4 font-semibold'>Resources</h4>
              <ul className='space-y-2 text-slate-400'>
                <li>
                  <a
                    href='https://github.com/QuasarAPI/quasarflow-api'
                    className='transition-colors hover:text-white'
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href='https://stellar.org'
                    className='transition-colors hover:text-white'
                  >
                    Stellar Network
                  </a>
                </li>
                <li>
                  <a href='#' className='transition-colors hover:text-white'>
                    Support
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className='mb-4 font-semibold'>Legal</h4>
              <ul className='space-y-2 text-slate-400'>
                <li>
                  <Link
                    href='/privacy'
                    className='transition-colors hover:text-white'
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className='mt-8 border-t border-slate-800 pt-8 text-center text-slate-400'>
            <p>&copy; 2024 QuasarFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
