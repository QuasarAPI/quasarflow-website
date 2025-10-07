import Link from 'next/link'

export default function PrivacyPage() {
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
                <Link
                  href='/privacy'
                  className='rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
                >
                  Privacy Policy
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
          Privacy Policy
        </h1>

        <p className='mb-4 text-slate-600 dark:text-slate-300'>
          Your privacy is important to us. This Privacy Policy explains how we
          collect, use, disclose, and protect information when you visit the
          QuasarFlow website.
        </p>

        <section className='mb-6'>
          <h2 className='mb-2 text-2xl font-semibold text-slate-900 dark:text-white'>
            Information We Collect
          </h2>
          <ul className='list-inside list-disc text-slate-600 dark:text-slate-300'>
            <li>
              Information you provide directly, such as contact email addresses.
            </li>
            <li>
              Usage data collected automatically (for example, pages visited, IP
              address, browser type).
            </li>
            <li>
              Cookies and similar technologies used to improve user experience.
            </li>
          </ul>
        </section>

        <section className='mb-6'>
          <h2 className='mb-2 text-2xl font-semibold text-slate-900 dark:text-white'>
            How We Use Information
          </h2>
          <ul className='list-inside list-disc text-slate-600 dark:text-slate-300'>
            <li>To provide, maintain and improve the website.</li>
            <li>To respond to support requests and communicate with users.</li>
            <li>
              For security purposes, fraud prevention, and to protect our
              rights.
            </li>
          </ul>
        </section>

        <section className='mb-6'>
          <h2 className='mb-2 text-2xl font-semibold text-slate-900 dark:text-white'>
            Information Sharing
          </h2>
          <p className='text-slate-600 dark:text-slate-300'>
            We do not sell your personal information. We may share information
            with service providers who help us operate the site, when required
            by law, or to protect our rights.
          </p>
        </section>

        <section className='mb-6'>
          <h2 className='mb-2 text-2xl font-semibold text-slate-900 dark:text-white'>
            Security
          </h2>
          <p className='text-slate-600 dark:text-slate-300'>
            We implement reasonable technical and administrative measures to
            protect your information. However, no method of transmission or
            storage is 100% secure.
          </p>
        </section>

        <section className='mb-6'>
          <h2 className='mb-2 text-2xl font-semibold text-slate-900 dark:text-white'>
            Your Rights
          </h2>
          <p className='text-slate-600 dark:text-slate-300'>
            You may request access, correction, or deletion of your personal
            data. To make such requests, contact us using the email provided on
            the site.
          </p>
        </section>

        <section className='mb-6'>
          <h2 className='mb-2 text-2xl font-semibold text-slate-900 dark:text-white'>
            Changes to this Policy
          </h2>
          <p className='text-slate-600 dark:text-slate-300'>
            We may update this Privacy Policy from time to time. We will post
            the date of the latest revision on this page.
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
