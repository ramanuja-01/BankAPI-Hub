// BankAPI Hub - Mock Database
// High-fidelity B2B Fintech APIs data

const MOCK_VENDORS = {
  'persona-verify': {
    id: 'persona-verify',
    name: 'Persona Inc.',
    logoText: 'P',
    color: '#3B82F6', // Blue
    isVerified: true,
    rating: 4.9,
    reviewsCount: 142,
    headquarters: 'San Francisco, CA',
    founded: '2018',
    totalListings: 2,
    soc2: true,
    iso27001: true,
    pciDss: false,
    gdpr: true
  },
  'stripe-pay': {
    id: 'stripe-pay',
    name: 'Stripe Payments',
    logoText: 'S',
    color: '#6366F1', // Indigo
    isVerified: true,
    rating: 5.0,
    reviewsCount: 3105,
    headquarters: 'Dublin & San Francisco',
    founded: '2010',
    totalListings: 3,
    soc2: true,
    iso27001: true,
    pciDss: true,
    gdpr: true
  },
  'plaid-link': {
    id: 'plaid-link',
    name: 'Plaid Technologies',
    logoText: 'Pl',
    color: '#0D9488', // Teal
    isVerified: true,
    rating: 4.8,
    reviewsCount: 843,
    headquarters: 'San Francisco, CA',
    founded: '2013',
    totalListings: 2,
    soc2: true,
    iso27001: false,
    pciDss: true,
    gdpr: true
  },
  'unit-finance': {
    id: 'unit-finance',
    name: 'Unit Finance',
    logoText: 'U',
    color: '#10B981', // Green/Teal
    isVerified: true,
    rating: 4.7,
    reviewsCount: 96,
    headquarters: 'New York, NY',
    founded: '2019',
    totalListings: 2,
    soc2: true,
    iso27001: true,
    pciDss: true,
    gdpr: false
  },
  'alloy-identity': {
    id: 'alloy-identity',
    name: 'Alloy Decisioning',
    logoText: 'A',
    color: '#EC4899', // Pink
    isVerified: true,
    rating: 4.7,
    reviewsCount: 112,
    headquarters: 'New York, NY',
    founded: '2015',
    totalListings: 1,
    soc2: true,
    iso27001: true,
    pciDss: false,
    gdpr: true
  },
  'marqeta-card': {
    id: 'marqeta-card',
    name: 'Marqeta Inc.',
    logoText: 'M',
    color: '#8B5CF6', // Purple
    isVerified: true,
    rating: 4.8,
    reviewsCount: 254,
    headquarters: 'Oakland, CA',
    founded: '2010',
    totalListings: 1,
    soc2: true,
    iso27001: true,
    pciDss: true,
    gdpr: true
  },
  'lithic-card': {
    id: 'lithic-card',
    name: 'Lithic Corp.',
    logoText: 'L',
    color: '#F59E0B', // Amber
    isVerified: true,
    rating: 4.6,
    reviewsCount: 88,
    headquarters: 'New York, NY',
    founded: '2014',
    totalListings: 1,
    soc2: true,
    iso27001: false,
    pciDss: true,
    gdpr: false
  },
  'sift-fraud': {
    id: 'sift-fraud',
    name: 'Sift Science',
    logoText: 'Sf',
    color: '#EF4444', // Red
    isVerified: false,
    rating: 4.5,
    reviewsCount: 71,
    headquarters: 'San Francisco, CA',
    founded: '2011',
    totalListings: 1,
    soc2: true,
    iso27001: false,
    pciDss: false,
    gdpr: true
  },
  'comply-adv': {
    id: 'comply-adv',
    name: 'ComplyAdvantage',
    logoText: 'CA',
    color: '#14B8A6', // Teal
    isVerified: true,
    rating: 4.6,
    reviewsCount: 54,
    headquarters: 'London, UK',
    founded: '2014',
    totalListings: 1,
    soc2: true,
    iso27001: true,
    pciDss: false,
    gdpr: true
  },
  'modern-treasury': {
    id: 'modern-treasury',
    name: 'Modern Treasury',
    logoText: 'MT',
    color: '#06B6D4', // Cyan
    isVerified: true,
    rating: 4.8,
    reviewsCount: 119,
    headquarters: 'San Francisco, CA',
    founded: '2018',
    totalListings: 1,
    soc2: true,
    iso27001: true,
    pciDss: false,
    gdpr: false
  }
};

const MOCK_APIS = [
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
      "openapi": "3.0.0",
      "info": { "title": "Persona KYC API", "version": "1.4.0" },
      "paths": {
        "/v1/inquiries": {
          "post": {
            "summary": "Create KYC Inquiry",
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "template_id": { "type": "string" },
                      "name_first": { "type": "string" },
                      "name_last": { "type": "string" },
                      "birthdate": { "type": "string", "format": "date" },
                      "country": { "type": "string" }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    codeExample: {
      curl: `curl -X POST https://api.withpersona.com/v1/inquiries \\
  -H "Authorization: Bearer $PERSONA_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "template_id": "tmpl_a8j2K9d",
    "name_first": "Jane",
    "name_last": "Doe",
    "birthdate": "1990-01-01",
    "country": "US"
  }'`,
      javascript: `const axios = require('axios');

axios.post('https://api.withpersona.com/v1/inquiries', {
  template_id: 'tmpl_a8j2K9d',
  name_first: 'Jane',
  name_last: 'Doe',
  birthdate: '1990-01-01',
  country: 'US'
}, {
  headers: {
    'Authorization': 'Bearer ' + process.env.PERSONA_API_KEY,
    'Content-Type': 'application/json'
  }
})
.then(response => console.log(response.data))
.catch(error => console.error(error));`,
      python: `import requests
import os

url = "https://api.withpersona.com/v1/inquiries"
headers = {
    "Authorization": f"Bearer {os.environ.get('PERSONA_API_KEY')}",
    "Content-Type": "application/json"
}
payload = {
    "template_id": "tmpl_a8j2K9d",
    "name_first": "Jane",
    "name_last": "Doe",
    "birthdate": "1990-01-01",
    "country": "US"
}

response = requests.post(url, json=payload, headers=headers)
print(response.json())`
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
      "openapi": "3.0.0",
      "info": { "title": "Stripe Payments API", "version": "2023-10-16" },
      "paths": {
        "/v1/payment_intents": {
          "post": {
            "summary": "Create Payment Intent",
            "requestBody": {
              "content": {
                "application/x-www-form-urlencoded": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "amount": { "type": "integer" },
                      "currency": { "type": "string" },
                      "payment_method_types[]": { "type": "string" }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    codeExample: {
      curl: `curl https://api.stripe.com/v1/payment_intents \\
  -u sk_test_51O:...: \\
  -d amount=2000 \\
  -d currency=usd \\
  -d "payment_method_types[]"=card`,
      javascript: `const stripe = require('stripe')('sk_test_51O...');

stripe.paymentIntents.create({
  amount: 2000,
  currency: 'usd',
  payment_method_types: ['card'],
})
.then(intent => console.log(intent.id))
.catch(err => console.error(err));`,
      python: `import stripe
stripe.api_key = "sk_test_51O..."

intent = stripe.PaymentIntent.create(
  amount=2000,
  currency="usd",
  payment_method_types=["card"],
)
print(intent.id)`
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
      "openapi": "3.0.0",
      "info": { "title": "Plaid API", "version": "2020-09-14" },
      "paths": {
        "/link/token/create": {
          "post": {
            "summary": "Create Link Token",
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "client_name": { "type": "string" },
                      "language": { "type": "string" },
                      "country_codes": { "type": "array", "items": { "type": "string" } },
                      "user": { "type": "object" }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    codeExample: {
      curl: `curl -X POST https://sandbox.plaid.com/link/token/create \\
  -H "Content-Type: application/json" \\
  -d '{
    "client_id": "PLAID_CLIENT_ID",
    "secret": "PLAID_SECRET",
    "client_name": "BankAPI Hub App",
    "country_codes": ["US"],
    "language": "en",
    "user": { "client_user_id": "usr_94a28n" },
    "products": ["auth", "transactions"]
  }'`,
      javascript: `const { Configuration, PlaidApi, PlaidEnvironments } = require('plaid');

const configuration = new Configuration({
  basePath: PlaidEnvironments.sandbox,
  baseOptions: {
    headers: {
      'PLAID-CLIENT-ID': process.env.PLAID_CLIENT_ID,
      'PLAID-SECRET': process.env.PLAID_SECRET,
    },
  },
});

const plaidClient = new PlaidApi(configuration);
plaidClient.linkTokenCreate({
  user: { client_user_id: 'usr_94a28n' },
  client_name: 'BankAPI Hub App',
  products: ['auth', 'transactions'],
  country_codes: ['US'],
  language: 'en'
})
.then(res => console.log(res.data.link_token))
.catch(err => console.error(err));`,
      python: `import plaid
from plaid.api import plaid_api
from plaid.model.link_token_create_request import LinkTokenCreateRequest

configuration = plaid.Configuration(
    host=plaid.Environment.Sandbox,
    api_key={
        'plaidClientId': 'PLAID_CLIENT_ID',
        'plaidSecret': 'PLAID_SECRET'
    }
)
api_client = plaid.ApiClient(configuration)
client = plaid_api.PlaidApi(api_client)

request = LinkTokenCreateRequest(
    user={'client_user_id': 'usr_94a28n'},
    client_name="BankAPI Hub App",
    products=["auth", "transactions"],
    country_codes=["US"],
    language="en"
)
response = client.link_token_create(request)
print(response['link_token'])`
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
      "openapi": "3.0.0",
      "info": { "title": "Unit Ledger API", "version": "1.0.0" },
      "paths": {
        "/accounts": {
          "post": {
            "summary": "Create Account",
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "type": { "type": "string", "enum": ["deposit", "credit"] },
                      "customerId": { "type": "string" },
                      "depositProduct": { "type": "string" }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    codeExample: {
      curl: `curl -X POST https://api.s.unit.co/accounts \\
  -H "Authorization: Bearer $UNIT_BEARER_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "data": {
      "type": "depositAccount",
      "attributes": {
        "depositProduct": "checking",
        "customerId": "cust_12345"
      }
    }
  }'`,
      javascript: `const axios = require('axios');

axios.post('https://api.s.unit.co/accounts', {
  data: {
    type: 'depositAccount',
    attributes: {
      depositProduct: 'checking',
      customerId: 'cust_12345'
    }
  }
}, {
  headers: {
    'Authorization': 'Bearer ' + process.env.UNIT_BEARER_TOKEN,
    'Content-Type': 'application/json'
  }
})
.then(res => console.log(res.data))
.catch(err => console.error(err));`,
      python: `import requests
import os

url = "https://api.s.unit.co/accounts"
headers = {
    "Authorization": f"Bearer {os.environ.get('UNIT_BEARER_TOKEN')}",
    "Content-Type": "application/json"
}
payload = {
    "data": {
        "type": "depositAccount",
        "attributes": {
            "depositProduct": "checking",
            "customerId": "cust_12345"
        }
    }
}

response = requests.post(url, json=payload, headers=headers)
print(response.json())`
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
      "openapi": "3.0.0",
      "info": { "title": "Alloy Decision API", "version": "2.1" },
      "paths": {
        "/evaluations": {
          "post": {
            "summary": "Run Evaluation Workflow",
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "name_first": { "type": "string" },
                      "name_last": { "type": "string" },
                      "address_line_1": { "type": "string" },
                      "document_ssn": { "type": "string" }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    codeExample: {
      curl: `curl -u $ALLOY_TOKEN_ID:$ALLOY_TOKEN_SECRET https://api.alloy.co/v1/evaluations \\
  -H "Content-Type: application/json" \\
  -d '{
    "name_first": "John",
    "name_last": "Smith",
    "address_line_1": "123 Main St",
    "document_ssn": "000112222"
  }'`,
      javascript: `const axios = require('axios');
const auth = Buffer.from(process.env.ALLOY_TOKEN_ID + ':' + process.env.ALLOY_TOKEN_SECRET).toString('base64');

axios.post('https://api.alloy.co/v1/evaluations', {
  name_first: 'John',
  name_last: 'Smith',
  address_line_1: '123 Main St',
  document_ssn: '000112222'
}, {
  headers: {
    'Authorization': 'Basic ' + auth,
    'Content-Type': 'application/json'
  }
})
.then(res => console.log(res.data.outcome))
.catch(err => console.error(err));`,
      python: `import requests
import os

url = "https://api.alloy.co/v1/evaluations"
auth = (os.environ.get('ALLOY_TOKEN_ID'), os.environ.get('ALLOY_TOKEN_SECRET'))
payload = {
    "name_first": "John",
    "name_last": "Smith",
    "address_line_1": "123 Main St",
    "document_ssn": "000112222"
}

response = requests.post(url, json=payload, auth=auth)
print(response.json())`
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
      "openapi": "3.0.0",
      "info": { "title": "Marqeta Core API", "version": "3.0" },
      "paths": {
        "/cards": {
          "post": {
            "summary": "Create Card",
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "user_token": { "type": "string" },
                      "card_product_token": { "type": "string" }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    codeExample: {
      curl: `curl -X POST https://sandbox-api.marqeta.com/v3/cards \\
  -u $MQ_ACCESS_TOKEN: \\
  -H "Content-Type: application/json" \\
  -d '{
    "user_token": "usr_77a11d2e",
    "card_product_token": "prod_card_silver"
  }'`,
      javascript: `const axios = require('axios');

axios.post('https://sandbox-api.marqeta.com/v3/cards', {
  user_token: 'usr_77a11d2e',
  card_product_token: 'prod_card_silver'
}, {
  auth: {
    username: process.env.MQ_ACCESS_TOKEN,
    password: ''
  },
  headers: { 'Content-Type': 'application/json' }
})
.then(res => console.log(res.data.token))
.catch(err => console.error(err));`,
      python: `import requests
import os

url = "https://sandbox-api.marqeta.com/v3/cards"
auth = (os.environ.get('MQ_ACCESS_TOKEN'), '')
payload = {
    "user_token": "usr_77a11d2e",
    "card_product_token": "prod_card_silver"
}

response = requests.post(url, json=payload, auth=auth)
print(response.json())`
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
      "openapi": "3.0.0",
      "info": { "title": "Lithic Card API", "version": "1.1" },
      "paths": {
        "/v1/cards": {
          "post": {
            "summary": "Create Card",
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "type": { "type": "string", "enum": ["SINGLE_USE", "MERCHANT_LOCKED"] },
                      "spend_limit": { "type": "integer" }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    codeExample: {
      curl: `curl https://api.lithic.com/v1/cards \\
  -H "Authorization: api-key $LITHIC_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "type": "SINGLE_USE",
    "spend_limit": 5000,
    "memo": "SaaS Subscription Trial"
  }'`,
      javascript: `const Lithic = require('@lithic/sdk');
const lithic = new Lithic({ apiKey: process.env.LITHIC_API_KEY });

lithic.cards.create({
  type: 'SINGLE_USE',
  spend_limit: 5000,
  memo: 'SaaS Subscription Trial'
})
.then(card => console.log(card.token))
.catch(err => console.error(err));`,
      python: `from lithic import Lithic
import os

client = Lithic(api_key=os.environ.get('LITHIC_API_KEY'))
card = client.cards.create(
    type="SINGLE_USE",
    spend_limit=5000,
    memo="SaaS Subscription Trial"
)
print(card.token)`
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
    sdkLanguages: ['curl', 'Node.js', 'Python', 'Java', 'Go', 'PHP', 'Ruby'],
    useCases: ['Crypto exchange registration', 'Payout automation'],
    openapiSchema: {
      "openapi": "3.0.0",
      "info": { "title": "Sift API", "version": "205" },
      "paths": {
        "/v205/events": {
          "post": {
            "summary": "Send Event for Fraud Scoring",
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "$type": { "type": "string" },
                      "$api_key": { "type": "string" },
                      "$user_id": { "type": "string" }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    codeExample: {
      curl: `curl -X POST https://api.sift.com/v205/events \\
  -H "Content-Type: application/json" \\
  -d '{
    "$type": "$transaction",
    "$api_key": "sift_key_abcdef123",
    "$user_id": "usr_992kd02",
    "$amount": 5000000,
    "$currency_code": "USD",
    "$payment_method": {
      "$payment_type": "$credit_card",
      "$payment_gateway": "stripe"
    }
  }'`,
      javascript: `const sift = require('sift-api')('sift_key_abcdef123');

sift.trackEvent('$transaction', {
  $user_id: 'usr_992kd02',
  $amount: 5000000,
  $currency_code: 'USD',
  $payment_method: {
    $payment_type: '$credit_card',
    $payment_gateway: 'stripe'
  }
})
.then(score => console.log(score.score_response.scores.payment_abuse.score))
.catch(err => console.error(err));`,
      python: `import sift
client = sift.Client(api_key="sift_key_abcdef123")

response = client.track("$transaction", {
    "$user_id": "usr_992kd02",
    "$amount": 5000000,
    "$currency_code": "USD",
    "$payment_method": {
        "$payment_type": "$credit_card",
        "$payment_gateway": "stripe"
    }
})
print(response.score_response['scores']['payment_abuse']['score'])`
    }
  },
  {
    id: 'comply-adv-aml-screening',
    name: 'AML Screening & Real-time Transaction Monitoring',
    vendorId: 'comply-adv',
    category: 'Compliance',
    slogan: 'Real-time sanctions checking, PEP lists, and adverse media screening.',
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
      "openapi": "3.0.0",
      "info": { "title": "ComplyAdvantage API", "version": "v3" },
      "paths": {
        "/v3/searches": {
          "post": {
            "summary": "Screen Entity",
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "name": { "type": "string" },
                      "client_ref": { "type": "string" },
                      "fuzziness": { "type": "number" }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    codeExample: {
      curl: `curl -X POST https://api.complyadvantage.com/v3/searches \\
  -H "API-Key: ca_api_key_123" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Vladimir Petrov",
    "client_ref": "ref_usr_018",
    "fuzziness": 0.8
  }'`,
      javascript: `const axios = require('axios');

axios.post('https://api.complyadvantage.com/v3/searches', {
  name: 'Vladimir Petrov',
  client_ref: 'ref_usr_018',
  fuzziness: 0.8
}, {
  headers: {
    'API-Key': 'ca_api_key_123',
    'Content-Type': 'application/json'
  }
})
.then(res => console.log(res.data.hits))
.catch(err => console.error(err));`,
      python: `import requests

url = "https://api.complyadvantage.com/v3/searches"
headers = {
    "API-Key": "ca_api_key_123",
    "Content-Type": "application/json"
}
payload = {
    "name": "Vladimir Petrov",
    "client_ref": "ref_usr_018",
    "fuzziness": 0.8
}

response = requests.post(url, json=payload, headers=headers)
print(response.json())`
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
      "openapi": "3.0.0",
      "info": { "title": "Modern Treasury API", "version": "1.0" },
      "paths": {
        "/api/payment_orders": {
          "post": {
            "summary": "Create Payment Order",
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "type": { "type": "string", "enum": ["ach", "wire", "rtp"] },
                      "amount": { "type": "integer" },
                      "direction": { "type": "string" }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    codeExample: {
      curl: `curl -u $MT_ORG_ID:$MT_API_KEY https://api.moderntreasury.com/api/payment_orders \\
  -H "Content-Type: application/json" \\
  -d '{
    "type": "ach",
    "amount": 25000,
    "direction": "credit",
    "originating_account_id": "act_88291a",
    "receiving_account": {
      "account_details": [{ "account_number": "123456789", "account_type": "checking" }],
      "routing_details": [{ "routing_number": "021000021", "routing_number_type": "aba" }]
    }
  }'`,
      javascript: `const ModernTreasury = require('modern-treasury');
const mt = new ModernTreasury({
  apiKey: process.env.MT_API_KEY,
  organizationId: process.env.MT_ORG_ID
});

mt.paymentOrders.create({
  type: 'ach',
  amount: 25000,
  direction: 'credit',
  originating_account_id: 'act_88291a',
  receiving_account: {
    account_details: [{ account_number: '123456789', account_type: 'checking' }],
    routing_details: [{ routing_number: '021000021', routing_number_type: 'aba' }]
  }
})
.then(order => console.log(order.id))
.catch(err => console.error(err));`,
      python: `from modern_treasury import ModernTreasury
import os

client = ModernTreasury(
    api_key=os.environ.get('MT_API_KEY'),
    organization_id=os.environ.get('MT_ORG_ID')
)

order = client.payment_orders.create(
    type="ach",
    amount=25000,
    direction="credit",
    originating_account_id="act_88291a",
    receiving_account={
        "account_details": [{"account_number": "123456789", "account_type": "checking"}],
        "routing_details": [{"routing_number": "021000021", "routing_number_type": "aba"}]
    }
)
print(order.id)`
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
      "openapi": "3.0.0",
      "info": { "title": "Stripe Treasury API", "version": "1.0.0" },
      "paths": {
        "/v1/treasury/financial_accounts": {
          "post": {
            "summary": "Create Financial Account",
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "supported_features": { "type": "array", "items": { "type": "string" } },
                      "features": { "type": "object" }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    codeExample: {
      curl: `curl https://api.stripe.com/v1/treasury/financial_accounts \\
  -u sk_test_51O:...: \\
  -d "supported_features[]"=card_issuing \\
  -d "supported_features[]"=deposit_insurance`,
      javascript: `const stripe = require('stripe')('sk_test_51O...');

stripe.treasury.financialAccounts.create({
  supported_features: ['card_issuing', 'deposit_insurance'],
})
.then(account => console.log(account.id))
.catch(err => console.error(err));`,
      python: `import stripe
stripe.api_key = "sk_test_51O..."

account = stripe.treasury.FinancialAccount.create(
  supported_features=["card_issuing", "deposit_insurance"],
)
print(account.id)`
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
      "openapi": "3.0.0",
      "info": { "title": "Persona Gov Verify", "version": "1.0.0" },
      "paths": {
        "/v1/verifications": {
          "post": {
            "summary": "Submit ID Selfie Pair",
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "inquiry_id": { "type": "string" },
                      "selfie_photo_base64": { "type": "string" },
                      "document_photo_base64": { "type": "string" }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    codeExample: {
      curl: `curl -X POST https://api.withpersona.com/v1/verifications \\
  -H "Authorization: Bearer $PERSONA_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "inquiry_id": "inq_892Jk10a",
    "selfie_photo_base64": "data:image/jpeg;base64,...",
    "document_photo_base64": "data:image/jpeg;base64,..."
  }'`,
      javascript: `const axios = require('axios');

axios.post('https://api.withpersona.com/v1/verifications', {
  inquiry_id: 'inq_892Jk10a',
  selfie_photo_base64: 'data:image/jpeg;base64,...',
  document_photo_base64: 'data:image/jpeg;base64,...'
}, {
  headers: {
    'Authorization': 'Bearer ' + process.env.PERSONA_API_KEY,
    'Content-Type': 'application/json'
  }
})
.then(res => console.log(res.data.status))
.catch(err => console.error(err));`,
      python: `import requests
import os

url = "https://api.withpersona.com/v1/verifications"
headers = {
    "Authorization": f"Bearer {os.environ.get('PERSONA_API_KEY')}",
    "Content-Type": "application/json"
}
payload = {
    "inquiry_id": "inq_892Jk10a",
    "selfie_photo_base64": "data:image/jpeg;base64,...",
    "document_photo_base64": "data:image/jpeg;base64,..."
}

response = requests.post(url, json=payload, headers=headers)
print(response.json())`
    }
  }
];

// Helper to get developer-submitted listings from local storage
function getCustomAPIs() {
  const custom = localStorage.getItem('bankapi_hub_custom_apis');
  return custom ? JSON.parse(custom) : [];
}

function saveCustomAPI(api) {
  const custom = getCustomAPIs();
  custom.push(api);
  localStorage.setItem('bankapi_hub_custom_apis', JSON.stringify(custom));
}

function getAllAPIs() {
  return [...MOCK_APIS, ...getCustomAPIs()];
}

// Initial mock state for leads
const INITIAL_LEADS = [
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
];

function getLeads() {
  const leads = localStorage.getItem('bankapi_hub_leads');
  if (!leads) {
    localStorage.setItem('bankapi_hub_leads', JSON.stringify(INITIAL_LEADS));
    return INITIAL_LEADS;
  }
  return JSON.parse(leads);
}

function saveLead(lead) {
  const leads = getLeads();
  leads.unshift(lead); // add to top
  localStorage.setItem('bankapi_hub_leads', JSON.stringify(leads));
}

function updateLeadStatus(leadId, status) {
  const leads = getLeads();
  const updated = leads.map(l => l.id === leadId ? { ...l, status } : l);
  localStorage.setItem('bankapi_hub_leads', JSON.stringify(updated));
}
