export default function TenantApplicationsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Tenant Applications
          </h1>
          <p className="text-muted-foreground">
            Review and manage rental applications
          </p>
        </div>

        <div className="flex gap-2">
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            Export Applications
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Application Settings
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Pending Review
              </p>
              <p className="text-2xl font-bold">8</p>
              <p className="text-xs text-orange-600">Awaiting decision</p>
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
                Under Screening
              </p>
              <p className="text-2xl font-bold">3</p>
              <p className="text-xs text-blue-600">Background checks</p>
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
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Approved
              </p>
              <p className="text-2xl font-bold">12</p>
              <p className="text-xs text-green-600">Ready for lease</p>
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
                This Month
              </p>
              <p className="text-2xl font-bold">23</p>
              <p className="text-xs text-purple-600">Total applications</p>
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

      {/* Filters and Search */}
      <div className="flex gap-4 items-center">
        <input
          type="text"
          placeholder="Search applications..."
          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">All Status</option>
          <option value="pending">Pending Review</option>
          <option value="screening">Under Screening</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </select>

        <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">All Properties</option>
          <option value="sunset">Sunset Apartments</option>
          <option value="downtown">Downtown Condos</option>
          <option value="riverside">Riverside Complex</option>
        </select>
      </div>

      {/* Applications List */}
      <div className="bg-white rounded-lg border shadow-sm">
        <div className="p-6 border-b">
          <h3 className="text-lg font-semibold">Recent Applications</h3>
        </div>

        <div className="divide-y">
          {/* Application 1 */}
          <div className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">SJ</span>
                </div>

                <div>
                  <h4 className="font-semibold text-lg">Sarah Johnson</h4>
                  <p className="text-muted-foreground">
                    sarah.johnson@email.com • (555) 123-4567
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Applied for Unit 4A - Sunset Apartments
                  </p>

                  <div className="flex gap-2 mt-2">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                      Pending Review
                    </span>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Student Group (4 people)
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-sm text-muted-foreground">Applied</div>
                <div className="font-medium">2 hours ago</div>
                <div className="text-sm text-green-600 mt-1">$1,250/month</div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-sm">
              <div>
                <span className="text-muted-foreground">Income:</span>
                <span className="font-medium ml-2">$5,000/month</span>
              </div>
              <div>
                <span className="text-muted-foreground">Credit Score:</span>
                <span className="font-medium ml-2">750</span>
              </div>
              <div>
                <span className="text-muted-foreground">Employment:</span>
                <span className="font-medium ml-2">Full-time Student</span>
              </div>
              <div>
                <span className="text-muted-foreground">Move-in Date:</span>
                <span className="font-medium ml-2">Jan 15, 2025</span>
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                Approve
              </button>
              <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                Reject
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Start Screening
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                View Full Application
              </button>
            </div>
          </div>

          {/* Application 2 */}
          <div className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold">MW</span>
                </div>

                <div>
                  <h4 className="font-semibold text-lg">Mike Wilson</h4>
                  <p className="text-muted-foreground">
                    mike.wilson@email.com • (555) 987-6543
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Applied for Unit 2B - Downtown Condos
                  </p>

                  <div className="flex gap-2 mt-2">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Under Screening
                    </span>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                      Individual
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-sm text-muted-foreground">Applied</div>
                <div className="font-medium">1 day ago</div>
                <div className="text-sm text-green-600 mt-1">$1,400/month</div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-sm">
              <div>
                <span className="text-muted-foreground">Income:</span>
                <span className="font-medium ml-2">$4,200/month</span>
              </div>
              <div>
                <span className="text-muted-foreground">Credit Score:</span>
                <span className="font-medium ml-2">720</span>
              </div>
              <div>
                <span className="text-muted-foreground">Employment:</span>
                <span className="font-medium ml-2">Software Engineer</span>
              </div>
              <div>
                <span className="text-muted-foreground">Move-in Date:</span>
                <span className="font-medium ml-2">Feb 1, 2025</span>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-3 mt-4">
              <p className="text-sm text-blue-700">
                <strong>Screening in Progress:</strong> Background check
                completed. Credit verification pending.
              </p>
            </div>

            <div className="flex gap-2 mt-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Continue Screening
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                View Screening Report
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                Contact Applicant
              </button>
            </div>
          </div>

          {/* Application 3 */}
          <div className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-semibold">EG</span>
                </div>

                <div>
                  <h4 className="font-semibold text-lg">Emily Garcia</h4>
                  <p className="text-muted-foreground">
                    emily.garcia@email.com • (555) 456-7890
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Applied for Unit 3F - Riverside Complex
                  </p>

                  <div className="flex gap-2 mt-2">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Approved
                    </span>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      Lease Pending
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-sm text-muted-foreground">Applied</div>
                <div className="font-medium">3 days ago</div>
                <div className="text-sm text-green-600 mt-1">$1,600/month</div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-sm">
              <div>
                <span className="text-muted-foreground">Income:</span>
                <span className="font-medium ml-2">$6,000/month</span>
              </div>
              <div>
                <span className="text-muted-foreground">Credit Score:</span>
                <span className="font-medium ml-2">780</span>
              </div>
              <div>
                <span className="text-muted-foreground">Employment:</span>
                <span className="font-medium ml-2">Marketing Manager</span>
              </div>
              <div>
                <span className="text-muted-foreground">Move-in Date:</span>
                <span className="font-medium ml-2">Jan 1, 2025</span>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-3 mt-4">
              <p className="text-sm text-green-700">
                <strong>Application Approved:</strong> All screening completed
                successfully. Ready to proceed with lease signing.
              </p>
            </div>

            <div className="flex gap-2 mt-4">
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                Generate Lease
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Schedule Move-in
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                View Application
              </button>
            </div>
          </div>

          {/* Application 4 */}
          <div className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 font-semibold">JD</span>
                </div>

                <div>
                  <h4 className="font-semibold text-lg">James Davis</h4>
                  <p className="text-muted-foreground">
                    james.davis@email.com • (555) 234-5678
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Applied for Unit 1H - Sunset Apartments
                  </p>

                  <div className="flex gap-2 mt-2">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      Rejected
                    </span>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      Credit Issues
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-sm text-muted-foreground">Applied</div>
                <div className="font-medium">5 days ago</div>
                <div className="text-sm text-muted-foreground mt-1">
                  $1,250/month
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-sm">
              <div>
                <span className="text-muted-foreground">Income:</span>
                <span className="font-medium ml-2">$3,200/month</span>
              </div>
              <div>
                <span className="text-muted-foreground">Credit Score:</span>
                <span className="font-medium ml-2">580</span>
              </div>
              <div>
                <span className="text-muted-foreground">Employment:</span>
                <span className="font-medium ml-2">Part-time</span>
              </div>
              <div>
                <span className="text-muted-foreground">Rejection Date:</span>
                <span className="font-medium ml-2">Dec 8, 2024</span>
              </div>
            </div>

            <div className="bg-red-50 rounded-lg p-3 mt-4">
              <p className="text-sm text-red-700">
                <strong>Application Rejected:</strong> Credit score below
                minimum requirement (650). Income-to-rent ratio insufficient.
              </p>
            </div>

            <div className="flex gap-2 mt-4">
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                Send Rejection Letter
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                View Application
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Application Analytics */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white rounded-lg border shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Application Trends</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">This Week</span>
              <span className="font-medium">8 applications</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Last Week</span>
              <span className="font-medium">12 applications</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">
                Approval Rate
              </span>
              <span className="font-medium text-green-600">68%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">
                Avg. Processing Time
              </span>
              <span className="font-medium">2.5 days</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
          <div className="space-y-2">
            <button className="w-full px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200">
              Bulk Approve Applications
            </button>
            <button className="w-full px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200">
              Send Screening Reminders
            </button>
            <button className="w-full px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200">
              Update Criteria Settings
            </button>
            <button className="w-full px-4 py-2 bg-orange-100 text-orange-700 rounded-lg hover:bg-orange-200">
              Generate Reports
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
