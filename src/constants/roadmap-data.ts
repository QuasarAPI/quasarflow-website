export const roadmapData = [
  {
    id: 'q1-2025',
    quarter: 'Q1',
    year: '2025',
    title: 'Core Foundation',
    description: 'Building the essential components',
    items: [
      {
        name: 'Core API v1.0 Release',
        description: 'Initial stable API with core functionality',
      },
      {
        name: 'Docker Support',
        description: 'Containerized deployment for easy setup',
      },
      {
        name: 'Basic Wallet Operations',
        description: 'Create, manage and view wallet status',
      },
      {
        name: 'JWT Authentication',
        description: 'Secure token-based authentication system',
      },
    ],
    status: 'completed',
    percentComplete: 100,
    dateRange: 'Jan - Mar 2025',
  },
  {
    id: 'q2-2025',
    quarter: 'Q2',
    year: '2025',
    title: 'Payment Infrastructure',
    description: 'Enabling financial transactions',
    items: [
      {
        name: 'Payment Processing',
        description: 'Complete payment pipeline with validation',
      },
      {
        name: 'Transaction History',
        description: 'Comprehensive transaction tracking',
      },
      {
        name: 'External Wallet Verification',
        description: 'Verify ownership of existing wallets',
      },
      {
        name: 'Webhook Support',
        description: 'Real-time event notifications',
      },
    ],
    status: 'completed',
    percentComplete: 100,
    dateRange: 'Apr - Jun 2025',
  },
  {
    id: 'q3-2025',
    quarter: 'Q3',
    year: '2025',
    title: 'Advanced Features',
    description: 'Enhanced capabilities and performance',
    items: [
      {
        name: 'Advanced Stellar Operations',
        description: 'Complex blockchain transactions and operations',
      },
      {
        name: 'Rate Limiting & Throttling',
        description: 'Prevent abuse and ensure fair resource allocation',
      },
      {
        name: 'API Analytics & Monitoring',
        description: 'Real-time insights into API usage and performance',
      },
      {
        name: 'Performance Optimization',
        description: 'Enhanced throughput and reduced latency',
      },
    ],
    status: 'inProgress',
    percentComplete: 60,
    dateRange: 'Jul - Sep 2025',
  },
  {
    id: 'q4-2025',
    quarter: 'Q4',
    year: '2025',
    title: 'Enterprise Readiness',
    description: 'Production-grade capabilities',
    items: [
      {
        name: 'Enhanced Stellar SDK Integration',
        description: 'Full SDK feature set with advanced capabilities',
      },
      {
        name: 'Multi-Asset & Token Support',
        description: 'Support for diverse asset types and custom tokens',
      },
      {
        name: 'Advanced Security & Encryption',
        description: 'Enhanced security features and encryption methods',
      },
      {
        name: 'Enterprise API Management',
        description: 'Complete enterprise toolset for API management',
      },
    ],
    status: 'planned',
    percentComplete: 15,
    dateRange: 'Oct - Dec 2025',
  },
] as const

export const futureVisionData = [
  {
    title: 'Advanced Stellar Features',
    icon: 'lightning',
    description:
      'Smart contracts, complex transactions, and advanced Stellar network capabilities',
  },
  {
    title: 'Stellar DeFi Integration',
    icon: 'chart',
    description:
      'Stellar DEX integration, liquidity pools, and automated market makers',
  },
  {
    title: 'Go API Excellence',
    icon: 'shield',
    description:
      'High-performance Go API, advanced monitoring, and enterprise-grade reliability',
  },
]
