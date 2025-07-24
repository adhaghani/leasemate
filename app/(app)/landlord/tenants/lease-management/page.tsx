export default function LeaseManagementPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Lease Management
          </h1>
          <p className="text-muted-foreground">
            Manage lease agreements, renewals, and terminations
          </p>
        </div>

        <div className="flex gap-2">
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            Export Leases
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Create New Lease
          </button>
        </div>
      </div>

      {/* Lease Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Active Leases
              </p>
              <p className="text-2xl font-bold">67</p>
              <p className="text-xs text-green-600">Currently occupied</p>
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
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Expiring Soon
              </p>
              <p className="text-2xl font-bold">8</p>
              <p className="text-xs text-orange-600">Next 60 days</p>
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
                Pending Renewals
              </p>
              <p className="text-2xl font-bold">5</p>
              <p className="text-xs text-blue-600">Awaiting response</p>
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
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Avg. Lease Term
              </p>
              <p className="text-2xl font-bold">11.5</p>
              <p className="text-xs text-purple-600">Months</p>
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

      {/* Filters */}
      <div className="flex gap-4 items-center">
        <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">All Properties</option>
          <option value="sunset">Sunset Apartments</option>
          <option value="downtown">Downtown Condos</option>
          <option value="riverside">Riverside Complex</option>
        </select>

        <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">All Status</option>
          <option value="active">Active</option>
          <option value="expiring">Expiring Soon</option>
          <option value="renewal">Pending Renewal</option>
          <option value="terminated">Terminated</option>
        </select>

        <input
          type="text"
          placeholder="Search by tenant name..."
          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Expiring Leases - Priority Section */}
      <div className="bg-orange-50 border border-orange-200 rounded-lg">
        <div className="p-6 border-b border-orange-200">
          <h3 className="text-lg font-semibold text-orange-800">
            Leases Expiring Soon
          </h3>
          <p className="text-sm text-orange-600">
            These leases require immediate attention
          </p>
        </div>

        <div className="divide-y divide-orange-200">
          {/* Expiring Lease 1 */}
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 font-semibold">JD</span>
                </div>

                <div>
                  <h4 className="font-semibold text-lg">John Doe</h4>
                  <p className="text-muted-foreground">
                    Unit 2B - Sunset Apartments
                  </p>
                  <p className="text-sm text-muted-foreground">
                    john.doe@email.com • (555) 123-4567
                  </p>

                  <div className="flex gap-2 mt-2">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      Expires in 15 days
                    </span>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      No renewal response
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-2xl font-bold">$1,250</div>
                <div className="text-sm text-muted-foreground">per month</div>
                <div className="text-sm text-red-600 mt-1">
                  Expires: Jan 15, 2025
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-sm">
              <div>
                <span className="text-muted-foreground">Lease Start:</span>
                <span className="font-medium ml-2">Jan 15, 2024</span>
              </div>
              <div>
                <span className="text-muted-foreground">Term:</span>
                <span className="font-medium ml-2">12 months</span>
              </div>
              <div>
                <span className="text-muted-foreground">Payment Status:</span>
                <span className="font-medium ml-2 text-green-600">Current</span>
              </div>
              <div>
                <span className="text-muted-foreground">Renewal Sent:</span>
                <span className="font-medium ml-2">Dec 1, 2024</span>
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                Send Renewal Reminder
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Call Tenant
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                View Lease
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                Prepare Move-out
              </button>
            </div>
          </div>

          {/* Expiring Lease 2 */}
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 font-semibold">SM</span>
                </div>

                <div>
                  <h4 className="font-semibold text-lg">Study Group Alpha</h4>
                  <p className="text-muted-foreground">
                    Unit 3F - Riverside Complex
                  </p>
                  <p className="text-sm text-muted-foreground">
                    4 students • Lead: Sarah Miller
                  </p>

                  <div className="flex gap-2 mt-2">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                      Expires in 32 days
                    </span>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Renewal requested
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-2xl font-bold">$1,600</div>
                <div className="text-sm text-muted-foreground">per month</div>
                <div className="text-sm text-orange-600 mt-1">
                  Expires: Feb 1, 2025
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-sm">
              <div>
                <span className="text-muted-foreground">Lease Start:</span>
                <span className="font-medium ml-2">Feb 1, 2024</span>
              </div>
              <div>
                <span className="text-muted-foreground">Term:</span>
                <span className="font-medium ml-2">12 months</span>
              </div>
              <div>
                <span className="text-muted-foreground">Payment Status:</span>
                <span className="font-medium ml-2 text-green-600">Current</span>
              </div>
              <div>
                <span className="text-muted-foreground">Renewal Response:</span>
                <span className="font-medium ml-2 text-green-600">
                  Dec 5, 2024
                </span>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-3 mt-4">
              <p className="text-sm text-blue-700">
                <strong>Renewal Request:</strong> Group wants to renew for
                another 12 months with same terms. All members confirmed.
              </p>
            </div>

            <div className="flex gap-2 mt-4">
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                Approve Renewal
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Generate New Lease
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                View Current Lease
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* All Leases */}
      <div className="bg-white rounded-lg border shadow-sm">
        <div className="p-6 border-b">
          <h3 className="text-lg font-semibold">All Active Leases</h3>
        </div>

        <div className="divide-y">
          {/* Active Lease 1 */}
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold">EG</span>
                </div>

                <div>
                  <h4 className="font-semibold text-lg">Emily Garcia</h4>
                  <p className="text-muted-foreground">
                    Unit 1A - Downtown Condos
                  </p>
                  <p className="text-sm text-muted-foreground">
                    emily.garcia@email.com
                  </p>

                  <div className="flex gap-2 mt-2">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Active
                    </span>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      8 months remaining
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-2xl font-bold">$1,400</div>
                <div className="text-sm text-muted-foreground">per month</div>
                <div className="text-sm text-green-600 mt-1">
                  Expires: Aug 15, 2025
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-sm">
              <div>
                <span className="text-muted-foreground">Lease Start:</span>
                <span className="font-medium ml-2">Aug 15, 2024</span>
              </div>
              <div>
                <span className="text-muted-foreground">Term:</span>
                <span className="font-medium ml-2">12 months</span>
              </div>
              <div>
                <span className="text-muted-foreground">Payment Status:</span>
                <span className="font-medium ml-2 text-green-600">Current</span>
              </div>
              <div>
                <span className="text-muted-foreground">Last Payment:</span>
                <span className="font-medium ml-2">Dec 1, 2024</span>
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                View Lease
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                Payment History
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                Contact Tenant
              </button>
            </div>
          </div>

          {/* Active Lease 2 - Group */}
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-semibold">TB</span>
                </div>

                <div>
                  <h4 className="font-semibold text-lg">Study Group Beta</h4>
                  <p className="text-muted-foreground">
                    Unit 4C - Sunset Apartments
                  </p>
                  <p className="text-sm text-muted-foreground">
                    3 students • Lead: Tom Brown
                  </p>

                  <div className="flex gap-2 mt-2">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Active
                    </span>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                      Student Group
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-2xl font-bold">$1,350</div>
                <div className="text-sm text-muted-foreground">per month</div>
                <div className="text-sm text-green-600 mt-1">
                  Expires: May 30, 2025
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-sm">
              <div>
                <span className="text-muted-foreground">Lease Start:</span>
                <span className="font-medium ml-2">May 30, 2024</span>
              </div>
              <div>
                <span className="text-muted-foreground">Term:</span>
                <span className="font-medium ml-2">12 months</span>
              </div>
              <div>
                <span className="text-muted-foreground">Payment Status:</span>
                <span className="font-medium ml-2 text-green-600">Current</span>
              </div>
              <div>
                <span className="text-muted-foreground">Group Members:</span>
                <span className="font-medium ml-2">3 active</span>
              </div>
            </div>

            <div className="bg-purple-50 rounded-lg p-3 mt-4">
              <p className="text-sm text-purple-700">
                <strong>Group Details:</strong> Tom Brown (Lead), Lisa Chen,
                Mark Rodriguez. Split rent equally. All members verified.
              </p>
            </div>

            <div className="flex gap-2 mt-4">
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                View Lease
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                Group Management
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                Payment Tracking
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lease Templates & Tools */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="bg-white rounded-lg border shadow-sm p-6">
          <h3 className="font-semibold mb-3">Lease Templates</h3>
          <div className="space-y-2">
            <button className="w-full px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200">
              Standard 12-Month Lease
            </button>
            <button className="w-full px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200">
              Student Group Lease
            </button>
            <button className="w-full px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200">
              Month-to-Month Agreement
            </button>
            <button className="w-full px-4 py-2 bg-orange-100 text-orange-700 rounded-lg hover:bg-orange-200">
              Short-Term Rental
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg border shadow-sm p-6">
          <h3 className="font-semibold mb-3">Renewal Tools</h3>
          <div className="space-y-2">
            <button className="w-full px-4 py-2 bg-yellow-100 text-yellow-700 rounded-lg hover:bg-yellow-200">
              Bulk Renewal Notices
            </button>
            <button className="w-full px-4 py-2 bg-pink-100 text-pink-700 rounded-lg hover:bg-pink-200">
              Auto-Renewal Settings
            </button>
            <button className="w-full px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200">
              Renewal Tracking
            </button>
            <button className="w-full px-4 py-2 bg-teal-100 text-teal-700 rounded-lg hover:bg-teal-200">
              Market Rate Analysis
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg border shadow-sm p-6">
          <h3 className="font-semibold mb-3">Lease Analytics</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">
                Renewal Rate
              </span>
              <span className="font-medium text-green-600">73%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">
                Avg. Lease Length
              </span>
              <span className="font-medium">11.5 months</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">
                Early Terminations
              </span>
              <span className="font-medium">4.2%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">
                Group vs Individual
              </span>
              <span className="font-medium">60% / 40%</span>
            </div>

            <button className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 mt-4">
              Full Analytics Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
