export default function RentCollectionPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Rent Collection</h1>
          <p className="text-muted-foreground">
            Monitor and manage rent payments across all properties
          </p>
        </div>

        <div className="flex gap-2">
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            Export Report
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Record Manual Payment
          </button>
        </div>
      </div>

      {/* Collection Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                This Month Collected
              </p>
              <p className="text-2xl font-bold text-green-600">$52,350</p>
              <p className="text-xs text-green-600">96.2% collection rate</p>
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
                Outstanding
              </p>
              <p className="text-2xl font-bold text-red-600">$2,100</p>
              <p className="text-xs text-red-600">3 tenants overdue</p>
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
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.268 18.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Due Today
              </p>
              <p className="text-2xl font-bold text-orange-600">$3,750</p>
              <p className="text-xs text-orange-600">3 payments pending</p>
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
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Avg. Payment Day
              </p>
              <p className="text-2xl font-bold">3rd</p>
              <p className="text-xs text-blue-600">Of each month</p>
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
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Filters */}
      <div className="flex gap-4 items-center">
        <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">All Properties</option>
          <option value="sunset">Sunset Apartments</option>
          <option value="downtown">Downtown Condos</option>
          <option value="riverside">Riverside Complex</option>
        </select>

        <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">All Status</option>
          <option value="paid">Paid</option>
          <option value="due">Due Today</option>
          <option value="overdue">Overdue</option>
          <option value="partial">Partial Payment</option>
        </select>

        <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">December 2024</option>
          <option value="nov2024">November 2024</option>
          <option value="oct2024">October 2024</option>
        </select>
      </div>

      {/* Overdue Payments - Priority Section */}
      <div className="bg-red-50 border border-red-200 rounded-lg">
        <div className="p-6 border-b border-red-200">
          <h3 className="text-lg font-semibold text-red-800">
            Overdue Payments
          </h3>
          <p className="text-sm text-red-600">
            These payments require immediate attention
          </p>
        </div>

        <div className="divide-y divide-red-200">
          {/* Overdue 1 */}
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 font-semibold">MW</span>
                </div>

                <div>
                  <h4 className="font-semibold text-lg">Mike Wilson</h4>
                  <p className="text-muted-foreground">
                    Unit 2B - Downtown Condos
                  </p>
                  <p className="text-sm text-muted-foreground">
                    mike.wilson@email.com • (555) 987-6543
                  </p>

                  <div className="flex gap-2 mt-2">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      15 days overdue
                    </span>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      $50 late fee applied
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-2xl font-bold text-red-600">$1,450</div>
                <div className="text-sm text-muted-foreground">
                  Due: Nov 30, 2024
                </div>
                <div className="text-sm text-red-600 mt-1">
                  $1,400 rent + $50 late fee
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-sm">
              <div>
                <span className="text-muted-foreground">Last Payment:</span>
                <span className="font-medium ml-2">Oct 28, 2024</span>
              </div>
              <div>
                <span className="text-muted-foreground">Payment Method:</span>
                <span className="font-medium ml-2">Bank Transfer</span>
              </div>
              <div>
                <span className="text-muted-foreground">Late Notices:</span>
                <span className="font-medium ml-2">2 sent</span>
              </div>
              <div>
                <span className="text-muted-foreground">Payment History:</span>
                <span className="font-medium ml-2 text-green-600">
                  Usually on time
                </span>
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                Send Final Notice
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Call Tenant
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                Record Payment
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                Payment Plan
              </button>
            </div>
          </div>

          {/* Overdue 2 */}
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 font-semibold">SG</span>
                </div>

                <div>
                  <h4 className="font-semibold text-lg">Study Group Gamma</h4>
                  <p className="text-muted-foreground">
                    Unit 1D - Sunset Apartments
                  </p>
                  <p className="text-sm text-muted-foreground">
                    3 students • Lead: Sam Garcia
                  </p>

                  <div className="flex gap-2 mt-2">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      8 days overdue
                    </span>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Group payment issue
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-2xl font-bold text-red-600">$1,300</div>
                <div className="text-sm text-muted-foreground">
                  Due: Dec 1, 2024
                </div>
                <div className="text-sm text-red-600 mt-1">
                  $1,250 rent + $50 late fee
                </div>
              </div>
            </div>

            <div className="bg-red-50 rounded-lg p-3 mt-4">
              <p className="text-sm text-red-700">
                <strong>Group Payment Issue:</strong> One member left the group
                mid-month. Remaining members need to adjust payment split.
              </p>
            </div>

            <div className="flex gap-2 mt-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Contact Group Lead
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                Adjust Group Split
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                View Group Details
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Payments */}
      <div className="bg-white rounded-lg border shadow-sm">
        <div className="p-6 border-b">
          <h3 className="text-lg font-semibold">Recent Payments</h3>
        </div>

        <div className="divide-y">
          {/* Payment 1 */}
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold">JD</span>
                </div>

                <div>
                  <h4 className="font-semibold text-lg">John Doe</h4>
                  <p className="text-muted-foreground">
                    Unit 2B - Sunset Apartments
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Auto-payment via bank transfer
                  </p>

                  <div className="flex gap-2 mt-2">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Paid in full
                    </span>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Auto-payment
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-2xl font-bold text-green-600">$1,250</div>
                <div className="text-sm text-muted-foreground">
                  Paid: Dec 1, 2024
                </div>
                <div className="text-sm text-green-600 mt-1">On time</div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-sm">
              <div>
                <span className="text-muted-foreground">Payment Method:</span>
                <span className="font-medium ml-2">Bank Transfer</span>
              </div>
              <div>
                <span className="text-muted-foreground">Transaction ID:</span>
                <span className="font-medium ml-2">TXN-2024-1201-001</span>
              </div>
              <div>
                <span className="text-muted-foreground">Processing Time:</span>
                <span className="font-medium ml-2">Instant</span>
              </div>
              <div>
                <span className="text-muted-foreground">Fees:</span>
                <span className="font-medium ml-2">$0</span>
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                View Receipt
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                Send Confirmation
              </button>
            </div>
          </div>

          {/* Payment 2 - Group Payment */}
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold">SA</span>
                </div>

                <div>
                  <h4 className="font-semibold text-lg">Study Group Alpha</h4>
                  <p className="text-muted-foreground">
                    Unit 3F - Riverside Complex
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Group payment - 4 members
                  </p>

                  <div className="flex gap-2 mt-2">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Paid in full
                    </span>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                      Group split
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-2xl font-bold text-green-600">$1,600</div>
                <div className="text-sm text-muted-foreground">
                  Paid: Dec 2, 2024
                </div>
                <div className="text-sm text-green-600 mt-1">1 day early</div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-lg p-3 mt-4">
              <p className="text-sm text-purple-700">
                <strong>Group Payment Breakdown:</strong> Sarah ($400), Mike
                ($400), Lisa ($400), Tom ($400)
              </p>
            </div>

            <div className="flex gap-2 mt-4">
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                View Group Receipt
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                Individual Receipts
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                Group Details
              </button>
            </div>
          </div>

          {/* Payment 3 - Partial Payment */}
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <span className="text-yellow-600 font-semibold">LS</span>
                </div>

                <div>
                  <h4 className="font-semibold text-lg">Lisa Smith</h4>
                  <p className="text-muted-foreground">
                    Unit 4A - Downtown Condos
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Partial payment received
                  </p>

                  <div className="flex gap-2 mt-2">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      Partial payment
                    </span>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Balance due
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-2xl font-bold text-yellow-600">$800</div>
                <div className="text-sm text-muted-foreground">
                  Paid: Dec 3, 2024
                </div>
                <div className="text-sm text-red-600 mt-1">$500 remaining</div>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-lg p-3 mt-4">
              <p className="text-sm text-yellow-700">
                <strong>Partial Payment:</strong> $800 of $1,300 rent paid.
                Tenant requested payment plan for remaining balance.
              </p>
            </div>

            <div className="flex gap-2 mt-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Setup Payment Plan
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                Record Remaining Payment
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                Contact Tenant
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Collection Tools */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="bg-white rounded-lg border shadow-sm p-6">
          <h3 className="font-semibold mb-3">Collection Tools</h3>
          <div className="space-y-2">
            <button className="w-full px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200">
              Send Late Notices
            </button>
            <button className="w-full px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200">
              Payment Reminders
            </button>
            <button className="w-full px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200">
              Setup Auto-payments
            </button>
            <button className="w-full px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200">
              Payment Plans
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg border shadow-sm p-6">
          <h3 className="font-semibold mb-3">Payment Methods</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">
                Bank Transfer
              </span>
              <span className="font-medium">45%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Credit Card</span>
              <span className="font-medium">30%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Check</span>
              <span className="font-medium">15%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Cash</span>
              <span className="font-medium">10%</span>
            </div>

            <button className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 mt-4">
              Payment Settings
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg border shadow-sm p-6">
          <h3 className="font-semibold mb-3">Collection Performance</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">
                Collection Rate
              </span>
              <span className="font-medium text-green-600">96.2%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">
                Avg. Days Late
              </span>
              <span className="font-medium">2.3 days</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">
                Late Fees Collected
              </span>
              <span className="font-medium">$450</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">
                Auto-pay Adoption
              </span>
              <span className="font-medium text-blue-600">68%</span>
            </div>

            <button className="w-full px-4 py-2 bg-orange-100 text-orange-700 rounded-lg hover:bg-orange-200 mt-4">
              Detailed Analytics
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
