// BankAPI Hub - Core App Controller & State Manager (Full-Stack Integrated)

// Global State
const GLOBAL_STATE = {
  searchQuery: '',
  activeFilters: {
    category: '',
    regions: [],
    pricingModel: [],
    compliance: [],
    sandboxOnly: false,
    webhooksOnly: false
  },
  sortBy: 'popularity',
  compareList: [],
  currentView: 'home',
  activeDetailTab: 'overview',
  activeCodeLang: 'curl',
  activeDashboardTab: 'analytics',
  theme: 'light'
};

// Main Initialization (Asynchronous Data Sync)
document.addEventListener('DOMContentLoaded', async () => {
  initTheme();
  initRouter();
  initModalListeners();
  
  // Show connection loading spinner
  const viewport = document.getElementById('main-content-viewport');
  if (viewport) {
    viewport.innerHTML = `
      <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; min-height:400px; gap:16px;">
        <div style="animation: spin 0.8s linear infinite; border: 4px solid var(--border-color); border-top-color: var(--primary-color); width: 40px; height: 40px; border-radius: 50%;"></div>
        <p style="color:var(--text-secondary); font-size:0.95rem; font-weight:600;">Synchronizing secure ledger database...</p>
      </div>
    `;
  }
  
  // Wait for REST API connection sync
  await initFullStackData();
  
  // Custom navigation styling sync
  window.addEventListener('hashchange', handleRouteChange);
  
  // First route render
  handleRouteChange();
});

// Theme System
function initTheme() {
  const savedTheme = localStorage.getItem('bankapi_hub_theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme) {
    GLOBAL_STATE.theme = savedTheme;
  } else if (systemPrefersDark) {
    GLOBAL_STATE.theme = 'dark';
  } else {
    GLOBAL_STATE.theme = 'light';
  }
  
  document.documentElement.setAttribute('data-theme', GLOBAL_STATE.theme);
  updateThemeIcon();
}

function toggleTheme() {
  GLOBAL_STATE.theme = GLOBAL_STATE.theme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', GLOBAL_STATE.theme);
  localStorage.setItem('bankapi_hub_theme', GLOBAL_STATE.theme);
  updateThemeIcon();
}

function updateThemeIcon() {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  if (!toggleBtn) return;
  
  if (GLOBAL_STATE.theme === 'dark') {
    toggleBtn.innerHTML = `
      <svg style="width:20px;height:20px;" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-11.314l.707.707m11.314 11.314l.707-.707M12 17a5 5 0 110-10 5 5 0 010 10z" />
      </svg>
    `;
    toggleBtn.title = 'Switch to Light Mode';
  } else {
    toggleBtn.innerHTML = `
      <svg style="width:20px;height:20px;" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    `;
    toggleBtn.title = 'Switch to Dark Mode';
  }
}

// Client Side Hash Router
function initRouter() {
  updateActiveNavLinks();
}

function handleRouteChange() {
  const hash = window.location.hash || '#home';
  GLOBAL_STATE.compareList = getCompareListFromSession();
  
  let route = 'home';
  let parameter = null;

  if (hash.startsWith('#api-detail/')) {
    route = 'api-detail';
    parameter = hash.substring('#api-detail/'.length);
  } else if (hash.startsWith('#vendor/')) {
    route = 'vendor';
    parameter = hash.substring('#vendor/'.length);
  } else {
    route = hash.substring(1);
  }

  GLOBAL_STATE.currentView = route;
  updateActiveNavLinks();
  renderCurrentView(route, parameter);
  
  closeAllModals();
  window.scrollTo(0, 0);

  if (route === 'home') {
    startTerminalAnimation();
  }
}

function updateActiveNavLinks() {
  const links = document.querySelectorAll('.nav-link');
  const route = GLOBAL_STATE.currentView;
  
  links.forEach(link => {
    const linkHash = link.getAttribute('href');
    if (linkHash === `#${route}`) {
      link.classList.add('active');
    } else if (route === 'api-detail' && linkHash === '#browse') {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

function renderCurrentView(route, parameter) {
  const viewport = document.getElementById('main-content-viewport');
  if (!viewport) return;

  switch (route) {
    case 'home':
      viewport.innerHTML = renderHomeView();
      break;
    case 'browse':
      viewport.innerHTML = renderBrowseView();
      updateCompareDrawerUI();
      break;
    case 'api-detail':
      viewport.innerHTML = renderApiDetailView(parameter);
      break;
    case 'vendor':
      viewport.innerHTML = renderVendorProfileView(parameter);
      break;
    case 'dashboard':
      viewport.innerHTML = renderVendorDashboardView();
      break;
    case 'compare':
      viewport.innerHTML = renderCompareView();
      break;
    case 'pricing':
      viewport.innerHTML = renderPricingView();
      break;
    case 'trust':
      viewport.innerHTML = renderTrustView();
      break;
    case 'contact':
      viewport.innerHTML = renderContactView();
      break;
    default:
      viewport.innerHTML = renderHomeView();
      break;
  }
}

// Comparison State Management
function getCompareListFromSession() {
  const data = sessionStorage.getItem('bankapi_hub_compare');
  return data ? JSON.parse(data) : [];
}

function saveCompareListToSession(list) {
  sessionStorage.setItem('bankapi_hub_compare', JSON.stringify(list));
}

function toggleCompareSelection(apiId, isSelected) {
  let list = getCompareListFromSession();
  const api = getAllAPIs().find(a => a.id === apiId);
  
  if (!api) return;

  if (isSelected) {
    if (list.length >= 3) {
      alert('You can compare a maximum of 3 APIs simultaneously.');
      const checkbox = document.querySelector(`#api-card-${apiId} input[type="checkbox"]`);
      if (checkbox) checkbox.checked = false;
      return;
    }
    if (!list.some(item => item.id === apiId)) {
      list.push(api);
    }
  } else {
    list = list.filter(item => item.id !== apiId);
  }

  GLOBAL_STATE.compareList = list;
  saveCompareListToSession(list);
  updateCompareDrawerUI();
}

function addApiToComparisonDirect(apiId) {
  const api = getAllAPIs().find(a => a.id === apiId);
  if (!api) return;
  
  let list = getCompareListFromSession();
  if (list.length >= 3) {
    alert('Comparison list is full. Remove an item before adding a new one.');
    return;
  }
  if (!list.some(item => item.id === apiId)) {
    list.push(api);
  }
  
  GLOBAL_STATE.compareList = list;
  saveCompareListToSession(list);
  window.location.hash = '#compare';
}

function clearComparison() {
  GLOBAL_STATE.compareList = [];
  saveCompareListToSession([]);
  
  const checkboxes = document.querySelectorAll('.api-card input[type="checkbox"]');
  checkboxes.forEach(c => c.checked = false);
  
  updateCompareDrawerUI();
  
  if (GLOBAL_STATE.currentView === 'compare') {
    renderCurrentView('compare');
  }
}

function updateCompareDrawerUI() {
  const drawer = document.getElementById('compare-drawer-dock');
  if (!drawer) return;

  const selected = GLOBAL_STATE.compareList;
  if (selected.length > 0 && GLOBAL_STATE.currentView === 'browse') {
    drawer.innerHTML = renderCompareDrawer(selected, 'toggleCompareSelection');
    drawer.classList.add('visible');
  } else {
    drawer.classList.remove('visible');
  }
}

// Search and Filter logic
function updateSearchQuery(val) {
  GLOBAL_STATE.searchQuery = val;
  debounceFilterListings();
}

let filterDebounceTimer;
function debounceFilterListings() {
  clearTimeout(filterDebounceTimer);
  filterDebounceTimer = setTimeout(() => {
    if (GLOBAL_STATE.currentView === 'browse') {
      renderCurrentView('browse');
      updateCompareDrawerUI();
    }
  }, 150);
}

function setCategoryFilter(cat) {
  GLOBAL_STATE.activeFilters.category = cat;
  if (GLOBAL_STATE.currentView !== 'browse') {
    window.location.hash = '#browse';
  } else {
    renderCurrentView('browse');
    updateCompareDrawerUI();
  }
}

function toggleFilter(type, value) {
  const active = GLOBAL_STATE.activeFilters[type];
  const idx = active.indexOf(value);
  if (idx > -1) {
    active.splice(idx, 1);
  } else {
    active.push(value);
  }
  renderCurrentView('browse');
  updateCompareDrawerUI();
}

function toggleBooleanFilter(type, isChecked) {
  GLOBAL_STATE.activeFilters[type] = isChecked;
  renderCurrentView('browse');
  updateCompareDrawerUI();
}

function updateSortBy(val) {
  GLOBAL_STATE.sortBy = val;
  renderCurrentView('browse');
  updateCompareDrawerUI();
}

function resetAllFilters() {
  GLOBAL_STATE.searchQuery = '';
  GLOBAL_STATE.activeFilters = {
    category: '',
    regions: [],
    pricingModel: [],
    compliance: [],
    sandboxOnly: false,
    webhooksOnly: false
  };
  GLOBAL_STATE.sortBy = 'popularity';
  renderCurrentView('browse');
  updateCompareDrawerUI();
}

function getFilteredAPIs() {
  let apis = getAllAPIs();
  const search = GLOBAL_STATE.searchQuery.toLowerCase().trim();
  const filters = GLOBAL_STATE.activeFilters;

  if (search) {
    apis = apis.filter(api => {
      const v = MOCK_VENDORS[api.vendorId] || { name: '' };
      return api.name.toLowerCase().includes(search) || 
             api.slogan.toLowerCase().includes(search) || 
             api.description.toLowerCase().includes(search) ||
             v.name.toLowerCase().includes(search) ||
             api.category.toLowerCase().includes(search);
    });
  }

  if (filters.category) {
    apis = apis.filter(api => api.category === filters.category);
  }

  if (filters.regions.length > 0) {
    apis = apis.filter(api => 
      api.regions.some(r => filters.regions.includes(r))
    );
  }

  if (filters.pricingModel.length > 0) {
    apis = apis.filter(api => filters.pricingModel.includes(api.pricingModel));
  }

  if (filters.compliance.length > 0) {
    apis = apis.filter(api => 
      filters.compliance.every(c => api.complianceTags.includes(c))
    );
  }

  if (filters.sandboxOnly) {
    apis = apis.filter(api => api.sandbox === true);
  }

  if (filters.webhooksOnly) {
    apis = apis.filter(api => api.webhooks === true);
  }

  apis.sort((a, b) => {
    if (GLOBAL_STATE.sortBy === 'latency') {
      return a.latency - b.latency;
    }
    if (GLOBAL_STATE.sortBy === 'uptime') {
      const uptA = parseFloat(a.uptime.replace('%', ''));
      const uptB = parseFloat(b.uptime.replace('%', ''));
      return uptB - uptA;
    }
    return 0; 
  });

  return apis;
}

// API details page tabs toggles
function setDetailTab(tab) {
  GLOBAL_STATE.activeDetailTab = tab;
  if (GLOBAL_STATE.currentView === 'api-detail') {
    const hash = window.location.hash;
    const apiId = hash.substring('#api-detail/'.length);
    renderCurrentView('api-detail', apiId);
  }
}

function setCodeLang(lang) {
  GLOBAL_STATE.activeCodeLang = lang;
  if (GLOBAL_STATE.currentView === 'api-detail') {
    const hash = window.location.hash;
    const apiId = hash.substring('#api-detail/'.length);
    renderCurrentView('api-detail', apiId);
  }
}

// Vendor Dashboard sub-tabs toggles
function setDashboardTab(tab) {
  GLOBAL_STATE.activeDashboardTab = tab;
  if (GLOBAL_STATE.currentView === 'dashboard') {
    renderCurrentView('dashboard');
  }
}

// Dashboard Status lead updates
async function changeLeadStatus(leadId, status) {
  const success = await updateLeadStatus(leadId, status);
  if (success && GLOBAL_STATE.currentView === 'dashboard') {
    renderCurrentView('dashboard');
  }
}

// API Submission Handler (Vendor Form)
async function handleApiSubmission(event) {
  event.preventDefault();
  
  const name = document.getElementById('sub-name').value;
  const category = document.getElementById('sub-category').value;
  const slogan = document.getElementById('sub-slogan').value;
  const description = document.getElementById('sub-desc').value;
  const pricingModel = document.getElementById('sub-pricing-model').value;
  const pricingDetails = document.getElementById('sub-pricing-details').value;
  
  const regionCheckboxes = document.getElementsByName('sub-regions');
  const regions = [];
  regionCheckboxes.forEach(cb => { if (cb.checked) regions.push(cb.value); });
  
  const complianceCheckboxes = document.getElementsByName('sub-compliance');
  const complianceTags = [];
  complianceCheckboxes.forEach(cb => { if (cb.checked) complianceTags.push(cb.value); });

  const sandbox = document.getElementById('sub-sandbox').value === 'true';
  const webhooks = document.getElementById('sub-webhooks').value === 'true';
  const latency = parseInt(document.getElementById('sub-latency').value);
  const uptime = document.getElementById('sub-uptime').value;

  const apiId = name.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-api';
  
  const newApi = {
    id: apiId,
    name,
    vendorId: 'stripe-pay',
    category,
    slogan,
    description,
    regions,
    pricingModel,
    pricingDetails,
    sandbox,
    sandboxDetails: sandbox ? 'Instant sandbox key issued.' : 'Requires approval.',
    complianceTags,
    integrationRating: latency < 150 ? 'Easy' : latency < 250 ? 'Medium' : 'Complex',
    webhooks,
    docsQuality: 4,
    sla: '99.90%',
    latency,
    uptime,
    sdkLanguages: ['curl', 'Node.js', 'Python'],
    useCases: ['SaaS integrations', 'Startup onboarding'],
    openapiSchema: {
      "openapi": "3.0.0",
      "info": { "title": name, "version": "1.0.0" },
      "paths": { "/v1/test": { "get": { "summary": "Verify interface connectivity" } } }
    },
    codeExample: {
      curl: `curl https://api.stripe.com/v1/sub-api-endpoint \\\n  -u sk_test_key_xyz:`,
      javascript: `const axios = require('axios');\naxios.get('https://api.stripe.com/v1/sub-api-endpoint')\n.then(res => console.log(res.data));`,
      python: `import requests\nres = requests.get('https://api.stripe.com/v1/sub-api-endpoint')\nprint(res.json())`
    }
  };

  const success = await saveCustomAPI(newApi);
  
  if (success) {
    showSuccessModal(
      'API Listing Submitted',
      `Your API product <strong>"${name}"</strong> has been successfully processed and written to the persistent database. It is now instantly discoverable in the search index.`
    );
    document.getElementById('new-api-submission-form').reset();
  } else {
    alert('Failed to submit listing. Please try again.');
  }
}

// Lead Forms handlers
async function handleGeneralContactSubmission(event) {
  event.preventDefault();
  
  const name = document.getElementById('cnt-name').value;
  const email = document.getElementById('cnt-email').value;
  const company = document.getElementById('cnt-company').value;
  const size = document.getElementById('cnt-size').value;
  const interest = document.getElementById('cnt-interest').value;
  const message = document.getElementById('cnt-message').value;

  const mockLead = {
    id: 'lead-' + Date.now(),
    apiId: 'general',
    apiName: interest,
    buyerName: name,
    buyerEmail: email,
    buyerCompany: company,
    companySize: size,
    volume: 'Scale evaluation',
    timeline: 'Immediate',
    date: new Date().toISOString(),
    status: 'New'
  };

  const success = await saveLead(mockLead);
  
  if (success) {
    showSuccessModal(
      'Inquiry Received',
      `Thank you, <strong>${name}</strong>. Our marketplace procurement specialists have received your requirements for <strong>"${interest}"</strong>. We will coordinate with sponsor banking representatives and reach out to you within 24 hours.`
    );
  } else {
    alert('Failed to submit inquiry. Please try again.');
  }
}

async function handleRequestDemoFormSubmit(event) {
  event.preventDefault();
  
  const apiId = document.getElementById('req-api-id').value;
  const name = document.getElementById('req-name').value;
  const email = document.getElementById('req-email').value;
  const company = document.getElementById('req-company').value;
  const size = document.getElementById('req-size').value;
  const volume = document.getElementById('req-volume').value;
  const timeline = document.getElementById('req-timeline').value;

  const api = getAllAPIs().find(a => a.id === apiId);
  const apiName = api ? api.name : 'Unknown API Spec';

  const mockLead = {
    id: 'lead-' + Date.now(),
    apiId,
    apiName,
    buyerName: name,
    buyerEmail: email,
    buyerCompany: company,
    companySize: size,
    volume,
    timeline,
    date: new Date().toISOString(),
    status: 'New'
  };

  const success = await saveLead(mockLead);
  
  if (success) {
    showSuccessModal(
      'Sandbox & Demo Booked',
      `Success! A lead notification has been dispatched to <strong>${apiName}</strong>. A sandboxed credentials package will be generated for <strong>${company}</strong> and emailed to <strong>${email}</strong>.`
    );
  } else {
    alert('Failed to submit lead. Please try again.');
  }
}

function handleComplianceChecklistDownload(event) {
  event.preventDefault();
  const email = document.getElementById('mag-email').value;

  showSuccessModal(
    'Checklist Download Started',
    `Perfect! The **Fintech Vendor Procurement Pack** (including SOC 2 guidelines & BaaS checklists) is preparing for download. A permanent copy has also been sent to **${email}** for your security auditing.`
  );
}

// Modal dialog mechanisms
function initModalListeners() {
  const modals = document.querySelectorAll('.modal-overlay');
  modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeAllModals();
      }
    });
  });
}

function openRequestDemoModal(apiId) {
  const api = getAllAPIs().find(a => a.id === apiId);
  const title = api ? api.name : 'Unified Banking Infrastructure';
  
  const modal = document.getElementById('request-demo-modal-overlay');
  if (!modal) return;
  
  document.getElementById('req-api-id').value = apiId;
  document.getElementById('req-modal-api-title').innerText = title;
  
  modal.classList.add('active');
}

function openCheckoutModal(planName, price) {
  const modal = document.getElementById('checkout-modal-overlay');
  if (!modal) return;
  
  document.getElementById('chk-plan-title').innerText = planName;
  document.getElementById('chk-plan-price').innerText = price;
  
  modal.classList.add('active');
}

function handleCheckoutFormSubmit(event) {
  event.preventDefault();
  const plan = document.getElementById('chk-plan-title').innerText;
  
  showSuccessModal(
    'Checkout Complete',
    `Congratulations! Your vendor portal has been upgraded to the <strong>${plan}</strong>. You can now publish advanced listings, activate verification badges, and collect lead telemetry.`
  );
}

function closeAllModals() {
  const overlays = document.querySelectorAll('.modal-overlay');
  overlays.forEach(overlay => overlay.classList.remove('active'));
}

function showSuccessModal(title, messageHtml) {
  closeAllModals();
  const modal = document.getElementById('success-modal-overlay');
  if (!modal) return;

  document.getElementById('success-title').innerText = title;
  document.getElementById('success-message').innerHTML = messageHtml;
  
  modal.classList.add('active');
}

// Terminal mock dynamic writing animation
let terminalInterval;
function startTerminalAnimation() {
  clearInterval(terminalInterval);
  const terminal = document.getElementById('home-terminal-content');
  if (!terminal) return;

  const lines = [
    { type: 'prompt', text: 'curl -X POST https://api.bankapihub.com/v1/sandbox/access' },
    { type: 'prompt', text: 'import bankapi_hub_sdk' },
    { type: 'comment', text: '# Fetching KYC and Payments interface authorization' },
    { type: 'code', text: 'hub = bankapi_hub_sdk.connect(token="hb_pk_8192a")' },
    { type: 'code', text: 'response = hub.Transactions.simulate(amount=100.00, currency="USD")' },
    { type: 'code', text: 'print(response.status)' },
    { type: 'output', text: '{\n  "transaction_id": "tx_99a82c7f",\n  "status": "APPROVED",\n  "routing_method": "RTP",\n  "clearing_bank": "Lead Clearing Corp",\n  "settled_at": "2026-06-04T06:21:40Z",\n  "audited": true\n}' }
  ];

  terminal.innerHTML = '';
  let lineIdx = 0;
  let charIdx = 0;
  let currentDiv = null;

  function typeChar() {
    if (lineIdx >= lines.length) {
      clearInterval(terminalInterval);
      return;
    }

    const currentLine = lines[lineIdx];

    if (charIdx === 0) {
      currentDiv = document.createElement('div');
      if (currentLine.type === 'prompt') {
        currentDiv.className = 'terminal-line prompt';
      } else if (currentLine.type === 'comment') {
        currentDiv.className = 'terminal-comment';
      } else if (currentLine.type === 'code') {
        currentDiv.className = 'terminal-line';
      } else if (currentLine.type === 'output') {
        currentDiv.className = 'terminal-output';
        currentDiv.innerHTML = `<pre style="margin:0;font-family:var(--font-mono);font-size:0.8rem;white-space:pre-wrap;color:#34d399;">${currentLine.text}</pre>`;
        terminal.appendChild(currentDiv);
        terminal.scrollTop = terminal.scrollHeight;
        lineIdx++;
        charIdx = 0;
        setTimeout(typeChar, 800);
        return;
      }
      terminal.appendChild(currentDiv);
    }

    currentDiv.textContent += currentLine.text[charIdx];
    charIdx++;
    terminal.scrollTop = terminal.scrollHeight;

    if (charIdx >= currentLine.text.length) {
      lineIdx++;
      charIdx = 0;
      setTimeout(typeChar, 400);
    } else {
      setTimeout(typeChar, 25 + Math.random() * 20);
    }
  }

  typeChar();
}
