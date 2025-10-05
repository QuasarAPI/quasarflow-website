import Link from 'next/link'
import CodeBlock from '@/components/code-block'

export default function ExamplesPage() {
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
                  className='rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
                >
                  API Reference
                </Link>
                <Link
                  href='/examples'
                  className='rounded-md px-3 py-2 text-sm font-medium text-blue-600 dark:text-blue-400'
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
                  Examples
                </h3>
                <Link
                  href='#basic-wallet'
                  className='block rounded-md px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
                >
                  Basic Wallet Operations
                </Link>
                <Link
                  href='#payment-flow'
                  className='block rounded-md px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
                >
                  Payment Flow
                </Link>
                <Link
                  href='#external-wallet'
                  className='block rounded-md px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
                >
                  External Wallet Verification
                </Link>
                <Link
                  href='#javascript-sdk'
                  className='block rounded-md px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
                >
                  JavaScript SDK
                </Link>
                <Link
                  href='#python-sdk'
                  className='block rounded-md px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
                >
                  Python SDK
                </Link>
                <Link
                  href='#go-sdk'
                  className='block rounded-md px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
                >
                  Go SDK
                </Link>
                <Link
                  href='#webhook-integration'
                  className='block rounded-md px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
                >
                  Webhook Integration
                </Link>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className='lg:col-span-3'>
            <div className='prose prose-slate dark:prose-invert max-w-none'>
              <h1 className='mb-8 text-4xl font-bold text-slate-900 dark:text-white'>
                Code Examples
              </h1>

              <p className='mb-8 text-lg text-slate-600 dark:text-slate-300'>
                Learn how to integrate QuasarFlow API into your applications
                with these practical examples.
              </p>

              {/* Basic Wallet Operations */}
              <section id='basic-wallet' className='mb-12'>
                <h2 className='mb-6 text-3xl font-bold text-slate-900 dark:text-white'>
                  Basic Wallet Operations
                </h2>
                <p className='mb-6 text-slate-600 dark:text-slate-300'>
                  Learn the fundamentals of creating wallets, checking balances,
                  and managing assets.
                </p>

                <h3 className='mb-4 text-xl font-bold text-slate-900 dark:text-white'>
                  Complete Wallet Lifecycle
                </h3>
                <CodeBlock
                  code={`#!/bin/bash

# Set your API base URL
API_BASE="https://quasarflow.dev/api"

# 1. Login and get token
echo "🔐 Logging in..."
TOKEN=$(curl -s -X POST $API_BASE/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{"username": "admin", "password": "admin123"}' | jq -r '.data.token')

if [ "$TOKEN" = "null" ]; then
  echo "❌ Login failed"
  exit 1
fi

echo "✅ Login successful"

# 2. Create a new wallet
echo "💰 Creating wallet..."
WALLET_RESPONSE=$(curl -s -X POST $API_BASE/api/v1/wallets \\
  -H "Authorization: Bearer $TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"network": "local"}')

WALLET_ID=$(echo $WALLET_RESPONSE | jq -r '.data.id')
PUBLIC_KEY=$(echo $WALLET_RESPONSE | jq -r '.data.public_key')

echo "✅ Wallet created: $WALLET_ID"
echo "🔑 Public key: $PUBLIC_KEY"

# 3. Fund the wallet (development only)
echo "💸 Funding wallet..."
curl -s -X POST $API_BASE/api/v1/wallets/$WALLET_ID/fund \\
  -H "Authorization: Bearer $TOKEN" > /dev/null

echo "✅ Wallet funded"

# 4. Check balance
echo "📊 Checking balance..."
BALANCE=$(curl -s $API_BASE/api/v1/wallets/$WALLET_ID/balance \\
  -H "Authorization: Bearer $TOKEN")

echo "💰 Balance:"
echo $BALANCE | jq '.data.balances[] | "\(.asset): \(.amount)"'

# 5. Get transaction history
echo "📜 Transaction history..."
HISTORY=$(curl -s $API_BASE/api/v1/wallets/$WALLET_ID/transactions \\
  -H "Authorization: Bearer $TOKEN")

echo "📋 Recent transactions:"
echo $HISTORY | jq '.data.transactions[] | "\(.type): \(.amount) \(.asset) - \(.status)"'`}
                  language='bash'
                  title='Complete Wallet Lifecycle'
                />
              </section>

              {/* Payment Flow */}
              <section id='payment-flow' className='mb-12'>
                <h2 className='mb-6 text-3xl font-bold text-slate-900 dark:text-white'>
                  Payment Flow
                </h2>
                <p className='mb-6 text-slate-600 dark:text-slate-300'>
                  Complete example of sending payments between wallets with
                  error handling.
                </p>

                <h3 className='mb-4 text-xl font-bold text-slate-900 dark:text-white'>
                  Send Payment with Validation
                </h3>
                <div className='mb-6 rounded-lg bg-slate-900 p-6'>
                  <pre className='overflow-x-auto font-mono text-sm text-green-400'>
                    <code>{`#!/bin/bash

# Payment configuration
API_BASE="https://quasarflow.dev/api"
FROM_WALLET_ID="wallet_123"
TO_PUBLIC_KEY="GDEF456..."
AMOUNT="10.5"
ASSET="XLM"
MEMO="Payment for services"

# Login
TOKEN=$(curl -s -X POST $API_BASE/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{"username": "admin", "password": "admin123"}' | jq -r '.data.token')

# Check sender balance before payment
echo "📊 Checking sender balance..."
BALANCE_RESPONSE=$(curl -s $API_BASE/api/v1/wallets/$FROM_WALLET_ID/balance \\
  -H "Authorization: Bearer $TOKEN")

CURRENT_BALANCE=$(echo $BALANCE_RESPONSE | jq -r '.data.balances[] | select(.asset=="'$ASSET'") | .amount')

if [ "$CURRENT_BALANCE" = "null" ]; then
  echo "❌ No $ASSET balance found"
  exit 1
fi

echo "💰 Current $ASSET balance: $CURRENT_BALANCE"

# Validate sufficient balance
if (( $(echo "$CURRENT_BALANCE < $AMOUNT" | bc -l) )); then
  echo "❌ Insufficient balance. Required: $AMOUNT, Available: $CURRENT_BALANCE"
  exit 1
fi

# Send payment
echo "💸 Sending payment..."
PAYMENT_RESPONSE=$(curl -s -X POST $API_BASE/api/v1/wallets/$FROM_WALLET_ID/payment \\
  -H "Authorization: Bearer $TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "'$TO_PUBLIC_KEY'",
    "amount": "'$AMOUNT'",
    "asset": "'$ASSET'",
    "memo": "'$MEMO'"
  }')

# Check if payment was successful
if echo $PAYMENT_RESPONSE | jq -e '.success' > /dev/null; then
  TX_HASH=$(echo $PAYMENT_RESPONSE | jq -r '.data.transaction_hash')
  echo "✅ Payment sent successfully!"
  echo "🔗 Transaction hash: $TX_HASH"
  
  # Wait a moment and check transaction status
  sleep 2
  echo "🔍 Checking transaction status..."
  
  # Get updated transaction history
  HISTORY=$(curl -s $API_BASE/api/v1/wallets/$FROM_WALLET_ID/transactions \\
    -H "Authorization: Bearer $TOKEN")
  
  TX_STATUS=$(echo $HISTORY | jq -r '.data.transactions[] | select(.hash=="'$TX_HASH'") | .status')
  echo "📊 Transaction status: $TX_STATUS"
  
else
  echo "❌ Payment failed:"
  echo $PAYMENT_RESPONSE | jq '.error'
fi`}</code>
                  </pre>
                </div>
              </section>

              {/* External Wallet Verification */}
              <section id='external-wallet' className='mb-12'>
                <h2 className='mb-6 text-3xl font-bold text-slate-900 dark:text-white'>
                  External Wallet Verification
                </h2>
                <p className='mb-6 text-slate-600 dark:text-slate-300'>
                  Verify ownership of existing Stellar wallets using SEP-10
                  standards.
                </p>

                <h3 className='mb-4 text-xl font-bold text-slate-900 dark:text-white'>
                  Challenge-Response Verification
                </h3>
                <div className='mb-6 rounded-lg bg-slate-900 p-6'>
                  <pre className='overflow-x-auto font-mono text-sm text-green-400'>
                    <code>{`#!/bin/bash

# External wallet verification
API_BASE="https://quasarflow.dev/api"
PUBLIC_KEY="GABC123..."  # User's existing Stellar wallet

echo "🔐 Starting external wallet verification for: $PUBLIC_KEY"

# 1. Generate challenge
echo "📝 Generating challenge..."
CHALLENGE_RESPONSE=$(curl -s $API_BASE/api/v1/accounts/$PUBLIC_KEY/challenge)

if ! echo $CHALLENGE_RESPONSE | jq -e '.success' > /dev/null; then
  echo "❌ Failed to generate challenge:"
  echo $CHALLENGE_RESPONSE | jq '.error'
  exit 1
fi

CHALLENGE=$(echo $CHALLENGE_RESPONSE | jq -r '.data.challenge')
EXPIRES_AT=$(echo $CHALLENGE_RESPONSE | jq -r '.data.expires_at')

echo "✅ Challenge generated"
echo "⏰ Expires at: $EXPIRES_AT"

# 2. Sign challenge (this would be done client-side with Stellar SDK)
echo "✍️  Signing challenge..."
echo "Note: In a real application, this would be done client-side with the Stellar SDK"
echo "Challenge to sign: $CHALLENGE"

# For demo purposes, we'll simulate a signature
# In reality, you would use the Stellar SDK to sign with the private key
SIGNATURE="simulated_signature_$(date +%s)"

echo "🔏 Signature: $SIGNATURE"

# 3. Verify ownership
echo "🔍 Verifying ownership..."
VERIFY_RESPONSE=$(curl -s -X POST $API_BASE/api/v1/accounts/$PUBLIC_KEY/verify-ownership \\
  -H "Content-Type: application/json" \\
  -d '{
    "signature": "'$SIGNATURE'",
    "message": "'$CHALLENGE'"
  }')

if echo $VERIFY_RESPONSE | jq -e '.success' > /dev/null; then
  VERIFIED=$(echo $VERIFY_RESPONSE | jq -r '.data.verified')
  if [ "$VERIFIED" = "true" ]; then
    echo "✅ Wallet ownership verified successfully!"
    echo "🔑 Public key: $PUBLIC_KEY"
    echo "⏰ Verified at: $(echo $VERIFY_RESPONSE | jq -r '.data.verified_at')"
  else
    echo "❌ Wallet ownership verification failed"
  fi
else
  echo "❌ Verification request failed:"
  echo $VERIFY_RESPONSE | jq '.error'
fi`}</code>
                  </pre>
                </div>

                <h3 className='mb-4 text-xl font-bold text-slate-900 dark:text-white'>
                  Transaction-Based Verification
                </h3>
                <div className='mb-6 rounded-lg bg-slate-900 p-6'>
                  <pre className='overflow-x-auto font-mono text-sm text-green-400'>
                    <code>{`#!/bin/bash

# Alternative verification using recent transaction
API_BASE="https://quasarflow.dev/api"
PUBLIC_KEY="GABC123..."
TRANSACTION_HASH="abc123def456..."  # Recent transaction from the wallet

echo "🔐 Verifying wallet ownership via transaction: $TRANSACTION_HASH"

# Verify using transaction proof
VERIFY_RESPONSE=$(curl -s -X POST $API_BASE/api/v1/accounts/$PUBLIC_KEY/verify-transaction \\
  -H "Content-Type: application/json" \\
  -d '{
    "transaction_hash": "'$TRANSACTION_HASH'"
  }')

if echo $VERIFY_RESPONSE | jq -e '.success' > /dev/null; then
  VERIFIED=$(echo $VERIFY_RESPONSE | jq -r '.data.verified')
  if [ "$VERIFIED" = "true" ]; then
    echo "✅ Wallet ownership verified via transaction!"
    echo "🔑 Public key: $PUBLIC_KEY"
    echo "🔗 Transaction: $TRANSACTION_HASH"
  else
    echo "❌ Transaction verification failed"
  fi
else
  echo "❌ Verification request failed:"
  echo $VERIFY_RESPONSE | jq '.error'
fi`}</code>
                  </pre>
                </div>
              </section>

              {/* JavaScript SDK */}
              <section id='javascript-sdk' className='mb-12'>
                <h2 className='mb-6 text-3xl font-bold text-slate-900 dark:text-white'>
                  JavaScript SDK
                </h2>
                <p className='mb-6 text-slate-600 dark:text-slate-300'>
                  Use QuasarFlow API in your JavaScript/Node.js applications.
                </p>

                <h3 className='mb-4 text-xl font-bold text-slate-900 dark:text-white'>
                  Installation
                </h3>
                <CodeBlock
                  code={`# Note: SDKs are planned for future releases
# For now, use direct HTTP requests or build your own client

# Clone the API repository
git clone https://github.com/QuasarAPI/quasarflow-api.git
cd quasarflow-api

# Start the API server
docker-compose up -d`}
                  language='bash'
                  title='Setup'
                />

                <h3 className='mb-4 text-xl font-bold text-slate-900 dark:text-white'>
                  Basic Usage (HTTP Client)
                </h3>
                <CodeBlock
                  code={`// Using fetch API or axios for HTTP requests
const API_BASE = 'https://quasarflow.dev/api';

async function walletExample() {
  try {
    // Login
    const loginResponse = await fetch(\`\${API_BASE}/auth/login\`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: 'admin',
        password: 'admin123'
      })
    });
    
    const { data: { token } } = await loginResponse.json();
    console.log('✅ Logged in successfully');

    // Create wallet
    const walletResponse = await fetch(\`\${API_BASE}/api/v1/wallets\`, {
      method: 'POST',
      headers: {
        'Authorization': \`Bearer \${token}\`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ network: 'testnet' })
    });
    
    const { data: wallet } = await walletResponse.json();
    console.log('💰 Wallet created:', wallet.id);

    // Fund wallet (development only)
    await fetch(\`\${API_BASE}/api/v1/wallets/\${wallet.id}/fund\`, {
      method: 'POST',
      headers: { 'Authorization': \`Bearer \${token}\` }
    });
    console.log('💸 Wallet funded');

    // Check balance
    const balanceResponse = await fetch(\`\${API_BASE}/api/v1/wallets/\${wallet.id}/balance\`, {
      headers: { 'Authorization': \`Bearer \${token}\` }
    });
    const { data: balance } = await balanceResponse.json();
    console.log('📊 Balance:', balance);

    // Send payment
    const paymentResponse = await fetch(\`\${API_BASE}/api/v1/wallets/\${wallet.id}/payment\`, {
      method: 'POST',
      headers: {
        'Authorization': \`Bearer \${token}\`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        to: 'GDEF456...',
        amount: '10.5',
        asset: 'XLM',
        memo: 'Payment for services'
      })
    });
    
    const { data: payment } = await paymentResponse.json();
    console.log('💸 Payment sent:', payment.transaction_hash);

  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

walletExample();`}
                  language='javascript'
                  title='JavaScript Example'
                />

                <h3 className='mb-4 text-xl font-bold text-slate-900 dark:text-white'>
                  External Wallet Verification
                </h3>
                <div className='mb-6 rounded-lg bg-slate-900 p-6'>
                  <pre className='overflow-x-auto font-mono text-sm text-green-400'>
                    <code>{`import { QuasarFlowClient } from 'quasarflow-sdk';
import { Keypair } from 'stellar-sdk';

const client = new QuasarFlowClient({
  baseUrl: 'https://quasarflow.dev/api'
});

async function verifyExternalWallet() {
  try {
    const publicKey = 'GABC123...';
    const privateKey = 'S...'; // User's private key (keep secure!)

    // Generate challenge
    const challenge = await client.accounts.generateChallenge(publicKey);
    console.log('📝 Challenge generated');

    // Sign challenge with Stellar SDK
    const keypair = Keypair.fromSecret(privateKey);
    const signature = keypair.sign(challenge.challenge);

    // Verify ownership
    const verification = await client.accounts.verifyOwnership(publicKey, {
      signature: signature.toString('base64'),
      message: challenge.challenge
    });

    if (verification.verified) {
      console.log('✅ Wallet ownership verified!');
    } else {
      console.log('❌ Verification failed');
    }

  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

verifyExternalWallet();`}</code>
                  </pre>
                </div>
              </section>

              {/* Python SDK */}
              <section id='python-sdk' className='mb-12'>
                <h2 className='mb-6 text-3xl font-bold text-slate-900 dark:text-white'>
                  Python SDK
                </h2>
                <p className='mb-6 text-slate-600 dark:text-slate-300'>
                  Use QuasarFlow API in your Python applications.
                </p>

                <h3 className='mb-4 text-xl font-bold text-slate-900 dark:text-white'>
                  Installation
                </h3>
                <div className='mb-6 rounded-lg bg-slate-900 p-6'>
                  <pre className='overflow-x-auto font-mono text-sm text-green-400'>
                    <code>{`# Note: Python SDK is planned for future releases
# For now, use requests library for HTTP calls

pip install requests`}</code>
                  </pre>
                </div>

                <h3 className='mb-4 text-xl font-bold text-slate-900 dark:text-white'>
                  Basic Usage
                </h3>
                <div className='mb-6 rounded-lg bg-slate-900 p-6'>
                  <pre className='overflow-x-auto font-mono text-sm text-green-400'>
                    <code>{`from quasarflow import QuasarFlowClient

# Initialize client
client = QuasarFlowClient(
    base_url='https://quasarflow.dev/api',
    username='admin',
    password='admin123'
)

async def wallet_example():
    try:
        # Login
        await client.auth.login()
        print('✅ Logged in successfully')

        # Create wallet
        wallet = await client.wallets.create(network='testnet')
        print(f'💰 Wallet created: {wallet.id}')

        # Fund wallet (development only)
        await client.wallets.fund(wallet.id)
        print('💸 Wallet funded')

        # Check balance
        balance = await client.wallets.get_balance(wallet.id)
        print(f'📊 Balance: {balance}')

        # Send payment
        payment = await client.wallets.send_payment(wallet.id, {
            'to': 'GDEF456...',
            'amount': '10.5',
            'asset': 'XLM',
            'memo': 'Payment for services'
        })
        print(f'💸 Payment sent: {payment.transaction_hash}')

        # Get transaction history
        transactions = await client.wallets.get_transactions(wallet.id)
        print(f'📜 Transactions: {transactions}')

    except Exception as error:
        print(f'❌ Error: {error}')

# Run the example
import asyncio
asyncio.run(wallet_example())`}</code>
                  </pre>
                </div>
              </section>

              {/* Go SDK */}
              <section id='go-sdk' className='mb-12'>
                <h2 className='mb-6 text-3xl font-bold text-slate-900 dark:text-white'>
                  Go SDK
                </h2>
                <p className='mb-6 text-slate-600 dark:text-slate-300'>
                  Use QuasarFlow API in your Go applications.
                </p>

                <h3 className='mb-4 text-xl font-bold text-slate-900 dark:text-white'>
                  Installation
                </h3>
                <div className='mb-6 rounded-lg bg-slate-900 p-6'>
                  <pre className='overflow-x-auto font-mono text-sm text-green-400'>
                    <code>{`# Note: Go SDK is planned for future releases
# For now, use net/http package for HTTP calls

# No additional dependencies needed - use standard library`}</code>
                  </pre>
                </div>

                <h3 className='mb-4 text-xl font-bold text-slate-900 dark:text-white'>
                  Basic Usage
                </h3>
                <div className='mb-6 rounded-lg bg-slate-900 p-6'>
                  <pre className='overflow-x-auto font-mono text-sm text-green-400'>
                    <code>{`package main

import (
    "fmt"
    "log"
    "github.com/QuasarAPI/quasarflow-go-sdk"
)

func main() {
    // Initialize client
    client := quasarflow.NewClient(&quasarflow.Config{
        BaseURL:  "https://quasarflow.dev/api",
        Username: "admin",
        Password: "admin123",
    })

    // Login
    err := client.Auth.Login()
    if err != nil {
        log.Fatalf("❌ Login failed: %v", err)
    }
    fmt.Println("✅ Logged in successfully")

    // Create wallet
    wallet, err := client.Wallets.Create(&quasarflow.CreateWalletRequest{
        Network: "testnet",
    })
    if err != nil {
        log.Fatalf("❌ Failed to create wallet: %v", err)
    }
    fmt.Printf("💰 Wallet created: %s\\n", wallet.ID)

    // Fund wallet (development only)
    err = client.Wallets.Fund(wallet.ID)
    if err != nil {
        log.Fatalf("❌ Failed to fund wallet: %v", err)
    }
    fmt.Println("💸 Wallet funded")

    // Check balance
    balance, err := client.Wallets.GetBalance(wallet.ID)
    if err != nil {
        log.Fatalf("❌ Failed to get balance: %v", err)
    }
    fmt.Printf("📊 Balance: %+v\\n", balance)

    // Send payment
    payment, err := client.Wallets.SendPayment(wallet.ID, &quasarflow.PaymentRequest{
        To:     "GDEF456...",
        Amount: "10.5",
        Asset:  "XLM",
        Memo:   "Payment for services",
    })
    if err != nil {
        log.Fatalf("❌ Failed to send payment: %v", err)
    }
    fmt.Printf("💸 Payment sent: %s\\n", payment.TransactionHash)

    // Get transaction history
    transactions, err := client.Wallets.GetTransactions(wallet.ID)
    if err != nil {
        log.Fatalf("❌ Failed to get transactions: %v", err)
    }
    fmt.Printf("📜 Transactions: %+v\\n", transactions)
}`}</code>
                  </pre>
                </div>
              </section>

              {/* Webhook Integration */}
              <section id='webhook-integration' className='mb-12'>
                <h2 className='mb-6 text-3xl font-bold text-slate-900 dark:text-white'>
                  Webhook Integration
                </h2>
                <p className='mb-6 text-slate-600 dark:text-slate-300'>
                  Set up webhooks to receive real-time notifications about
                  wallet events.
                </p>

                <h3 className='mb-4 text-xl font-bold text-slate-900 dark:text-white'>
                  Webhook Endpoint Setup
                </h3>
                <div className='mb-6 rounded-lg bg-slate-900 p-6'>
                  <pre className='overflow-x-auto font-mono text-sm text-green-400'>
                    <code>{`from flask import Flask, request, jsonify
import hmac
import hashlib
import json

app = Flask(__name__)

# Your webhook secret (configured in QuasarFlow)
WEBHOOK_SECRET = "your_webhook_secret_here"

def verify_webhook_signature(payload, signature):
    """Verify webhook signature for security"""
    expected_signature = hmac.new(
        WEBHOOK_SECRET.encode(),
        payload,
        hashlib.sha256
    ).hexdigest()
    
    return hmac.compare_digest(f"sha256={expected_signature}", signature)

@app.route('/webhook/quasarflow', methods=['POST'])
def handle_webhook():
    # Get the signature from headers
    signature = request.headers.get('X-QuasarFlow-Signature')
    if not signature:
        return jsonify({'error': 'Missing signature'}), 400
    
    # Verify signature
    if not verify_webhook_signature(request.data, signature):
        return jsonify({'error': 'Invalid signature'}), 401
    
    # Parse webhook payload
    payload = request.get_json()
    event_type = payload.get('type')
    
    print(f"📨 Received webhook: {event_type}")
    
    # Handle different event types
    if event_type == 'wallet.created':
        handle_wallet_created(payload['data'])
    elif event_type == 'payment.sent':
        handle_payment_sent(payload['data'])
    elif event_type == 'payment.received':
        handle_payment_received(payload['data'])
    elif event_type == 'transaction.confirmed':
        handle_transaction_confirmed(payload['data'])
    else:
        print(f"⚠️  Unknown event type: {event_type}")
    
    return jsonify({'status': 'success'})

def handle_wallet_created(data):
    """Handle wallet creation event"""
    wallet_id = data['id']
    public_key = data['public_key']
    print(f"💰 New wallet created: {wallet_id} ({public_key})")
    
    # Your business logic here
    # e.g., update database, send notification, etc.

def handle_payment_sent(data):
    """Handle payment sent event"""
    wallet_id = data['wallet_id']
    amount = data['amount']
    asset = data['asset']
    to = data['to']
    tx_hash = data['transaction_hash']
    
    print(f"💸 Payment sent from {wallet_id}: {amount} {asset} to {to}")
    print(f"🔗 Transaction: {tx_hash}")
    
    # Your business logic here

def handle_payment_received(data):
    """Handle payment received event"""
    wallet_id = data['wallet_id']
    amount = data['amount']
    asset = data['asset']
    from_addr = data['from']
    tx_hash = data['transaction_hash']
    
    print(f"💰 Payment received in {wallet_id}: {amount} {asset} from {from_addr}")
    print(f"🔗 Transaction: {tx_hash}")
    
    # Your business logic here

def handle_transaction_confirmed(data):
    """Handle transaction confirmation event"""
    tx_hash = data['transaction_hash']
    status = data['status']
    
    print(f"✅ Transaction confirmed: {tx_hash} (status: {status})")
    
    # Your business logic here

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)`}</code>
                  </pre>
                </div>

                <h3 className='mb-4 text-xl font-bold text-slate-900 dark:text-white'>
                  Webhook Configuration
                </h3>
                <div className='mb-6 rounded-lg bg-slate-900 p-6'>
                  <pre className='overflow-x-auto font-mono text-sm text-green-400'>
                    <code>{`# Configure webhook in QuasarFlow
curl -X POST https://quasarflow.dev/api/v1/webhooks \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://yourdomain.com/webhook/quasarflow",
    "events": [
      "wallet.created",
      "payment.sent",
      "payment.received",
      "transaction.confirmed"
    ],
    "secret": "your_webhook_secret_here"
  }'`}</code>
                  </pre>
                </div>

                <div className='rounded-lg border border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-900/20'>
                  <h4 className='mb-2 text-lg font-semibold text-blue-900 dark:text-blue-100'>
                    Webhook Events
                  </h4>
                  <ul className='space-y-1 text-blue-800 dark:text-blue-200'>
                    <li>
                      <code className='rounded bg-blue-100 px-2 py-1 dark:bg-blue-800'>
                        wallet.created
                      </code>{' '}
                      - New wallet created
                    </li>
                    <li>
                      <code className='rounded bg-blue-100 px-2 py-1 dark:bg-blue-800'>
                        payment.sent
                      </code>{' '}
                      - Payment sent from wallet
                    </li>
                    <li>
                      <code className='rounded bg-blue-100 px-2 py-1 dark:bg-blue-800'>
                        payment.received
                      </code>{' '}
                      - Payment received in wallet
                    </li>
                    <li>
                      <code className='rounded bg-blue-100 px-2 py-1 dark:bg-blue-800'>
                        transaction.confirmed
                      </code>{' '}
                      - Transaction confirmed on blockchain
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
