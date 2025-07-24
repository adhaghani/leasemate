export default function TenantScreeningPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Tenant Screening
          </h1>
          <p className="text-muted-foreground">
            Manage background checks and tenant verification
          </p>
        </div>

        <div className="flex gap-2">
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            Screening Settings
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Start New Screening
          </button>
        </div>
      </div>

      {/* Screening Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                In Progress
              </p>
              <p className="text-2xl font-bold">5</p>
              <p className="text-xs text-blue-600">Active screenings</p>
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
                Completed
              </p>
              <p className="text-2xl font-bold">42</p>
              <p className="text-xs text-green-600">This month</p>
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
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Flagged
              </p>
              <p className="text-2xl font-bold">3</p>
              <p className="text-xs text-red-600">Need review</p>
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
                Avg. Time
              </p>
              <p className="text-2xl font-bold">2.3</p>
              <p className="text-xs text-purple-600">Days to complete</p>
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

      {/* Active Screenings */}
      <div className="bg-white rounded-lg border shadow-sm">
        <div className="p-6 border-b">
          <h3 className="text-lg font-semibold">Active Screenings</h3>
        </div>

        <div className="divide-y">
          {/* Screening 1 */}
          <div className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">MW</span>
                </div>

                <div>
                  <h4 className="font-semibold text-lg">Mike Wilson</h4>
                  <p className="text-muted-foreground">mike.wilson@email.com</p>
                  <p className="text-sm text-muted-foreground">
                    Unit 2B - Downtown Condos
                  </p>

                  <div className="flex gap-2 mt-2">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      In Progress
                    </span>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Day 2 of 3
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-sm text-muted-foreground">Started</div>
                <div className="font-medium">Dec 8, 2024</div>
                <div className="text-sm text-blue-600 mt-1">
                  Expected: Dec 10
                </div>
              </div>
            </div>

            {/* Progress Checklist */}
            <div className="mt-4 bg-gray-50 rounded-lg p-4">
              <h5 className="font-medium mb-3">Screening Progress</h5>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-sm">
                    Identity Verification - Completed
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-sm">
                    Credit Check - Completed (Score: 720)
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  </div>
                  <span className="text-sm">
                    Background Check - In Progress
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
                  <span className="text-sm text-gray-500">
                    Employment Verification - Pending
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
                  <span className="text-sm text-gray-500">
                    Reference Check - Pending
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                View Details
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                Contact Applicant
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                Expedite
              </button>
            </div>
          </div>

          {/* Screening 2 */}
          <div className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold">EG</span>
                </div>

                <div>
                  <h4 className="font-semibold text-lg">Emily Garcia</h4>
                  <p className="text-muted-foreground">
                    emily.garcia@email.com
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Unit 3F - Riverside Complex
                  </p>

                  <div className="flex gap-2 mt-2">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Completed
                    </span>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Passed All Checks
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-sm text-muted-foreground">Completed</div>
                <div className="font-medium">Dec 7, 2024</div>
                <div className="text-sm text-green-600 mt-1">All Clear</div>
              </div>
            </div>

            {/* Results Summary */}
            <div className="mt-4 bg-green-50 rounded-lg p-4">
              <h5 className="font-medium mb-3 text-green-800">
                Screening Results
              </h5>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-green-700">Credit Score:</span>
                  <span className="font-medium ml-2">780</span>
                </div>
                <div>
                  <span className="text-green-700">Background:</span>
                  <span className="font-medium ml-2">Clean</span>
                </div>
                <div>
                  <span className="text-green-700">Employment:</span>
                  <span className="font-medium ml-2">Verified</span>
                </div>
                <div>
                  <span className="text-green-700">References:</span>
                  <span className="font-medium ml-2">Excellent</span>
                </div>
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                Approve Application
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                View Full Report
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                Generate Lease
              </button>
            </div>
          </div>

          {/* Screening 3 - Flagged */}
          <div className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 font-semibold">RB</span>
                </div>

                <div>
                  <h4 className="font-semibold text-lg">Robert Brown</h4>
                  <p className="text-muted-foreground">
                    robert.brown@email.com
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Unit 1C - Sunset Apartments
                  </p>

                  <div className="flex gap-2 mt-2">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      Flagged
                    </span>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      Needs Review
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-sm text-muted-foreground">Completed</div>
                <div className="font-medium">Dec 6, 2024</div>
                <div className="text-sm text-red-600 mt-1">Issues Found</div>
              </div>
            </div>

            {/* Warning Summary */}
            <div className="mt-4 bg-red-50 rounded-lg p-4">
              <h5 className="font-medium mb-3 text-red-800">Flags Detected</h5>
              <div className="space-y-2 text-sm text-red-700">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
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
                  Credit score below threshold (620 vs. required 650)
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
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
                  Previous eviction on record (2 years ago)
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
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
                  Income verification pending from employer
                </div>
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                Reject Application
              </button>
              <button className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700">
                Request Additional Info
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                Manual Review
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                View Full Report
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Screening Configuration */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white rounded-lg border shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Screening Criteria</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm">Minimum Credit Score</span>
              <span className="font-medium">650</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Income Multiplier</span>
              <span className="font-medium">3x rent</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Background Check</span>
              <span className="font-medium text-green-600">Required</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Employment Verification</span>
              <span className="font-medium text-green-600">Required</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Reference Checks</span>
              <span className="font-medium">2 minimum</span>
            </div>

            <button className="w-full px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 mt-4">
              Update Criteria
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg border shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Screening Statistics</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Pass Rate</span>
              <span className="font-medium text-green-600">68%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">
                Average Time
              </span>
              <span className="font-medium">2.3 days</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">This Month</span>
              <span className="font-medium">42 completed</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">
                Flagged Applications
              </span>
              <span className="font-medium text-red-600">7.1%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">
                Most Common Issue
              </span>
              <span className="font-medium">Credit Score</span>
            </div>

            <button className="w-full px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 mt-4">
              Generate Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
