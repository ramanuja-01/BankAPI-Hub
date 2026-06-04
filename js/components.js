// BankAPI Hub - Reusable UI Components
// Modular rendering functions using modern template string interpolation

// Utility to render rating stars
function renderStars(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;
  
  let starsHtml = '';
  for (let i = 0; i < fullStars; i++) {
    starsHtml += `<svg class="star-icon filled" style="width:14px;height:14px;fill:#fbbf24;margin-right:1px;" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`;
  }
  if (halfStar) {
    starsHtml += `<svg class="star-icon half" style="width:14px;height:14px;fill:#fbbf24;margin-right:1px;" viewBox="0 0 20 20"><defs><linearGradient id="halfGrad"><stop offset="50%" stop-color="#fbbf24"/><stop offset="50%" stop-color="#cbd5e1"/></linearGradient></defs><path fill="url(#halfGrad)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`;
  }
  for (let i = 0; i < emptyStars; i++) {
    starsHtml += `<svg class="star-icon empty" style="width:14px;height:14px;fill:#cbd5e1;margin-right:1px;" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`;
  }
  return starsHtml;
}

// Category Icons Mapper
function getCategoryIcon(category) {
  switch (category) {
    case 'KYC':
      return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
      </svg>`;
    case 'Payments':
      return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>`;
    case 'Ledger':
      return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.33-1.125M3.75 10.33V21m16.5 0h-18" />
      </svg>`;
    case 'Compliance':
      return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>`;
    case 'Cards':
      return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 10.5h6M9 13.5h6" />
      </svg>`;
    case 'Fraud':
      return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
      </svg>`;
    default:
      return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>`;
  }
}

// Verified badge renderer
function renderVerifiedBadge() {
  return `
    <span class="verified-badge-pill" title="Verified Banking API Vendor">
      <svg viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M6.267 3.455a.75.75 0 00-.708-.523H4.5a2 2 0 00-2 2v1.059a.75.75 0 00.523.708L5 7.33v5.34l-.477.606a.75.75 0 00-.523.708V15a2 2 0 002 2h1.059a.75.75 0 00.708-.523L8.67 15h2.66l.905 1.477a.75.75 0 00.708.523H14a2 2 0 002-2v-1.059a.75.75 0 00-.523-.708L15 12.67V7.33l.477-.606a.75.75 0 00.523-.708V5a2 2 0 00-2-2h-1.059a.75.75 0 00-.708.523L11.33 5H8.67L7.765 3.455zM10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" clip-rule="evenodd" />
      </svg>
      Verified
    </span>
  `;
}

// API Card component
function renderApiCard(api, isSelectedForCompare, onCompareChangeFuncName) {
  const vendor = MOCK_VENDORS[api.vendorId] || { name: 'Unknown Vendor', logoText: '?', color: '#cbd5e1', isVerified: false };
  const verifiedBadge = vendor.isVerified ? renderVerifiedBadge() : '';
  const checked = isSelectedForCompare ? 'checked' : '';
  const complianceBadges = api.complianceTags.map(tag => `<span class="badge badge-secondary">${tag}</span>`).join(' ');
  const sandboxBadge = api.sandbox 
    ? `<span class="badge badge-green">Sandbox Ready</span>` 
    : `<span class="badge badge-yellow">Vetted Sandbox</span>`;
  
  return `
    <div class="api-card" id="api-card-${api.id}">
      <div class="api-card-header">
        <div class="vendor-info">
          <div class="vendor-logo-avatar" style="background-color: ${vendor.color}">${vendor.logoText}</div>
          <div>
            <a href="#vendor/${vendor.id}" class="vendor-name-link">${vendor.name}</a>
            ${verifiedBadge}
          </div>
        </div>
        <div class="api-card-compare">
          <label class="checkbox-label">
            <input type="checkbox" ${checked} onchange="${onCompareChangeFuncName}('${api.id}', this.checked)">
            Compare
          </label>
        </div>
      </div>
      
      <div class="api-title-row">
        <a href="#api-detail/${api.id}">
          <h4 class="api-card-title">${api.name}</h4>
        </a>
        <p class="api-card-slogan">${api.slogan}</p>
      </div>
      
      <div class="api-specs-row">
        <div class="spec-tile">
          <h5>Category</h5>
          <p>${api.category}</p>
        </div>
        <div class="spec-tile">
          <h5>Region</h5>
          <p>${api.regions.join(', ')}</p>
        </div>
        <div class="spec-tile">
          <h5>Pricing Model</h5>
          <p>${api.pricingModel}</p>
        </div>
        <div class="spec-tile">
          <h5>Difficulty</h5>
          <p>${api.integrationRating}</p>
        </div>
      </div>
      
      <div class="api-tags-row">
        ${sandboxBadge}
        ${complianceBadges}
      </div>
      
      <div class="api-card-actions">
        <div class="card-metrics">
          <div class="card-metric">
            Latency: <span>${api.latency}ms</span>
          </div>
          <div class="card-metric">
            Uptime: <span>${api.uptime}</span>
          </div>
        </div>
        <div class="card-action-btns">
          <a href="#api-detail/${api.id}" class="btn btn-outline btn-sm">View Docs</a>
          <button onclick="openRequestDemoModal('${api.id}')" class="btn btn-primary btn-sm">Book Demo</button>
        </div>
      </div>
    </div>
  `;
}

// Compare Drawer bottom dock component
function renderCompareDrawer(selectedApis, onRemoveFuncName) {
  if (selectedApis.length === 0) return '';
  
  const chipsHtml = selectedApis.map(api => `
    <div class="compare-item-chip">
      <span>${api.name}</span>
      <button class="remove-compare-btn" onclick="${onRemoveFuncName}('${api.id}')">&times;</button>
    </div>
  `).join('');

  return `
    <div class="compare-drawer-info">
      <div class="drawer-title">Comparing (${selectedApis.length}/3)</div>
      <div class="compare-items-list">
        ${chipsHtml}
      </div>
    </div>
    <div class="compare-drawer-actions">
      <button class="btn btn-secondary btn-sm" onclick="clearComparison()">Clear All</button>
      <a href="#compare" class="btn btn-teal btn-sm">Compare Specs</a>
    </div>
  `;
}

// Custom CSS-based dashboard graphs
function renderBarChart(leadsData) {
  // Let's compute leads per day or count by status
  const counts = { 'New': 0, 'Contacted': 0, 'Closed': 0 };
  leadsData.forEach(lead => {
    if (counts[lead.status] !== undefined) {
      counts[lead.status]++;
    }
  });

  const maxVal = Math.max(...Object.values(counts), 1);
  
  return `
    <div class="chart-card">
      <h4 class="chart-title">Lead Funnel Distribution</h4>
      <div class="chart-flex-body">
        <div class="bar-wrapper">
          <span style="font-size:0.75rem; font-weight:700;">${counts['New']}</span>
          <div class="bar-pill" style="height: ${(counts['New'] / maxVal) * 120}px;"></div>
          <span class="bar-label">New Leads</span>
        </div>
        <div class="bar-wrapper">
          <span style="font-size:0.75rem; font-weight:700;">${counts['Contacted']}</span>
          <div class="bar-pill" style="height: ${(counts['Contacted'] / maxVal) * 120}px; background: linear-gradient(to top, var(--teal-color), var(--primary-color));"></div>
          <span class="bar-label">Contacted</span>
        </div>
        <div class="bar-wrapper">
          <span style="font-size:0.75rem; font-weight:700;">${counts['Closed']}</span>
          <div class="bar-pill" style="height: ${(counts['Closed'] / maxVal) * 120}px; background: linear-gradient(to top, var(--indigo-color), var(--teal-color));"></div>
          <span class="bar-label">Closed</span>
        </div>
      </div>
    </div>
  `;
}

function renderDonutChart(leadsData) {
  // Compute percentage categories
  const categories = {};
  let total = 0;
  leadsData.forEach(lead => {
    const api = getAllAPIs().find(a => a.id === lead.apiId);
    const cat = api ? api.category : 'General';
    categories[cat] = (categories[cat] || 0) + 1;
    total++;
  });

  const colors = ['#38bdf8', '#2dd4bf', '#818cf8', '#fbbf24', '#f87171', '#a7f3d0'];
  let html = '';
  
  Object.entries(categories).forEach(([name, count], index) => {
    const color = colors[index % colors.length];
    const pct = ((count / total) * 100).toFixed(0);
    html += `
      <div class="donut-row">
        <div class="donut-label-wrapper">
          <span class="donut-color-dot" style="background-color: ${color}"></span>
          <span>${name}</span>
        </div>
        <span class="donut-val">${count} (${pct}%)</span>
      </div>
    `;
  });

  return `
    <div class="chart-card">
      <h4 class="chart-title">Inquiries by API Category</h4>
      <div class="chart-donut-body">
        ${html || '<p style="color:var(--text-muted);font-size:0.9rem;">No leads recorded.</p>'}
      </div>
    </div>
  `;
}
