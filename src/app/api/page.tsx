import Link from 'next/link'
import CodeBlock from '@/components/code-block'

export default function ApiPage() {
  return (
    <div className='min-h-screen bg-slate-50 dark:bg-slate-900'>
      {/* Navigation */}
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
                  className='rounded-md px-3 py-2 text-sm font-medium text-blue-600 dark:text-blue-400'
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

      <div className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8'>
        <div className='grid gap-8 lg:grid-cols-4'>
          {/* Sidebar */}
          <div className='lg:col-span-1'>
            <div className='sticky top-24'>
              <nav className='space-y-2'>
                <h3 className='mb-4 text-sm font-semibold tracking-wider text-slate-900 uppercase dark:text-white'>
                  API Reference
                </h3>
                <Link
                  href='#authentication'
                  className='block rounded-md px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
                >
                  Authentication
                </Link>
                <Link
                  href='#wallets'
                  className='block rounded-md px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
                >
                  Wallets
                </Link>
                <Link
                  href='#payments'
                  className='block rounded-md px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
                >
                  Payments
                </Link>
                <Link
                  href='#accounts'
                  className='block rounded-md px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
                >
                  External Accounts
                </Link>
                <Link
                  href='#health'
                  className='block rounded-md px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
                >
                  Health Check
                </Link>
                <Link
                  href='#errors'
                  className='block rounded-md px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
                >
                  Error Handling
                </Link>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className='lg:col-span-3'>
            <div className='prose prose-slate dark:prose-invert max-w-none'>
              <h1 className='mb-8 text-4xl font-bold text-slate-900 dark:text-white'>
                API Reference
              </h1>

              <div className='mb-8 rounded-lg border border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-900/20'>
                <h3 className='mb-2 text-lg font-semibold text-blue-900 dark:text-blue-100'>
                  Base URL
                </h3>
                <p className='font-mono text-blue-800 dark:text-blue-200'>
                  https://quasarflow.dev
                </p>
              </div>

              {/* Authentication */}
              <section id='authentication' className='mb-12'>
                <h2 className='mb-6 text-3xl font-bold text-slate-900 dark:text-white'>
                  Authentication
                </h2>
                <p className='mb-6 text-slate-600 dark:text-slate-300'>
                  All API requests require authentication using JWT tokens.
                  Include the token in the Authorization header.
                </p>

                <div className='mb-6 rounded-lg bg-slate-100 p-4 dark:bg-slate-800'>
                  <code className='text-slate-900 dark:text-white'>
                    Authorization: Bearer YOUR_JWT_TOKEN
                  </code>
                </div>

                <h3 className='mb-4 text-xl font-bold text-slate-900 dark:text-white'>
                  POST /auth/login
                </h3>
                <p className='mb-4 text-slate-600 dark:text-slate-300'>
                  Authenticate and receive a JWT token.
                </p>

                <CodeBlock
                  code={`curl -X POST https://quasarflow.dev/api/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{
    "username": "admin",
    "password": "admin123"
  }'`}
                  language='bash'
                  title='Login Request'
                />

                <h4 className='mb-2 text-lg font-semibold text-slate-900 dark:text-white'>
                  Response
                </h4>
                <CodeBlock
                  code={`{
  "success": true,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "expires_at": "2024-01-01T12:00:00Z"
  }
}`}
                  language='json'
                  title='Login Response'
                />

                <h3 className='mb-4 text-xl font-bold text-slate-900 dark:text-white'>
                  POST /auth/logout
                </h3>
                <p className='mb-4 text-slate-600 dark:text-slate-300'>
                  Invalidate the current JWT token.
                </p>

                <div className='mb-4 rounded-lg bg-slate-900 p-6'>
                  <pre className='overflow-x-auto font-mono text-sm text-green-400'>
                    <code>{`curl -X POST https://quasarflow.dev/auth/logout \\
  -H "Authorization: Bearer YOUR_TOKEN"`}</code>
                  </pre>
                </div>
              </section>

              {/* Wallets */}
              <section id='wallets' className='mb-12'>
                <h2 className='mb-6 text-3xl font-bold text-slate-900 dark:text-white'>
                  Wallets
                </h2>
                <p className='mb-6 text-slate-600 dark:text-slate-300'>
                  Manage blockchain wallets with simple REST endpoints.
                </p>

                <h3 className='mb-4 text-xl font-bold text-slate-900 dark:text-white'>
                  POST /api/v1/wallets
                </h3>
                <p className='mb-4 text-slate-600 dark:text-slate-300'>
                  Create a new blockchain wallet.
                </p>

                <CodeBlock
                  code={`curl -X POST https://quasarflow.dev/api/v1/wallets \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "network": "testnet"
  }'`}
                  language='bash'
                  title='Create Wallet'
                />

                <h4 className='mb-2 text-lg font-semibold text-slate-900 dark:text-white'>
                  Request Body
                </h4>
                <div className='mb-4 overflow-x-auto'>
                  <table className='min-w-full divide-y divide-slate-200 dark:divide-slate-700'>
                    <thead className='bg-slate-50 dark:bg-slate-800'>
                      <tr>
                        <th className='px-6 py-3 text-left text-xs font-medium tracking-wider text-slate-500 uppercase dark:text-slate-400'>
                          Field
                        </th>
                        <th className='px-6 py-3 text-left text-xs font-medium tracking-wider text-slate-500 uppercase dark:text-slate-400'>
                          Type
                        </th>
                        <th className='px-6 py-3 text-left text-xs font-medium tracking-wider text-slate-500 uppercase dark:text-slate-400'>
                          Required
                        </th>
                        <th className='px-6 py-3 text-left text-xs font-medium tracking-wider text-slate-500 uppercase dark:text-slate-400'>
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody className='divide-y divide-slate-200 bg-white dark:divide-slate-700 dark:bg-slate-900'>
                      <tr>
                        <td className='px-6 py-4 font-mono text-sm whitespace-nowrap text-slate-900 dark:text-white'>
                          network
                        </td>
                        <td className='px-6 py-4 text-sm text-slate-600 dark:text-slate-300'>
                          string
                        </td>
                        <td className='px-6 py-4 text-sm text-slate-600 dark:text-slate-300'>
                          Yes
                        </td>
                        <td className='px-6 py-4 text-sm text-slate-600 dark:text-slate-300'>
                          Network to create wallet on (local, testnet, mainnet)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h4 className='mb-2 text-lg font-semibold text-slate-900 dark:text-white'>
                  Response
                </h4>
                <div className='mb-6 rounded-lg bg-slate-900 p-6'>
                  <pre className='overflow-x-auto font-mono text-sm text-green-400'>
                    <code>{`{
  "success": true,
  "data": {
    "id": "wallet_123",
    "public_key": "GABC123...",
    "network": "testnet",
    "created_at": "2024-01-01T12:00:00Z"
  }
}`}</code>
                  </pre>
                </div>

                <h3 className='mb-4 text-xl font-bold text-slate-900 dark:text-white'>
                  GET /api/v1/wallets/&#123;id&#125;/balance
                </h3>
                <p className='mb-4 text-slate-600 dark:text-slate-300'>
                  Get wallet balance for all assets.
                </p>

                <CodeBlock
                  code={`curl https://quasarflow.dev/api/v1/wallets/wallet_123/balance \\
  -H "Authorization: Bearer YOUR_TOKEN"`}
                  language='bash'
                  title='Get Balance'
                />

                <h4 className='mb-2 text-lg font-semibold text-slate-900 dark:text-white'>
                  Response
                </h4>
                <div className='mb-6 rounded-lg bg-slate-900 p-6'>
                  <pre className='overflow-x-auto font-mono text-sm text-green-400'>
                    <code>{`{
  "success": true,
  "data": {
    "balances": [
      {
        "asset": "XLM",
        "amount": "1000.0000000"
      },
      {
        "asset": "USDC",
        "amount": "500.0000000"
      }
    ]
  }
}`}</code>
                  </pre>
                </div>

                <h3 className='mb-4 text-xl font-bold text-slate-900 dark:text-white'>
                  POST /api/v1/wallets/&#123;id&#125;/fund
                </h3>
                <p className='mb-4 text-slate-600 dark:text-slate-300'>
                  Fund wallet with test XLM (development only).
                </p>

                <CodeBlock
                  code={`curl -X POST https://quasarflow.dev/api/v1/wallets/wallet_123/fund \\
  -H "Authorization: Bearer YOUR_TOKEN"`}
                  language='bash'
                  title='Fund Wallet'
                />

                <div className='mb-6 rounded-lg border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-800 dark:bg-yellow-900/20'>
                  <p className='text-sm text-yellow-800 dark:text-yellow-200'>
                    <strong>Note:</strong> This endpoint is only available in
                    development/testnet environments.
                  </p>
                </div>
              </section>

              {/* Payments */}
              <section id='payments' className='mb-12'>
                <h2 className='mb-6 text-3xl font-bold text-slate-900 dark:text-white'>
                  Payments
                </h2>
                <p className='mb-6 text-slate-600 dark:text-slate-300'>
                  Send payments and manage transactions.
                </p>

                <h3 className='mb-4 text-xl font-bold text-slate-900 dark:text-white'>
                  POST /api/v1/wallets/&#123;id&#125;/payment
                </h3>
                <p className='mb-4 text-slate-600 dark:text-slate-300'>
                  Send a payment from a wallet.
                </p>

                <CodeBlock
                  code={`curl -X POST https://quasarflow.dev/api/v1/wallets/wallet_123/payment \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "GDEF456...",
    "amount": "10.5",
    "asset": "XLM",
    "memo": "Payment for services"
  }'`}
                  language='bash'
                  title='Send Payment'
                />

                <h4 className='mb-2 text-lg font-semibold text-slate-900 dark:text-white'>
                  Request Body
                </h4>
                <div className='mb-4 overflow-x-auto'>
                  <table className='min-w-full divide-y divide-slate-200 dark:divide-slate-700'>
                    <thead className='bg-slate-50 dark:bg-slate-800'>
                      <tr>
                        <th className='px-6 py-3 text-left text-xs font-medium tracking-wider text-slate-500 uppercase dark:text-slate-400'>
                          Field
                        </th>
                        <th className='px-6 py-3 text-left text-xs font-medium tracking-wider text-slate-500 uppercase dark:text-slate-400'>
                          Type
                        </th>
                        <th className='px-6 py-3 text-left text-xs font-medium tracking-wider text-slate-500 uppercase dark:text-slate-400'>
                          Required
                        </th>
                        <th className='px-6 py-3 text-left text-xs font-medium tracking-wider text-slate-500 uppercase dark:text-slate-400'>
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody className='divide-y divide-slate-200 bg-white dark:divide-slate-700 dark:bg-slate-900'>
                      <tr>
                        <td className='px-6 py-4 font-mono text-sm whitespace-nowrap text-slate-900 dark:text-white'>
                          to
                        </td>
                        <td className='px-6 py-4 text-sm text-slate-600 dark:text-slate-300'>
                          string
                        </td>
                        <td className='px-6 py-4 text-sm text-slate-600 dark:text-slate-300'>
                          Yes
                        </td>
                        <td className='px-6 py-4 text-sm text-slate-600 dark:text-slate-300'>
                          Destination wallet public key
                        </td>
                      </tr>
                      <tr>
                        <td className='px-6 py-4 font-mono text-sm whitespace-nowrap text-slate-900 dark:text-white'>
                          amount
                        </td>
                        <td className='px-6 py-4 text-sm text-slate-600 dark:text-slate-300'>
                          string
                        </td>
                        <td className='px-6 py-4 text-sm text-slate-600 dark:text-slate-300'>
                          Yes
                        </td>
                        <td className='px-6 py-4 text-sm text-slate-600 dark:text-slate-300'>
                          Amount to send
                        </td>
                      </tr>
                      <tr>
                        <td className='px-6 py-4 font-mono text-sm whitespace-nowrap text-slate-900 dark:text-white'>
                          asset
                        </td>
                        <td className='px-6 py-4 text-sm text-slate-600 dark:text-slate-300'>
                          string
                        </td>
                        <td className='px-6 py-4 text-sm text-slate-600 dark:text-slate-300'>
                          Yes
                        </td>
                        <td className='px-6 py-4 text-sm text-slate-600 dark:text-slate-300'>
                          Asset code (XLM, USDC, etc.)
                        </td>
                      </tr>
                      <tr>
                        <td className='px-6 py-4 font-mono text-sm whitespace-nowrap text-slate-900 dark:text-white'>
                          memo
                        </td>
                        <td className='px-6 py-4 text-sm text-slate-600 dark:text-slate-300'>
                          string
                        </td>
                        <td className='px-6 py-4 text-sm text-slate-600 dark:text-slate-300'>
                          No
                        </td>
                        <td className='px-6 py-4 text-sm text-slate-600 dark:text-slate-300'>
                          Optional memo for the transaction
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h4 className='mb-2 text-lg font-semibold text-slate-900 dark:text-white'>
                  Response
                </h4>
                <div className='mb-6 rounded-lg bg-slate-900 p-6'>
                  <pre className='overflow-x-auto font-mono text-sm text-green-400'>
                    <code>{`{
  "success": true,
  "data": {
    "transaction_hash": "abc123...",
    "status": "pending",
    "created_at": "2024-01-01T12:00:00Z"
  }
}`}</code>
                  </pre>
                </div>

                <h3 className='mb-4 text-xl font-bold text-slate-900 dark:text-white'>
                  GET /api/v1/wallets/&#123;id&#125;/transactions
                </h3>
                <p className='mb-4 text-slate-600 dark:text-slate-300'>
                  Get transaction history for a wallet.
                </p>

                <CodeBlock
                  code={`curl https://quasarflow.dev/api/v1/wallets/wallet_123/transactions \\
  -H "Authorization: Bearer YOUR_TOKEN"`}
                  language='bash'
                  title='Get Transactions'
                />

                <h4 className='mb-2 text-lg font-semibold text-slate-900 dark:text-white'>
                  Response
                </h4>
                <div className='mb-6 rounded-lg bg-slate-900 p-6'>
                  <pre className='overflow-x-auto font-mono text-sm text-green-400'>
                    <code>{`{
  "success": true,
  "data": {
    "transactions": [
      {
        "hash": "abc123...",
        "type": "payment",
        "amount": "10.5",
        "asset": "XLM",
        "to": "GDEF456...",
        "status": "success",
        "created_at": "2024-01-01T12:00:00Z"
      }
    ]
  }
}`}</code>
                  </pre>
                </div>
              </section>

              {/* External Accounts */}
              <section id='accounts' className='mb-12'>
                <h2 className='mb-6 text-3xl font-bold text-slate-900 dark:text-white'>
                  External Accounts
                </h2>
                <p className='mb-6 text-slate-600 dark:text-slate-300'>
                  Verify ownership of existing Stellar wallets.
                </p>

                <h3 className='mb-4 text-xl font-bold text-slate-900 dark:text-white'>
                  GET /api/v1/accounts/&#123;public_key&#125;/challenge
                </h3>
                <p className='mb-4 text-slate-600 dark:text-slate-300'>
                  Generate a challenge for wallet ownership verification.
                </p>

                <CodeBlock
                  code={`curl https://quasarflow.dev/api/v1/accounts/GABC123.../challenge`}
                  language='bash'
                  title='Generate Challenge'
                />

                <h4 className='mb-2 text-lg font-semibold text-slate-900 dark:text-white'>
                  Response
                </h4>
                <div className='mb-6 rounded-lg bg-slate-900 p-6'>
                  <pre className='overflow-x-auto font-mono text-sm text-green-400'>
                    <code>{`{
  "success": true,
  "data": {
    "challenge": "base64_encoded_challenge",
    "expires_at": "2024-01-01T12:05:00Z"
  }
}`}</code>
                  </pre>
                </div>

                <h3 className='mb-4 text-xl font-bold text-slate-900 dark:text-white'>
                  POST /api/v1/accounts/&#123;public_key&#125;/verify-ownership
                </h3>
                <p className='mb-4 text-slate-600 dark:text-slate-300'>
                  Verify wallet ownership using signed challenge.
                </p>

                <CodeBlock
                  code={`curl -X POST https://quasarflow.dev/api/v1/accounts/GABC123.../verify-ownership \\
  -H "Content-Type: application/json" \\
  -d '{
    "signature": "base64_encoded_signature",
    "message": "base64_encoded_challenge"
  }'`}
                  language='bash'
                  title='Verify Ownership'
                />

                <h4 className='mb-2 text-lg font-semibold text-slate-900 dark:text-white'>
                  Request Body
                </h4>
                <div className='mb-4 overflow-x-auto'>
                  <table className='min-w-full divide-y divide-slate-200 dark:divide-slate-700'>
                    <thead className='bg-slate-50 dark:bg-slate-800'>
                      <tr>
                        <th className='px-6 py-3 text-left text-xs font-medium tracking-wider text-slate-500 uppercase dark:text-slate-400'>
                          Field
                        </th>
                        <th className='px-6 py-3 text-left text-xs font-medium tracking-wider text-slate-500 uppercase dark:text-slate-400'>
                          Type
                        </th>
                        <th className='px-6 py-3 text-left text-xs font-medium tracking-wider text-slate-500 uppercase dark:text-slate-400'>
                          Required
                        </th>
                        <th className='px-6 py-3 text-left text-xs font-medium tracking-wider text-slate-500 uppercase dark:text-slate-400'>
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody className='divide-y divide-slate-200 bg-white dark:divide-slate-700 dark:bg-slate-900'>
                      <tr>
                        <td className='px-6 py-4 font-mono text-sm whitespace-nowrap text-slate-900 dark:text-white'>
                          signature
                        </td>
                        <td className='px-6 py-4 text-sm text-slate-600 dark:text-slate-300'>
                          string
                        </td>
                        <td className='px-6 py-4 text-sm text-slate-600 dark:text-slate-300'>
                          Yes
                        </td>
                        <td className='px-6 py-4 text-sm text-slate-600 dark:text-slate-300'>
                          Base64 encoded signature of the challenge
                        </td>
                      </tr>
                      <tr>
                        <td className='px-6 py-4 font-mono text-sm whitespace-nowrap text-slate-900 dark:text-white'>
                          message
                        </td>
                        <td className='px-6 py-4 text-sm text-slate-600 dark:text-slate-300'>
                          string
                        </td>
                        <td className='px-6 py-4 text-sm text-slate-600 dark:text-slate-300'>
                          Yes
                        </td>
                        <td className='px-6 py-4 text-sm text-slate-600 dark:text-slate-300'>
                          The original challenge message
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h4 className='mb-2 text-lg font-semibold text-slate-900 dark:text-white'>
                  Response
                </h4>
                <div className='mb-6 rounded-lg bg-slate-900 p-6'>
                  <pre className='overflow-x-auto font-mono text-sm text-green-400'>
                    <code>{`{
  "success": true,
  "data": {
    "verified": true,
    "public_key": "GABC123...",
    "verified_at": "2024-01-01T12:00:00Z"
  }
}`}</code>
                  </pre>
                </div>

                <h3 className='mb-4 text-xl font-bold text-slate-900 dark:text-white'>
                  POST
                  /api/v1/accounts/&#123;public_key&#125;/verify-transaction
                </h3>
                <p className='mb-4 text-slate-600 dark:text-slate-300'>
                  Verify wallet ownership using a recent transaction.
                </p>

                <CodeBlock
                  code={`curl -X POST https://quasarflow.dev/api/v1/accounts/GABC123.../verify-transaction \\
  -H "Content-Type: application/json" \\
  -d '{
    "transaction_hash": "transaction_hash_here"
  }'`}
                  language='bash'
                  title='Verify Transaction'
                />
              </section>

              {/* Health Check */}
              <section id='health' className='mb-12'>
                <h2 className='mb-6 text-3xl font-bold text-slate-900 dark:text-white'>
                  Health Check
                </h2>
                <p className='mb-6 text-slate-600 dark:text-slate-300'>
                  Monitor API health and status.
                </p>

                <h3 className='mb-4 text-xl font-bold text-slate-900 dark:text-white'>
                  GET /health
                </h3>
                <p className='mb-4 text-slate-600 dark:text-slate-300'>
                  Check API health status.
                </p>

                <CodeBlock
                  code={`curl https://quasarflow.dev/api/health`}
                  language='bash'
                  title='Health Check'
                />

                <h4 className='mb-2 text-lg font-semibold text-slate-900 dark:text-white'>
                  Response
                </h4>
                <div className='mb-6 rounded-lg bg-slate-900 p-6'>
                  <pre className='overflow-x-auto font-mono text-sm text-green-400'>
                    <code>{`{
  "status": "healthy",
  "timestamp": "2024-01-01T12:00:00Z",
  "version": "1.0.0",
  "services": {
    "database": "healthy",
    "stellar": "healthy"
  }
}`}</code>
                  </pre>
                </div>
              </section>

              {/* Error Handling */}
              <section id='errors' className='mb-12'>
                <h2 className='mb-6 text-3xl font-bold text-slate-900 dark:text-white'>
                  Error Handling
                </h2>
                <p className='mb-6 text-slate-600 dark:text-slate-300'>
                  QuasarFlow API uses standard HTTP status codes and returns
                  detailed error information.
                </p>

                <h3 className='mb-4 text-xl font-bold text-slate-900 dark:text-white'>
                  Error Response Format
                </h3>
                <div className='mb-6 rounded-lg bg-slate-900 p-6'>
                  <pre className='overflow-x-auto font-mono text-sm text-red-400'>
                    <code>{`{
  "success": false,
  "error": {
    "code": "INVALID_REQUEST",
    "message": "Invalid request parameters",
    "details": {
      "field": "amount",
      "reason": "must be a positive number"
    }
  }
}`}</code>
                  </pre>
                </div>

                <h3 className='mb-4 text-xl font-bold text-slate-900 dark:text-white'>
                  Common HTTP Status Codes
                </h3>
                <div className='mb-6 overflow-x-auto'>
                  <table className='min-w-full divide-y divide-slate-200 dark:divide-slate-700'>
                    <thead className='bg-slate-50 dark:bg-slate-800'>
                      <tr>
                        <th className='px-6 py-3 text-left text-xs font-medium tracking-wider text-slate-500 uppercase dark:text-slate-400'>
                          Status Code
                        </th>
                        <th className='px-6 py-3 text-left text-xs font-medium tracking-wider text-slate-500 uppercase dark:text-slate-400'>
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody className='divide-y divide-slate-200 bg-white dark:divide-slate-700 dark:bg-slate-900'>
                      <tr>
                        <td className='px-6 py-4 font-mono text-sm whitespace-nowrap text-slate-900 dark:text-white'>
                          200
                        </td>
                        <td className='px-6 py-4 text-sm text-slate-600 dark:text-slate-300'>
                          Success
                        </td>
                      </tr>
                      <tr>
                        <td className='px-6 py-4 font-mono text-sm whitespace-nowrap text-slate-900 dark:text-white'>
                          400
                        </td>
                        <td className='px-6 py-4 text-sm text-slate-600 dark:text-slate-300'>
                          Bad Request - Invalid parameters
                        </td>
                      </tr>
                      <tr>
                        <td className='px-6 py-4 font-mono text-sm whitespace-nowrap text-slate-900 dark:text-white'>
                          401
                        </td>
                        <td className='px-6 py-4 text-sm text-slate-600 dark:text-slate-300'>
                          Unauthorized - Invalid or missing token
                        </td>
                      </tr>
                      <tr>
                        <td className='px-6 py-4 font-mono text-sm whitespace-nowrap text-slate-900 dark:text-white'>
                          404
                        </td>
                        <td className='px-6 py-4 text-sm text-slate-600 dark:text-slate-300'>
                          Not Found - Resource doesn&apos;t exist
                        </td>
                      </tr>
                      <tr>
                        <td className='px-6 py-4 font-mono text-sm whitespace-nowrap text-slate-900 dark:text-white'>
                          429
                        </td>
                        <td className='px-6 py-4 text-sm text-slate-600 dark:text-slate-300'>
                          Too Many Requests - Rate limit exceeded
                        </td>
                      </tr>
                      <tr>
                        <td className='px-6 py-4 font-mono text-sm whitespace-nowrap text-slate-900 dark:text-white'>
                          500
                        </td>
                        <td className='px-6 py-4 text-sm text-slate-600 dark:text-slate-300'>
                          Internal Server Error
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
