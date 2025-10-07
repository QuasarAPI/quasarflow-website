import Link from 'next/link'
import TerminalCode from '@/components/terminal-code'
import DynamicRoadmap from '@/components/dynamic-roadmap'
import { roadmapData, futureVisionData } from '@/constants/roadmap-data'

export default function Home() {
  return (
    <div className='relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800'>
      {/* Floating Elements - Background Effects */}
      <div className='pointer-events-none absolute inset-0 overflow-hidden opacity-70'>
        <div className='animate-float absolute top-[10%] left-[15%] h-[30rem] w-[30rem] rounded-full bg-blue-400 opacity-20 mix-blend-multiply blur-[6rem] filter dark:opacity-10'></div>
        <div className='animate-float-delayed absolute top-[40%] right-[5%] h-[25rem] w-[25rem] rounded-full bg-purple-400 opacity-20 mix-blend-multiply blur-[6rem] filter dark:opacity-10'></div>
        <div className='animate-float-slow absolute bottom-[10%] left-[35%] h-[20rem] w-[20rem] rounded-full bg-indigo-400 opacity-20 mix-blend-multiply blur-[5rem] filter dark:opacity-10'></div>
      </div>

      {/* Navigation */}
      <nav className='sticky top-0 z-50 border-b border-slate-200/50 bg-white/70 backdrop-blur-md transition-all duration-300 hover:bg-white/80 dark:border-slate-700/50 dark:bg-slate-900/60 dark:hover:bg-slate-900/70'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='flex h-16 items-center justify-between'>
            <div className='flex items-center'>
              <h1 className='group relative text-2xl font-bold text-slate-900 dark:text-white'>
                Quasar
                <span className='relative text-blue-600'>
                  Flow
                  <span className='absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full'></span>
                </span>
              </h1>
            </div>
            <div className='hidden md:block'>
              <div className='ml-10 flex items-baseline space-x-4'>
                <Link
                  href='/docs'
                  className='relative rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-all duration-300 after:absolute after:bottom-1 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:bg-blue-500 after:transition-all after:duration-300 hover:text-slate-900 hover:after:w-1/2 dark:text-slate-300 dark:hover:text-white'
                >
                  Documentation
                </Link>
                <Link
                  href='/api'
                  className='relative rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-all duration-300 after:absolute after:bottom-1 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:bg-blue-500 after:transition-all after:duration-300 hover:text-slate-900 hover:after:w-1/2 dark:text-slate-300 dark:hover:text-white'
                >
                  API Reference
                </Link>
                <Link
                  href='/examples'
                  className='relative rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-all duration-300 after:absolute after:bottom-1 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:bg-blue-500 after:transition-all after:duration-300 hover:text-slate-900 hover:after:w-1/2 dark:text-slate-300 dark:hover:text-white'
                >
                  Examples
                </Link>
                <a
                  href='https://github.com/QuasarAPI/quasarflow-api'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='rounded-md bg-blue-600/90 px-4 py-2 text-sm font-medium text-white shadow-md backdrop-blur-sm transition-all duration-300 hover:translate-y-[-1px] hover:bg-blue-700 hover:shadow-lg'
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
        {/* Parallax Background Elements */}
        <div className='absolute inset-0 opacity-60 dark:opacity-20'>
          <div className='animate-blob absolute -top-20 -left-20 h-60 w-60 rounded-full bg-blue-200 mix-blend-multiply blur-3xl filter'></div>
          <div className='animate-blob animation-delay-2000 absolute top-0 -right-20 h-60 w-60 rounded-full bg-purple-200 mix-blend-multiply blur-3xl filter'></div>
          <div className='animate-blob animation-delay-4000 absolute -bottom-20 left-40 h-60 w-60 rounded-full bg-indigo-200 mix-blend-multiply blur-3xl filter'></div>
        </div>

        <div className='relative z-10 mx-auto max-w-7xl px-4 pt-28 pb-24 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <div className='mb-10 inline-flex items-center rounded-full border border-blue-200/50 bg-blue-100/80 px-5 py-2.5 text-sm font-medium text-blue-800 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg dark:border-blue-700/50 dark:bg-blue-900/70 dark:text-blue-200'>
              <span className='mr-2 h-2 w-2 animate-pulse rounded-full bg-blue-600'></span>
              Self-hosted API Gateway for Stellar Network
            </div>

            <h1 className='mb-6 bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 bg-clip-text text-4xl font-extrabold text-transparent md:text-6xl dark:from-white dark:via-blue-300 dark:to-white'>
              Build Blockchain Apps
              <br />
              <span className='relative'>
                <span className='absolute inset-0 -z-10 bg-blue-500/10 blur-xl'></span>
                Without the Complexity
              </span>
            </h1>

            <p
              className='animate-fade-in mx-auto mb-10 max-w-3xl text-xl leading-relaxed text-slate-600 opacity-0 dark:text-slate-300'
              style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
            >
              The official Go backend for QuasarFlow, a self-hosted API gateway
              for the Stellar network. Eliminates blockchain complexity through
              simple REST endpoints. No crypto knowledge required.
            </p>

            <div
              className='animate-fade-in flex flex-col items-center justify-center gap-5 opacity-0 sm:flex-row'
              style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
            >
              <Link
                href='/docs'
                className='inline-flex items-center rounded-lg bg-blue-600/90 px-8 py-3 font-medium text-white shadow-lg shadow-blue-500/20 backdrop-blur-sm transition-all duration-300 hover:translate-y-[-2px] hover:bg-blue-700 hover:shadow-blue-500/40'
              >
                Get Started
                <svg
                  className='ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1'
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
                className='inline-flex items-center rounded-lg border border-slate-300/70 bg-white/50 px-8 py-3 font-medium text-slate-700 shadow-md backdrop-blur-sm transition-all duration-300 hover:translate-y-[-2px] hover:bg-white/80 hover:shadow-lg dark:border-slate-600/70 dark:bg-slate-800/50 dark:text-slate-300 dark:hover:bg-slate-700/70'
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
      <section className='relative bg-white/95 py-24 backdrop-blur-sm dark:bg-slate-800/95'>
        <div className='bg-grid-pattern absolute inset-0 opacity-10 dark:opacity-5'></div>
        <div className='relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='mb-16 text-center'>
            <div className='mb-3 inline-block rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 px-4 py-1 text-sm font-medium text-blue-600 dark:from-blue-500/20 dark:to-indigo-500/20 dark:text-blue-400'>
              Developer Experience
            </div>
            <h2 className='mb-5 text-4xl font-extrabold text-slate-900 dark:text-white'>
              Simple REST API
            </h2>
            <p className='mx-auto max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300'>
              Build blockchain features with familiar HTTP requests — no
              specialized knowledge required
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
      <section className='relative bg-slate-50/80 py-28 backdrop-blur-sm dark:bg-slate-900/80'>
        <div className='pointer-events-none absolute inset-0 overflow-hidden opacity-30'>
          <div className='absolute top-1/4 left-0 h-40 w-full -rotate-1 transform bg-gradient-to-r from-blue-400/10 via-purple-500/10 to-indigo-500/10 dark:from-blue-400/20 dark:via-purple-500/20 dark:to-indigo-500/20'></div>
        </div>
        <div className='relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='mb-16 text-center'>
            <div className='mb-3 inline-block rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 py-1 text-sm font-medium text-indigo-600 dark:from-blue-500/20 dark:to-purple-500/20 dark:text-indigo-400'>
              Why Choose Us
            </div>
            <h2 className='mb-5 text-4xl font-extrabold text-slate-900 dark:text-white'>
              Why Choose QuasarFlow?
            </h2>
            <p className='mx-auto max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300'>
              Enterprise-grade blockchain infrastructure that scales with your
              business, designed for developers who want simplicity
            </p>
          </div>

          <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
            <div className='group rounded-xl border border-slate-200/70 bg-white/70 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:translate-y-[-5px] hover:bg-white hover:shadow-xl dark:border-slate-700/70 dark:bg-slate-800/60 dark:hover:bg-slate-800/90'>
              <div className='mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg shadow-blue-500/20 dark:from-blue-600 dark:to-blue-900 dark:shadow-blue-900/30'>
                <svg
                  className='h-8 w-8 text-white'
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
              <h3 className='mb-3 text-xl font-bold text-slate-900 dark:text-white'>
                Lightning Fast
              </h3>
              <p className='leading-relaxed text-slate-600 dark:text-slate-300'>
                Built on Stellar&apos;s fast, low-cost network. Transactions
                settle in seconds, not minutes.
              </p>
            </div>

            <div className='group rounded-xl border border-slate-200/70 bg-white/70 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:translate-y-[-5px] hover:bg-white hover:shadow-xl dark:border-slate-700/70 dark:bg-slate-800/60 dark:hover:bg-slate-800/90'>
              <div className='mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow-lg shadow-green-500/20 dark:from-green-600 dark:to-green-900 dark:shadow-green-900/30'>
                <svg
                  className='h-8 w-8 text-white'
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
              <h3 className='mb-3 text-xl font-bold text-slate-900 dark:text-white'>
                Enterprise Security
              </h3>
              <p className='leading-relaxed text-slate-600 dark:text-slate-300'>
                AES-256-GCM encryption, JWT authentication, and comprehensive
                security headers.
              </p>
            </div>

            <div className='group rounded-xl border border-slate-200/70 bg-white/70 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:translate-y-[-5px] hover:bg-white hover:shadow-xl dark:border-slate-700/70 dark:bg-slate-800/60 dark:hover:bg-slate-800/90'>
              <div className='mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-purple-600 shadow-lg shadow-purple-500/20 dark:from-purple-600 dark:to-purple-900 dark:shadow-purple-900/30'>
                <svg
                  className='h-8 w-8 text-white'
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
              <h3 className='mb-3 text-xl font-bold text-slate-900 dark:text-white'>
                Developer Friendly
              </h3>
              <p className='leading-relaxed text-slate-600 dark:text-slate-300'>
                Simple REST API with comprehensive documentation and code
                examples.
              </p>
            </div>

            <div className='group rounded-xl border border-slate-200/70 bg-white/70 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:translate-y-[-5px] hover:bg-white hover:shadow-xl dark:border-slate-700/70 dark:bg-slate-800/60 dark:hover:bg-slate-800/90'>
              <div className='mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-600 shadow-lg shadow-orange-500/20 dark:from-orange-600 dark:to-orange-900 dark:shadow-orange-900/30'>
                <svg
                  className='h-8 w-8 text-white'
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
              <h3 className='mb-3 text-xl font-bold text-slate-900 dark:text-white'>
                External Wallet Support
              </h3>
              <p className='leading-relaxed text-slate-600 dark:text-slate-300'>
                Verify ownership of existing Stellar wallets using SEP-10
                standards.
              </p>
            </div>

            <div className='group rounded-xl border border-slate-200/70 bg-white/70 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:translate-y-[-5px] hover:bg-white hover:shadow-xl dark:border-slate-700/70 dark:bg-slate-800/60 dark:hover:bg-slate-800/90'>
              <div className='mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-red-400 to-red-600 shadow-lg shadow-red-500/20 dark:from-red-600 dark:to-red-900 dark:shadow-red-900/30'>
                <svg
                  className='h-8 w-8 text-white'
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
              <h3 className='mb-3 text-xl font-bold text-slate-900 dark:text-white'>
                Production Ready
              </h3>
              <p className='leading-relaxed text-slate-600 dark:text-slate-300'>
                Built with Clean Architecture, comprehensive testing, and Docker
                support. MIT licensed.
              </p>
            </div>

            <div className='group rounded-xl border border-slate-200/70 bg-white/70 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:translate-y-[-5px] hover:bg-white hover:shadow-xl dark:border-slate-700/70 dark:bg-slate-800/60 dark:hover:bg-slate-800/90'>
              <div className='mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 shadow-lg shadow-indigo-500/20 dark:from-indigo-600 dark:to-indigo-900 dark:shadow-indigo-900/30'>
                <svg
                  className='h-8 w-8 text-white'
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
              <h3 className='mb-3 text-xl font-bold text-slate-900 dark:text-white'>
                Scalable Infrastructure
              </h3>
              <p className='leading-relaxed text-slate-600 dark:text-slate-300'>
                Built to handle enterprise workloads with rate limiting and
                monitoring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Status */}
      <section className='relative overflow-hidden bg-gradient-to-r from-blue-50 to-indigo-50 py-24 dark:from-slate-800 dark:to-slate-700'>
        <div className='absolute inset-0 overflow-hidden opacity-40 mix-blend-soft-light'>
          <div className='absolute h-full w-full bg-[url("/grid.svg")] bg-repeat opacity-40'></div>
        </div>
        <div className='absolute right-0 bottom-0 h-96 w-96 -translate-x-20 translate-y-20 rounded-full bg-blue-300/20 backdrop-blur-3xl dark:bg-blue-600/10'></div>
        <div className='absolute top-0 left-0 h-96 w-96 translate-x-10 -translate-y-40 rounded-full bg-indigo-300/20 backdrop-blur-3xl dark:bg-indigo-600/10'></div>

        <div className='relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='mb-16 text-center'>
            <div className='mb-3 inline-block rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 px-4 py-1 text-sm font-medium text-blue-600 dark:from-blue-500/20 dark:to-indigo-500/20 dark:text-blue-400'>
              Current Status
            </div>
            <h2 className='mb-5 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-4xl font-extrabold text-transparent dark:from-blue-400 dark:to-indigo-400'>
              Project Status
            </h2>
            <p className='mx-auto max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300'>
              Active development with enterprise-grade features
            </p>
          </div>

          <div className='grid gap-8 md:grid-cols-4'>
            <div className='group rounded-xl border border-blue-100/60 bg-white/60 p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/80 hover:shadow-2xl dark:border-blue-900/30 dark:bg-slate-800/40 dark:hover:bg-slate-800/60'>
              <div className='mb-3 text-4xl font-extrabold text-blue-600 transition-transform duration-300 group-hover:scale-110 dark:text-blue-400'>
                0
              </div>
              <div className='text-sm font-medium text-slate-600 dark:text-slate-300'>
                GitHub Stars
              </div>
            </div>
            <div className='group rounded-xl border border-green-100/60 bg-white/60 p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/80 hover:shadow-2xl dark:border-green-900/30 dark:bg-slate-800/40 dark:hover:bg-slate-800/60'>
              <div className='mb-3 text-4xl font-extrabold text-green-600 transition-transform duration-300 group-hover:scale-110 dark:text-green-400'>
                2
              </div>
              <div className='text-sm font-medium text-slate-600 dark:text-slate-300'>
                Forks
              </div>
            </div>
            <div className='group rounded-xl border border-purple-100/60 bg-white/60 p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/80 hover:shadow-2xl dark:border-purple-900/30 dark:bg-slate-800/40 dark:hover:bg-slate-800/60'>
              <div className='mb-3 text-4xl font-extrabold text-purple-600 transition-transform duration-300 group-hover:scale-110 dark:text-purple-400'>
                10
              </div>
              <div className='text-sm font-medium text-slate-600 dark:text-slate-300'>
                Commits
              </div>
            </div>
            <div className='group rounded-xl border border-orange-100/60 bg-white/60 p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/80 hover:shadow-2xl dark:border-orange-900/30 dark:bg-slate-800/40 dark:hover:bg-slate-800/60'>
              <div className='mb-3 text-4xl font-extrabold text-orange-600 transition-transform duration-300 group-hover:scale-110 dark:text-orange-400'>
                MIT
              </div>
              <div className='text-sm font-medium text-slate-600 dark:text-slate-300'>
                License
              </div>
            </div>
          </div>

          <div className='mt-12 text-center'>
            <div className='inline-flex items-center rounded-full border border-green-200/60 bg-gradient-to-r from-green-500/10 to-green-600/20 px-5 py-2.5 text-sm font-medium text-green-800 shadow-lg shadow-green-500/10 backdrop-blur-sm transition-all duration-300 hover:shadow-green-500/20 dark:border-green-700/50 dark:from-green-900/40 dark:to-green-800/40 dark:text-green-300'>
              <span className='mr-2 h-3 w-3 animate-pulse rounded-full bg-green-500'></span>
              Active Development
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className='relative bg-white/90 py-28 backdrop-blur-md dark:bg-slate-800/90'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.1),transparent),radial-gradient(circle_at_70%_70%,rgba(147,51,234,0.1),transparent)] opacity-70'></div>
        <div className='relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='mb-16 text-center'>
            <div className='mb-3 inline-block rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 py-1 text-sm font-medium text-blue-600 dark:from-blue-500/20 dark:to-purple-500/20 dark:text-blue-400'>
              Industry Solutions
            </div>
            <h2 className='mb-5 text-4xl font-extrabold text-slate-900 dark:text-white'>
              Perfect For
            </h2>
            <p className='mx-auto max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300'>
              From fintech to gaming, QuasarFlow powers blockchain features
              across industries
            </p>
          </div>

          <div className='grid gap-10 md:grid-cols-3'>
            <div className='group rounded-2xl border border-blue-100/60 bg-white/80 p-8 text-center shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:bg-gradient-to-b hover:from-white hover:to-blue-50/80 hover:shadow-2xl dark:border-blue-900/20 dark:bg-slate-800/60 dark:hover:bg-gradient-to-b dark:hover:from-slate-800/80 dark:hover:to-slate-700/60'>
              <div className='mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg shadow-blue-500/30 transition-transform duration-300 group-hover:scale-110 dark:from-blue-500 dark:to-blue-700 dark:shadow-blue-900/20'>
                <svg
                  className='h-10 w-10 text-white'
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
              <h3 className='mb-3 text-2xl font-bold text-slate-900 dark:text-white'>
                Fintech Applications
              </h3>
              <p className='leading-relaxed text-slate-600 dark:text-slate-300'>
                Add crypto wallet functionality to banking apps and enable
                cryptocurrency payments in e-commerce platforms.
              </p>
            </div>

            <div className='group rounded-2xl border border-green-100/60 bg-white/80 p-8 text-center shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:bg-gradient-to-b hover:from-white hover:to-green-50/80 hover:shadow-2xl dark:border-green-900/20 dark:bg-slate-800/60 dark:hover:bg-gradient-to-b dark:hover:from-slate-800/80 dark:hover:to-slate-700/60'>
              <div className='mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow-lg shadow-green-500/30 transition-transform duration-300 group-hover:scale-110 dark:from-green-500 dark:to-green-700 dark:shadow-green-900/20'>
                <svg
                  className='h-10 w-10 text-white'
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
              <h3 className='mb-3 text-2xl font-bold text-slate-900 dark:text-white'>
                Gaming & Digital Assets
              </h3>
              <p className='leading-relaxed text-slate-600 dark:text-slate-300'>
                Manage in-game assets on blockchain and create NFT marketplaces
                for digital collectibles.
              </p>
            </div>

            <div className='group rounded-2xl border border-purple-100/60 bg-white/80 p-8 text-center shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:bg-gradient-to-b hover:from-white hover:to-purple-50/80 hover:shadow-2xl dark:border-purple-900/20 dark:bg-slate-800/60 dark:hover:bg-gradient-to-b dark:hover:from-slate-800/80 dark:hover:to-slate-700/60'>
              <div className='mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-purple-600 shadow-lg shadow-purple-500/30 transition-transform duration-300 group-hover:scale-110 dark:from-purple-500 dark:to-purple-700 dark:shadow-purple-900/20'>
                <svg
                  className='h-10 w-10 text-white'
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
              <h3 className='mb-3 text-2xl font-bold text-slate-900 dark:text-white'>
                Enterprise Solutions
              </h3>
              <p className='leading-relaxed text-slate-600 dark:text-slate-300'>
                Add blockchain capabilities to business systems and enable
                cross-border payments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 py-24'>
        <div className='absolute inset-0 opacity-30'>
          <div className='animate-slow-pulse absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-400 mix-blend-overlay blur-3xl'></div>
          <div className='animate-slow-pulse animation-delay-2000 absolute top-20 right-0 h-80 w-80 rounded-full bg-indigo-500 mix-blend-overlay blur-3xl'></div>
          <div className='animate-slow-pulse animation-delay-4000 absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-blue-300 mix-blend-overlay blur-3xl'></div>
          <div className='pointer-events-none absolute inset-0 bg-[url("/grid.svg")] bg-center opacity-20'></div>
        </div>

        <div className='relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8'>
          <div className='mb-3 inline-flex items-center rounded-full border border-blue-300/30 bg-blue-400/20 px-5 py-2 text-sm font-medium text-white backdrop-blur-sm'>
            <span className='mr-2 h-2 w-2 animate-pulse rounded-full bg-blue-200'></span>
            Get Started Today
          </div>
          <h2 className='mb-6 text-4xl font-extrabold text-white md:text-5xl'>
            Ready to Build the Future?
          </h2>
          <p className='mx-auto mb-12 max-w-2xl text-xl leading-relaxed text-blue-100/90'>
            Start building blockchain-powered applications today. No crypto
            knowledge required.
          </p>
          <div className='flex flex-col justify-center gap-5 sm:flex-row'>
            <Link
              href='/docs'
              className='group inline-flex items-center justify-center rounded-lg bg-white/90 px-8 py-3.5 font-medium text-blue-600 shadow-lg shadow-blue-700/30 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-blue-700/40'
            >
              Get Started
              <svg
                className='ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1'
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
              className='inline-flex items-center justify-center rounded-lg border border-white/30 bg-transparent px-8 py-3.5 font-medium text-white shadow-lg shadow-blue-900/20 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-xl hover:shadow-blue-900/30'
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className='relative overflow-hidden bg-white py-24 dark:bg-slate-800'>
        {/* Background Elements */}
        <div className='absolute inset-0 bg-[url("/grid.svg")] bg-center opacity-10 dark:opacity-5'></div>
        <div className='absolute top-0 right-0 -mt-24 -mr-24 h-96 w-96 rounded-full bg-blue-200/20 mix-blend-multiply blur-3xl filter dark:bg-blue-800/20'></div>
        <div className='absolute bottom-0 left-0 -mb-24 -ml-24 h-96 w-96 rounded-full bg-indigo-200/20 mix-blend-multiply blur-3xl filter dark:bg-indigo-800/20'></div>

        <div className='relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          {/* Section Header */}
          <div className='mb-16 text-center'>
            <div className='mb-4 inline-block rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 px-4 py-1 text-sm font-medium text-blue-600 dark:from-blue-500/20 dark:to-indigo-500/20 dark:text-blue-400'>
              Development Timeline
            </div>
            <h2 className='mb-6 bg-gradient-to-r from-blue-800 to-indigo-600 bg-clip-text text-5xl font-extrabold text-transparent dark:from-blue-400 dark:to-indigo-400'>
              Roadmap 2025-2026
            </h2>
            <p className='mx-auto max-w-3xl text-xl leading-relaxed text-slate-600 dark:text-slate-300'>
              Our development roadmap for 2025, focusing on Go API enhancements,
              Stellar network integration, and enterprise-grade features.
            </p>
          </div>

          {/* Dynamic Roadmap Component */}
          <DynamicRoadmap items={roadmapData} />

          {/* Future Vision Section */}
          <div className='relative mt-28 text-center'>
            <div className='absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent dark:via-blue-500/20'></div>
            <div className='absolute right-0 bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent dark:via-indigo-500/20'></div>

            <h3 className='mb-5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400'>
              Looking Ahead to 2026
            </h3>
            <p className='mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-300'>
              Our vision extends beyond 2025 with plans for advanced Stellar
              network features, enhanced Go API capabilities, and
              enterprise-grade blockchain solutions.
            </p>

            {/* Future Vision Cards - Mapped from data */}
            <div className='mx-auto grid max-w-4xl gap-8 md:grid-cols-3'>
              {futureVisionData.map((item, index) => (
                <div
                  key={index}
                  className='group/card relative rounded-xl border border-blue-100/60 bg-white/60 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-b hover:from-white hover:to-blue-50/60 hover:shadow-xl dark:border-blue-900/20 dark:bg-slate-800/60 dark:hover:bg-gradient-to-b dark:hover:from-slate-800/80 dark:hover:to-slate-700/60'
                >
                  <div className='absolute -inset-px rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 blur-sm transition-opacity duration-300 group-hover/card:opacity-10'></div>
                  <div className='relative mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 shadow-lg'>
                    {/* Conditional Icon Rendering */}
                    {item.icon === 'lightning' && (
                      <svg
                        className='h-8 w-8 text-white'
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
                    )}
                    {item.icon === 'chart' && (
                      <svg
                        className='h-8 w-8 text-white'
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
                    )}
                    {item.icon === 'shield' && (
                      <svg
                        className='h-8 w-8 text-white'
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
                    )}
                  </div>
                  <h4 className='mb-3 text-center text-xl font-bold text-slate-900 dark:text-white'>
                    {item.title}
                  </h4>
                  <p className='text-center text-slate-600 dark:text-slate-300'>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='relative overflow-hidden bg-slate-900 py-16 text-white'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(30,64,175,0.15),transparent),radial-gradient(circle_at_70%_60%,rgba(79,70,229,0.1),transparent)]'></div>
        <div className='absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent'></div>

        <div className='relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='grid gap-10 md:grid-cols-4'>
            <div>
              <h3 className='mb-5 text-2xl font-bold'>
                Quasar
                <span className='bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent'>
                  Flow
                </span>
              </h3>
              <p className='leading-relaxed text-slate-400'>
                Making blockchain development simple and accessible for
                everyone.
              </p>
            </div>

            <div>
              <h4 className='mb-5 text-lg font-bold text-white/90'>
                Documentation
              </h4>
              <ul className='space-y-3 text-slate-400'>
                <li>
                  <Link
                    href='/docs'
                    className='inline-flex transition-all duration-300 hover:translate-x-0.5 hover:text-white'
                  >
                    Getting Started
                  </Link>
                </li>
                <li>
                  <Link
                    href='/api'
                    className='inline-flex transition-all duration-300 hover:translate-x-0.5 hover:text-white'
                  >
                    API Reference
                  </Link>
                </li>
                <li>
                  <Link
                    href='/examples'
                    className='inline-flex transition-all duration-300 hover:translate-x-0.5 hover:text-white'
                  >
                    Examples
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className='mb-5 text-lg font-bold text-white/90'>
                Resources
              </h4>
              <ul className='space-y-3 text-slate-400'>
                <li>
                  <a
                    href='https://github.com/QuasarAPI/quasarflow-api'
                    className='inline-flex transition-all duration-300 hover:translate-x-0.5 hover:text-white'
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href='https://stellar.org'
                    className='inline-flex transition-all duration-300 hover:translate-x-0.5 hover:text-white'
                  >
                    Stellar Network
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='inline-flex transition-all duration-300 hover:translate-x-0.5 hover:text-white'
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className='mb-5 text-lg font-bold text-white/90'>Legal</h4>
              <ul className='space-y-3 text-slate-400'>
                <li>
                  <Link
                    href='/privacy'
                    className='inline-flex transition-all duration-300 hover:translate-x-0.5 hover:text-white'
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href='/terms'
                    className='inline-flex transition-all duration-300 hover:translate-x-0.5 hover:text-white'
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className='mt-12 border-t border-slate-800/80 pt-8 text-center text-slate-500'>
            <p className='text-sm'>
              &copy; 2024 QuasarFlow. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
