// BankAPI Hub - Full-Stack Dev Server & REST API
// Lightweight dependency-free server with persistent JSON-file database on disk

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const DB_DIR = path.join(path.resolve(__dirname, '..'), 'database');
const DB_PATH = path.join(DB_DIR, 'db.json');

// MIME Types for Static File Server
const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

// Initial Mock Dataset for database initialization
const INITIAL_DATABASE = {
  vendors: {
    'persona-verify': {
      id: 'persona-verify', name: 'Persona Inc.', logoText: 'P', color: '#3B82F6', isVerified: true, rating: 4.9, reviewsCount: 142, headquarters: 'San Francisco, CA', founded: '2018', totalListings: 2, soc2: true, iso27001: true, pciDss: false, gdpr: true
    },
    'stripe-pay': {
      id: 'stripe-pay', name: 'Stripe Payments', logoText: 'S', color: '#6366F1', isVerified: true, rating: 5.0, reviewsCount: 3105, headquarters: 'Dublin & San Francisco', founded: '2010', totalListings: 3, soc2: true, iso27001: true, pciDss: true, gdpr: true
    },
    'plaid-link': {
      id: 'plaid-link', name: 'Plaid Technologies', logoText: 'Pl', color: '#0D9488', isVerified: true, rating: 4.8, reviewsCount: 843, headquarters: 'San Francisco, CA', founded: '2013', totalListings: 2, soc2: true, iso27001: false, pciDss: true, gdpr: true
    },
    'unit-finance': {
      id: 'unit-finance', name: 'Unit Finance', logoText: 'U', color: '#10B981', isVerified: true, rating: 4.7, reviewsCount: 96, headquarters: 'New York, NY', founded: '2019', totalListings: 2, soc2: true, iso27001: true, pciDss: true, gdpr: false
    },
    'alloy-identity': {
      id: 'alloy-identity', name: 'Alloy Decisioning', logoText: 'A', color: '#EC4899', isVerified: true, rating: 4.7, reviewsCount: 112, headquarters: 'New York, NY', founded: '2015', totalListings: 1, soc2: true, iso27001: true, pciDss: false, gdpr: true
    },
    'marqeta-card': {
      id: 'marqeta-card', name: 'Marqeta Inc.', logoText: 'M', color: '#8B5CF6', isVerified: true, rating: 4.8, reviewsCount: 254, headquarters: 'Oakland, CA', founded: '2010', totalListings: 1, soc2: true, iso27001: true, pciDss: true, gdpr: true
    },
    'lithic-card': {
      id: 'lithic-card', name: 'Lithic Corp.', logoText: 'L', color: '#F59E0B', isVerified: true, rating: 4.6, reviewsCount: 88, headquarters: 'New York, NY', founded: '2014', totalListings: 1, soc2: true, iso27001: false, pciDss: true, gdpr: false
    },
    'sift-fraud': {
      id: 'sift-fraud', name: 'Sift Science', logoText: 'Sf', color: '#EF4444', isVerified: false, rating: 4.5, reviewsCount: 71, headquarters: 'San Francisco, CA', founded: '2011', totalListings: 1, soc2: true, iso27001: false, pciDss: false, gdpr: true
    },
    'comply-adv': {
      id: 'comply-adv', name: 'ComplyAdvantage', logoText: 'CA', color: '#14B8A6', isVerified: true, rating: 4.6, reviewsCount: 54, headquarters: 'London, UK', founded: '2014', totalListings: 1, soc2: true, iso27001: true, pciDss: false, gdpr: true
    },
    'modern-treasury': {
      id: 'modern-treasury', name: 'Modern Treasury', logoText: 'MT', color: '#06B6D4', isVerified: true, rating: 4.8, reviewsCount: 119, headquarters: 'San Francisco, CA', founded: '2018', totalListings: 1, soc2: true, iso27001: true, pciDss: false, gdpr: false
    }
  },
  apis: [
    {
      id: 'persona-verify-kyc',
      name: 'Identity Verification & KYC Engine',
      vendorId: 'persona-verify',
      category: 'KYC',
      slogan: 'Fully automated identity checks, document verification, and watchlists.',
      description: 'Automate customer onboarding with global identity database checks, selfie biometric comparisons, OCR document verification (Passports, Driving Licenses), and real-time AML watchlist screening. Meets global compliance standards while optimizing conversion rates with dynamic, risk-based onboarding flows.',
      regions: ['US', 'EU', 'UK', 'Global'],
      pricingModel: 'Volume Tiers',
      pricingDetails: 'Starts at $0.45 per verification query. Dynamic volume discounts over 10,000 requests/month.',
      sandbox: true,
      sandboxDetails: 'Instant access. Complete test payload set provided for simulating ID passes, manual review triggers, and fraud flags.',
      complianceTags: ['SOC 2', 'ISO 27001', 'GDPR'],
      integrationRating: 'Easy',
      webhooks: true,
      docsQuality: 5,
      sla: '99.95%',
      latency: 220,
      uptime: '99.98%',
      sdkLanguages: ['curl', 'Node.js', 'Python', 'Go', 'Ruby'],
      useCases: ['Startup onboarding', 'Neo-bank launch', 'Crypto exchange registration'],
      openapiSchema: {
        "openapi": "3.0.0", "info": { "title": "Persona KYC API", "version": "1.4.0" },
        "paths": { "/v1/inquiries": { "post": { "summary": "Create KYC Inquiry" } } }
      },
      codeExample: {
        curl: `curl -X POST https://api.withpersona.com/v1/inquiries \\\n  -H "Authorization: Bearer $PERSONA_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  -d '{\n    "template_id": "tmpl_a8j2K9d",\n    "name_first": "Jane",\n    "name_last": "Doe",\n    "birthdate": "1990-01-01",\n    "country": "US"\n  }'`,
        javascript: `const axios = require('axios');\n\naxios.post('https://api.withpersona.com/v1/inquiries', {\n  template_id: 'tmpl_a8j2K9d',\n  name_first: 'Jane',\n  name_last: 'Doe',\n  birthdate: '1990-01-01',\n  country: 'US'\n}, {\n  headers: {\n    'Authorization': 'Bearer ' + process.env.PERSONA_API_KEY,\n    'Content-Type': 'application/json'\n  }\n})\n.then(res => console.log(res.data))\n.catch(err => console.error(err));`,
        python: `import requests\nimport os\n\nurl = "https://api.withpersona.com/v1/inquiries"\nheaders = {\n    "Authorization": f"Bearer {os.environ.get('PERSONA_API_KEY')}",\n    "Content-Type": "application/json"\n}\npayload = {\n    "template_id": "tmpl_a8j2K9d",\n    "name_first": "Jane",\n    "name_last": "Doe",\n    "birthdate": "1990-01-01",\n    "country": "US"\n}\n\nresponse = requests.post(url, json=payload, headers=headers)\nprint(response.json())`
      }
    },
    {
      id: 'stripe-payments-card',
      name: 'Card Acquiring & Local Payments API',
      vendorId: 'stripe-pay',
      category: 'Payments',
      slogan: 'Process global credit cards, digital wallets, and local payment methods.',
      description: 'A unified API to capture and process global card transactions (Visa, Mastercard, Amex), Apple Pay, Google Pay, and localized bank transfers. Includes built-in conversion optimization, smart-routing to reduce card declines, and basic machine-learning fraud protection (Radar). Fully PCI-DSS Level 1 compliant.',
      regions: ['US', 'EU', 'UK', 'Global'],
      pricingModel: 'Per-transaction',
      pricingDetails: '2.9% + $0.30 per successful card charge. Enterprise volume rates available.',
      sandbox: true,
      sandboxDetails: 'Instant signup. Test card numbers provided to simulate success, decline codes, SCA triggers, and 3D Secure verification.',
      complianceTags: ['SOC 2', 'PCI-DSS', 'GDPR', 'ISO 27001'],
      integrationRating: 'Easy',
      webhooks: true,
      docsQuality: 5,
      sla: '99.99%',
      latency: 90,
      uptime: '99.99%',
      sdkLanguages: ['curl', 'Node.js', 'Python', 'Go', 'PHP', 'Ruby', 'Java'],
      useCases: ['Startup onboarding', 'SME banking', 'Payout automation'],
      openapiSchema: {
        "openapi": "3.0.0", "info": { "title": "Stripe Payments API", "version": "2023-10-16" },
        "paths": { "/v1/payment_intents": { "post": { "summary": "Create Payment Intent" } } }
      },
      codeExample: {
        curl: `curl https://api.stripe.com/v1/payment_intents \\\n  -u sk_test_51O:...: \\\n  -d amount=2000 \\\n  -d currency=usd \\\n  -d "payment_method_types[]"=card`,
        javascript: `const stripe = require('stripe')('sk_test_51O...');\n\nstripe.paymentIntents.create({\n  amount: 2000,\n  currency: 'usd',\n  payment_method_types: ['card'],\n})\n.then(intent => console.log(intent.id));`,
        python: `import stripe\nstripe.api_key = \"sk_test_51O...\"\n\nintent = stripe.PaymentIntent.create(\n  amount=2000,\n  currency=\"usd\",\n  payment_method_types=[\"card\"],\n)\nprint(intent.id)`
      }
    },
    {
      id: 'plaid-auth-link',
      name: 'Plaid Account Auth & Transaction Sync',
      vendorId: 'plaid-link',
      category: 'Payments',
      slogan: 'Connect consumer bank accounts for instant ACH and data retrieval.',
      description: 'Securely link customer accounts at over 11,000 financial institutions in the US, Canada, UK, and Europe. Retrieve real-time balances, historical transaction lists, verify account ownership, and instantly authenticate accounts for routing/ACH transfers to bypass micro-deposit latency.',
      regions: ['US', 'EU', 'UK'],
      pricingModel: 'Volume Tiers',
      pricingDetails: 'Subscription plans start at $150/mo. Volume rates range from $1.50 per linked bank login to $0.10 for transactions.',
      sandbox: true,
      sandboxDetails: 'Developer signup gives immediately access to Plaid Sandbox. Simulate real banks (Chase, Citi, Wells Fargo) with credentials.',
      complianceTags: ['SOC 2', 'PCI-DSS'],
      integrationRating: 'Medium',
      webhooks: true,
      docsQuality: 4,
      sla: '99.90%',
      latency: 180,
      uptime: '99.95%',
      sdkLanguages: ['curl', 'Node.js', 'Python', 'Ruby', 'Java'],
      useCases: ['Startup onboarding', 'Neo-bank launch', 'Payout automation'],
      openapiSchema: {
        "openapi": "3.0.0", "info": { "title": "Plaid API", "version": "2020-09-14" },
        "paths": { "/link/token/create": { "post": { "summary": "Create Link Token" } } }
      },
      codeExample: {
        curl: `curl -X POST https://sandbox.plaid.com/link/token/create \\\n  -H "Content-Type: application/json" \\\n  -d '{\n    "client_id": "PLAID_CLIENT_ID",\n    "secret": "PLAID_SECRET",\n    "client_name": "BankAPI Hub App",\n    "country_codes": ["US"],\n    "language": "en",\n    "user": { "client_user_id": "usr_94a28n" },\n    "products": ["auth", "transactions"]\n  }'`,
        javascript: `const { Configuration, PlaidApi, PlaidEnvironments } = require('plaid');\n// Initialize plaid client and request token...`,
        python: `import plaid\n# Initialize plaid sdk and fetch token...`
      }
    },
    {
      id: 'unit-core-ledger',
      name: 'Embedded Banking Accounts & Ledger',
      vendorId: 'unit-finance',
      category: 'Ledger',
      slogan: 'Open FDIC-insured checking accounts, deposit products, and ledgers.',
      description: 'Embed real banking services into your application. Issue checking and savings accounts with routing numbers, set up dual-entry ledgers for internal balance tracking, and link directly to deposit accounts at partner clearing banks. Fully compliant with automated transaction categorization.',
      regions: ['US'],
      pricingModel: 'SaaS Subscription',
      pricingDetails: 'Subscription starts at $2,500/month for platform access, then pricing drops per account to $0.15/month.',
      sandbox: false,
      sandboxDetails: 'Requires business vetting and basic compliance onboarding draft to access the ledger sandbox.',
      complianceTags: ['SOC 2', 'ISO 27001', 'PCI-DSS'],
      integrationRating: 'Complex',
      webhooks: true,
      docsQuality: 4,
      sla: '99.95%',
      latency: 160,
      uptime: '99.96%',
      sdkLanguages: ['curl', 'Node.js', 'Python'],
      useCases: ['Neo-bank launch', 'SME banking'],
      openapiSchema: {
        "openapi": "3.0.0", "info": { "title": "Unit Ledger API", "version": "1.0.0" },
        "paths": { "/accounts": { "post": { "summary": "Create Account" } } }
      },
      codeExample: {
        curl: `curl -X POST https://api.s.unit.co/accounts \\\n  -H "Authorization: Bearer $UNIT_BEARER_TOKEN" \\\n  -H "Content-Type: application/json" \\\n  -d '{\n    "data": {\n      "type": "depositAccount",\n      "attributes": {\n        "depositProduct": "checking",\n        "customerId": "cust_12345"\n      }\n    }\n  }'`,
        javascript: `const axios = require('axios');\n// Post request details...`,
        python: `import requests\n# Request transaction details...`
      }
    },
    {
      id: 'alloy-decisioning-compliance',
      name: 'Compliance Workflow & Decisioning API',
      vendorId: 'alloy-identity',
      category: 'Compliance',
      slogan: 'Orchestrate KYC, KYB, fraud, and credit decisioning in a single hub.',
      description: 'Integrate with 150+ third-party data providers through a single API. Alloy acts as the orchestration layer for customer onboarding, allowing risk managers to build rules-based workflows, flag manual reviews, trigger watchlists, and score applicants dynamically.',
      regions: ['US', 'EU', 'Global'],
      pricingModel: 'Volume Tiers',
      pricingDetails: '$0.50 - $0.20 per custom decision evaluation, plus underlying data provider costs.',
      sandbox: true,
      sandboxDetails: 'Sandbox access is available on inquiry. Dynamic simulator allows configuring rules and custom user data results.',
      complianceTags: ['SOC 2', 'ISO 27001', 'GDPR'],
      integrationRating: 'Medium',
      webhooks: true,
      docsQuality: 4,
      sla: '99.90%',
      latency: 280,
      uptime: '99.94%',
      sdkLanguages: ['curl', 'Node.js', 'Python', 'Go'],
      useCases: ['Neo-bank launch', 'SME banking', 'Crypto exchange registration'],
      openapiSchema: {
        "openapi": "3.0.0", "info": { "title": "Alloy Decision API", "version": "2.1" },
        "paths": { "/evaluations": { "post": { "summary": "Run Evaluation Workflow" } } }
      },
      codeExample: {
        curl: `curl -u $ALLOY_TOKEN_ID:$ALLOY_TOKEN_SECRET https://api.alloy.co/v1/evaluations \\\n  -H "Content-Type: application/json" \\\n  -d '{\n    "name_first": "John",\n    "name_last": "Smith",\n    "address_line_1": "123 Main St",\n    "document_ssn": "000112222"\n  }'`,
        javascript: `const axios = require('axios');\n// Basic auth evaluation call...`,
        python: `import requests\n# Evaluation schema POST...`
      }
    },
    {
      id: 'marqeta-core-cards',
      name: 'Enterprise Card Issuing & Just-In-Time Funding',
      vendorId: 'marqeta-card',
      category: 'Cards',
      slogan: 'Issue physical, virtual, and tokenized cards with real-time controls.',
      description: 'A developer-first open API platform for issuing Visa and Mastercard debit, credit, and prepaid cards. Leverage Marqeta Just-In-Time (JIT) Funding to approve or decline transaction payloads programmatically at the moment of swipe, using your own backend ledger.',
      regions: ['US', 'EU', 'UK', 'Global'],
      pricingModel: 'Volume Tiers',
      pricingDetails: 'Interchange commission split + SaaS platform fees. Rates depend on gross volume.',
      sandbox: true,
      sandboxDetails: 'Highly comprehensive sandbox with a simulated terminal transaction generator to trigger JIT auth webhooks.',
      complianceTags: ['SOC 2', 'ISO 27001', 'PCI-DSS', 'GDPR'],
      integrationRating: 'Complex',
      webhooks: true,
      docsQuality: 5,
      sla: '99.99%',
      latency: 110,
      uptime: '99.99%',
      sdkLanguages: ['curl', 'Node.js', 'Python', 'Java', 'Ruby'],
      useCases: ['Neo-bank launch', 'SME banking', 'Payout automation'],
      openapiSchema: {
        "openapi": "3.0.0", "info": { "title": "Marqeta Core API", "version": "3.0" },
        "paths": { "/cards": { "post": { "summary": "Create Card" } } }
      },
      codeExample: {
        curl: `curl -X POST https://sandbox-api.marqeta.com/v3/cards \\\n  -u $MQ_ACCESS_TOKEN: \\\n  -H "Content-Type: application/json" \\\n  -d '{\n    "user_token": "usr_77a11d2e",\n    "card_product_token": "prod_card_silver"\n  }'`,
        javascript: `const axios = require('axios');\n// API call for card creation...`,
        python: `import requests\n# Card creation post parameters...`
      }
    },
    {
      id: 'lithic-card-api',
      name: 'Virtual Card Issuing API for Startups',
      vendorId: 'lithic-card',
      category: 'Cards',
      slogan: 'Deploy custom virtual cards programmatically in hours.',
      description: 'Instantly issue custom virtual credit, debit, or single-use burner cards. Optimized for startups and SaaS applications adding banking cards. Provides clean, developer-friendly endpoints, authorization controls via webhooks, and simple SDKs.',
      regions: ['US'],
      pricingModel: 'Per-transaction',
      pricingDetails: 'No platform fees. Free virtual cards; cost covered via interchange sharing.',
      sandbox: true,
      sandboxDetails: 'Instant developer access. Complete mock network to test authorizations, clearing, and voids.',
      complianceTags: ['SOC 2', 'PCI-DSS'],
      integrationRating: 'Easy',
      webhooks: true,
      docsQuality: 4,
      sla: '99.90%',
      latency: 95,
      uptime: '99.97%',
      sdkLanguages: ['curl', 'Node.js', 'Python', 'Go'],
      useCases: ['Startup onboarding', 'SME banking', 'Payout automation'],
      openapiSchema: {
        "openapi": "3.0.0", "info": { "title": "Lithic Card API", "version": "1.1" },
        "paths": { "/v1/cards": { "post": { "summary": "Create Card" } } }
      },
      codeExample: {
        curl: `curl https://api.lithic.com/v1/cards \\\n  -H "Authorization: api-key $LITHIC_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  -d '{\n    "type": "SINGLE_USE",\n    "spend_limit": 5000\n  }'`,
        javascript: `const Lithic = require('@lithic/sdk');\nconst client = new Lithic({ apiKey: process.env.LITHIC_API_KEY });`,
        python: `from lithic import Lithic\nclient = Lithic(api_key="key")`
      }
    },
    {
      id: 'sift-fraud-detection',
      name: 'Real-Time Fraud Prevention & Risk API',
      vendorId: 'sift-fraud',
      category: 'Fraud',
      slogan: 'Harness machine learning to prevent payment fraud and account takeovers.',
      description: 'Detect and prevent fraudulent transactions, fake accounts, and credit card abuse in real-time. By analyzing user behavior, device fingerprints, and payment indicators across Sift\'s global merchant network, the API assigns real-time risk scores for proactive blocks.',
      regions: ['Global'],
      pricingModel: 'Per-transaction',
      pricingDetails: '$0.02 - $0.005 per score request, depending on monthly request volume.',
      sandbox: true,
      sandboxDetails: 'Sandbox dashboard accessible upon API key generation. Simulated fraud vectors and scoring responses available.',
      complianceTags: ['SOC 2', 'GDPR'],
      integrationRating: 'Medium',
      webhooks: true,
      docsQuality: 4,
      sla: '99.95%',
      latency: 140,
      uptime: '99.98%',
      sdkLanguages: ['curl', 'Node.js', 'Python', 'Java', 'Go'],
      useCases: ['Crypto exchange registration', 'Payout automation'],
      openapiSchema: {
        "openapi": "3.0.0", "info": { "title": "Sift API", "version": "205" },
        "paths": { "/v205/events": { "post": { "summary": "Send Event" } } }
      },
      codeExample: {
        curl: `curl -X POST https://api.sift.com/v205/events \\\n  -d '{"$type": "$transaction", "$api_key": "sift_key_abcdef123"}'`,
        javascript: `const sift = require('sift-api')('sift_key_123');`,
        python: `import sift\nclient = sift.Client(api_key="key")`
      }
    },
    {
      id: 'comply-adv-aml-screening',
      name: 'AML Screening & Real-time Transaction Monitoring',
      vendorId: 'comply-adv',
      category: 'Compliance',
      slogan: 'Sanctions checking, PEP lists, and adverse media screening.',
      description: 'Ensure compliance with global AML regulations by screening entities against real-time sanctions lists (OFAC, UN, EU), PEP (Politically Exposed Persons) databases, and global adverse media. Features advanced fuzzy matching algorithms to minimize false positives.',
      regions: ['UK', 'EU', 'US', 'Global'],
      pricingModel: 'Volume Tiers',
      pricingDetails: 'Annual licensing starting at $5,000, plus volume billing for searches ($0.30 - $0.08 per screening search).',
      sandbox: true,
      sandboxDetails: 'Full staging environment available. Mock name lists provided (e.g., "John Doe" triggers OFAC matches).',
      complianceTags: ['SOC 2', 'ISO 27001', 'GDPR'],
      integrationRating: 'Easy',
      webhooks: true,
      docsQuality: 4,
      sla: '99.95%',
      latency: 200,
      uptime: '99.98%',
      sdkLanguages: ['curl', 'Node.js', 'Python', 'Go'],
      useCases: ['Startup onboarding', 'Neo-bank launch', 'Crypto exchange registration'],
      openapiSchema: {
        "openapi": "3.0.0", "info": { "title": "ComplyAdvantage API", "version": "v3" },
        "paths": { "/v3/searches": { "post": { "summary": "Screen Entity" } } }
      },
      codeExample: {
        curl: `curl -X POST https://api.complyadvantage.com/v3/searches \\\n  -H "API-Key: ca_api_key_123"`,
        javascript: `const axios = require('axios');\n// Post request...`,
        python: `import requests\n# Request logic...`
      }
    },
    {
      id: 'modern-treasury-reconciliation',
      name: 'Multi-Bank Reconciliation & Payouts API',
      vendorId: 'modern-treasury',
      category: 'Ledger',
      slogan: 'Automate high-volume payouts, direct deposit routing, and bank reconciliations.',
      description: 'Integrate your backend directly into 30+ major clearing banks (Chase, SVB, Wells Fargo, etc.) to orchestrate ACH, Fedwire, and RTP transactions. Automatically matches bank statement transactions against internal ledgers for real-time reconciliation.',
      regions: ['US'],
      pricingModel: 'SaaS Subscription',
      pricingDetails: '$499/month base + $0.20 per ACH/wire transfer transaction. Enterprise packages with flat-rate ACH.',
      sandbox: true,
      sandboxDetails: 'Comprehensive mock bank setup. Initiate payments and trigger virtual bank statements to test the reconciliation rules.',
      complianceTags: ['SOC 2', 'ISO 27001'],
      integrationRating: 'Complex',
      webhooks: true,
      docsQuality: 5,
      sla: '99.90%',
      latency: 190,
      uptime: '99.96%',
      sdkLanguages: ['curl', 'Node.js', 'Python', 'Go', 'Ruby'],
      useCases: ['SME banking', 'Payout automation'],
      openapiSchema: {
        "openapi": "3.0.0", "info": { "title": "Modern Treasury API", "version": "1.0" },
        "paths": { "/api/payment_orders": { "post": { "summary": "Create Payment Order" } } }
      },
      codeExample: {
        curl: `curl -u $MT_ORG_ID:$MT_API_KEY https://api.moderntreasury.com/api/payment_orders`,
        javascript: `const ModernTreasury = require('modern-treasury');`,
        python: `from modern_treasury import ModernTreasury`
      }
    },
    {
      id: 'stripe-treasury-banking',
      name: 'Stripe Treasury Embedded Financial Accounts',
      vendorId: 'stripe-pay',
      category: 'Ledger',
      slogan: 'Integrate standard clearing bank accounts and yield-bearing ledgers.',
      description: 'Provide FDIC-insured checking accounts to business users. Build platforms that can hold funds, pay bills, receive direct deposits, and earn interest on cash pools. Easily issue credit cards directly on top of the accounts.',
      regions: ['US'],
      pricingModel: 'SaaS Subscription',
      pricingDetails: 'Subscription plans for platforms start at $1,000/mo. Volume transaction fees apply ($0.10 ACH).',
      sandbox: true,
      sandboxDetails: 'Stripe Treasury is available in standard Stripe developer dashboard. Direct APIs to simulate inbound/outbound flows.',
      complianceTags: ['SOC 2', 'PCI-DSS', 'GDPR', 'ISO 27001'],
      integrationRating: 'Complex',
      webhooks: true,
      docsQuality: 5,
      sla: '99.99%',
      latency: 130,
      uptime: '99.99%',
      sdkLanguages: ['curl', 'Node.js', 'Python', 'Go'],
      useCases: ['Neo-bank launch', 'SME banking'],
      openapiSchema: {
        "openapi": "3.0.0", "info": { "title": "Stripe Treasury API", "version": "1.0.0" },
        "paths": { "/v1/treasury/financial_accounts": { "post": { "summary": "Create Account" } } }
      },
      codeExample: {
        curl: `curl https://api.stripe.com/v1/treasury/financial_accounts \\\n  -u sk_test_51O:...:`,
        javascript: `const stripe = require('stripe')('sk_test_123');`,
        python: `import stripe`
      }
    },
    {
      id: 'persona-verify-gov',
      name: 'Government ID & Selfie Biometric Matcher',
      vendorId: 'persona-verify',
      category: 'KYC',
      slogan: 'Liveness matching and government database cross-verification.',
      description: 'Verify identity documents against direct governmental databases globally, combined with active and passive liveness checks via high-resolution video selfie scanning. Eliminates spoofing, synthetic identities, and account takeover attempts during account recovery.',
      regions: ['US', 'EU', 'UK', 'Global'],
      pricingModel: 'Volume Tiers',
      pricingDetails: 'Starts at $0.80 per check. Drops to $0.40 at scale.',
      sandbox: true,
      sandboxDetails: 'Instant sandbox. Pre-built test web SDK triggers face match success or failure codes.',
      complianceTags: ['SOC 2', 'ISO 27001', 'GDPR'],
      integrationRating: 'Easy',
      webhooks: true,
      docsQuality: 5,
      sla: '99.95%',
      latency: 290,
      uptime: '99.97%',
      sdkLanguages: ['curl', 'Node.js', 'Python', 'Go', 'iOS SDK', 'Android SDK'],
      useCases: ['Startup onboarding', 'Crypto exchange registration'],
      openapiSchema: {
        "openapi": "3.0.0", "info": { "title": "Persona Gov Verify", "version": "1.0.0" },
        "paths": { "/v1/verifications": { "post": { "summary": "Verify Selfie" } } }
      },
      codeExample: {
        curl: `curl -X POST https://api.withpersona.com/v1/verifications \\\n  -H "Authorization: Bearer $PERSONA_API_KEY"`,
        javascript: `const axios = require('axios');`,
        python: `import requests`
      }
    }
  ],
  leads: [
    {
      id: 'lead-1',
      apiId: 'persona-verify-kyc',
      apiName: 'Identity Verification & KYC Engine',
      buyerName: 'Sarah Jenkins',
      buyerEmail: 'sarah.jenkins@neobank.co',
      buyerCompany: 'NeoBank Co',
      companySize: '11-50',
      volume: '10,000 - 50,000 monthly',
      timeline: '1-3 months',
      date: '2026-06-03T14:32:00Z',
      status: 'New'
    },
    {
      id: 'lead-2',
      apiId: 'stripe-payments-card',
      apiName: 'Card Acquiring & Local Payments API',
      buyerName: 'David Chen',
      buyerEmail: 'dchen@finpay.io',
      buyerCompany: 'FinPay International',
      companySize: '51-200',
      volume: '50,000+ monthly',
      timeline: 'Immediate (<1 month)',
      date: '2026-06-02T10:15:00Z',
      status: 'Contacted'
    },
    {
      id: 'lead-3',
      apiId: 'unit-core-ledger',
      apiName: 'Embedded Banking Accounts & Ledger',
      buyerName: 'Alex Mercer',
      buyerEmail: 'amercer@ledgerlabs.com',
      buyerCompany: 'LedgerLabs',
      companySize: '1-10',
      volume: 'Under 10,000 monthly',
      timeline: '3-6 months',
      date: '2026-05-30T17:45:00Z',
      status: 'New'
    }
  ]
};

// Database Initialization Helper
function initDatabase() {
  if (!fs.existsSync(DB_DIR)) {
    fs.mkdirSync(DB_DIR);
  }
  if (!fs.existsSync(DB_PATH)) {
    fs.writeFileSync(DB_PATH, JSON.stringify(INITIAL_DATABASE, null, 2), 'utf-8');
    console.log('Database db.json successfully created and initialized with default listings.');
  }
}

// Read database from disk
function readDatabase() {
  initDatabase();
  try {
    const raw = fs.readFileSync(DB_PATH, 'utf-8');
    return JSON.parse(raw);
  } catch (e) {
    console.error('Error reading database file, returning initial payload: ', e);
    return INITIAL_DATABASE;
  }
}

// Write database to disk
function writeDatabase(data) {
  try {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (e) {
    console.error('Error writing database to disk: ', e);
    return false;
  }
}

// Native body parser helper
function parseJsonBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (err) {
        reject(err);
      }
    });
  });
}

// Initialise Database on script execution
initDatabase();

// Main Server Request Router
const server = http.createServer(async (req, res) => {
  const method = req.method;
  const urlPath = req.url.split('?')[0].split('#')[0];

  console.log(`${method} ${req.url}`);

  // CORS Headers for API requests
  const apiHeaders = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  };

  // Pre-flight check
  if (method === 'OPTIONS') {
    res.writeHead(204, apiHeaders);
    res.end();
    return;
  }

  // REST API Endpoints Routing
  if (urlPath.startsWith('/api/')) {
    try {
      const db = readDatabase();

      if (urlPath === '/api/apis') {
        if (method === 'GET') {
          res.writeHead(200, apiHeaders);
          res.end(JSON.stringify(db.apis));
          return;
        }
        
        if (method === 'POST') {
          const newApi = await parseJsonBody(req);
          db.apis.push(newApi);
          writeDatabase(db);
          res.writeHead(201, apiHeaders);
          res.end(JSON.stringify({ success: true, api: newApi }));
          return;
        }
      }

      if (urlPath === '/api/leads') {
        if (method === 'GET') {
          res.writeHead(200, apiHeaders);
          res.end(JSON.stringify(db.leads));
          return;
        }

        if (method === 'POST') {
          const newLead = await parseJsonBody(req);
          db.leads.unshift(newLead); // Add to top
          writeDatabase(db);
          res.writeHead(201, apiHeaders);
          res.end(JSON.stringify({ success: true, lead: newLead }));
          return;
        }
      }

      if (urlPath === '/api/leads/status' && method === 'POST') {
        const payload = await parseJsonBody(req);
        const { leadId, status } = payload;
        
        db.leads = db.leads.map(lead => {
          if (lead.id === leadId) {
            return { ...lead, status };
          }
          return lead;
        });
        
        writeDatabase(db);
        res.writeHead(200, apiHeaders);
        res.end(JSON.stringify({ success: true, leadId, status }));
        return;
      }

      if (urlPath === '/api/vendors' && method === 'GET') {
        res.writeHead(200, apiHeaders);
        res.end(JSON.stringify(db.vendors));
        return;
      }

      // API Endpoint fallback
      res.writeHead(404, apiHeaders);
      res.end(JSON.stringify({ error: 'REST API Endpoint not found' }));
      return;
    } catch (err) {
      console.error('Error handling API request: ', err);
      res.writeHead(500, apiHeaders);
      res.end(JSON.stringify({ error: 'Internal Server Error', message: err.message }));
      return;
    }
  }

  // Static File Server Routing
  let filePath = req.url === '/' ? '/index.html' : req.url;
  const cleanPath = filePath.split('?')[0].split('#')[0];
  const absolutePath = path.join(path.resolve(__dirname, '..'), cleanPath);

  fs.readFile(absolutePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 File Not Found</h1><p>BankAPI Hub Dev Server could not resolve this path.</p>', 'utf-8');
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      const ext = path.extname(cleanPath);
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log('\n==================================================');
  console.log(`🚀 BankAPI Hub Server running at: http://localhost:${PORT}`);
  console.log('Press Ctrl+C to terminate server');
  console.log('==================================================\n');
});
