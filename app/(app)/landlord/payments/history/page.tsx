export default function LandlordPaymentsHistoryPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Payment History</h1>
          <p className="text-muted-foreground">
            View all payment transactions and generate reports
          </p>
        </div>
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90">
          Export Report
        </button>
      </div>

      <div className="flex gap-4 items-center">
        <input
          type="text"
          placeholder="Search payments..."
          className="flex h-9 w-full max-w-sm rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        />
        <select className="flex h-9 w-[180px] items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring">
          <option>All Properties</option>
          <option>Sunset Apartments</option>
          <option>Oak Grove Complex</option>
          <option>Pine Ridge Townhomes</option>
        </select>
        <select className="flex h-9 w-[180px] items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring">
          <option>All Statuses</option>
          <option>Paid</option>
          <option>Pending</option>
          <option>Overdue</option>
          <option>Partial</option>
        </select>
        <input
          type="date"
          className="flex h-9 w-[140px] rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        />
        <span className="text-sm text-muted-foreground">to</span>
        <input
          type="date"
          className="flex h-9 w-[140px] rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        />
      </div>

      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-6">
          <div className="space-y-4">
            {/* Payment Entry 1 */}
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">John Doe</h4>
                    <p className="text-sm text-muted-foreground">
                      Sunset Apartments, Unit 1A
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Transaction #PAY-2024-001
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-green-600">$1,200.00</p>
                  <span className="inline-flex items-center px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                    Paid
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-4 mb-3">
                <div>
                  <p className="text-xs font-medium text-muted-foreground">
                    Payment Date
                  </p>
                  <p className="text-sm font-medium">March 1, 2024</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">
                    Due Date
                  </p>
                  <p className="text-sm font-medium">March 1, 2024</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">
                    Method
                  </p>
                  <p className="text-sm font-medium">Online Banking</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">
                    For Period
                  </p>
                  <p className="text-sm font-medium">March 2024 Rent</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  On Time
                </span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                  Full Payment
                </span>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                  Automatic
                </span>
              </div>

              <div className="flex gap-2">
                <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700">
                  View Receipt
                </button>
                <button className="px-3 py-1 border border-gray-300 text-sm rounded-md hover:bg-gray-50">
                  Download PDF
                </button>
                <button className="px-3 py-1 border border-gray-300 text-sm rounded-md hover:bg-gray-50">
                  Contact Tenant
                </button>
              </div>
            </div>

            {/* Payment Entry 2 */}
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Jane Smith</h4>
                    <p className="text-sm text-muted-foreground">
                      Sunset Apartments, Unit 1B
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Transaction #PAY-2024-002
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-green-600">$1,200.00</p>
                  <span className="inline-flex items-center px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                    Paid
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-4 mb-3">
                <div>
                  <p className="text-xs font-medium text-muted-foreground">
                    Payment Date
                  </p>
                  <p className="text-sm font-medium">March 2, 2024</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">
                    Due Date
                  </p>
                  <p className="text-sm font-medium">March 1, 2024</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">
                    Method
                  </p>
                  <p className="text-sm font-medium">Check</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">
                    For Period
                  </p>
                  <p className="text-sm font-medium">March 2024 Rent</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                  1 Day Late
                </span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                  Full Payment
                </span>
                <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                  Manual
                </span>
              </div>

              <div className="flex gap-2">
                <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700">
                  View Receipt
                </button>
                <button className="px-3 py-1 border border-gray-300 text-sm rounded-md hover:bg-gray-50">
                  Download PDF
                </button>
                <button className="px-3 py-1 border border-gray-300 text-sm rounded-md hover:bg-gray-50">
                  Contact Tenant
                </button>
              </div>
            </div>

            {/* Payment Entry 3 */}
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Mike Wilson</h4>
                    <p className="text-sm text-muted-foreground">
                      Oak Grove Complex, Unit A
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Transaction #PAY-2024-003
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-green-600">$1,200.00</p>
                  <span className="inline-flex items-center px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                    Paid
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-4 mb-3">
                <div>
                  <p className="text-xs font-medium text-muted-foreground">
                    Payment Date
                  </p>
                  <p className="text-sm font-medium">February 28, 2024</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">
                    Due Date
                  </p>
                  <p className="text-sm font-medium">March 1, 2024</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">
                    Method
                  </p>
                  <p className="text-sm font-medium">Online Banking</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">
                    For Period
                  </p>
                  <p className="text-sm font-medium">March 2024 Rent</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                  Early Payment
                </span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                  Full Payment
                </span>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                  Automatic
                </span>
              </div>

              <div className="flex gap-2">
                <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700">
                  View Receipt
                </button>
                <button className="px-3 py-1 border border-gray-300 text-sm rounded-md hover:bg-gray-50">
                  Download PDF
                </button>
                <button className="px-3 py-1 border border-gray-300 text-sm rounded-md hover:bg-gray-50">
                  Contact Tenant
                </button>
              </div>
            </div>

            {/* Payment Entry 4 - Overdue */}
            <div className="border-l-4 border-red-500 bg-red-50 rounded-lg p-4">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-red-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Alex Anderson</h4>
                    <p className="text-sm text-muted-foreground">
                      Pine Ridge Townhomes, Unit 1
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Transaction #PAY-2024-004
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-red-600">$1,600.00</p>
                  <span className="inline-flex items-center px-2 py-1 text-xs bg-red-100 text-red-800 rounded-full">
                    Overdue
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-4 mb-3">
                <div>
                  <p className="text-xs font-medium text-muted-foreground">
                    Payment Date
                  </p>
                  <p className="text-sm font-medium text-red-600">Not Paid</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">
                    Due Date
                  </p>
                  <p className="text-sm font-medium">March 1, 2024</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">
                    Days Late
                  </p>
                  <p className="text-sm font-medium text-red-600">5 days</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">
                    For Period
                  </p>
                  <p className="text-sm font-medium">March 2024 Rent</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">
                  Payment Overdue
                </span>
                <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">
                  Late Fee Applied
                </span>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                  Reminder Sent
                </span>
              </div>

              <div className="p-3 bg-white rounded border mb-3">
                <h5 className="text-sm font-medium mb-1">
                  Late Fee Calculation:
                </h5>
                <p className="text-sm">Base Rent: $1,600.00</p>
                <p className="text-sm">Late Fee (5%): $80.00</p>
                <p className="text-sm font-medium">Total Due: $1,680.00</p>
              </div>

              <div className="flex gap-2">
                <button className="px-3 py-1 bg-red-600 text-white text-sm rounded-md hover:bg-red-700">
                  Send Final Notice
                </button>
                <button className="px-3 py-1 bg-orange-600 text-white text-sm rounded-md hover:bg-orange-700">
                  Contact Tenant
                </button>
                <button className="px-3 py-1 border border-gray-300 text-sm rounded-md hover:bg-gray-50">
                  Payment Plan
                </button>
                <button className="px-3 py-1 border border-gray-300 text-sm rounded-md hover:bg-gray-50">
                  Legal Action
                </button>
              </div>
            </div>

            {/* Payment Entry 5 - Partial Payment */}
            <div className="border-l-4 border-yellow-500 bg-yellow-50 rounded-lg p-4">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-yellow-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Tom Brown</h4>
                    <p className="text-sm text-muted-foreground">
                      Oak Grove Complex, Unit C
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Transaction #PAY-2024-005
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-yellow-600">$600.00</p>
                  <span className="inline-flex items-center px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded-full">
                    Partial
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-4 mb-3">
                <div>
                  <p className="text-xs font-medium text-muted-foreground">
                    Payment Date
                  </p>
                  <p className="text-sm font-medium">March 1, 2024</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">
                    Due Date
                  </p>
                  <p className="text-sm font-medium">March 1, 2024</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">
                    Method
                  </p>
                  <p className="text-sm font-medium">Cash</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">
                    For Period
                  </p>
                  <p className="text-sm font-medium">March 2024 Rent</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                  Partial Payment
                </span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  Payment Plan
                </span>
                <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                  Manual
                </span>
              </div>

              <div className="p-3 bg-white rounded border mb-3">
                <h5 className="text-sm font-medium mb-1">Payment Breakdown:</h5>
                <p className="text-sm">Paid: $600.00</p>
                <p className="text-sm">Remaining: $600.00</p>
                <p className="text-sm font-medium">Total Rent: $1,200.00</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Next payment due: March 15, 2024
                </p>
              </div>

              <div className="flex gap-2">
                <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700">
                  Record Payment
                </button>
                <button className="px-3 py-1 bg-yellow-600 text-white text-sm rounded-md hover:bg-yellow-700">
                  Send Reminder
                </button>
                <button className="px-3 py-1 border border-gray-300 text-sm rounded-md hover:bg-gray-50">
                  Contact Tenant
                </button>
                <button className="px-3 py-1 border border-gray-300 text-sm rounded-md hover:bg-gray-50">
                  View Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Card */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4">Payment Summary</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">$4,200</p>
              <p className="text-sm text-muted-foreground">Total Collected</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-red-600">$1,680</p>
              <p className="text-sm text-muted-foreground">Outstanding</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-yellow-600">$600</p>
              <p className="text-sm text-muted-foreground">Partial Payments</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">75%</p>
              <p className="text-sm text-muted-foreground">Collection Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center">
        <div className="flex gap-2">
          <button className="px-3 py-1 border rounded-md hover:bg-gray-50">
            Previous
          </button>
          <button className="px-3 py-1 bg-blue-600 text-white rounded-md">
            1
          </button>
          <button className="px-3 py-1 border rounded-md hover:bg-gray-50">
            2
          </button>
          <button className="px-3 py-1 border rounded-md hover:bg-gray-50">
            3
          </button>
          <button className="px-3 py-1 border rounded-md hover:bg-gray-50">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
