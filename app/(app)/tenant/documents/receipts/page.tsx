export default function TenantDocumentsReceiptsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Payment Receipts
          </h1>
          <p className="text-muted-foreground">
            View and download receipts for all your payments
          </p>
        </div>
        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
          Download All Receipts
        </button>
      </div>

      {/* Filter Options */}
      <div className="flex gap-4 items-center">
        <select className="px-3 py-2 border rounded-lg">
          <option value="all">All Time</option>
          <option value="current-year">2024</option>
          <option value="last-year">2023</option>
          <option value="custom">Custom Range</option>
        </select>

        <select className="px-3 py-2 border rounded-lg">
          <option value="all">All Payment Types</option>
          <option value="rent">Rent Payments</option>
          <option value="utilities">Utility Bills</option>
          <option value="fees">Fees & Charges</option>
          <option value="deposits">Deposits</option>
        </select>

        <div className="flex-1">
          <input
            type="text"
            placeholder="Search receipts..."
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
      </div>

      {/* Receipt Summary */}
      <div className="grid gap-4 md:grid-cols-4">
        <div className="p-4 border rounded-lg text-center">
          <h3 className="text-2xl font-bold text-blue-600">$3,600</h3>
          <p className="text-sm text-muted-foreground">Total Paid (2024)</p>
        </div>

        <div className="p-4 border rounded-lg text-center">
          <h3 className="text-2xl font-bold text-green-600">3</h3>
          <p className="text-sm text-muted-foreground">Rent Payments</p>
        </div>

        <div className="p-4 border rounded-lg text-center">
          <h3 className="text-2xl font-bold text-orange-600">$180</h3>
          <p className="text-sm text-muted-foreground">Utility Payments</p>
        </div>

        <div className="p-4 border rounded-lg text-center">
          <h3 className="text-2xl font-bold text-purple-600">6</h3>
          <p className="text-sm text-muted-foreground">Total Receipts</p>
        </div>
      </div>

      {/* Receipts List */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">Recent Receipts</h2>
        </div>

        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
            <div className="flex items-center gap-4">
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
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">March 2024 Rent Payment</h3>
                <p className="text-sm text-muted-foreground">
                  Receipt #REC-2024-003 • Paid Mar 1, 2024
                </p>
                <div className="flex items-center gap-4 text-sm mt-1">
                  <span className="text-green-600 font-medium">$1,200.00</span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                    Rent
                  </span>
                  <span className="text-muted-foreground">Visa ****4321</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="text-blue-600 hover:underline text-sm">
                View
              </button>
              <button className="text-blue-600 hover:underline text-sm">
                Download
              </button>
              <button className="text-blue-600 hover:underline text-sm">
                Email
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
            <div className="flex items-center gap-4">
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">February Electricity Bill</h3>
                <p className="text-sm text-muted-foreground">
                  Receipt #REC-2024-002 • Paid Feb 15, 2024
                </p>
                <div className="flex items-center gap-4 text-sm mt-1">
                  <span className="text-green-600 font-medium">$85.50</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    Utilities
                  </span>
                  <span className="text-muted-foreground">Bank ****9876</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="text-blue-600 hover:underline text-sm">
                View
              </button>
              <button className="text-blue-600 hover:underline text-sm">
                Download
              </button>
              <button className="text-blue-600 hover:underline text-sm">
                Email
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
            <div className="flex items-center gap-4">
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
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">February 2024 Rent Payment</h3>
                <p className="text-sm text-muted-foreground">
                  Receipt #REC-2024-001 • Paid Feb 1, 2024
                </p>
                <div className="flex items-center gap-4 text-sm mt-1">
                  <span className="text-green-600 font-medium">$1,200.00</span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                    Rent
                  </span>
                  <span className="text-muted-foreground">Visa ****4321</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="text-blue-600 hover:underline text-sm">
                View
              </button>
              <button className="text-blue-600 hover:underline text-sm">
                Download
              </button>
              <button className="text-blue-600 hover:underline text-sm">
                Email
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-yellow-600"
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
              <div>
                <h3 className="font-medium">Security Deposit Payment</h3>
                <p className="text-sm text-muted-foreground">
                  Receipt #REC-2024-DEP • Paid Jan 15, 2024
                </p>
                <div className="flex items-center gap-4 text-sm mt-1">
                  <span className="text-green-600 font-medium">$1,200.00</span>
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                    Deposit
                  </span>
                  <span className="text-muted-foreground">Visa ****4321</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="text-blue-600 hover:underline text-sm">
                View
              </button>
              <button className="text-blue-600 hover:underline text-sm">
                Download
              </button>
              <button className="text-blue-600 hover:underline text-sm">
                Email
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
            <div className="flex items-center gap-4">
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
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">January 2024 Rent Payment</h3>
                <p className="text-sm text-muted-foreground">
                  Receipt #REC-2024-000 • Paid Jan 15, 2024
                </p>
                <div className="flex items-center gap-4 text-sm mt-1">
                  <span className="text-green-600 font-medium">$1,200.00</span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                    Rent
                  </span>
                  <span className="text-muted-foreground">Visa ****4321</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="text-blue-600 hover:underline text-sm">
                View
              </button>
              <button className="text-blue-600 hover:underline text-sm">
                Download
              </button>
              <button className="text-blue-600 hover:underline text-sm">
                Email
              </button>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t flex justify-between items-center">
          <p className="text-sm text-muted-foreground">
            Showing 1-5 of 28 receipts
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

      {/* Receipt Actions */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold">Receipt Options</h2>
        </div>

        <div className="p-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-2">Email Receipts</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Get receipts automatically sent to your email
              </p>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" defaultChecked />
                <span className="text-sm">Auto-email receipts</span>
              </label>
            </div>

            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-2">Tax Documents</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Generate annual summary for tax purposes
              </p>
              <button className="text-blue-600 hover:underline text-sm">
                Download 2024 Summary
              </button>
            </div>

            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-2">Bulk Download</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Download multiple receipts at once
              </p>
              <button className="text-blue-600 hover:underline text-sm">
                Select & Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
