export default function LandlordDashboardAnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Analytics Dashboard
        </h1>
        <p className="text-muted-foreground">
          Comprehensive insights into your property portfolio performance
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Total Revenue
              </p>
              <p className="text-2xl font-bold">$24,500</p>
              <p className="text-xs text-green-600">+12.5% from last month</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Occupancy Rate
              </p>
              <p className="text-2xl font-bold">94.2%</p>
              <p className="text-xs text-blue-600">+2.1% from last month</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 21l4-4 4 4"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Total Properties
              </p>
              <p className="text-2xl font-bold">18</p>
              <p className="text-xs text-purple-600">2 new this quarter</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Active Tenants
              </p>
              <p className="text-2xl font-bold">67</p>
              <p className="text-xs text-orange-600">3 new this month</p>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-orange-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Revenue Trend */}
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="p-6 border-b">
            <h3 className="text-lg font-semibold">Revenue Trend</h3>
            <p className="text-sm text-muted-foreground">
              Monthly revenue over the past year
            </p>
          </div>

          <div className="p-6">
            <div className="h-64 flex items-end justify-between gap-2">
              {/* Simulated bar chart */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-8 h-32 bg-blue-200 rounded-t"></div>
                <span className="text-xs text-muted-foreground">Jan</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-8 h-40 bg-blue-300 rounded-t"></div>
                <span className="text-xs text-muted-foreground">Feb</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-8 h-36 bg-blue-300 rounded-t"></div>
                <span className="text-xs text-muted-foreground">Mar</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-8 h-44 bg-blue-400 rounded-t"></div>
                <span className="text-xs text-muted-foreground">Apr</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-8 h-48 bg-blue-500 rounded-t"></div>
                <span className="text-xs text-muted-foreground">May</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-8 h-52 bg-blue-600 rounded-t"></div>
                <span className="text-xs text-muted-foreground">Jun</span>
              </div>
            </div>
          </div>
        </div>

        {/* Occupancy Overview */}
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="p-6 border-b">
            <h3 className="text-lg font-semibold">Occupancy Overview</h3>
            <p className="text-sm text-muted-foreground">
              Current status across all properties
            </p>
          </div>

          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Occupied Units</span>
                <span className="text-sm">67 / 71</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: "94.2%" }}
                ></div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-600">67</p>
                  <p className="text-xs text-muted-foreground">Occupied</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-red-600">4</p>
                  <p className="text-xs text-muted-foreground">Vacant</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Property Performance */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-6 border-b">
          <h3 className="text-lg font-semibold">Property Performance</h3>
          <p className="text-sm text-muted-foreground">
            Top performing properties this month
          </p>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h4 className="font-medium">Sunset Apartments</h4>
                <p className="text-sm text-muted-foreground">
                  24 units • 100% occupancy
                </p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-green-600">$8,400</p>
                <p className="text-xs text-muted-foreground">Monthly revenue</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h4 className="font-medium">Downtown Condos</h4>
                <p className="text-sm text-muted-foreground">
                  18 units • 94% occupancy
                </p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-green-600">$7,200</p>
                <p className="text-xs text-muted-foreground">Monthly revenue</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h4 className="font-medium">Riverside Complex</h4>
                <p className="text-sm text-muted-foreground">
                  29 units • 90% occupancy
                </p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-green-600">$8,900</p>
                <p className="text-xs text-muted-foreground">Monthly revenue</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="p-6 border-b">
            <h3 className="text-lg font-semibold">Recent Payments</h3>
          </div>

          <div className="p-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-sm">John Doe - Unit 2B</p>
                  <p className="text-xs text-muted-foreground">
                    Received today
                  </p>
                </div>
                <span className="text-green-600 font-medium">$1,200</span>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-sm">Jane Smith - Unit 4A</p>
                  <p className="text-xs text-muted-foreground">
                    Received yesterday
                  </p>
                </div>
                <span className="text-green-600 font-medium">$1,100</span>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-sm">Mike Wilson - Unit 1C</p>
                  <p className="text-xs text-muted-foreground">
                    Received 2 days ago
                  </p>
                </div>
                <span className="text-green-600 font-medium">$950</span>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="p-6 border-b">
            <h3 className="text-lg font-semibold">Maintenance Alerts</h3>
          </div>

          <div className="p-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 border rounded-lg">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="font-medium text-sm">Urgent: Heating issue</p>
                  <p className="text-xs text-muted-foreground">
                    Building A - Unit 3B
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 border rounded-lg">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="font-medium text-sm">Plumbing scheduled</p>
                  <p className="text-xs text-muted-foreground">
                    Building C - Unit 1A
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 border rounded-lg">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="font-medium text-sm">Electrical completed</p>
                  <p className="text-xs text-muted-foreground">
                    Building B - Unit 2C
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Export & Actions */}
      <div className="flex gap-4">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Export Analytics Report
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
          Schedule Email Report
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
          View Detailed Reports
        </button>
      </div>
    </div>
  );
}
