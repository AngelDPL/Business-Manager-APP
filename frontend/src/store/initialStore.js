export const initialStore = {
  // UI
  loading: false,
  error: null,
  sidebarOpen: true,
  
  // Auth
  user: null,
  isAuthenticated: false,
  
  // Business Data
  customers: [],
  products: [],
  orders: [],
  inventory: [],
  sales: [],
  
  // Filters
  dateRange: { start: null, end: null },
  selectedCustomer: null,
  searchTerm: "",
  
  // Dashboard
  totalSales: 0,
  monthlyRevenue: 0,
  topProducts: [],
};