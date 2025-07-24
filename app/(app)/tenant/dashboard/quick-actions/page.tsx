export default function TenantDashboardQuickActionsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Quick Actions</h1>
        <p className="text-muted-foreground">
          Access frequently used actions and services
        </p>
      </div>

      {/* Emergency Actions */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold text-red-600">
            Emergency Actions
          </h2>
          <p className="text-sm text-muted-foreground">
            For urgent matters requiring immediate attention
          </p>
        </div>

        <div className="p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <a
              href="/tenant/maintenance/submit"
              className="p-4 border-2 border-red-200 rounded-lg hover:border-red-300 bg-red-50"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-red-700">
                    Emergency Maintenance
                  </h3>
                  <p className="text-sm text-red-600">Report urgent repairs</p>
                </div>
              </div>
            </a>

            <a
              href="/tenant/messages/inbox"
              className="p-4 border-2 border-orange-200 rounded-lg hover:border-orange-300 bg-orange-50"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-orange-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-orange-700">
                    Emergency Contact
                  </h3>
                  <p className="text-sm text-orange-600">
                    Reach landlord immediately
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Common Actions */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <a
          href="/tenant/payments/upcoming"
          className="p-6 border rounded-lg hover:bg-gray-50 text-center"
        >
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
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
          <h3 className="font-semibold mb-1">Pay Rent</h3>
          <p className="text-sm text-muted-foreground">
            Make your monthly payment
          </p>
        </a>

        <a
          href="/tenant/maintenance/submit"
          className="p-6 border rounded-lg hover:bg-gray-50 text-center"
        >
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
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
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              />
            </svg>
          </div>
          <h3 className="font-semibold mb-1">Maintenance Request</h3>
          <p className="text-sm text-muted-foreground">Report an issue</p>
        </a>

        <a
          href="/tenant/messages/inbox"
          className="p-6 border rounded-lg hover:bg-gray-50 text-center"
        >
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
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
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </div>
          <h3 className="font-semibold mb-1">Message Landlord</h3>
          <p className="text-sm text-muted-foreground">Send a message</p>
        </a>

        <a
          href="/tenant/groups"
          className="p-6 border rounded-lg hover:bg-gray-50 text-center"
        >
          <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-3">
            <svg
              className="w-6 h-6 text-yellow-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
            </svg>
          </div>
          <h3 className="font-semibold mb-1">Split Expenses</h3>
          <p className="text-sm text-muted-foreground">Manage group payments</p>
        </a>

        <a
          href="/tenant/documents/lease"
          className="p-6 border rounded-lg hover:bg-gray-50 text-center"
        >
          <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-3">
            <svg
              className="w-6 h-6 text-indigo-600"
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
          <h3 className="font-semibold mb-1">View Lease</h3>
          <p className="text-sm text-muted-foreground">
            Access lease documents
          </p>
        </a>

        <a
          href="/tenant/profile/personal"
          className="p-6 border rounded-lg hover:bg-gray-50 text-center"
        >
          <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mx-auto mb-3">
            <svg
              className="w-6 h-6 text-pink-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <h3 className="font-semibold mb-1">Update Profile</h3>
          <p className="text-sm text-muted-foreground">
            Edit personal information
          </p>
        </a>
      </div>

      {/* Recent Activity Shortcuts */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">Quick Access</h2>
          <p className="text-sm text-muted-foreground">
            Based on your recent activity
          </p>
        </div>

        <div className="p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Recent Payments</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>March Rent</span>
                  <span className="text-green-600">Paid</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Group Utilities</span>
                  <span className="text-green-600">Paid</span>
                </div>
                <a
                  href="/tenant/payments/history"
                  className="text-sm text-blue-600 hover:underline"
                >
                  View all payments →
                </a>
              </div>
            </div>

            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Active Requests</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Kitchen Faucet Leak</span>
                  <span className="text-yellow-600">In Progress</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>No active requests</span>
                  <span className="text-gray-500">-</span>
                </div>
                <a
                  href="/tenant/maintenance/requests"
                  className="text-sm text-blue-600 hover:underline"
                >
                  View all requests →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
