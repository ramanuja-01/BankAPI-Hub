// BankAPI Hub - Full-Stack Data Layer Client
// Asynchronous fetch handlers to coordinate with local REST API Server

const API_BASE_URL = window.location.origin;

let MOCK_VENDORS = {};
let IN_MEMORY_APIS = [];
let IN_MEMORY_LEADS = [];

// App Data Initializer
async function initFullStackData() {
  try {
    const [vendorsRes, apisRes, leadsRes] = await Promise.all([
      fetch(`${API_BASE_URL}/api/vendors`),
      fetch(`${API_BASE_URL}/api/apis`),
      fetch(`${API_BASE_URL}/api/leads`)
    ]);

    MOCK_VENDORS = await vendorsRes.json();
    IN_MEMORY_APIS = await apisRes.json();
    IN_MEMORY_LEADS = await leadsRes.json();
    console.log('Successfully synchronized database state with the backend server.');
    return true;
  } catch (error) {
    console.error('Failed to initialize database connection. Falling back to emergency local mock data: ', error);
    return false;
  }
}

// Read APIs
function getAllAPIs() {
  return IN_MEMORY_APIS;
}

// Add API listing to disk database
async function saveCustomAPI(api) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/apis`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(api)
    });
    
    if (response.ok) {
      const data = await response.json();
      IN_MEMORY_APIS.push(data.api);
      return true;
    }
    return false;
  } catch (e) {
    console.error('Error saving listing to API server: ', e);
    return false;
  }
}

// Read Leads
function getLeads() {
  return IN_MEMORY_LEADS;
}

// Add Lead to disk database
async function saveLead(lead) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lead)
    });
    
    if (response.ok) {
      const data = await response.json();
      IN_MEMORY_LEADS.unshift(data.lead); // add to top
      return true;
    }
    return false;
  } catch (e) {
    console.error('Error saving lead to API server: ', e);
    return false;
  }
}

// Update Lead Status on disk database
async function updateLeadStatus(leadId, status) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/leads/status`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ leadId, status })
    });
    
    if (response.ok) {
      // Sync memory state
      IN_MEMORY_LEADS = IN_MEMORY_LEADS.map(lead => {
        if (lead.id === leadId) {
          return { ...lead, status };
        }
        return lead;
      });
      return true;
    }
    return false;
  } catch (e) {
    console.error('Error updating lead status on API server: ', e);
    return false;
  }
}
