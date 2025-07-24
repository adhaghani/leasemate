export default function LandlordPaymentsOverviewPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Payments Overview</h1>
        <p className="text-muted-foreground">
          Track rent collections and financial performance across all properties
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <h3 className="text-lg font-semibold">Total Monthly Revenue</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">$15,200</p>
          <p className="text-sm text-muted-foreground">+5% from last month</p>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <h3 className="text-lg font-semibold">Collected This Month</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">$14,000</p>
          <p className="text-sm text-muted-foreground">92% collection rate</p>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <h3 className="text-lg font-semibold">Outstanding</h3>
          <p className="text-3xl font-bold text-red-600 mt-2">$1,200</p>
          <p className="text-sm text-muted-foreground">1 tenant past due</p>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <h3 className="text-lg font-semibold">Average Payment Time</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">2.3</p>
          <p className="text-sm text-muted-foreground">days after due date</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold">Recent Payments</h2>
          </div>

          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-green-600"
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
                    <h4 className="font-medium">John Doe</h4>
                    <p className="text-sm text-muted-foreground">
                      Sunset Apartments 1A
                    </p>
                    <p className="text-xs text-muted-foreground">2 hours ago</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-green-600">$1,200</p>
                  <p className="text-xs text-muted-foreground">March rent</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-green-600"
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
                    <h4 className="font-medium">Jane Smith</h4>
                    <p className="text-sm text-muted-foreground">
                      Sunset Apartments 1B
                    </p>
                    <p className="text-xs text-muted-foreground">5 hours ago</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-green-600">$1,200</p>
                  <p className="text-xs text-muted-foreground">March rent</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-green-600"
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
                    <h4 className="font-medium">Mike Wilson</h4>
                    <p className="text-sm text-muted-foreground">
                      Oak Grove Complex A
                    </p>
                    <p className="text-xs text-muted-foreground">1 day ago</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-green-600">$1,200</p>
                  <p className="text-xs text-muted-foreground">March rent</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-green-600"
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
                    <h4 className="font-medium">Sarah Davis</h4>
                    <p className="text-sm text-muted-foreground">
                      Oak Grove Complex B
                    </p>
                    <p className="text-xs text-muted-foreground">1 day ago</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-green-600">$1,200</p>
                  <p className="text-xs text-muted-foreground">March rent</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold">Outstanding Payments</h2>
          </div>

          <div className="p-6">
            <div className="space-y-4">
              <div className="p-4 border-l-4 border-red-500 bg-red-50 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-medium">Alex Anderson</h4>
                    <p className="text-sm text-muted-foreground">
                      Pine Ridge Townhomes, Unit 1
                    </p>
                  </div>
                  <span className="text-sm font-medium text-red-600">
                    5 days late
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-lg font-semibold text-red-600">$1,600</p>
                    <p className="text-xs text-muted-foreground">
                      March rent due
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 bg-red-600 text-white text-xs rounded-md">
                      Send Reminder
                    </button>
                    <button className="px-3 py-1 border text-xs rounded-md">
                      Contact
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-4 border-l-4 border-yellow-500 bg-yellow-50 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-medium">Tom Brown</h4>
                    <p className="text-sm text-muted-foreground">
                      Oak Grove Complex, Unit C
                    </p>
                  </div>
                  <span className="text-sm font-medium text-yellow-600">
                    Due tomorrow
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-lg font-semibold text-yellow-600">
                      $1,200
                    </p>
                    <p className="text-xs text-muted-foreground">
                      March rent due
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 bg-yellow-600 text-white text-xs rounded-md">
                      Send Reminder
                    </button>
                    <button className="px-3 py-1 border text-xs rounded-md">
                      Contact
                    </button>
                  </div>
                </div>
              </div>

              <div className="text-center py-4">
                <p className="text-sm text-muted-foreground">
                  All other tenants are current
                </p>
                <p className="text-xs text-muted-foreground">
                  8 out of 10 tenants paid on time
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">Payment Analytics</h2>
        </div>

        <div className="p-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-semibold mb-4">
                Collection Rate by Property
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Sunset Apartments</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 h-2 bg-gray-200 rounded-full">
                      <div className="w-full h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-sm font-medium">100%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm">Oak Grove Complex</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 h-2 bg-gray-200 rounded-full">
                      <div className="w-5/6 h-2 bg-yellow-500 rounded-full"></div>
                    </div>
                    <span className="text-sm font-medium">83%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm">Pine Ridge Townhomes</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 h-2 bg-gray-200 rounded-full">
                      <div className="w-0 h-2 bg-red-500 rounded-full"></div>
                    </div>
                    <span className="text-sm font-medium">0%</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Monthly Revenue Trend</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">January 2024</span>
                  <span className="text-sm font-medium">$14,400</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">February 2024</span>
                  <span className="text-sm font-medium">$14,400</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">March 2024</span>
                  <span className="text-sm font-medium text-green-600">
                    $15,200 ↗
                  </span>
                </div>
                <div className="pt-2 border-t">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Average</span>
                    <span className="text-sm font-medium">$14,667</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold">Payment Methods</h2>
          </div>

          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                      <path
                        fillRule="evenodd"
                        d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-sm">Online Banking</span>
                </div>
                <span className="text-sm font-medium">70%</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-sm">Check</span>
                </div>
                <span className="text-sm font-medium">20%</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-purple-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-sm">Cash</span>
                </div>
                <span className="text-sm font-medium">10%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold">Quick Actions</h2>
          </div>

          <div className="p-6">
            <div className="grid gap-3">
              <button className="text-left p-3 border rounded-lg hover:bg-gray-50">
                <h4 className="font-medium">Send Payment Reminders</h4>
                <p className="text-sm text-muted-foreground">
                  Automated reminder emails
                </p>
              </button>

              <button className="text-left p-3 border rounded-lg hover:bg-gray-50">
                <h4 className="font-medium">Generate Revenue Report</h4>
                <p className="text-sm text-muted-foreground">
                  Monthly financial summary
                </p>
              </button>

              <button className="text-left p-3 border rounded-lg hover:bg-gray-50">
                <h4 className="font-medium">Set Up Auto-Pay</h4>
                <p className="text-sm text-muted-foreground">
                  Help tenants automate payments
                </p>
              </button>

              <button className="text-left p-3 border rounded-lg hover:bg-gray-50">
                <h4 className="font-medium">Late Fee Settings</h4>
                <p className="text-sm text-muted-foreground">
                  Configure penalty policies
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
