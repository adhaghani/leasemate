export default function DocumentTemplatesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Document Templates
          </h1>
          <p className="text-muted-foreground">
            Manage and create standardized documents for your properties
          </p>
        </div>

        <div className="flex gap-2">
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            Import Template
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Create Template
          </button>
        </div>
      </div>

      {/* Template Categories */}
      <div className="grid gap-4 md:grid-cols-4">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Lease Templates
              </p>
              <p className="text-2xl font-bold text-blue-600">8</p>
              <p className="text-xs text-blue-600">Active templates</p>
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
                Legal Forms
              </p>
              <p className="text-2xl font-bold text-green-600">12</p>
              <p className="text-xs text-green-600">Ready to use</p>
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
                  d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16l3-3m-3 3l-3-3"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Notices
              </p>
              <p className="text-2xl font-bold text-orange-600">15</p>
              <p className="text-xs text-orange-600">Standard notices</p>
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
                  d="M15 17h5l-5 5v-5zM4 2v16l5-5h11V2H4z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Applications
              </p>
              <p className="text-2xl font-bold text-purple-600">6</p>
              <p className="text-xs text-purple-600">Screening forms</p>
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
                  d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        {/* Template Categories Sidebar */}
        <div className="bg-card rounded-lg border shadow-sm">
          <div className="p-6 border-b">
            <h3 className="text-lg font-semibold">Categories</h3>
          </div>

          <div className="p-6">
            <div className="space-y-2">
              <button className="w-full text-left px-3 py-2 bg-blue-100 text-blue-700 rounded-lg font-medium">
                All Templates
              </button>
              <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded-lg">
                Lease Agreements
              </button>
              <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded-lg">
                Legal Notices
              </button>
              <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded-lg">
                Applications
              </button>
              <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded-lg">
                Inspection Forms
              </button>
              <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded-lg">
                Payment Forms
              </button>
              <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded-lg">
                Move-in/Move-out
              </button>
              <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded-lg">
                Maintenance
              </button>
            </div>
          </div>
        </div>

        {/* Template List */}
        <div className="lg:col-span-3">
          <div className="bg-card rounded-lg border shadow-sm">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Templates</h3>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Search templates..."
                    className="px-3 py-2 border rounded-lg w-64"
                  />
                  <select className="px-3 py-2 border rounded-lg">
                    <option>Most Used</option>
                    <option>Recently Created</option>
                    <option>A-Z</option>
                    <option>By Category</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="divide-y">
              {/* Lease Agreement Templates */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-blue-700">
                    Lease Agreements
                  </h4>
                  <button className="text-blue-600 hover:underline text-sm">
                    View All
                  </button>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h5 className="font-medium">Standard Student Lease</h5>
                        <p className="text-sm text-muted-foreground">
                          Individual and group leases
                        </p>
                      </div>
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                        Active
                      </span>
                    </div>

                    <div className="flex items-center text-xs text-muted-foreground mb-3">
                      <svg
                        className="w-4 h-4 mr-1"
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
                      Last updated: Dec 15, 2024
                    </div>

                    <div className="flex gap-2">
                      <button className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                        Preview
                      </button>
                      <button className="flex-1 px-3 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
                        Use Template
                      </button>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h5 className="font-medium">
                          Month-to-Month Agreement
                        </h5>
                        <p className="text-sm text-muted-foreground">
                          Flexible rental terms
                        </p>
                      </div>
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                        Active
                      </span>
                    </div>

                    <div className="flex items-center text-xs text-muted-foreground mb-3">
                      <svg
                        className="w-4 h-4 mr-1"
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
                      Last updated: Dec 10, 2024
                    </div>

                    <div className="flex gap-2">
                      <button className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                        Preview
                      </button>
                      <button className="flex-1 px-3 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
                        Use Template
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Legal Notices */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-green-700">
                    Legal Notices
                  </h4>
                  <button className="text-green-600 hover:underline text-sm">
                    View All
                  </button>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h5 className="font-medium mb-2">3-Day Notice to Pay</h5>
                    <p className="text-sm text-muted-foreground mb-3">
                      Late rent payment notice
                    </p>
                    <div className="flex gap-2">
                      <button className="flex-1 px-2 py-1 border rounded text-xs">
                        Preview
                      </button>
                      <button className="flex-1 px-2 py-1 bg-green-600 text-white rounded text-xs">
                        Use
                      </button>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h5 className="font-medium mb-2">
                      30-Day Notice to Vacate
                    </h5>
                    <p className="text-sm text-muted-foreground mb-3">
                      End of tenancy notice
                    </p>
                    <div className="flex gap-2">
                      <button className="flex-1 px-2 py-1 border rounded text-xs">
                        Preview
                      </button>
                      <button className="flex-1 px-2 py-1 bg-green-600 text-white rounded text-xs">
                        Use
                      </button>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h5 className="font-medium mb-2">Lease Violation Notice</h5>
                    <p className="text-sm text-muted-foreground mb-3">
                      Property rule violations
                    </p>
                    <div className="flex gap-2">
                      <button className="flex-1 px-2 py-1 border rounded text-xs">
                        Preview
                      </button>
                      <button className="flex-1 px-2 py-1 bg-green-600 text-white rounded text-xs">
                        Use
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Application Forms */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-purple-700">
                    Application Forms
                  </h4>
                  <button className="text-purple-600 hover:underline text-sm">
                    View All
                  </button>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h5 className="font-medium">
                          Student Rental Application
                        </h5>
                        <p className="text-sm text-muted-foreground">
                          Group-friendly application
                        </p>
                      </div>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                        Popular
                      </span>
                    </div>

                    <div className="flex items-center text-xs text-muted-foreground mb-3">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      Supports group applications
                    </div>

                    <div className="flex gap-2">
                      <button className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                        Preview
                      </button>
                      <button className="flex-1 px-3 py-2 bg-purple-600 text-white rounded-lg text-sm hover:bg-purple-700">
                        Use Template
                      </button>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h5 className="font-medium">
                          Background Check Consent
                        </h5>
                        <p className="text-sm text-muted-foreground">
                          Screening authorization
                        </p>
                      </div>
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                        Required
                      </span>
                    </div>

                    <div className="flex items-center text-xs text-muted-foreground mb-3">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                      Legal compliance included
                    </div>

                    <div className="flex gap-2">
                      <button className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                        Preview
                      </button>
                      <button className="flex-1 px-3 py-2 bg-purple-600 text-white rounded-lg text-sm hover:bg-purple-700">
                        Use Template
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Inspection Forms */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-orange-700">
                    Inspection & Maintenance
                  </h4>
                  <button className="text-orange-600 hover:underline text-sm">
                    View All
                  </button>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h5 className="font-medium mb-2">Move-in Inspection</h5>
                    <p className="text-sm text-muted-foreground mb-3">
                      Property condition checklist
                    </p>
                    <div className="flex gap-2">
                      <button className="flex-1 px-2 py-1 border rounded text-xs">
                        Preview
                      </button>
                      <button className="flex-1 px-2 py-1 bg-orange-600 text-white rounded text-xs">
                        Use
                      </button>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h5 className="font-medium mb-2">Move-out Inspection</h5>
                    <p className="text-sm text-muted-foreground mb-3">
                      Damage assessment form
                    </p>
                    <div className="flex gap-2">
                      <button className="flex-1 px-2 py-1 border rounded text-xs">
                        Preview
                      </button>
                      <button className="flex-1 px-2 py-1 bg-orange-600 text-white rounded text-xs">
                        Use
                      </button>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h5 className="font-medium mb-2">Maintenance Request</h5>
                    <p className="text-sm text-muted-foreground mb-3">
                      Repair request form
                    </p>
                    <div className="flex gap-2">
                      <button className="flex-1 px-2 py-1 border rounded text-xs">
                        Preview
                      </button>
                      <button className="flex-1 px-2 py-1 bg-orange-600 text-white rounded text-xs">
                        Use
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Template Usage Stats */}
      <div className="bg-card rounded-lg border shadow-sm">
        <div className="p-6 border-b">
          <h3 className="text-lg font-semibold">Template Usage Statistics</h3>
          <p className="text-sm text-muted-foreground">
            Most used templates this month
          </p>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-sm">1</span>
                </div>
                <div>
                  <p className="font-medium">Standard Student Lease</p>
                  <p className="text-sm text-muted-foreground">
                    Lease Agreements
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">24 uses</p>
                <div className="w-32 bg-gray-200 rounded-full h-2 mt-1">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center">
                  <span className="text-green-600 font-semibold text-sm">
                    2
                  </span>
                </div>
                <div>
                  <p className="font-medium">Student Rental Application</p>
                  <p className="text-sm text-muted-foreground">
                    Application Forms
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">18 uses</p>
                <div className="w-32 bg-gray-200 rounded-full h-2 mt-1">
                  <div
                    className="bg-green-600 h-2 rounded-full"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-100 rounded flex items-center justify-center">
                  <span className="text-orange-600 font-semibold text-sm">
                    3
                  </span>
                </div>
                <div>
                  <p className="font-medium">3-Day Notice to Pay</p>
                  <p className="text-sm text-muted-foreground">Legal Notices</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">12 uses</p>
                <div className="w-32 bg-gray-200 rounded-full h-2 mt-1">
                  <div
                    className="bg-orange-600 h-2 rounded-full"
                    style={{ width: "40%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
