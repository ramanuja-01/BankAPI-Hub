// BankAPI Hub - Page Views Rendering Engine

// 1. Home View
function renderHomeView() {
  const categories = [
    { name: 'KYC', desc: 'Verify identity documents, face biometrics, and AML watchlists instantly.', count: 3, icon: getCategoryIcon('KYC') },
    { name: 'Payments', desc: 'Global card acquiring, local transfers, and account validation.', count: 2, icon: getCategoryIcon('Payments') },
    { name: 'Ledger', desc: 'FDIC checking accounts, transaction ledgers, and statement matching.', count: 3, icon: getCategoryIcon('Ledger') },
    { name: 'Compliance', desc: 'Orchestrate KYB screening, compliance rules, and AML triggers.', count: 2, icon: getCategoryIcon('Compliance') },
    { name: 'Cards', desc: 'Issue custom cards with Just-in-Time balance checks.', count: 2, icon: getCategoryIcon('Cards') },
    { name: 'Fraud', desc: 'Predict risk factors using behavioral network signals.', count: 2, icon: getCategoryIcon('Fraud') }
  ];

  const catCards = categories.map(cat => `
    <div class="category-card" onclick="setCategoryFilter('${cat.name}')">
      <div class="category-icon-wrapper">${cat.icon}</div>
      <h3>${cat.name}</h3>
      <p>${cat.desc}</p>
      <div class="category-stats">
        <span>${cat.count} curated APIs</span>
        <span style="color: var(--primary-color)">Explore &rarr;</span>
      </div>
    </div>
  `).join('');

  return `
    <section class="hero-section">
      <div class="hero-container">
        <div class="hero-content">
          <div class="hero-tag">
            <svg style="width:16px;height:16px" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M2.166 4.9L10 9.704l7.834-4.805a.75.75 0 00-.773-1.285L10 7.868 2.939 3.614a.75.75 0 10-.773 1.286v.001zM2 6.82v6.43c0 .324.162.626.435.807l7.065 4.347a.75.75 0 00.8 0l7.065-4.347a.975.975 0 00.435-.807V6.82L10 11.268 2 6.82z" clip-rule="evenodd"/></svg>
            SOC 2 Type II & ISO 27001 Certified Platform
          </div>
          <h1 class="hero-title">
            Embed Banking & Fintech <span>Infrastructure</span> Safely
          </h1>
          <p class="hero-subtitle">
            Discover, compare, and integrate the best banking APIs for KYC, payments, ledgers, cards, and compliance in one trusted, pre-vetted B2B marketplace.
          </p>
          <div class="hero-buttons">
            <a href="#browse" class="btn btn-primary btn-lg">Browse Directory</a>
            <a href="#pricing" class="btn btn-outline btn-lg">List Your API</a>
          </div>
          <div class="hero-stats">
            <div class="stat-item">
              <h4>12+</h4>
              <p>Top Vetted APIs</p>
            </div>
            <div class="stat-item">
              <h4>99.99%</h4>
              <p>Average Uptime</p>
            </div>
            <div class="stat-item">
              <h4>100%</h4>
              <p>Compliance Assured</p>
            </div>
          </div>
        </div>
        
        <div class="hero-visual">
          <div class="terminal-mock">
            <div class="terminal-header">
              <div class="terminal-dots">
                <span class="terminal-dot dot-red"></span>
                <span class="terminal-dot dot-yellow"></span>
                <span class="terminal-dot dot-green"></span>
              </div>
              <span class="terminal-title">bash - sandbox_trial.sh</span>
              <span style="width:30px"></span>
            </div>
            <div class="terminal-content" id="home-terminal-content">
              <div class="terminal-line prompt">curl -X POST https://api.bankapihub.com/v1/sandbox/access</div>
              <div class="terminal-line prompt"><span class="terminal-keyword">import</span> bankapi</div>
              <div class="terminal-comment"># Initializing unified sandboxed ledger routing</div>
              <div class="terminal-line">hub = bankapi.Client(api_key=<span class="terminal-string">"hub_sandbox_9a2f7c"</span>)</div>
              <div class="terminal-line">session = hub.Sandbox.create_session(endpoints=[<span class="terminal-string">"kyc"</span>, <span class="terminal-string">"ledger"</span>])</div>
              <div class="terminal-line">print(session.status)</div>
              <div class="terminal-output">
                {
                  "session_id": "sess_883a9d20c4",
                  "status": "active_sandbox",
                  "latency": "140ms",
                  "compliance_mode": "mock_soc2_audit",
                  "linked_accounts": 3
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <div class="logo-farm-section">
      <div class="logo-farm-container">
        <h4 class="logo-farm-title">Powering Integrations for Innovative Teams</h4>
        <div class="logos-grid">
          <div class="logo-item">
            <svg style="width:20px;height:20px;" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/></svg>
            ApexFin
          </div>
          <div class="logo-item">
            <svg style="width:20px;height:20px;" fill="currentColor" viewBox="0 0 20 20"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"/><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"/></svg>
            PayFlow
          </div>
          <div class="logo-item">
            <svg style="width:20px;height:20px;" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"/></svg>
            VeloCard
          </div>
          <div class="logo-item">
            <svg style="width:20px;height:20px;" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M6.267 3.455a.75.75 0 00-.708-.523H4.5a2 2 0 00-2 2v1.059a.75.75 0 00.523.708L5 7.33v5.34l-.477.606a.75.75 0 00-.523.708V15a2 2 0 002 2h1.059a.75.75 0 00.708-.523L8.67 15h2.66l.905 1.477a.75.75 0 00.708.523H14a2 2 0 002-2v-1.059a.75.75 0 00-.523-.708L15 12.67V7.33l.477-.606a.75.75 0 00.523-.708V5a2 2 0 00-2-2h-1.059a.75.75 0 00-.708.523L11.33 5H8.67L7.765 3.455zM10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" clip-rule="evenodd"/></svg>
            ClearLedger
          </div>
        </div>
      </div>
    </div>
    
    <section class="section">
      <div class="section-header">
        <div class="section-headline">
          <span class="section-tag">API Categories</span>
          <h2 class="section-title">Explore Vetted Financial Capabilities</h2>
          <p class="section-subtitle">Select a focus area below to review and evaluate specific API solutions engineered for regulated banking tasks.</p>
        </div>
        <a href="#browse" class="btn btn-outline">See All APIs &rarr;</a>
      </div>
      <div class="category-grid">
        ${catCards}
      </div>
    </section>

    <section class="section" style="background-color: var(--bg-secondary); border-top: 1px solid var(--border-color); border-bottom: 1px solid var(--border-color); max-width:100%;">
      <div class="section" style="padding: 0 0;">
        <div class="trust-grid">
          <div>
            <span class="section-tag">Trust Layer</span>
            <h2 class="section-title">Procurement-Grade Vendor Standards</h2>
            <p class="section-subtitle" style="margin-bottom: 32px;">Fintech procurement requires rigorous risk and compliance oversight. BankAPI Hub handles the pre-vetting checklist so developers and compliance officers can align instantly.</p>
            
            <div class="trust-item">
              <div class="trust-num">1</div>
              <div class="trust-text">
                <h3>SOC 2 & ISO Mapping</h3>
                <p>We verify and catalog security artifacts (SOC 2, ISO 27001, PCI-DSS compliance certs) for every vendor platform.</p>
              </div>
            </div>
            <div class="trust-item">
              <div class="trust-num">2</div>
              <div class="trust-text">
                <h3>Standardized Sandboxes</h3>
                <p>Simulate transactions, KYC matches, and card swipes instantly. Every listed API includes direct sandbox links or details.</p>
              </div>
            </div>
            <div class="trust-item">
              <div class="trust-num">3</div>
              <div class="trust-text">
                <h3>Continuous SLA Monitoring</h3>
                <p>Real-time tracking of latency, uptime, and documentation schema validity protects your integration health.</p>
              </div>
            </div>
          </div>
          <div>
            <div class="terminal-mock">
              <div class="terminal-header">
                <span class="terminal-title">Vendor Compliance Checklist</span>
                <span class="badge badge-green">Audit Ready</span>
              </div>
              <div class="terminal-content" style="font-family:var(--font-sans); color: var(--text-secondary); line-height: 1.8;">
                <div style="color:var(--text-primary); font-weight:700; margin-bottom:12px;">Standard Vendor Evaluation Checklist:</div>
                <div style="display:flex; justify-content:space-between; margin-bottom:8px; border-bottom: 1px solid var(--border-color); padding-bottom:6px;">
                  <span>1. SOC 2 Type II Certified</span>
                  <span style="color:#10b981; font-weight:700;">✓ Verified</span>
                </div>
                <div style="display:flex; justify-content:space-between; margin-bottom:8px; border-bottom: 1px solid var(--border-color); padding-bottom:6px;">
                  <span>2. Disaster Recovery & RTO/RPO</span>
                  <span style="color:#10b981; font-weight:700;">✓ Verified</span>
                </div>
                <div style="display:flex; justify-content:space-between; margin-bottom:8px; border-bottom: 1px solid var(--border-color); padding-bottom:6px;">
                  <span>3. Encryption-at-Rest & Transit</span>
                  <span style="color:#10b981; font-weight:700;">✓ Verified</span>
                </div>
                <div style="display:flex; justify-content:space-between; margin-bottom:8px; border-bottom: 1px solid var(--border-color); padding-bottom:6px;">
                  <span>4. Webhook Event Signatures</span>
                  <span style="color:#10b981; font-weight:700;">✓ Verified</span>
                </div>
                <div style="display:flex; justify-content:space-between; margin-bottom:8px; border-bottom: 1px solid var(--border-color); padding-bottom:6px;">
                  <span>5. PCI-DSS Level 1 (For Cards)</span>
                  <span style="color:#3b82f6; font-weight:700;">✓ Conditionally Verified</span>
                </div>
                <div style="margin-top:16px;">
                  <a href="#trust" class="btn btn-primary btn-sm" style="width:100%;">View Trust & Onboarding Framework</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="section">
      <div class="cta-banner">
        <div class="cta-inner">
          <h2 class="cta-title">Accelerate Your Fintech Integration Today</h2>
          <p class="cta-desc">Skip months of vendor validation, legal hurdles, and document parsing. Join over 200+ financial teams onboarding via BankAPI Hub.</p>
          <div style="display:flex; gap:16px; justify-content:center;">
            <a href="#browse" class="btn btn-teal btn-lg">Discover APIs</a>
            <button onclick="openRequestDemoModal('general')" class="btn btn-outline btn-lg" style="background:#ffffff; color:#0f172a;">Contact Sales</button>
          </div>
        </div>
      </div>
    </section>
  `;
}

// 2. Browse View
function renderBrowseView() {
  const currentCategory = GLOBAL_STATE.activeFilters.category;
  const categoriesList = ['KYC', 'Payments', 'Ledger', 'Compliance', 'Cards', 'Fraud'];
  const regionsList = ['US', 'EU', 'UK', 'Global'];
  const pricesList = ['SaaS Subscription', 'Per-transaction', 'Volume Tiers'];
  const complianceList = ['SOC 2', 'ISO 27001', 'PCI-DSS', 'GDPR'];

  // Left Filter Panel Layout
  const catOptions = categoriesList.map(cat => {
    const isChecked = currentCategory === cat ? 'checked' : '';
    return `
      <label class="checkbox-label">
        <input type="radio" name="category-filter" ${isChecked} onchange="setCategoryFilter('${cat}')">
        <span>${cat}</span>
      </label>
    `;
  }).join('');

  const regionOptions = regionsList.map(reg => {
    const isChecked = GLOBAL_STATE.activeFilters.regions.includes(reg) ? 'checked' : '';
    return `
      <label class="checkbox-label">
        <input type="checkbox" ${isChecked} onchange="toggleFilter('regions', '${reg}')">
        <span>${reg}</span>
      </label>
    `;
  }).join('');

  const priceOptions = pricesList.map(pr => {
    const isChecked = GLOBAL_STATE.activeFilters.pricingModel.includes(pr) ? 'checked' : '';
    return `
      <label class="checkbox-label">
        <input type="checkbox" ${isChecked} onchange="toggleFilter('pricingModel', '${pr}')">
        <span>${pr}</span>
      </label>
    `;
  }).join('');

  const complianceOptions = complianceList.map(comp => {
    const isChecked = GLOBAL_STATE.activeFilters.compliance.includes(comp) ? 'checked' : '';
    return `
      <label class="checkbox-label">
        <input type="checkbox" ${isChecked} onchange="toggleFilter('compliance', '${comp}')">
        <span>${comp}</span>
      </label>
    `;
  }).join('');

  const sandboxChecked = GLOBAL_STATE.activeFilters.sandboxOnly ? 'checked' : '';
  const webhooksChecked = GLOBAL_STATE.activeFilters.webhooksOnly ? 'checked' : '';

  // Get and filter listings
  const filtered = getFilteredAPIs();

  const resultsHtml = filtered.length > 0 
    ? filtered.map(api => {
        const isSelected = GLOBAL_STATE.compareList.some(item => item.id === api.id);
        return renderApiCard(api, isSelected, 'toggleCompareSelection');
      }).join('')
    : `
      <div style="text-align:center; padding: 60px 24px; border: 1px dashed var(--border-color); border-radius:12px;">
        <svg style="width:48px;height:48px;color:var(--text-muted);margin-bottom:16px;" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
        </svg>
        <h3>No APIs match your selection</h3>
        <p style="color:var(--text-muted); margin-bottom:20px;">Try resetting some filters or searching for something else.</p>
        <button class="btn btn-secondary btn-sm" onclick="resetAllFilters()">Reset Filters</button>
      </div>
    `;

  return `
    <div class="browse-container">
      <aside class="filter-sidebar">
        <div class="filter-group" style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--border-color); padding-bottom:12px;">
          <h3 style="font-size:1.1rem;font-weight:700;">Filters</h3>
          <button style="border:none;background:transparent;color:var(--primary-color);font-size:0.8rem;font-weight:600;cursor:pointer;" onclick="resetAllFilters()">Clear All</button>
        </div>
        
        <div class="filter-group">
          <div class="filter-group-title">API Category</div>
          <div class="filter-options">
            <label class="checkbox-label">
              <input type="radio" name="category-filter" ${!currentCategory ? 'checked' : ''} onchange="setCategoryFilter('')">
              <span>All Categories</span>
            </label>
            ${catOptions}
          </div>
        </div>
        
        <div class="filter-group">
          <div class="filter-group-title">Region Support</div>
          <div class="filter-options">
            ${regionOptions}
          </div>
        </div>
        
        <div class="filter-group">
          <div class="filter-group-title">Pricing Structure</div>
          <div class="filter-options">
            ${priceOptions}
          </div>
        </div>
        
        <div class="filter-group">
          <div class="filter-group-title">Trust & Compliance</div>
          <div class="filter-options">
            ${complianceOptions}
          </div>
        </div>
        
        <div class="filter-group">
          <div class="filter-group-title">Developer Controls</div>
          <div class="filter-options">
            <label class="checkbox-label">
              <input type="checkbox" ${sandboxChecked} onchange="toggleBooleanFilter('sandboxOnly', this.checked)">
              <span>Sandbox Access</span>
            </label>
            <label class="checkbox-label">
              <input type="checkbox" ${webhooksChecked} onchange="toggleBooleanFilter('webhooksOnly', this.checked)">
              <span>Webhook Support</span>
            </label>
          </div>
        </div>
      </aside>
      
      <main>
        <div class="results-header">
          <div class="search-bar-row">
            <div class="search-wrapper">
              <svg class="search-icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input type="text" class="search-input" placeholder="Search API features, integrations, keywords..." value="${GLOBAL_STATE.searchQuery}" oninput="updateSearchQuery(this.value)">
            </div>
          </div>
          
          <div class="controls-row">
            <div class="results-count">
              Showing <strong>${filtered.length}</strong> matching API listings
            </div>
            
            <div style="display:flex; align-items:center; gap:8px;">
              <span style="font-size:0.85rem;color:var(--text-muted)">Sort by:</span>
              <select class="sort-select" onchange="updateSortBy(this.value)">
                <option value="popularity" ${GLOBAL_STATE.sortBy === 'popularity' ? 'selected' : ''}>Popularity Score</option>
                <option value="latency" ${GLOBAL_STATE.sortBy === 'latency' ? 'selected' : ''}>Lowest Latency</option>
                <option value="uptime" ${GLOBAL_STATE.sortBy === 'uptime' ? 'selected' : ''}>Highest Uptime</option>
              </select>
            </div>
          </div>
        </div>
        
        <div class="api-listings-grid">
          ${resultsHtml}
        </div>
      </main>
    </div>
  `;
}

// 3. API Detail View
function renderApiDetailView(apiId) {
  const api = getAllAPIs().find(a => a.id === apiId);
  if (!api) {
    return `<div style="padding:80px; text-align:center;"><h2>API Listing Not Found</h2><a href="#browse">Back to Browse</a></div>`;
  }
  
  const vendor = MOCK_VENDORS[api.vendorId] || { name: 'Unknown Vendor', isVerified: false, color: '#94a3b8', logoText: '?' };
  const verifiedBadge = vendor.isVerified ? renderVerifiedBadge() : '';
  
  // Tabs Navigation
  const activeTab = GLOBAL_STATE.activeDetailTab;
  
  // Render active tab body
  let tabBody = '';
  if (activeTab === 'overview') {
    const listUseCases = api.useCases.map(uc => `<li class="checklist-item"><span class="checklist-icon">✓</span> ${uc}</li>`).join('');
    const listRegions = api.regions.map(r => `<span class="badge badge-secondary" style="font-size:0.85rem;padding: 4px 10px;">${r}</span>`).join(' ');
    
    tabBody = `
      <div class="detail-rich-section">
        <h3>Product Overview</h3>
        <p style="font-size: 1.05rem; color: var(--text-secondary); margin-bottom: 24px; line-height: 1.7;">${api.description}</p>
      </div>
      
      <div class="detail-rich-section">
        <h3>Primary Use Cases</h3>
        <ul class="checklist-grid" style="margin-bottom:32px;">
          ${listUseCases}
        </ul>
      </div>

      <div class="detail-rich-section">
        <h3>Deployment & Regions</h3>
        <div style="display:flex; gap:8px; margin-top:12px;">
          ${listRegions}
        </div>
        <p style="color:var(--text-muted); font-size:0.875rem; margin-top:12px;">All region configurations verify legal local compliance and regulatory clearance frameworks (like BaaS sponsor banks compatibility in the US, or MIFID II/PSD2 licenses in Europe).</p>
      </div>
    `;
  } else if (activeTab === 'technical') {
    // Interactive Code Playground
    const activeLang = GLOBAL_STATE.activeCodeLang;
    const languages = ['curl', 'javascript', 'python'];
    
    const langTabs = languages.map(lang => {
      const activeClass = activeLang === lang ? 'active' : '';
      return `<button class="code-tab-btn ${activeClass}" onclick="setCodeLang('${lang}')">${lang.toUpperCase()}</button>`;
    }).join('');
    
    // Simple HTML escaping for display
    const codeEscaped = api.codeExample[activeLang]
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    tabBody = `
      <div class="detail-rich-section">
        <h3>Integration Sandbox Playground</h3>
        <p style="color: var(--text-secondary); margin-bottom: 24px;">Test code schemas instantly. Toggle languages below to copy request templates for checking endpoints.</p>
        
        <div class="code-sandbox-tab">
          <div class="code-tabs-list">
            ${langTabs}
          </div>
          <div class="code-editor-viewport">
            <pre><code>${codeEscaped}</code></pre>
          </div>
        </div>
      </div>

      <div class="detail-rich-section">
        <h3>OpenAPI Schema Summary</h3>
        <p style="color: var(--text-secondary); margin-bottom: 16px;">This API conforms to the following path definitions:</p>
        <div class="terminal-mock">
          <div class="terminal-header"><span class="terminal-title">paths - schema.json</span></div>
          <div class="terminal-content" style="padding:16px;">
            <pre style="color: var(--code-text); font-family:var(--font-mono); font-size:0.8rem;">${JSON.stringify(api.openapiSchema, null, 2)}</pre>
          </div>
        </div>
      </div>
    `;
  } else if (activeTab === 'compliance') {
    const listCerts = api.complianceTags.map(c => `
      <div style="background-color: var(--bg-secondary); border: 1px solid var(--border-color); border-radius:8px; padding:16px; display:flex; align-items:center; gap:16px;">
        <span class="badge badge-blue" style="font-size:1rem; width:40px; height:40px; border-radius:50%; justify-content:center;">✓</span>
        <div>
          <h4 style="font-weight:700;">${c} Audit Verified</h4>
          <p style="font-size:0.8rem; color:var(--text-muted);">Pre-evaluated check against official reports.</p>
        </div>
      </div>
    `).join('');

    tabBody = `
      <div class="detail-rich-section">
        <h3>Compliance Frameworks</h3>
        <p style="color:var(--text-secondary); margin-bottom:24px;">Fintech buyers can download and inspect the direct compliance status. We verify documentation and audit signatures before vendor listing.</p>
        
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:32px;">
          ${listCerts}
        </div>
        
        <div style="background-color:var(--primary-light); color:var(--text-primary); border-radius:12px; padding:24px; border: 1px solid var(--primary-color);">
          <h4 style="font-weight:700; margin-bottom:6px;">Need Vendor Security Packet?</h4>
          <p style="font-size:0.9rem; color:var(--text-secondary); margin-bottom:16px;">Get the full pre-packed SOC 2 Report, ISO Certificate PDF, Penetration Test summaries, and DR plans directly.</p>
          <a href="#trust" class="btn btn-primary btn-sm">Download Security Checklist Package</a>
        </div>
      </div>
    `;
  } else if (activeTab === 'pricing') {
    tabBody = `
      <div class="detail-rich-section">
        <h3>Pricing Mechanics</h3>
        <p style="color: var(--text-secondary); margin-bottom: 16px;">Below are structural pricing details for integrations of this product:</p>
        
        <div style="background-color: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 12px; padding: 24px; margin-bottom: 24px;">
          <h4 style="font-weight:700; font-size:1.15rem; margin-bottom:10px;">${api.pricingModel} Schedule</h4>
          <p style="font-size:1.05rem; font-weight:500; color:var(--text-primary); margin-bottom:12px;">${api.pricingDetails}</p>
          <p style="font-size:0.85rem; color:var(--text-muted);">Commission is processed natively via settlement splits (10-30% depending on contracts). Custom volume deals for high transaction scale are available upon sales inquiry.</p>
        </div>

        <button onclick="openRequestDemoModal('${api.id}')" class="btn btn-teal">Request Volume/SLA Pricing Sheet</button>
      </div>
    `;
  }

  // Right sidebar specs list
  const rightSidebar = `
    <div class="detail-sidebar-card">
      <h4 style="font-weight:700; margin-bottom:16px; font-size:1.1rem; border-bottom:1px solid var(--border-color); padding-bottom:10px;">Integration Specs</h4>
      
      <div class="sidebar-metric-row">
        <span class="sidebar-metric-label">Vendor</span>
        <span class="sidebar-metric-val"><a href="#vendor/${vendor.id}">${vendor.name}</a></span>
      </div>
      <div class="sidebar-metric-row">
        <span class="sidebar-metric-label">Uptime SLA</span>
        <span class="sidebar-metric-val">${api.sla}</span>
      </div>
      <div class="sidebar-metric-row">
        <span class="sidebar-metric-label">Avg. Latency</span>
        <span class="sidebar-metric-val" style="color: var(--teal-color)">${api.latency} ms</span>
      </div>
      <div class="sidebar-metric-row">
        <span class="sidebar-metric-label">Webhook Support</span>
        <span class="sidebar-metric-val">${api.webhooks ? 'Available (Signed)' : 'N/A'}</span>
      </div>
      <div class="sidebar-metric-row">
        <span class="sidebar-metric-label">SDK Support</span>
        <span class="sidebar-metric-val" style="font-family: var(--font-mono); font-size:0.8rem;">${api.sdkLanguages.join(', ')}</span>
      </div>
      
      <div style="margin-top:24px; display:flex; flex-direction:column; gap:12px;">
        <button onclick="openRequestDemoModal('${api.id}')" class="btn btn-primary" style="width:100%;">Book Sandbox Setup</button>
        <button onclick="addApiToComparisonDirect('${api.id}')" class="btn btn-outline" style="width:100%;">Add to Compare Matrix</button>
      </div>
    </div>
  `;

  return `
    <div class="api-detail-view">
      <div class="api-detail-hero">
        <div class="api-detail-hero-container">
          <div>
            <div class="detail-breadcrumbs">
              <a href="#browse">Browse Directory</a> &rsaquo; <span>${api.category}</span>
            </div>
            <div class="detail-title-section">
              <div class="detail-logo" style="background-color: ${vendor.color}">${vendor.logoText}</div>
              <div class="detail-name-area">
                <h1>${api.name}</h1>
                <div class="detail-meta-pills">
                  <a href="#vendor/${vendor.id}" style="font-size:0.95rem; color:var(--text-secondary);">${vendor.name}</a>
                  ${verifiedBadge}
                  <span class="badge badge-secondary">${api.category}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="detail-grid-content">
        <main>
          <div class="tabs-navigation-row">
            <button class="tab-nav-btn ${activeTab === 'overview' ? 'active' : ''}" onclick="setDetailTab('overview')">Overview</button>
            <button class="tab-nav-btn ${activeTab === 'technical' ? 'active' : ''}" onclick="setDetailTab('technical')">Technical Reference</button>
            <button class="tab-nav-btn ${activeTab === 'compliance' ? 'active' : ''}" onclick="setDetailTab('compliance')">Compliance & Trust</button>
            <button class="tab-nav-btn ${activeTab === 'pricing' ? 'active' : ''}" onclick="setDetailTab('pricing')">Pricing Details</button>
          </div>
          
          <div class="tab-content-panel active">
            ${tabBody}
          </div>
        </main>
        
        <aside>
          ${rightSidebar}
        </aside>
      </div>
    </div>
  `;
}

// 4. Vendor Profile View
function renderVendorProfileView(vendorId) {
  const vendor = MOCK_VENDORS[vendorId];
  if (!vendor) {
    return `<div style="padding:80px; text-align:center;"><h2>Vendor Profile Not Found</h2><a href="#browse">Back to Directory</a></div>`;
  }
  
  const apis = getAllAPIs().filter(a => a.vendorId === vendorId);
  const apiCards = apis.map(api => {
    const isSelected = GLOBAL_STATE.compareList.some(item => item.id === api.id);
    return renderApiCard(api, isSelected, 'toggleCompareSelection');
  }).join('');

  return `
    <div class="vendor-profile-header">
      <div class="vendor-profile-container">
        <div class="vendor-identity">
          <div class="vendor-profile-avatar" style="background-color: ${vendor.color}">${vendor.logoText}</div>
          <div class="vendor-headline">
            <h1>${vendor.name} ${vendor.isVerified ? renderVerifiedBadge() : ''}</h1>
            <div class="vendor-location-founded">
              Headquarters: <strong>${vendor.headquarters}</strong> &bull; Founded: <strong>${vendor.founded}</strong>
            </div>
          </div>
        </div>
        
        <div class="vendor-stats-strip">
          <div class="vendor-stat-num">
            <h4>${apis.length}</h4>
            <p>Listed APIs</p>
          </div>
          <div class="vendor-stat-num">
            <h4>${vendor.rating} / 5.0</h4>
            <p>${vendor.reviewsCount} Reviews</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="vendor-content-layout">
      <main>
        <h3 style="font-weight:700; margin-bottom:24px; font-size:1.35rem;">API Listings (${apis.length})</h3>
        <div class="api-listings-grid">
          ${apiCards || '<p style="color:var(--text-muted)">No active API listings found for this vendor.</p>'}
        </div>
      </main>
      
      <aside>
        <div class="vendor-trust-framework-box">
          <h4 class="vendor-trust-title">Security & Compliance Ledger</h4>
          
          <div style="display:flex; flex-direction:column; gap:14px;">
            <div style="display:flex; justify-content:space-between; font-size:0.9rem;">
              <span style="color:var(--text-secondary)">SOC 2 Type II Report</span>
              <strong style="color:${vendor.soc2 ? 'var(--teal-color)' : 'var(--text-muted)'}">${vendor.soc2 ? '✓ Available' : 'N/A'}</strong>
            </div>
            <div style="display:flex; justify-content:space-between; font-size:0.9rem;">
              <span style="color:var(--text-secondary)">ISO 27001 Certified</span>
              <strong style="color:${vendor.iso27001 ? 'var(--teal-color)' : 'var(--text-muted)'}">${vendor.iso27001 ? '✓ Available' : 'N/A'}</strong>
            </div>
            <div style="display:flex; justify-content:space-between; font-size:0.9rem;">
              <span style="color:var(--text-secondary)">PCI-DSS Compliant</span>
              <strong style="color:${vendor.pciDss ? 'var(--teal-color)' : 'var(--text-muted)'}">${vendor.pciDss ? '✓ Available' : 'N/A'}</strong>
            </div>
            <div style="display:flex; justify-content:space-between; font-size:0.9rem;">
              <span style="color:var(--text-secondary)">GDPR Aligned</span>
              <strong style="color:${vendor.gdpr ? 'var(--teal-color)' : 'var(--text-muted)'}">${vendor.gdpr ? '✓ Available' : 'N/A'}</strong>
            </div>
          </div>
          
          <div style="margin-top:24px; padding-top:20px; border-top:1px solid var(--border-color); text-align:center;">
            <button onclick="openRequestDemoModal('vendor-${vendor.id}')" class="btn btn-primary btn-sm" style="width:100%;">Initiate Vendor Diligence</button>
          </div>
        </div>
      </aside>
    </div>
  `;
}

// 5. Compare View Page
function renderCompareView() {
  const selected = GLOBAL_STATE.compareList;
  if (selected.length === 0) {
    return `
      <div class="compare-matrix-view" style="text-align:center; padding: 100px 24px;">
        <svg style="width:64px;height:64px;color:var(--text-muted);margin-bottom:20px;" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
        <h2 style="font-size:1.75rem; font-weight:800; margin-bottom:12px;">Comparison Matrix is Empty</h2>
        <p style="color:var(--text-secondary); max-width:400px; margin: 0 auto 24px;">Select up to 3 APIs from the Directory browse page to perform side-by-side spec evaluations.</p>
        <a href="#browse" class="btn btn-primary">Browse Directory</a>
      </div>
    `;
  }

  // Render headers
  const headerCells = selected.map(api => {
    const v = MOCK_VENDORS[api.vendorId] || { name: 'Unknown', color: '#cbd5e1', logoText: '?' };
    return `
      <th class="api-col">
        <div class="compare-header-cell">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <div class="vendor-logo-avatar" style="background-color: ${v.color}; font-size:0.75rem; width:24px; height:24px;">${v.logoText}</div>
            <button class="remove-compare-btn" style="font-size:1.3rem;" onclick="toggleCompareSelection('${api.id}', false)">&times;</button>
          </div>
          <div>
            <h4 class="compare-card-title">${api.name}</h4>
            <span style="font-size:0.8rem; color:var(--text-muted)">by ${v.name}</span>
          </div>
        </div>
      </th>
    `;
  }).join('');

  // Specs definitions for comparison rows
  const specRows = [
    { label: 'Category', render: api => api.category },
    { label: 'Latency (Average)', render: api => `<strong style="color:var(--teal-color)">${api.latency}ms</strong>` },
    { label: 'Uptime SLA Guarantee', render: api => api.sla },
    { label: 'Region Support', render: api => api.regions.join(', ') },
    { label: 'Pricing Model', render: api => api.pricingModel },
    { label: 'Pricing Details', render: api => `<span style="font-size:0.85rem">${api.pricingDetails}</span>` },
    { label: 'Compliance Tags', render: api => api.complianceTags.map(t => `<span class="badge badge-secondary" style="margin:2px;">${t}</span>`).join('') },
    { label: 'Sandbox Availability', render: api => api.sandbox ? `<span class="badge badge-green">Yes</span>` : `<span class="badge badge-yellow">Vetted Only</span>` },
    { label: 'Webhook Event Streams', render: api => api.webhooks ? '✓ Supported' : 'N/A' },
    { label: 'Integration Effort', render: api => api.integrationRating },
    { label: 'SDK Languages', render: api => `<span style="font-family:var(--font-mono); font-size:0.8rem;">${api.sdkLanguages.join(', ')}</span>` }
  ];

  const tbodyHtml = specRows.map(row => {
    const cells = selected.map(api => `<td>${row.render(api)}</td>`).join('');
    return `
      <tr>
        <td class="feature-col">${row.label}</td>
        ${cells}
      </tr>
    `;
  }).join('');

  // Row for actions
  const actionCells = selected.map(api => `
    <td>
      <div style="display:flex; flex-direction:column; gap:10px; margin-top:10px;">
        <button onclick="openRequestDemoModal('${api.id}')" class="btn btn-primary btn-sm">Request Access Sandbox</button>
        <a href="#api-detail/${api.id}" class="btn btn-outline btn-sm">View Technical Docs</a>
      </div>
    </td>
  `).join('');

  return `
    <div class="compare-matrix-view">
      <div class="compare-header-row">
        <span class="section-tag">Comparison Engine</span>
        <h1 style="font-size:2.25rem; font-weight:800; letter-spacing: -0.02em;">Procurement Spec Comparison</h1>
        <p style="color:var(--text-secondary); margin-top:8px;">Evaluating ${selected.length} listed APIs side-by-side across key infrastructure, SLA, and pricing metrics.</p>
      </div>
      
      <div class="compare-table-wrapper">
        <table class="compare-table">
          <thead>
            <tr>
              <th class="feature-col">Specs</th>
              ${headerCells}
            </tr>
          </thead>
          <tbody>
            ${tbodyHtml}
            <tr>
              <td class="feature-col">Actions</td>
              ${actionCells}
            </tr>
          </tbody>
        </table>
      </div>
      
      <div style="margin-top:32px; display:flex; justify-content:space-between; align-items:center;">
        <a href="#browse" class="btn btn-outline">&larr; Back to Directory</a>
        <button class="btn btn-secondary" onclick="clearComparison()">Clear Matrix</button>
      </div>
    </div>
  `;
}

// 6. Vendor Dashboard
function renderVendorDashboardView() {
  const currentTab = GLOBAL_STATE.activeDashboardTab;
  const leads = getLeads();
  const apis = getAllAPIs();
  
  // Left side dashboard nav
  const subnav = `
    <div class="dashboard-sidebar-nav">
      <div class="dashboard-nav-item ${currentTab === 'analytics' ? 'active' : ''}" onclick="setDashboardTab('analytics')">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
        Analytics
      </div>
      <div class="dashboard-nav-item ${currentTab === 'leads' ? 'active' : ''}" onclick="setDashboardTab('leads')">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
        Leads Inbox
        <span class="badge badge-red" style="font-size:0.7rem; padding: 1px 6px; margin-left:auto;">${leads.filter(l => l.status === 'New').length}</span>
      </div>
      <div class="dashboard-nav-item ${currentTab === 'submit' ? 'active' : ''}" onclick="setDashboardTab('submit')">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        Submit API Listing
      </div>
    </div>
  `;

  let mainBody = '';
  if (currentTab === 'analytics') {
    mainBody = `
      <div class="dashboard-header-row">
        <div>
          <h2 style="font-size:1.75rem; font-weight:800;">Analytics Dashboard</h2>
          <p style="color:var(--text-secondary)">Real-time performance metrics and click-through capture audits.</p>
        </div>
        <span class="badge badge-green">Premium Verified Account</span>
      </div>
      
      <div class="dashboard-metrics-grid">
        <div class="dashboard-metric-card">
          <div class="db-metric-title">API Traffic Views</div>
          <div class="db-metric-value">12,482</div>
          <div class="db-metric-sub">▲ 14.2% (last 30d)</div>
        </div>
        <div class="dashboard-metric-card">
          <div class="db-metric-title">Sandbox Bookings</div>
          <div class="db-metric-value">${leads.length}</div>
          <div class="db-metric-sub">▲ 33.1% conversion</div>
        </div>
        <div class="db-metric-card" style="background-color: var(--card-bg); border: 1px solid var(--border-color); border-radius: 12px; padding: 20px;">
          <div class="db-metric-title">Estimated Pipeline</div>
          <div class="db-metric-value">$84,500</div>
          <div class="db-metric-sub">Based on contract minimums</div>
        </div>
        <div class="db-metric-card" style="background-color: var(--card-bg); border: 1px solid var(--border-color); border-radius: 12px; padding: 20px;">
          <div class="db-metric-title">API Health Uptime</div>
          <div class="db-metric-value">99.98%</div>
          <div class="db-metric-sub" style="color:var(--teal-color)">No active incidents</div>
        </div>
      </div>
      
      <div class="dashboard-charts-row">
        ${renderBarChart(leads)}
        ${renderDonutChart(leads)}
      </div>

      <div class="cta-banner" style="padding: 32px; text-align: left;">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:20px;">
          <div>
            <h4 style="font-weight:800; font-size:1.25rem;">Unlock Sponsored Placements</h4>
            <p style="color:var(--text-secondary); font-size:0.9rem; margin-top:4px;">Feature your API listings at the top of category searches and search widgets.</p>
          </div>
          <a href="#pricing" class="btn btn-teal btn-sm">Upgrade to Scale Plan</a>
        </div>
      </div>
    `;
  } else if (currentTab === 'leads') {
    // Generate Inbox table
    const leadRows = leads.map(lead => {
      const dateFormatted = new Date(lead.date).toLocaleDateString();
      
      const badgeClass = lead.status === 'New' 
        ? 'badge-red' 
        : lead.status === 'Contacted' 
          ? 'badge-blue' 
          : 'badge-green';

      return `
        <tr>
          <td>
            <div style="font-weight:600; color:var(--text-primary);">${lead.buyerName}</div>
            <div style="font-size:0.75rem; color:var(--text-muted);">${lead.buyerEmail}</div>
          </td>
          <td>
            <div style="font-weight:500;">${lead.buyerCompany}</div>
            <div style="font-size:0.75rem; color:var(--text-muted);">Size: ${lead.companySize}</div>
          </td>
          <td>
            <div style="font-size:0.85rem; font-weight:600; color:var(--primary-color)">${lead.apiName}</div>
          </td>
          <td>
            <div style="font-size:0.8rem; font-weight:500;">Vol: ${lead.volume}</div>
            <div style="font-size:0.75rem; color:var(--text-muted);">Timeline: ${lead.timeline}</div>
          </td>
          <td>
            <select class="db-select-status" onchange="changeLeadStatus('${lead.id}', this.value)">
              <option value="New" ${lead.status === 'New' ? 'selected' : ''}>New</option>
              <option value="Contacted" ${lead.status === 'Contacted' ? 'selected' : ''}>Contacted</option>
              <option value="Closed" ${lead.status === 'Closed' ? 'selected' : ''}>Closed</option>
            </select>
          </td>
          <td style="color:var(--text-muted); font-size:0.8rem;">${dateFormatted}</td>
        </tr>
      `;
    }).join('');

    mainBody = `
      <div class="dashboard-header-row">
        <div>
          <h2 style="font-size:1.75rem; font-weight:800;">Demo & Sandbox Inquiries</h2>
          <p style="color:var(--text-secondary)">Manage sales leads, sandbox request audits, and qualified procurement requests.</p>
        </div>
      </div>
      
      <div class="dashboard-table-card">
        <div class="db-table-title">Incoming Qualified Leads</div>
        <table class="db-table">
          <thead>
            <tr>
              <th>Contact</th>
              <th>Company</th>
              <th>Target API</th>
              <th>Details</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            ${leadRows || '<tr><td colspan="6" style="text-align:center;color:var(--text-muted);">No demo requests recorded yet.</td></tr>'}
          </tbody>
        </table>
      </div>
    `;
  } else if (currentTab === 'submit') {
    // Add API Listing Form
    mainBody = `
      <div class="dashboard-header-row">
        <div>
          <h2 style="font-size:1.75rem; font-weight:800;">List a New API Product</h2>
          <p style="color:var(--text-secondary)">Publish your banking interface endpoints directly onto the BankAPI Hub directory.</p>
        </div>
      </div>
      
      <div style="background-color: var(--card-bg); border: 1px solid var(--border-color); border-radius:12px; padding:32px; box-shadow: var(--card-shadow);">
        <form id="new-api-submission-form" onsubmit="handleApiSubmission(event)">
          <div class="form-grid">
            <div class="form-two-col">
              <div class="form-group">
                <label class="form-label" for="sub-name">API Name</label>
                <input class="form-input" type="text" id="sub-name" placeholder="e.g. Ledger Routing Account API" required>
              </div>
              <div class="form-group">
                <label class="form-label" for="sub-category">Category</label>
                <select class="form-select" id="sub-category" required>
                  <option value="KYC">KYC</option>
                  <option value="Payments">Payments</option>
                  <option value="Ledger">Ledger</option>
                  <option value="Compliance">Compliance</option>
                  <option value="Cards">Cards</option>
                  <option value="Fraud">Fraud</option>
                </select>
              </div>
            </div>
            
            <div class="form-group">
              <label class="form-label" for="sub-slogan">Product Slogan (Short one-sentence summary)</label>
              <input class="form-input" type="text" id="sub-slogan" placeholder="e.g. Instantly check bank accounts and calculate balances." required>
            </div>
            
            <div class="form-group">
              <label class="form-label" for="sub-desc">Detailed Description</label>
              <textarea class="form-textarea" id="sub-desc" placeholder="Explain what the API does, the problems it solves, and the onboarding details..." required></textarea>
            </div>
            
            <div class="form-two-col">
              <div class="form-group">
                <label class="form-label" for="sub-pricing-model">Pricing Structure</label>
                <select class="form-select" id="sub-pricing-model" required>
                  <option value="Per-transaction">Per-transaction</option>
                  <option value="Volume Tiers">Volume Tiers</option>
                  <option value="SaaS Subscription">SaaS Subscription</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label" for="sub-pricing-details">Pricing Details Text</label>
                <input class="form-input" type="text" id="sub-pricing-details" placeholder="e.g. $0.20 per API check, volume tiers at scale." required>
              </div>
            </div>
            
            <div class="form-two-col">
              <div class="form-group">
                <label class="form-label">Supported Regions</label>
                <div style="display:flex; gap:16px; margin-top:8px;">
                  <label class="checkbox-label"><input type="checkbox" name="sub-regions" value="US" checked> US</label>
                  <label class="checkbox-label"><input type="checkbox" name="sub-regions" value="EU"> EU</label>
                  <label class="checkbox-label"><input type="checkbox" name="sub-regions" value="UK"> UK</label>
                  <label class="checkbox-label"><input type="checkbox" name="sub-regions" value="Global"> Global</label>
                </div>
              </div>
              <div class="form-group">
                <label class="form-label">Compliance Tags</label>
                <div style="display:flex; gap:12px; margin-top:8px; flex-wrap:wrap;">
                  <label class="checkbox-label"><input type="checkbox" name="sub-compliance" value="SOC 2" checked> SOC 2</label>
                  <label class="checkbox-label"><input type="checkbox" name="sub-compliance" value="ISO 27001"> ISO 27001</label>
                  <label class="checkbox-label"><input type="checkbox" name="sub-compliance" value="PCI-DSS"> PCI-DSS</label>
                  <label class="checkbox-label"><input type="checkbox" name="sub-compliance" value="GDPR"> GDPR</label>
                </div>
              </div>
            </div>

            <div class="form-two-col">
              <div class="form-group">
                <label class="form-label" for="sub-sandbox">Is Sandbox Access Instantly Available?</label>
                <select class="form-select" id="sub-sandbox">
                  <option value="true">Yes, instantly sandbox-ready</option>
                  <option value="false">No, manual vendor vetting required</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label" for="sub-webhooks">Signed Webhooks support</label>
                <select class="form-select" id="sub-webhooks">
                  <option value="true">Yes, webhook triggers available</option>
                  <option value="false">No, polling endpoints only</option>
                </select>
              </div>
            </div>

            <div class="form-two-col">
              <div class="form-group">
                <label class="form-label" for="sub-latency">Average Latency (ms)</label>
                <input class="form-input" type="number" id="sub-latency" value="150" required>
              </div>
              <div class="form-group">
                <label class="form-label" for="sub-uptime">Historical Uptime SLA (e.g. 99.95%)</label>
                <input class="form-input" type="text" id="sub-uptime" value="99.95%" required>
              </div>
            </div>
            
            <div style="margin-top:20px; display:flex; justify-content:flex-end;">
              <button class="btn btn-primary" type="submit">Submit API Proposal &amp; List</button>
            </div>
          </div>
        </form>
      </div>
    `;
  }

  return `
    <div class="dashboard-layout">
      <aside>
        <div style="padding-bottom:24px; border-bottom:1px solid var(--border-color); margin-bottom:20px;">
          <h3 style="font-weight:800; font-size:1.15rem;">Vendor Center</h3>
          <span style="font-size:0.8rem; color:var(--text-muted)">Stripe Payments Portal</span>
        </div>
        ${subnav}
      </aside>
      <main class="dashboard-main-content">
        ${mainBody}
      </main>
    </div>
  `;
}

// 7. Pricing View for Vendors
function renderPricingView() {
  return `
    <div class="pricing-matrix-container">
      <div class="pricing-intro">
        <span class="section-tag">Pricing Framework</span>
        <h1>Host Your Banking APIs</h1>
        <p style="color:var(--text-secondary)">Publish endpoints in the premier B2B fintech catalog. Access compliance verification tools, manage leads in real-time, and get sponsored placements.</p>
      </div>
      
      <div class="pricing-plans-grid">
        <div class="pricing-plan-card">
          <div class="plan-name">Seed Plan</div>
          <div class="plan-price-row">
            <span class="plan-currency">$</span>
            <span class="plan-amount">249</span>
            <span class="plan-period">/ month</span>
          </div>
          <p style="color:var(--text-secondary); font-size:0.9rem;">For early-stage fintech builders launching their initial APIs.</p>
          
          <ul class="plan-features-list">
            <li class="plan-feature-item"><span class="plan-feature-icon">✓</span> Up to 2 listed APIs</li>
            <li class="plan-feature-item"><span class="plan-feature-icon">✓</span> Standard lead mailbox capture</li>
            <li class="plan-feature-item"><span class="plan-feature-icon">✓</span> Regular search listing</li>
            <li class="plan-feature-item"><span class="plan-feature-icon">✓</span> Self-service API spec updates</li>
            <li class="plan-feature-item" style="color:var(--text-muted);"><span class="plan-feature-icon">✕</span> No verified trust badges</li>
          </ul>
          
          <button class="btn btn-outline" style="width:100%;" onclick="openCheckoutModal('Seed Plan', 249)">Select Seed Plan</button>
        </div>
        
        <div class="pricing-plan-card featured">
          <div class="plan-name">Scale Plan</div>
          <div class="plan-price-row">
            <span class="plan-currency">$</span>
            <span class="plan-amount">799</span>
            <span class="plan-period">/ month</span>
          </div>
          <p style="color:var(--text-secondary); font-size:0.9rem;">For scaled B2B infrastructure platforms accelerating sales conversion.</p>
          
          <ul class="plan-features-list">
            <li class="plan-feature-item"><span class="plan-feature-icon">✓</span> Up to 5 listed APIs</li>
            <li class="plan-feature-item"><span class="plan-feature-icon">✓</span> Verified Vendor Badge audit</li>
            <li class="plan-feature-item"><span class="plan-feature-icon">✓</span> Advanced analytics tracking</li>
            <li class="plan-feature-item"><span class="plan-feature-icon">✓</span> Priority search & categories</li>
            <li class="plan-feature-item"><span class="plan-feature-icon">✓</span> 1 Sponsored listing slot</li>
          </ul>
          
          <button class="btn btn-primary" style="width:100%;" onclick="openCheckoutModal('Scale Plan', 799)">Select Scale Plan</button>
        </div>
        
        <div class="pricing-plan-card">
          <div class="plan-name">Enterprise Platform</div>
          <div class="plan-price-row">
            <span class="plan-currency">$</span>
            <span class="plan-amount">1,999</span>
            <span class="plan-period">/ month</span>
          </div>
          <p style="color:var(--text-secondary); font-size:0.9rem;">For national banks and institutional BaaS systems with custom workflows.</p>
          
          <ul class="plan-features-list">
            <li class="plan-feature-item"><span class="plan-feature-icon">✓</span> Unlimited API listings</li>
            <li class="plan-feature-item"><span class="plan-feature-icon">✓</span> Procurement diligence portal</li>
            <li class="plan-feature-item"><span class="plan-feature-icon">✓</span> Real-time SLA sync dashboard</li>
            <li class="plan-feature-item"><span class="plan-feature-icon">✓</span> Dedicated compliance officer</li>
            <li class="plan-feature-item"><span class="plan-feature-icon">✓</span> Custom commission discounts</li>
          </ul>
          
          <button class="btn btn-outline" style="width:100%;" onclick="openCheckoutModal('Enterprise Platform', 1999)">Contact Platform Ops</button>
        </div>
      </div>

      <div style="border-top:1px solid var(--border-color); padding-top:60px;">
        <h3 style="font-size:1.5rem; font-weight:800; text-align:center; margin-bottom:36px;">Frequently Asked Questions</h3>
        
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:32px; max-width:960px; margin: 0 auto;">
          <div>
            <h4 style="font-weight:700; margin-bottom:8px;">How does transaction commission work?</h4>
            <p style="color:var(--text-secondary); font-size:0.95rem;">For APIs purchased directly or matched through qualified buyer queries, BankAPI Hub takes a 10% to 30% deal referral fee based on contract tier schedules.</p>
          </div>
          <div>
            <h4 style="font-weight:700; margin-bottom:8px;">What does the pre-vetting process require?</h4>
            <p style="color:var(--text-secondary); font-size:0.95rem;">To gain a "Verified Vendor" badge, you must submit a SOC 2 Type II summary report, demonstrate webhook signoff, and run a mock sandbox sequence checked by our compliance agents.</p>
          </div>
          <div>
            <h4 style="font-weight:700; margin-bottom:8px;">Can we sync our OpenAPI schemas automatically?</h4>
            <p style="color:var(--text-secondary); font-size:0.95rem;">Yes, Enterprise and Scale plans support scheduling daily URL synchronizations to pull, parse, and re-publish updated schema specs immediately.</p>
          </div>
          <div>
            <h4 style="font-weight:700; margin-bottom:8px;">How do leads get synced?</h4>
            <p style="color:var(--text-secondary); font-size:0.95rem;">All sandbox requests and demo books trigger dashboard emails and webhook deliveries to map directly to your Salesforce, HubSpot, or custom CRM portals.</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

// 8. Trust and Onboarding Framework Page
function renderTrustView() {
  return `
    <div class="section" style="max-width:960px;">
      <div class="trust-header">
        <span class="section-tag">Governance & Due-Diligence</span>
        <h1>Fintech Security & Compliance Hub</h1>
        <p style="color:var(--text-secondary); margin-top:12px;">Enterprise buyers evaluate financial APIs not just by documentation, but by rigorous governance audits. This page outlines our security standards and vendor onboarding checkpoints.</p>
      </div>

      <div class="checklist-hero-magnet">
        <div>
          <h2 style="font-weight:800; font-size:1.75rem; margin-bottom:12px;">Procurement Due-Diligence Checklist</h2>
          <p style="color:var(--text-secondary); font-size:0.95rem; margin-bottom:20px;">Download our ready-made Vendor Evaluation Checklist (including mappings for SOC 2 Type II, ISO 27001, PCI DSS, GDPR, disaster recovery thresholds, and BaaS banking sponsor vetting checks).</p>
          
          <ul style="display:flex; flex-direction:column; gap:8px; font-size:0.9rem; color:var(--text-secondary); margin-bottom:12px;">
            <li><strong style="color:var(--teal-color)">✓</strong> SOC 2 Trust Security criteria mappings</li>
            <li><strong style="color:var(--teal-color)">✓</strong> Key SLA performance audit templates</li>
            <li><strong style="color:var(--teal-color)">✓</strong> BaaS Sponsor due diligence logs</li>
          </ul>
        </div>
        
        <div class="magnet-form-wrapper">
          <h3 style="font-weight:700; font-size:1.1rem; margin-bottom:16px;">Download Free PDF Package</h3>
          <form onsubmit="handleComplianceChecklistDownload(event)">
            <div class="form-grid">
              <div class="form-group">
                <label class="form-label" for="mag-name">Full Name</label>
                <input class="form-input" type="text" id="mag-name" placeholder="John Miller" required>
              </div>
              <div class="form-group">
                <label class="form-label" for="mag-email">Work Email</label>
                <input class="form-input" type="email" id="mag-email" placeholder="john.miller@bank.com" required>
              </div>
              <div class="form-group">
                <label class="form-label" for="mag-company">Company</label>
                <input class="form-input" type="text" id="mag-company" placeholder="Institutional Banks" required>
              </div>
              <button class="btn btn-primary" type="submit" style="margin-top:8px;">Get Checklist Now &rarr;</button>
            </div>
          </form>
        </div>
      </div>

      <div style="margin-bottom:60px;">
        <h3 style="font-weight:800; font-size:1.5rem; margin-bottom:24px; text-align:center;">Our Security pre-vetting framework</h3>
        
        <div style="display:flex; flex-direction:column; gap:24px;">
          <div style="border-left:4px solid var(--primary-color); padding-left:24px;">
            <h4 style="font-weight:700; font-size:1.15rem; margin-bottom:6px;">1. Verification of Certifications</h4>
            <p style="color:var(--text-secondary); font-size:0.95rem;">Every listed vendor must submit active third-party auditor validation reports. We verify that all certificates (SOC 2, ISO/IEC 27001, and PCI-DSS) are current, signed, and cover appropriate platform scopes.</p>
          </div>
          
          <div style="border-left:4px solid var(--teal-color); padding-left:24px;">
            <h4 style="font-weight:700; font-size:1.15rem; margin-bottom:6px;">2. Sandbox Performance Assessment</h4>
            <p style="color:var(--text-secondary); font-size:0.95rem;">An API cannot list on BankAPI Hub without demonstrating sandbox capability. Our systems run automated test integration queries to audit API schema validity, test network response stability, and record average latencies.</p>
          </div>
          
          <div style="border-left:4px solid var(--indigo-color); padding-left:24px;">
            <h4 style="font-weight:700; font-size:1.15rem; margin-bottom:6px;">3. Webhook Audit Signature Validation</h4>
            <p style="color:var(--text-secondary); font-size:0.95rem;">Financial updates (e.g. payout success, KYC pass) require secure callbacks. We check that webhook headers contain correct cryptographic verification signatures (SHA-256 HMAC) to prevent ingestion spoofing.</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

// 9. Contact / Request Demo Modal & Page Content
function renderContactView() {
  return `
    <div class="section" style="max-width:600px; padding-top:40px;">
      <span class="section-tag" style="text-align:center;">Direct Sales &amp; Platform Ops</span>
      <h1 style="font-size:2.5rem; font-weight:800; text-align:center; margin-bottom:12px;">Contact Marketplace Staff</h1>
      <p style="color:var(--text-secondary); text-align:center; margin-bottom:40px;">Need custom integration planning, legal contracts support, or enterprise pricing schedules? Submit your request details below.</p>
      
      <div style="background-color: var(--card-bg); border: 1px solid var(--border-color); border-radius:12px; padding:32px; box-shadow: var(--card-shadow);">
        <form onsubmit="handleGeneralContactSubmission(event)">
          <div class="form-grid">
            <div class="form-two-col">
              <div class="form-group">
                <label class="form-label" for="cnt-name">Your Name</label>
                <input class="form-input" type="text" id="cnt-name" required>
              </div>
              <div class="form-group">
                <label class="form-label" for="cnt-email">Work Email</label>
                <input class="form-input" type="email" id="cnt-email" required>
              </div>
            </div>
            
            <div class="form-two-col">
              <div class="form-group">
                <label class="form-label" for="cnt-company">Company Name</label>
                <input class="form-input" type="text" id="cnt-company" required>
              </div>
              <div class="form-group">
                <label class="form-label" for="cnt-size">Company Size</label>
                <select class="form-select" id="cnt-size">
                  <option>1-10 employees</option>
                  <option>11-50 employees</option>
                  <option>51-200 employees</option>
                  <option>201-500 employees</option>
                  <option>500+ employees</option>
                </select>
              </div>
            </div>
            
            <div class="form-group">
              <label class="form-label" for="cnt-interest">Target API Category</label>
              <select class="form-select" id="cnt-interest">
                <option>General Marketplace Inquiry</option>
                <option>KYC / Identity Verification</option>
                <option>Payments & Transfer Acquiring</option>
                <option>Ledgers & FDIC Accounts</option>
                <option>Compliance & AML Screening</option>
                <option>Card Issuing (Virtual/Physical)</option>
                <option>Fraud & Risk Management</option>
              </select>
            </div>
            
            <div class="form-group">
              <label class="form-label" for="cnt-message">Integration Requirements or Message</label>
              <textarea class="form-textarea" id="cnt-message" placeholder="Please outline your estimated launch timeline, monthly transaction volumes, and any specific BaaS sponsor bank requirements..." required></textarea>
            </div>
            
            <button class="btn btn-primary" type="submit" style="margin-top:10px;">Send Inquiry &amp; Alert Staff</button>
          </div>
        </form>
      </div>
    </div>
  `;
}
