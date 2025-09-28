import api from "./api";

const dashboardService = {
  getStats: () => api.get("/dashboard/stats"),
  getRecentOrders: () => api.get("/dashboard/orders/recent"),
  getSalesChart: () => api.get("/dashboard/sales-chart"),
};

export default dashboardService;
