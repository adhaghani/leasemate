export default function LatePaymentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Late Payments</h1>
          <p className="text-muted-foreground">
            Manage overdue payments and late fee collection
          </p>
        </div>

        <div className="flex gap-2">
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            Bulk Late Notices
          </button>
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
            Process Late Fees
          </button>
        </div>
      </div>

      {/* Late Payment Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Total Overdue
              </p>
              <p className="text-2xl font-bold text-red-600">$5,850</p>
              <p className="text-xs text-red-600">7 tenants</p>
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
                Late Fees Owed
              </p>
              <p className="text-2xl font-bold text-orange-600">$350</p>
              <p className="text-xs text-orange-600">Accrued fees</p>
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
                Avg. Days Late
              </p>
              <p className="text-2xl font-bold">12</p>
              <p className="text-xs text-blue-600">Current cycle</p>
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
                Recovery Rate
              </p>
              <p className="text-2xl font-bold text-green-600">94%</p>
              <p className="text-xs text-green-600">Last 6 months</p>
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
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Severity Filter */}
      <div className="flex gap-2">
        <button className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200">
          Critical (30+ days)
        </button>
        <button className="px-4 py-2 bg-orange-100 text-orange-700 rounded-lg hover:bg-orange-200">
          High (15-29 days)
        </button>
        <button className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-lg hover:bg-yellow-200">
          Medium (5-14 days)
        </button>
        <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200">
          Low (1-4 days)
        </button>
      </div>

      {/* Critical Late Payments */}
      <div className="bg-red-50 border border-red-200 rounded-lg">
        <div className="p-6 border-b border-red-200">
          <h3 className="text-lg font-semibold text-red-800">
            Critical - 30+ Days Overdue
          </h3>
          <p className="text-sm text-red-600">Immediate action required</p>
        </div>

        <div className="divide-y divide-red-200">
          {/* Critical 1 */}
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 font-semibold">RB</span>
                </div>

                <div>
                  <h4 className="font-semibold text-lg">Robert Brown</h4>
                  <p className="text-muted-foreground">
                    Unit 1C - Sunset Apartments
                  </p>
                  <p className="text-sm text-muted-foreground">
                    robert.brown@email.com • (555) 456-7890
                  </p>

                  <div className="flex gap-2 mt-2">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      35 days overdue
                    </span>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-black text-white">
                      Legal action pending
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-2xl font-bold text-red-600">$2,450</div>
                <div className="text-sm text-muted-foreground">
                  Due: Oct 31, 2024
                </div>
                <div className="text-sm text-red-600 mt-1">
                  $1,200 rent + $150 late fees + legal fees
                </div>
              </div>
            </div>

            <div className="bg-red-100 rounded-lg p-3 mt-4">
              <p className="text-sm text-red-800">
                <strong>Action Timeline:</strong> 3 notices sent, 2 phone calls,
                final notice served. Attorney contacted for eviction
                proceedings.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-sm">
              <div>
                <span className="text-muted-foreground">Last Contact:</span>
                <span className="font-medium ml-2">Dec 5, 2024</span>
              </div>
              <div>
                <span className="text-muted-foreground">Payment History:</span>
                <span className="font-medium ml-2 text-red-600">Poor</span>
              </div>
              <div>
                <span className="text-muted-foreground">Late Fees:</span>
                <span className="font-medium ml-2">$150</span>
              </div>
              <div>
                <span className="text-muted-foreground">Legal Status:</span>
                <span className="font-medium ml-2">Notice served</span>
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
                Legal Action
              </button>
              <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                Final Notice
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Payment Plan
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                Call Tenant
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* High Priority Late Payments */}
      <div className="bg-orange-50 border border-orange-200 rounded-lg">
        <div className="p-6 border-b border-orange-200">
          <h3 className="text-lg font-semibold text-orange-800">
            High Priority - 15-29 Days Overdue
          </h3>
          <p className="text-sm text-orange-600">Escalation required</p>
        </div>

        <div className="divide-y divide-orange-200">
          {/* High Priority 1 */}
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 font-semibold">MW</span>
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
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                      18 days overdue
                    </span>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      Payment plan requested
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-2xl font-bold text-orange-600">$1,500</div>
                <div className="text-sm text-muted-foreground">
                  Due: Nov 22, 2024
                </div>
                <div className="text-sm text-orange-600 mt-1">
                  $1,400 rent + $100 late fees
                </div>
              </div>
            </div>

            <div className="bg-orange-100 rounded-lg p-3 mt-4">
              <p className="text-sm text-orange-800">
                <strong>Recent Contact:</strong> Tenant experienced job loss,
                requested payment plan. Usually reliable payer.
              </p>
            </div>

            <div className="flex gap-2 mt-4">
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                Setup Payment Plan
              </button>
              <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700">
                Send Notice
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                Call Tenant
              </button>
            </div>
          </div>

          {/* High Priority 2 - Group */}
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 font-semibold">SG</span>
                </div>

                <div>
                  <h4 className="font-semibold text-lg">Study Group Delta</h4>
                  <p className="text-muted-foreground">
                    Unit 3B - Riverside Complex
                  </p>
                  <p className="text-sm text-muted-foreground">
                    4 students • Lead: Sam Garcia
                  </p>

                  <div className="flex gap-2 mt-2">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                      22 days overdue
                    </span>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Group issue
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-2xl font-bold text-orange-600">$1,700</div>
                <div className="text-sm text-muted-foreground">
                  Due: Nov 18, 2024
                </div>
                <div className="text-sm text-orange-600 mt-1">
                  $1,550 rent + $150 late fees
                </div>
              </div>
            </div>

            <div className="bg-orange-100 rounded-lg p-3 mt-4">
              <p className="text-sm text-orange-800">
                <strong>Group Status:</strong> 2 members paid their share
                ($775), 2 members haven't paid. Group lead unresponsive.
              </p>
            </div>

            <div className="flex gap-2 mt-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Contact Individual Members
              </button>
              <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700">
                Group Notice
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                View Group Details
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Medium Priority Late Payments */}
      <div className="bg-white rounded-lg border shadow-sm">
        <div className="p-6 border-b">
          <h3 className="text-lg font-semibold">
            Medium Priority - 5-14 Days Overdue
          </h3>
          <p className="text-sm text-muted-foreground">
            Send reminders and apply late fees
          </p>
        </div>

        <div className="divide-y">
          {/* Medium Priority 1 */}
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
                    lisa.smith@email.com
                  </p>

                  <div className="flex gap-2 mt-2">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      8 days overdue
                    </span>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Usually on time
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-2xl font-bold text-yellow-600">$1,350</div>
                <div className="text-sm text-muted-foreground">
                  Due: Dec 1, 2024
                </div>
                <div className="text-sm text-yellow-600 mt-1">
                  $1,300 rent + $50 late fee
                </div>
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <button className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700">
                Send Reminder
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Apply Late Fee
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                Call Tenant
              </button>
            </div>
          </div>

          {/* Medium Priority 2 */}
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <span className="text-yellow-600 font-semibold">AR</span>
                </div>

                <div>
                  <h4 className="font-semibold text-lg">Alex Rodriguez</h4>
                  <p className="text-muted-foreground">
                    Unit 2D - Sunset Apartments
                  </p>
                  <p className="text-sm text-muted-foreground">
                    alex.rodriguez@email.com
                  </p>

                  <div className="flex gap-2 mt-2">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      6 days overdue
                    </span>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Auto-pay failed
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-2xl font-bold text-yellow-600">$1,250</div>
                <div className="text-sm text-muted-foreground">
                  Due: Dec 3, 2024
                </div>
                <div className="text-sm text-yellow-600 mt-1">
                  Auto-payment failed
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-3 mt-4">
              <p className="text-sm text-blue-700">
                <strong>Auto-pay Issue:</strong> Bank account insufficient
                funds. Tenant notified to update payment method.
              </p>
            </div>

            <div className="flex gap-2 mt-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Retry Auto-payment
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                Manual Payment
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                Contact Tenant
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Late Fee Management */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="bg-white rounded-lg border shadow-sm p-6">
          <h3 className="font-semibold mb-3">Late Fee Policy</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">
                Grace Period
              </span>
              <span className="font-medium">5 days</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">
                Late Fee Amount
              </span>
              <span className="font-medium">$50 + 5% daily</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Maximum Fee</span>
              <span className="font-medium">10% of rent</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Auto-apply</span>
              <span className="font-medium text-green-600">Enabled</span>
            </div>

            <button className="w-full px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 mt-4">
              Update Policy
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg border shadow-sm p-6">
          <h3 className="font-semibold mb-3">Collection Actions</h3>
          <div className="space-y-2">
            <button className="w-full px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200">
              Send All Late Notices
            </button>
            <button className="w-full px-4 py-2 bg-orange-100 text-orange-700 rounded-lg hover:bg-orange-200">
              Apply Late Fees
            </button>
            <button className="w-full px-4 py-2 bg-yellow-100 text-yellow-700 rounded-lg hover:bg-yellow-200">
              Payment Reminders
            </button>
            <button className="w-full px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200">
              Schedule Follow-ups
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg border shadow-sm p-6">
          <h3 className="font-semibold mb-3">Performance Metrics</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">
                On-time Payment Rate
              </span>
              <span className="font-medium text-green-600">89.2%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">
                Late Fee Collection
              </span>
              <span className="font-medium">$1,250</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">
                Chronic Late Payers
              </span>
              <span className="font-medium text-red-600">3 tenants</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">
                Eviction Rate
              </span>
              <span className="font-medium">2.1%</span>
            </div>

            <button className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 mt-4">
              Full Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
