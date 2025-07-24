export default function TenantMaintenanceHistoryPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Request History</h1>
        <p className="text-muted-foreground">
          View all your past maintenance requests and their details
        </p>
      </div>

      {/* Filters & Search */}
      <div className="flex gap-4 items-center flex-wrap">
        <div className="flex-1 min-w-64">
          <input
            type="text"
            placeholder="Search requests..."
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>

        <select className="px-3 py-2 border rounded-lg">
          <option value="all">All Time</option>
          <option value="last-month">Last Month</option>
          <option value="last-3-months">Last 3 Months</option>
          <option value="last-year">Last Year</option>
          <option value="custom">Custom Date Range</option>
        </select>

        <select className="px-3 py-2 border rounded-lg">
          <option value="all">All Categories</option>
          <option value="plumbing">Plumbing</option>
          <option value="electrical">Electrical</option>
          <option value="hvac">HVAC</option>
          <option value="appliances">Appliances</option>
          <option value="doors-windows">Doors & Windows</option>
          <option value="other">Other</option>
        </select>

        <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
          Export History
        </button>
      </div>

      {/* Request History Table */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">All Requests</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b">
              <tr className="text-left">
                <th className="p-4 font-medium">Request ID</th>
                <th className="p-4 font-medium">Issue</th>
                <th className="p-4 font-medium">Category</th>
                <th className="p-4 font-medium">Priority</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium">Date</th>
                <th className="p-4 font-medium">Cost</th>
                <th className="p-4 font-medium">Rating</th>
                <th className="p-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-mono text-sm">#MR-2024-001</td>
                <td className="p-4">
                  <div>
                    <p className="font-medium">Kitchen Faucet Leak</p>
                    <p className="text-sm text-muted-foreground">Kitchen</p>
                  </div>
                </td>
                <td className="p-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                    Plumbing
                  </span>
                </td>
                <td className="p-4">
                  <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded">
                    Medium
                  </span>
                </td>
                <td className="p-4">
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded">
                    In Progress
                  </span>
                </td>
                <td className="p-4 text-sm">Mar 15, 2024</td>
                <td className="p-4 text-sm">-</td>
                <td className="p-4 text-sm">-</td>
                <td className="p-4">
                  <button className="text-blue-600 hover:underline text-sm">
                    View
                  </button>
                </td>
              </tr>

              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-mono text-sm">#MR-2024-002</td>
                <td className="p-4">
                  <div>
                    <p className="font-medium">HVAC Filter Replacement</p>
                    <p className="text-sm text-muted-foreground">Living Room</p>
                  </div>
                </td>
                <td className="p-4">
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded">
                    HVAC
                  </span>
                </td>
                <td className="p-4">
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                    Low
                  </span>
                </td>
                <td className="p-4">
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                    Completed
                  </span>
                </td>
                <td className="p-4 text-sm">Mar 10, 2024</td>
                <td className="p-4 text-sm">$45.00</td>
                <td className="p-4">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500 text-sm">★★★★★</span>
                  </div>
                </td>
                <td className="p-4">
                  <button className="text-blue-600 hover:underline text-sm">
                    View
                  </button>
                </td>
              </tr>

              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-mono text-sm">#MR-2024-003</td>
                <td className="p-4">
                  <div>
                    <p className="font-medium">Bathroom Light Fixture</p>
                    <p className="text-sm text-muted-foreground">Bathroom 1</p>
                  </div>
                </td>
                <td className="p-4">
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded">
                    Electrical
                  </span>
                </td>
                <td className="p-4">
                  <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded">
                    Medium
                  </span>
                </td>
                <td className="p-4">
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                    Completed
                  </span>
                </td>
                <td className="p-4 text-sm">Mar 5, 2024</td>
                <td className="p-4 text-sm">$120.00</td>
                <td className="p-4">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500 text-sm">★★★★★</span>
                  </div>
                </td>
                <td className="p-4">
                  <button className="text-blue-600 hover:underline text-sm">
                    View
                  </button>
                </td>
              </tr>

              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-mono text-sm">#MR-2024-004</td>
                <td className="p-4">
                  <div>
                    <p className="font-medium">Garbage Disposal Repair</p>
                    <p className="text-sm text-muted-foreground">Kitchen</p>
                  </div>
                </td>
                <td className="p-4">
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                    Appliances
                  </span>
                </td>
                <td className="p-4">
                  <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded">
                    High
                  </span>
                </td>
                <td className="p-4">
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                    Completed
                  </span>
                </td>
                <td className="p-4 text-sm">Feb 28, 2024</td>
                <td className="p-4 text-sm">$85.00</td>
                <td className="p-4">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500 text-sm">★★★★☆</span>
                  </div>
                </td>
                <td className="p-4">
                  <button className="text-blue-600 hover:underline text-sm">
                    View
                  </button>
                </td>
              </tr>

              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-mono text-sm">#MR-2024-005</td>
                <td className="p-4">
                  <div>
                    <p className="font-medium">Bedroom Window Draft</p>
                    <p className="text-sm text-muted-foreground">Bedroom 2</p>
                  </div>
                </td>
                <td className="p-4">
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2 py-1 rounded">
                    Windows
                  </span>
                </td>
                <td className="p-4">
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                    Low
                  </span>
                </td>
                <td className="p-4">
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                    Completed
                  </span>
                </td>
                <td className="p-4 text-sm">Feb 20, 2024</td>
                <td className="p-4 text-sm">$65.00</td>
                <td className="p-4">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500 text-sm">★★★★★</span>
                  </div>
                </td>
                <td className="p-4">
                  <button className="text-blue-600 hover:underline text-sm">
                    View
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t flex justify-between items-center">
          <p className="text-sm text-muted-foreground">
            Showing 1-5 of 23 requests
          </p>
          <div className="flex gap-2">
            <button className="px-3 py-1 border rounded hover:bg-gray-50 text-sm">
              Previous
            </button>
            <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm">
              1
            </button>
            <button className="px-3 py-1 border rounded hover:bg-gray-50 text-sm">
              2
            </button>
            <button className="px-3 py-1 border rounded hover:bg-gray-50 text-sm">
              3
            </button>
            <button className="px-3 py-1 border rounded hover:bg-gray-50 text-sm">
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Summary Statistics */}
      <div className="grid gap-4 md:grid-cols-4">
        <div className="p-6 border rounded-lg text-center">
          <h3 className="text-2xl font-bold text-blue-600">23</h3>
          <p className="text-sm text-muted-foreground">Total Requests</p>
        </div>

        <div className="p-6 border rounded-lg text-center">
          <h3 className="text-2xl font-bold text-green-600">21</h3>
          <p className="text-sm text-muted-foreground">Completed</p>
        </div>

        <div className="p-6 border rounded-lg text-center">
          <h3 className="text-2xl font-bold text-orange-600">$1,245</h3>
          <p className="text-sm text-muted-foreground">Total Cost</p>
        </div>

        <div className="p-6 border rounded-lg text-center">
          <h3 className="text-2xl font-bold text-purple-600">4.6</h3>
          <p className="text-sm text-muted-foreground">Avg Rating</p>
        </div>
      </div>
    </div>
  );
}
