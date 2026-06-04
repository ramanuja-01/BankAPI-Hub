# <img src="assets/branding/logo.png" align="center" width="40" height="40" style="border-radius:8px;"> BankAPI Hub - B2B Fintech API Marketplace

BankAPI Hub is a curated B2B marketplace for embedded-finance and banking infrastructure APIs. It allows fintech buyers (startups, banks, NBFCs, SaaS applications) to search, filter, compare, and request sandboxed access for KYC, payments, ledger, reconciliation, cards, and fraud endpoints. Vendors can list their APIs, upgrade subscription tiers, and audit captured leads via an interactive dashboard.

---

## 🏗️ Architecture Mappings

### High-Level Architecture (SPA Architecture)

The marketplace is implemented as a client-side Single Page Application (SPA) driven by state rendering.

```mermaid
graph TD
    A["Browser (Client Viewport)"] <--> B["App Controller (js/app.js)"]
    B <--> C["State Manager (GLOBAL_STATE)"]
    B --> D["Hash Router (#home, #browse, #api-detail)"]
    B --> E["Views Engine (js/views.js)"]
    B --> F["Components Engine (js/components.js)"]
    B <--> G["Local/Session Storage (Mock Database)"]
    G <--> H["Mock Dataset (js/data.js)"]
    A <--> I["Dev Server (scripts/server.js)"]
    
    style A fill:#e0f2fe,stroke:#0284c7,stroke-width:2px;
    style B fill:#e0e7ff,stroke:#4f46e5,stroke-width:2px;
    style C fill:#ccfbf1,stroke:#0d9488,stroke-width:2px;
    style E fill:#fef3c7,stroke:#92400e,stroke-width:2px;
    style H fill:#fee2e2,stroke:#991b1b,stroke-width:2px;
```

---

## 🔄 Core Workflows (Flowcharts)

### 1. Buyer Journey (API Discovery & Sandbox Request)

This flowchart traces a buyer discovering, filtering, comparing, and requesting sandboxed access to APIs.

```mermaid
flowchart TD
    Start["Buyer lands on Home Page"] --> RouteBrowse["Navigate to #browse"]
    RouteBrowse --> SearchQuery["Input search keywords and select filters (Category, Compliance, Region)"]
    SearchQuery --> FilterAPIs["App controller processes filters against mock database"]
    FilterAPIs --> RenderCards["Render matching API Cards with specs & badges"]
    
    RenderCards --> CompareOption{"Compare Specs?"}
    CompareOption -- Yes --> AddCompare["Select 'Compare' checkbox (Max 3)"]
    AddCompare --> SlideDrawer["Bottom Comparison Drawer slides in"]
    SlideDrawer --> ViewMatrix["Click 'Compare Specs' to load #compare matrix"]
    ViewMatrix --> RequestSandboxDirect["Click 'Request Access Sandbox' in Matrix"]
    
    CompareOption -- No --> ViewDetails["Click 'View Details' to load #api-detail/:id"]
    ViewDetails --> ToggleTabs["Read Overview, Technical Code Sandbox, or Compliance checklist tabs"]
    ToggleTabs --> RequestSandboxDetail["Click 'Book Sandbox Setup' on detail sidebar"]
    
    RequestSandboxDirect --> ShowLeadModal["Show Lead Capture Modal Form"]
    RequestSandboxDetail --> ShowLeadModal
    
    ShowLeadModal --> SubmitLead["Submit business name, volumes, timeline, and email"]
    SubmitLead --> SaveLeadState["App controller saves Lead to LocalStorage and triggers email notification"]
    SaveLeadState --> SuccessAlert["Animate Success Modal confirmation"]
```

### 2. Vendor Journey (Submission, Billing & Lead Auditing)

This flowchart traces a vendor listing an API, upgrading their subscription plan, and managing business leads.

```mermaid
flowchart TD
    Start["Vendor lands on Homepage"] --> RegisterPlan["Navigate to #pricing plans"]
    RegisterPlan --> SelectPlan["Choose Seed, Scale, or Enterprise Plan"]
    SelectPlan --> CheckoutModal["Open Stripe Card Checkout Modal"]
    CheckoutModal --> ConfirmPay["Submit card and complete payment"]
    ConfirmPay --> VendorCenter["Route to #dashboard (Vendor Center)"]
    
    VendorCenter --> Analytics["Audit click-through traffic and conversion pipelines"]
    VendorCenter --> SubmitAPI["Navigate to 'Submit API Listing' tab"]
    SubmitAPI --> FormInput["Fill name, categories, latency, SLA, regions, and compliance certificates"]
    FormInput --> SubmitBtn["Click Submit API Proposal"]
    SubmitBtn --> AddToDB["App controller builds OpenAPI schema, appends listing to database, and indexes search"]
    
    VendorCenter --> LeadInbox["Navigate to 'Leads Inbox' tab"]
    LeadInbox --> ReviewLeads["Review buyer details, transaction volumes, and integration timelines"]
    ReviewLeads --> UpdateStatus["Update status dropdown (New, Contacted, Closed)"]
    UpdateStatus --> UpdateCharts["Funnel graphs and category percentages update in real-time"]
```

---

## 🗄️ Database Schema & Entities

The mock database in `js/data.js` manages state replication across page reloads using browser `LocalStorage`.

### 1. `MOCK_VENDORS` Entity
Stores data about listed infrastructure companies:
- `id` (String, Primary Key): Unique vendor slug.
- `name` (String): Organization title.
- `logoText` (String): Initials for profile avatars.
- `color` (String): Color code for layout highlights.
- `isVerified` (Boolean): Verification check (e.g. audited security certifications).
- `rating` (Number): Average developer integration score.
- `reviewsCount` (Number): Total submitted ratings.
- `headquarters` & `founded` (String): Company demographics.
- `soc2`, `iso27001`, `pciDss`, `gdpr` (Boolean): Security checklists status.

### 2. `MOCK_APIS` Entity
Stores the infrastructure specifications for developer products:
- `id` (String, Primary Key): Unique API identifier.
- `name` & `slogan` (String): Product name and summary.
- `vendorId` (String, Foreign Key): Links to `MOCK_VENDORS.id`.
- `category` (String): `KYC` | `Payments` | `Ledger` | `Compliance` | `Cards` | `Fraud`.
- `description` (String): Detailed markdown-supported narrative.
- `regions` (Array of Strings): Geographical availability (e.g., `['US', 'EU']`).
- `pricingModel` (String): `Per-transaction` | `Volume Tiers` | `SaaS Subscription`.
- `pricingDetails` (String): Pricing structure description.
- `sandbox` (Boolean): Direct sandbox accessibility status.
- `complianceTags` (Array of Strings): Security labels.
- `integrationRating` (String): `Easy` | `Medium` | `Complex`.
- `webhooks` (Boolean): Support for HMAC signed events callbacks.
- `latency` & `uptime` (Number/String): Performance SLAs.
- `sdkLanguages` (Array of Strings): Provided integrations (e.g., `['curl', 'Node.js']`).
- `useCases` (Array of Strings): Core target applications.
- `openapiSchema` (Object): Parsed Swagger/OpenAPI path rules.
- `codeExample` (Object): Active snippets (`curl`, `javascript`, `python`).

### 3. `Leads` Entity
Captures leads and developer request metrics:
- `id` (String, Primary Key): Unique timestamp reference.
- `apiId` (String): Links to target API.
- `buyerName`, `buyerEmail`, `buyerCompany` (String): Buyer contact details.
- `companySize`, `volume`, `timeline` (String): Procurement criteria.
- `date` (String): ISO date timestamp.
- `status` (String): `New` | `Contacted` | `Closed`.

---

## 🛠️ Installation & Local Development

### Prerequisites
- Node.js installed on your local computer.

### Step 1: Clone the Repository
```bash
git clone https://github.com/ramanuja-01/BankAPI-Hub.git
cd BankAPI-Hub
```

### Step 2: Launch the Dev Server
The project includes a lightweight, zero-dependency server that runs instantly:
```bash
node scripts/server.js
```
*(If script execution permissions are enabled on your shell, you can also run `npm start` or `npm run dev`.)*

### Step 3: Browse the Platform
Navigate to **[http://localhost:3000](http://localhost:3000)** in your web browser.
- Select multiple APIs to verify the **Comparison Matrix**.
- Upgrade vendor accounts and check lead captures in the **Vendor Center**.
- Switch to **Dark Mode** to preview the slate design details.
