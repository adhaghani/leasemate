export default function FinancialReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Financial Reports
          </h1>
          <p className="text-muted-foreground">
            Comprehensive financial analysis and reporting
          </p>
        </div>

        <div className="flex gap-2">
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            Schedule Reports
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Export All Reports
          </button>
        </div>
      </div>

      {/* Financial Summary */}
      <div className="grid gap-4 md:grid-cols-4">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Total Revenue
              </p>
              <p className="text-2xl font-bold text-green-600">$54,450</p>
              <p className="text-xs text-green-600">+8.2% vs last month</p>
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
                Total Expenses
              </p>
              <p className="text-2xl font-bold text-red-600">$18,750</p>
              <p className="text-xs text-red-600">+3.1% vs last month</p>
            </div>
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Net Income
              </p>
              <p className="text-2xl font-bold text-blue-600">$35,700</p>
              <p className="text-xs text-blue-600">65.6% profit margin</p>
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
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">ROI</p>
              <p className="text-2xl font-bold text-purple-600">14.2%</p>
              <p className="text-xs text-purple-600">Annual return</p>
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
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Report Categories */}
      <div className="grid gap-6 md:grid-cols-3">
        {/* Income Reports */}
        <div className="bg-white rounded-lg border shadow-sm">
          <div className="p-6 border-b">
            <h3 className="text-lg font-semibold text-green-700">
              Income Reports
            </h3>
            <p className="text-sm text-muted-foreground">
              Revenue and rent collection analysis
            </p>
          </div>

          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                <div>
                  <p className="font-medium">Monthly Rent Roll</p>
                  <p className="text-sm text-muted-foreground">
                    Current rent collections
                  </p>
                </div>
                <button className="text-blue-600 hover:underline">View</button>
              </div>

              <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                <div>
                  <p className="font-medium">Collection Analysis</p>
                  <p className="text-sm text-muted-foreground">
                    Payment trends and rates
                  </p>
                </div>
                <button className="text-blue-600 hover:underline">View</button>
              </div>

              <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                <div>
                  <p className="font-medium">Late Fee Report</p>
                  <p className="text-sm text-muted-foreground">
                    Late payment analysis
                  </p>
                </div>
                <button className="text-blue-600 hover:underline">View</button>
              </div>

              <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                <div>
                  <p className="font-medium">Vacancy Loss Report</p>
                  <p className="text-sm text-muted-foreground">
                    Revenue impact of vacancies
                  </p>
                </div>
                <button className="text-blue-600 hover:underline">View</button>
              </div>
            </div>
          </div>
        </div>

        {/* Expense Reports */}
        <div className="bg-white rounded-lg border shadow-sm">
          <div className="p-6 border-b">
            <h3 className="text-lg font-semibold text-red-700">
              Expense Reports
            </h3>
            <p className="text-sm text-muted-foreground">
              Operating costs and maintenance analysis
            </p>
          </div>

          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                <div>
                  <p className="font-medium">Operating Expenses</p>
                  <p className="text-sm text-muted-foreground">
                    Monthly operational costs
                  </p>
                </div>
                <button className="text-blue-600 hover:underline">View</button>
              </div>

              <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                <div>
                  <p className="font-medium">Maintenance Costs</p>
                  <p className="text-sm text-muted-foreground">
                    Repair and upkeep expenses
                  </p>
                </div>
                <button className="text-blue-600 hover:underline">View</button>
              </div>

              <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                <div>
                  <p className="font-medium">Vendor Analysis</p>
                  <p className="text-sm text-muted-foreground">
                    Contractor and service costs
                  </p>
                </div>
                <button className="text-blue-600 hover:underline">View</button>
              </div>

              <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                <div>
                  <p className="font-medium">Tax Summary</p>
                  <p className="text-sm text-muted-foreground">
                    Property tax and deductions
                  </p>
                </div>
                <button className="text-blue-600 hover:underline">View</button>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Reports */}
        <div className="bg-white rounded-lg border shadow-sm">
          <div className="p-6 border-b">
            <h3 className="text-lg font-semibold text-blue-700">
              Performance Reports
            </h3>
            <p className="text-sm text-muted-foreground">
              Portfolio performance and analytics
            </p>
          </div>

          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                <div>
                  <p className="font-medium">Property Performance</p>
                  <p className="text-sm text-muted-foreground">
                    Individual property metrics
                  </p>
                </div>
                <button className="text-blue-600 hover:underline">View</button>
              </div>

              <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                <div>
                  <p className="font-medium">Occupancy Report</p>
                  <p className="text-sm text-muted-foreground">
                    Vacancy and turnover rates
                  </p>
                </div>
                <button className="text-blue-600 hover:underline">View</button>
              </div>

              <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                <div>
                  <p className="font-medium">ROI Analysis</p>
                  <p className="text-sm text-muted-foreground">
                    Return on investment tracking
                  </p>
                </div>
                <button className="text-blue-600 hover:underline">View</button>
              </div>

              <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                <div>
                  <p className="font-medium">Market Comparison</p>
                  <p className="text-sm text-muted-foreground">
                    Competitive analysis
                  </p>
                </div>
                <button className="text-blue-600 hover:underline">View</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Revenue Trend Chart */}
      <div className="bg-white rounded-lg border shadow-sm">
        <div className="p-6 border-b">
          <h3 className="text-lg font-semibold">12-Month Revenue Trend</h3>
          <p className="text-sm text-muted-foreground">
            Monthly revenue comparison
          </p>
        </div>

        <div className="p-6">
          <div className="h-64 flex items-end justify-between gap-2">
            {/* Simulated bar chart */}
            {Array.from({ length: 12 }, (_, i) => {
              const baseHeight = 120 + Math.random() * 80;
              const isCurrentMonth = i === 11;
              return (
                <div
                  key={i}
                  className="flex flex-col items-center gap-2 flex-1"
                >
                  <div
                    className={`w-full ${
                      isCurrentMonth ? "bg-blue-600" : "bg-blue-400"
                    } rounded-t`}
                    style={{ height: `${baseHeight}px` }}
                  ></div>
                  <span className="text-xs text-muted-foreground">
                    {
                      [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec",
                      ][i]
                    }
                  </span>
                  <span className="text-xs font-medium">
                    ${(45000 + Math.random() * 10000).toFixed(0)}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Property Comparison */}
      <div className="bg-white rounded-lg border shadow-sm">
        <div className="p-6 border-b">
          <h3 className="text-lg font-semibold">
            Property Performance Comparison
          </h3>
          <p className="text-sm text-muted-foreground">
            Revenue and occupancy by property
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-4">Property</th>
                <th className="text-left p-4">Units</th>
                <th className="text-left p-4">Occupancy</th>
                <th className="text-left p-4">Monthly Revenue</th>
                <th className="text-left p-4">Avg. Rent</th>
                <th className="text-left p-4">Expenses</th>
                <th className="text-left p-4">Net Income</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4">
                  <div>
                    <p className="font-medium">Sunset Apartments</p>
                    <p className="text-sm text-muted-foreground">
                      123 University Ave
                    </p>
                  </div>
                </td>
                <td className="p-4">24</td>
                <td className="p-4">
                  <span className="text-green-600 font-medium">95.8%</span>
                </td>
                <td className="p-4">
                  <span className="font-medium">$28,750</span>
                </td>
                <td className="p-4">$1,250</td>
                <td className="p-4 text-red-600">$8,450</td>
                <td className="p-4 text-green-600 font-medium">$20,300</td>
              </tr>

              <tr className="border-b hover:bg-gray-50">
                <td className="p-4">
                  <div>
                    <p className="font-medium">Downtown Condos</p>
                    <p className="text-sm text-muted-foreground">456 Main St</p>
                  </div>
                </td>
                <td className="p-4">18</td>
                <td className="p-4">
                  <span className="text-green-600 font-medium">88.9%</span>
                </td>
                <td className="p-4">
                  <span className="font-medium">$22,400</span>
                </td>
                <td className="p-4">$1,400</td>
                <td className="p-4 text-red-600">$6,200</td>
                <td className="p-4 text-green-600 font-medium">$16,200</td>
              </tr>

              <tr className="border-b hover:bg-gray-50">
                <td className="p-4">
                  <div>
                    <p className="font-medium">Riverside Complex</p>
                    <p className="text-sm text-muted-foreground">
                      789 River Rd
                    </p>
                  </div>
                </td>
                <td className="p-4">29</td>
                <td className="p-4">
                  <span className="text-yellow-600 font-medium">82.8%</span>
                </td>
                <td className="p-4">
                  <span className="font-medium">$38,400</span>
                </td>
                <td className="p-4">$1,600</td>
                <td className="p-4 text-red-600">$12,100</td>
                <td className="p-4 text-green-600 font-medium">$26,300</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Export and Scheduling */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white rounded-lg border shadow-sm p-6">
          <h3 className="font-semibold mb-4">Report Export Options</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">Export Format</span>
              <select className="px-3 py-1 border rounded">
                <option>PDF</option>
                <option>Excel</option>
                <option>CSV</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Date Range</span>
              <select className="px-3 py-1 border rounded">
                <option>Last 12 Months</option>
                <option>Year to Date</option>
                <option>Custom Range</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Include</span>
              <div className="flex gap-2">
                <label className="flex items-center text-sm">
                  <input type="checkbox" className="mr-1" defaultChecked />
                  Charts
                </label>
                <label className="flex items-center text-sm">
                  <input type="checkbox" className="mr-1" defaultChecked />
                  Details
                </label>
              </div>
            </div>

            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 mt-4">
              Export Reports
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg border shadow-sm p-6">
          <h3 className="font-semibold mb-4">Scheduled Reports</h3>
          <div className="space-y-3">
            <div className="p-3 border rounded-lg">
              <p className="font-medium text-sm">Monthly Financial Summary</p>
              <p className="text-xs text-muted-foreground">
                Sent 1st of each month • Next: Jan 1, 2025
              </p>
            </div>

            <div className="p-3 border rounded-lg">
              <p className="font-medium text-sm">
                Quarterly Performance Review
              </p>
              <p className="text-xs text-muted-foreground">
                Sent quarterly • Next: Jan 1, 2025
              </p>
            </div>

            <div className="p-3 border rounded-lg">
              <p className="font-medium text-sm">Annual Tax Summary</p>
              <p className="text-xs text-muted-foreground">
                Sent annually • Next: Dec 31, 2024
              </p>
            </div>

            <button className="w-full px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 mt-4">
              Add Scheduled Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
