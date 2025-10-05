import Link from 'next/link'
import CodeBlock from '@/components/code-block'

export default function DocsPage() {
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
                  className='rounded-md px-3 py-2 text-sm font-medium text-blue-600 dark:text-blue-400'
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

      <div className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8'>
        <div className='grid gap-8 lg:grid-cols-4'>
          {/* Sidebar */}
          <div className='lg:col-span-1'>
            <div className='sticky top-24'>
              <nav className='space-y-2'>
                <h3 className='mb-4 text-sm font-semibold tracking-wider text-slate-900 uppercase dark:text-white'>
                  Documentation
                </h3>
                <Link
                  href='#getting-started'
                  className='block rounded-md px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
                >
                  Getting Started
                </Link>
                <Link
                  href='#quick-start'
                  className='block rounded-md px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
                >
                  Quick Start
                </Link>
                <Link
                  href='#authentication'
                  className='block rounded-md px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
                >
                  Authentication
                </Link>
                <Link
                  href='#wallet-management'
                  className='block rounded-md px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
                >
                  Wallet Management
                </Link>
                <Link
                  href='#external-wallets'
                  className='block rounded-md px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
                >
                  External Wallets
                </Link>
                <Link
                  href='#configuration'
                  className='block rounded-md px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
                >
                  Configuration
                </Link>
                <Link
                  href='#architecture'
                  className='block rounded-md px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
                >
                  Architecture
                </Link>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className='lg:col-span-3'>
            <div className='prose prose-slate dark:prose-invert max-w-none'>
              <h1 className='mb-8 text-4xl font-bold text-slate-900 dark:text-white'>
                Documentation
              </h1>

              {/* Getting Started */}
              <section id='getting-started' className='mb-12'>
                <h2 className='mb-6 text-3xl font-bold text-slate-900 dark:text-white'>
                  Getting Started
                </h2>
                <p className='mb-6 text-lg text-slate-600 dark:text-slate-300'>
                  QuasarFlow API provides a simple REST interface to the Stellar
                  network, eliminating the need to learn complex blockchain
                  protocols. Build blockchain-powered applications using
                  familiar HTTP requests.
                </p>

                <div className='mb-6 rounded-lg border border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-900/20'>
                  <h3 className='mb-2 text-lg font-semibold text-blue-900 dark:text-blue-100'>
                    What is QuasarFlow?
                  </h3>
                  <p className='text-blue-800 dark:text-blue-200'>
                    QuasarFlow is a blockchain abstraction API that simplifies
                    Stellar network integration. Instead of learning
                    cryptographic key management and blockchain-specific SDKs,
                    developers can build blockchain features using simple REST
                    API calls.
                  </p>
                </div>

                <h3 className='mb-4 text-2xl font-bold text-slate-900 dark:text-white'>
                  Key Benefits
                </h3>
                <ul className='mb-6 list-inside list-disc space-y-2 text-slate-600 dark:text-slate-300'>
                  <li>
                    <strong>Simple REST API</strong> - No blockchain SDK
                    learning curve
                  </li>
                  <li>
                    <strong>Enterprise Security</strong> - JWT authentication,
                    rate limiting, and comprehensive security headers
                  </li>
                  <li>
                    <strong>Secure by default</strong> - AES-256-GCM encryption
                    for private keys
                  </li>
                  <li>
                    <strong>External Wallet Support</strong> - Verify ownership
                    of existing Stellar wallets using SEP-10 standards
                  </li>
                  <li>
                    <strong>Production ready</strong> - Built with
                    enterprise-grade architecture and security
                  </li>
                  <li>
                    <strong>Well documented</strong> - Clear API specifications
                    and examples
                  </li>
                </ul>
              </section>

              {/* Quick Start */}
              <section id='quick-start' className='mb-12'>
                <h2 className='mb-6 text-3xl font-bold text-slate-900 dark:text-white'>
                  Quick Start
                </h2>

                <h3 className='mb-4 text-xl font-bold text-slate-900 dark:text-white'>
                  Docker (Recommended)
                </h3>
                <CodeBlock
                  code={`# Clone and setup
git clone https://github.com/QuasarAPI/quasarflow-api.git
cd quasarflow-api

# Setup environment
cp .env.example .env
nano .env  # customize settings

# Start all services
docker-compose up -d

# View logs
docker-compose logs -f quasarflow-api`}
                  language='bash'
                  title='Docker Setup'
                />

                <h3 className='mb-4 text-xl font-bold text-slate-900 dark:text-white'>
                  Manual Setup
                </h3>
                <CodeBlock
                  code={`# Prerequisites: Go 1.21+, PostgreSQL 12+
git clone https://github.com/QuasarAPI/quasarflow-api.git
cd quasarflow-api
go mod download

# Setup database
createdb quasarflow
./scripts/db-manage.sh migrate-up

# Configure and run
cp .env.example .env
go run ./cmd/api/main.go`}
                  language='bash'
                  title='Manual Setup'
                />

                <h3 className='mb-4 text-xl font-bold text-slate-900 dark:text-white'>
                  Quick Example
                </h3>
                <CodeBlock
                  code={`# 1. Login and get token
TOKEN=$(curl -s -X POST https://quasarflow.dev/api/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{"username": "admin", "password": "admin123"}' | jq -r '.data.token')

# 2. Create a wallet
WALLET_ID=$(curl -s -X POST https://quasarflow.dev/api/v1/wallets \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer $TOKEN" \\
  -d '{"network": "testnet"}' | jq -r '.data.id')

# 3. Fund wallet (development only)
curl -X POST https://quasarflow.dev/api/v1/wallets/$WALLET_ID/fund \\
  -H "Authorization: Bearer $TOKEN"

# 4. Check balance
curl https://quasarflow.dev/api/v1/wallets/$WALLET_ID/balance \\
  -H "Authorization: Bearer $TOKEN"`}
                  language='bash'
                  title='Quick Example'
                />

                <div className='rounded-lg border border-yellow-200 bg-yellow-50 p-6 dark:border-yellow-800 dark:bg-yellow-900/20'>
                  <h4 className='mb-2 text-lg font-semibold text-yellow-900 dark:text-yellow-100'>
                    Demo Credentials
                  </h4>
                  <p className='text-yellow-800 dark:text-yellow-200'>
                    Use{' '}
                    <code className='rounded bg-yellow-100 px-2 py-1 dark:bg-yellow-800'>
                      admin/admin123
                    </code>{' '}
                    or
                    <code className='ml-2 rounded bg-yellow-100 px-2 py-1 dark:bg-yellow-800'>
                      user/user123
                    </code>{' '}
                    for testing.
                  </p>
                </div>
              </section>

              {/* Authentication */}
              <section id='authentication' className='mb-12'>
                <h2 className='mb-6 text-3xl font-bold text-slate-900 dark:text-white'>
                  Authentication
                </h2>
                <p className='mb-6 text-slate-600 dark:text-slate-300'>
                  QuasarFlow API uses JWT (JSON Web Tokens) for authentication.
                  All protected endpoints require a valid JWT token in the
                  Authorization header.
                </p>

                <h3 className='mb-4 text-xl font-bold text-slate-900 dark:text-white'>
                  Authentication Flow
                </h3>
                <ol className='mb-6 list-inside list-decimal space-y-2 text-slate-600 dark:text-slate-300'>
                  <li>Login with credentials → Receive JWT token</li>
                  <li>
                    Include token in{' '}
                    <code className='rounded bg-slate-100 px-2 py-1 dark:bg-slate-800'>
                      Authorization: Bearer &lt;token&gt;
                    </code>{' '}
                    header
                  </li>
                  <li>Access protected endpoints with valid token</li>
                </ol>

                <h3 className='mb-4 text-xl font-bold text-slate-900 dark:text-white'>
                  Login Example
                </h3>
                <CodeBlock
                  code={`curl -X POST https://quasarflow.dev/api/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{
    "username": "admin",
    "password": "admin123"
  }'

# Response
{
  "success": true,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "expires_at": "2024-01-01T12:00:00Z"
  }
}`}
                  language='bash'
                  title='Login Example'
                />
              </section>

              {/* Wallet Management */}
              <section id='wallet-management' className='mb-12'>
                <h2 className='mb-6 text-3xl font-bold text-slate-900 dark:text-white'>
                  Wallet Management
                </h2>
                <p className='mb-6 text-slate-600 dark:text-slate-300'>
                  QuasarFlow handles all the complexity of blockchain wallet
                  management, including key generation, encryption, and secure
                  storage.
                </p>

                <h3 className='mb-4 text-xl font-bold text-slate-900 dark:text-white'>
                  Create Wallet
                </h3>
                <CodeBlock
                  code={`curl -X POST https://quasarflow.dev/api/v1/wallets \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "network": "testnet"
  }'

# Response
{
  "success": true,
  "data": {
    "id": "wallet_123",
    "public_key": "GABC123...",
    "network": "testnet",
    "created_at": "2024-01-01T12:00:00Z"
  }
}`}
                  language='bash'
                  title='Create Wallet'
                />

                <h3 className='mb-4 text-xl font-bold text-slate-900 dark:text-white'>
                  Check Balance
                </h3>
                <CodeBlock
                  code={`curl https://quasarflow.dev/api/v1/wallets/wallet_123/balance \\
  -H "Authorization: Bearer YOUR_TOKEN"

# Response
{
  "success": true,
  "data": {
    "balances": [
      {
        "asset": "XLM",
        "amount": "1000.0000000"
      }
    ]
  }
}`}
                  language='bash'
                  title='Check Balance'
                />

                <h3 className='mb-4 text-xl font-bold text-slate-900 dark:text-white'>
                  Send Payment
                </h3>
                <div className='mb-6 rounded-lg bg-slate-900 p-6'>
                  <pre className='overflow-x-auto font-mono text-sm text-green-400'>
                    <code>{`curl -X POST https://quasarflow.dev/api/v1/wallets/wallet_123/payment \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "GDEF456...",
    "amount": "10.5",
    "asset": "XLM",
    "memo": "Payment for services"
  }'

# Response
{
  "success": true,
  "data": {
    "transaction_hash": "abc123...",
    "status": "pending"
  }
}`}</code>
                  </pre>
                </div>
              </section>

              {/* External Wallets */}
              <section id='external-wallets' className='mb-12'>
                <h2 className='mb-6 text-3xl font-bold text-slate-900 dark:text-white'>
                  External Wallet Support
                </h2>
                <p className='mb-6 text-slate-600 dark:text-slate-300'>
                  QuasarFlow API supports users with existing Stellar wallets
                  through ownership verification. Users can prove they own a
                  wallet without registering with the platform.
                </p>

                <h3 className='mb-4 text-xl font-bold text-slate-900 dark:text-white'>
                  Supported Verification Methods
                </h3>
                <ul className='mb-6 list-inside list-disc space-y-2 text-slate-600 dark:text-slate-300'>
                  <li>
                    <strong>🔐 Message Signing (SEP-10)</strong> -
                    Cryptographically sign a challenge
                  </li>
                  <li>
                    <strong>📝 Transaction Proof</strong> - Use recent signed
                    transactions as proof
                  </li>
                  <li>
                    <strong>📊 Account Activity</strong> - Verify based on
                    account existence and activity
                  </li>
                </ul>

                <h3 className='mb-4 text-xl font-bold text-slate-900 dark:text-white'>
                  Verify Existing Wallet
                </h3>
                <div className='mb-6 rounded-lg bg-slate-900 p-6'>
                  <pre className='overflow-x-auto font-mono text-sm text-green-400'>
                    <code>{`# 1. Generate challenge for wallet
CHALLENGE=$(curl -s https://quasarflow.dev/api/v1/accounts/GABC123.../challenge | jq -r '.challenge')

# 2. Sign challenge with private key (client-side)
# This requires a Stellar SDK implementation in your application
SIGNATURE="base64_encoded_signature"

# 3. Verify ownership
curl -X POST https://quasarflow.dev/api/v1/accounts/GABC123.../verify-ownership \\
  -H "Content-Type: application/json" \\
  -d '{
    "signature": "'$SIGNATURE'",
    "message": "'$CHALLENGE'"
  }'

# 4. Alternative: Verify via recent transaction
curl -X POST https://quasarflow.dev/api/v1/accounts/GABC123.../verify-transaction \\
  -H "Content-Type: application/json" \\
  -d '{
    "transaction_hash": "transaction_hash_here"
  }'`}</code>
                  </pre>
                </div>
              </section>

              {/* Configuration */}
              <section id='configuration' className='mb-12'>
                <h2 className='mb-6 text-3xl font-bold text-slate-900 dark:text-white'>
                  Configuration
                </h2>

                <h3 className='mb-4 text-xl font-bold text-slate-900 dark:text-white'>
                  Environment Setup
                </h3>
                <div className='mb-6 rounded-lg bg-slate-900 p-6'>
                  <pre className='overflow-x-auto font-mono text-sm text-green-400'>
                    <code>{`# Copy and customize environment file
cp .env.example .env
nano .env  # Edit with your settings`}</code>
                  </pre>
                </div>

                <h3 className='mb-4 text-xl font-bold text-slate-900 dark:text-white'>
                  Key Variables
                </h3>
                <div className='mb-6 overflow-x-auto'>
                  <table className='min-w-full divide-y divide-slate-200 dark:divide-slate-700'>
                    <thead className='bg-slate-50 dark:bg-slate-800'>
                      <tr>
                        <th className='px-6 py-3 text-left text-xs font-medium tracking-wider text-slate-500 uppercase dark:text-slate-400'>
                          Variable
                        </th>
                        <th className='px-6 py-3 text-left text-xs font-medium tracking-wider text-slate-500 uppercase dark:text-slate-400'>
                          Description
                        </th>
                        <th className='px-6 py-3 text-left text-xs font-medium tracking-wider text-slate-500 uppercase dark:text-slate-400'>
                          Example
                        </th>
                      </tr>
                    </thead>
                    <tbody className='divide-y divide-slate-200 bg-white dark:divide-slate-700 dark:bg-slate-900'>
                      <tr>
                        <td className='px-6 py-4 font-mono text-sm whitespace-nowrap text-slate-900 dark:text-white'>
                          ENV
                        </td>
                        <td className='px-6 py-4 text-sm text-slate-600 dark:text-slate-300'>
                          Environment
                        </td>
                        <td className='px-6 py-4 text-sm text-slate-600 dark:text-slate-300'>
                          development, production
                        </td>
                      </tr>
                      <tr>
                        <td className='px-6 py-4 font-mono text-sm whitespace-nowrap text-slate-900 dark:text-white'>
                          STELLAR_NETWORK
                        </td>
                        <td className='px-6 py-4 text-sm text-slate-600 dark:text-slate-300'>
                          Stellar network
                        </td>
                        <td className='px-6 py-4 text-sm text-slate-600 dark:text-slate-300'>
                          local, testnet, mainnet
                        </td>
                      </tr>
                      <tr>
                        <td className='px-6 py-4 font-mono text-sm whitespace-nowrap text-slate-900 dark:text-white'>
                          ENCRYPTION_KEY
                        </td>
                        <td className='px-6 py-4 text-sm text-slate-600 dark:text-slate-300'>
                          AES key (32 bytes)
                        </td>
                        <td className='px-6 py-4 text-sm text-slate-600 dark:text-slate-300'>
                          openssl rand -base64 32
                        </td>
                      </tr>
                      <tr>
                        <td className='px-6 py-4 font-mono text-sm whitespace-nowrap text-slate-900 dark:text-white'>
                          JWT_SECRET
                        </td>
                        <td className='px-6 py-4 text-sm text-slate-600 dark:text-slate-300'>
                          JWT secret (32+ chars)
                        </td>
                        <td className='px-6 py-4 text-sm text-slate-600 dark:text-slate-300'>
                          SecureProductionSecret123!
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className='mb-4 text-xl font-bold text-slate-900 dark:text-white'>
                  Network Modes
                </h3>
                <ul className='mb-6 list-inside list-disc space-y-2 text-slate-600 dark:text-slate-300'>
                  <li>
                    <strong>Local</strong>: Docker Stellar network + Friendbot
                    for testing
                  </li>
                  <li>
                    <strong>Testnet</strong>: Stellar testnet for staging
                  </li>
                  <li>
                    <strong>Mainnet</strong>: Production Stellar network
                  </li>
                </ul>
              </section>

              {/* Architecture */}
              <section id='architecture' className='mb-12'>
                <h2 className='mb-6 text-3xl font-bold text-slate-900 dark:text-white'>
                  Architecture
                </h2>
                <p className='mb-6 text-slate-600 dark:text-slate-300'>
                  QuasarFlow API follows Clean Architecture principles for
                  maintainability and testability.
                </p>

                <div className='mb-6 rounded-lg bg-slate-100 p-6 dark:bg-slate-800'>
                  <pre className='font-mono text-sm text-slate-900 dark:text-white'>
                    <code>{`┌─────────────────────────────────────────┐
│             HTTP Layer                  │
│    (REST API, Middleware, Routing)     │
└─────────────────┬───────────────────────┘
                  │
┌─────────────────▼───────────────────────┐
│           Use Case Layer                │
│      (Business Logic & Rules)          │
└─────────────────┬───────────────────────┘
                  │
┌─────────────────▼───────────────────────┐
│           Domain Layer                  │
│     (Entities & Interfaces)            │
└─────────────────┬───────────────────────┘
                  │
┌─────────────────▼───────────────────────┐
│        Infrastructure Layer             │
│  (Database, Stellar Client, Crypto)    │
└─────────────────────────────────────────┘`}</code>
                  </pre>
                </div>

                <h3 className='mb-4 text-xl font-bold text-slate-900 dark:text-white'>
                  Architecture Benefits
                </h3>
                <ul className='mb-6 list-inside list-disc space-y-2 text-slate-600 dark:text-slate-300'>
                  <li>
                    <strong>Testability</strong> - Easy to unit test business
                    logic
                  </li>
                  <li>
                    <strong>Flexibility</strong> - Simple to swap
                    implementations
                  </li>
                  <li>
                    <strong>Maintainability</strong> - Clear separation of
                    concerns
                  </li>
                </ul>

                <h3 className='mb-4 text-xl font-bold text-slate-900 dark:text-white'>
                  Project Structure
                </h3>
                <div className='mb-6 rounded-lg bg-slate-100 p-6 dark:bg-slate-800'>
                  <pre className='font-mono text-sm text-slate-900 dark:text-white'>
                    <code>{`quasarflow-api/
├── .cursor/rules/              # Cursor IDE rules
├── cmd/api/                    # Application entry point
├── docs/                       # API documentation
├── internal/                   # Private application code
│   ├── config/                 # Configuration management
│   ├── domain/                 # Business entities & interfaces
│   ├── infrastructure/         # Database, Stellar, Crypto
│   ├── interface/http/         # REST API, Handlers, Middleware
│   └── usecase/               # Business logic
├── migrations/                 # Database schema migrations
├── pkg/                       # Shared utilities
├── scripts/                   # Build and deployment scripts
├── .dockerignore              # Docker ignore file
├── .env.example               # Environment variables template
├── .gitignore                 # Git ignore file
├── Dockerfile                 # Docker container definition
├── LICENSE                    # MIT License
├── README.md                  # Project documentation
├── api                        # API specification
├── docker-compose.yml         # Docker services configuration
├── go.mod                     # Go module definition
└── go.sum                     # Go module checksums`}</code>
                  </pre>
                </div>

                <h3 className='mb-4 text-xl font-bold text-slate-900 dark:text-white'>
                  Technology Stack
                </h3>
                <ul className='list-inside list-disc space-y-2 text-slate-600 dark:text-slate-300'>
                  <li>
                    <strong>Go 1.21+</strong> - High-performance backend
                    language (72.2% of codebase)
                  </li>
                  <li>
                    <strong>PostgreSQL</strong> - Reliable data persistence
                  </li>
                  <li>
                    <strong>Stellar Network</strong> - Fast, low-cost blockchain
                  </li>
                  <li>
                    <strong>Docker</strong> - Containerization and deployment
                  </li>
                  <li>
                    <strong>Shell Scripts</strong> - Build and deployment
                    automation (26.9% of codebase)
                  </li>
                  <li>
                    <strong>Clean Architecture</strong> - Maintainable, testable
                    codebase
                  </li>
                </ul>

                <h3 className='mb-4 text-xl font-bold text-slate-900 dark:text-white'>
                  Repository Statistics
                </h3>
                <div className='mb-6 grid gap-4 md:grid-cols-3'>
                  <div className='rounded-lg bg-slate-100 p-4 dark:bg-slate-800'>
                    <div className='text-2xl font-bold text-slate-900 dark:text-white'>
                      0
                    </div>
                    <div className='text-sm text-slate-600 dark:text-slate-300'>
                      Stars
                    </div>
                  </div>
                  <div className='rounded-lg bg-slate-100 p-4 dark:bg-slate-800'>
                    <div className='text-2xl font-bold text-slate-900 dark:text-white'>
                      2
                    </div>
                    <div className='text-sm text-slate-600 dark:text-slate-300'>
                      Forks
                    </div>
                  </div>
                  <div className='rounded-lg bg-slate-100 p-4 dark:bg-slate-800'>
                    <div className='text-2xl font-bold text-slate-900 dark:text-white'>
                      10
                    </div>
                    <div className='text-sm text-slate-600 dark:text-slate-300'>
                      Commits
                    </div>
                  </div>
                </div>

                <h3 className='mb-4 text-xl font-bold text-slate-900 dark:text-white'>
                  Current Features
                </h3>
                <ul className='mb-6 list-inside list-disc space-y-2 text-slate-600 dark:text-slate-300'>
                  <li>✅ Wallet creation and management</li>
                  <li>✅ Secure private key storage (AES-256-GCM)</li>
                  <li>✅ Payment transactions (XLM and custom assets)</li>
                  <li>✅ Multi-network support (local, testnet, mainnet)</li>
                  <li>✅ JWT Authentication & Enterprise Security</li>
                  <li>✅ Docker development environment</li>
                </ul>

                <h3 className='mb-4 text-xl font-bold text-slate-900 dark:text-white'>
                  Roadmap
                </h3>
                <ul className='list-inside list-disc space-y-2 text-slate-600 dark:text-slate-300'>
                  <li>Multi-signature wallet support</li>
                  <li>Webhook notification system</li>
                  <li>Database user management</li>
                  <li>Advanced role-based permissions</li>
                  <li>Support for additional blockchains</li>
                  <li>Advanced transaction types (escrow, atomic swaps)</li>
                  <li>Analytics and reporting dashboard</li>
                  <li>SDKs for popular languages</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
