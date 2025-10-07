import Link from 'next/link'

export default function TermsPage() {
  return (
    <div className='min-h-screen bg-slate-50 dark:bg-slate-900'>
      <nav className='sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/80'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='flex h-16 items-center justify-between'>
            <div className='flex items-center'>
              <Link
                href='/'
                className='text-2xl font-bold text-slate-900 dark:text-white'
              >
                Quasar<span className='text-blue-600'>Flow</span>
              </Link>
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

      <main className='mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8'>
        <h1 className='mb-6 text-4xl font-bold text-slate-900 dark:text-white'>
          Terms of Service
        </h1>

        <p className='mb-4 text-slate-600 dark:text-slate-300'>
          Welcome to QuasarFlow. By accessing our website and using our
          services, you agree to these terms and conditions. Please read them
          carefully before using our platform.
        </p>

        <section className='mb-6'>
          <h2 className='mb-2 text-2xl font-semibold text-slate-900 dark:text-white'>
            1. Acceptance of Terms
          </h2>
          <p className='text-slate-600 dark:text-slate-300'>
            By accessing and using the QuasarFlow website and API, you
            acknowledge that you have read, understood, and agree to be bound by
            these Terms of Service. If you do not agree to these terms, please
            do not use our services.
          </p>
        </section>

        <section className='mb-6'>
          <h2 className='mb-2 text-2xl font-semibold text-slate-900 dark:text-white'>
            2. Service Description
          </h2>
          <p className='mb-4 text-slate-600 dark:text-slate-300'>
            QuasarFlow provides a blockchain abstraction API that simplifies
            Stellar network integration. Our services include:
          </p>
          <ul className='list-inside list-disc text-slate-600 dark:text-slate-300'>
            <li>API access for blockchain integration</li>
            <li>Documentation and technical support</li>
            <li>Development tools and resources</li>
            <li>Wallet management services</li>
          </ul>
        </section>

        <section className='mb-6'>
          <h2 className='mb-2 text-2xl font-semibold text-slate-900 dark:text-white'>
            3. User Obligations
          </h2>
          <p className='mb-4 text-slate-600 dark:text-slate-300'>
            When using our services, you agree to:
          </p>
          <ul className='list-inside list-disc text-slate-600 dark:text-slate-300'>
            <li>Comply with all applicable laws and regulations</li>
            <li>Maintain the security of your account credentials</li>
            <li>Use the API in accordance with our documentation</li>
            <li>
              Not attempt to circumvent any rate limits or security measures
            </li>
          </ul>
        </section>

        <section className='mb-6'>
          <h2 className='mb-2 text-2xl font-semibold text-slate-900 dark:text-white'>
            4. API Usage
          </h2>
          <p className='text-slate-600 dark:text-slate-300'>
            Our API is provided "as is" and "as available." We may modify,
            suspend, or discontinue any part of the service at any time. Users
            are responsible for their API usage and any consequences thereof.
          </p>
        </section>

        <section className='mb-6'>
          <h2 className='mb-2 text-2xl font-semibold text-slate-900 dark:text-white'>
            5. Intellectual Property
          </h2>
          <p className='text-slate-600 dark:text-slate-300'>
            All content, code, and materials on QuasarFlow are protected by
            intellectual property rights. The API is provided under the MIT
            License. Users retain ownership of their data and code.
          </p>
        </section>

        <section className='mb-6'>
          <h2 className='mb-2 text-2xl font-semibold text-slate-900 dark:text-white'>
            6. Limitation of Liability
          </h2>
          <p className='text-slate-600 dark:text-slate-300'>
            QuasarFlow shall not be liable for any indirect, incidental,
            special, consequential, or punitive damages resulting from your use
            or inability to use our services.
          </p>
        </section>

        <section className='mb-6'>
          <h2 className='mb-2 text-2xl font-semibold text-slate-900 dark:text-white'>
            7. Changes to Terms
          </h2>
          <p className='text-slate-600 dark:text-slate-300'>
            We reserve the right to modify these terms at any time. We will
            notify users of any material changes through our website or email.
            Continued use of our services constitutes acceptance of the modified
            terms.
          </p>
        </section>

        <section className='mt-8'>
          <p className='text-slate-600 dark:text-slate-300'>
            Last updated: October 07, 2025
          </p>
        </section>
      </main>
    </div>
  )
}
