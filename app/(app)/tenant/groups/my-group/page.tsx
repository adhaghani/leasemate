export default function TenantGroupsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">My Group</h1>
        <p className="text-muted-foreground">
          Manage your rental group and split expenses with roommates
        </p>
      </div>

      {/* Group Overview Card */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-6 border-b">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Sunset Apartment Group</h2>
            <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-green-100 text-green-800 rounded-full">
              Active
            </span>
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            Unit 2B • 4 members • Created Jan 15, 2024
          </p>
        </div>

        <div className="p-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <p className="text-2xl font-bold text-blue-600">$1,200</p>
              <p className="text-sm text-muted-foreground">Monthly Rent</p>
              <p className="text-xs text-muted-foreground">$300 per person</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <p className="text-2xl font-bold text-green-600">$480</p>
              <p className="text-sm text-muted-foreground">Total Utilities</p>
              <p className="text-xs text-muted-foreground">$120 per person</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <p className="text-2xl font-bold text-purple-600">$420</p>
              <p className="text-sm text-muted-foreground">Your Share</p>
              <p className="text-xs text-muted-foreground">All expenses</p>
            </div>
          </div>
        </div>
      </div>

      {/* Group Members */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-6 border-b flex justify-between items-center">
          <h2 className="text-xl font-semibold">Group Members</h2>
          <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90">
            Invite Member
          </button>
        </div>

        <div className="p-6">
          <div className="grid gap-4 md:grid-cols-2">
            {/* Member 1 - Current User */}
            <div className="p-4 border rounded-lg bg-blue-50">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">JD</span>
                </div>
                <div>
                  <h4 className="font-medium">John Doe (You)</h4>
                  <p className="text-sm text-muted-foreground">
                    john.doe@email.com
                  </p>
                </div>
                <span className="ml-auto px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                  Admin
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="font-medium">Payment Status</p>
                  <span className="text-green-600">Paid</span>
                </div>
                <div>
                  <p className="font-medium">Share Amount</p>
                  <span className="font-medium">$420.00</span>
                </div>
              </div>
            </div>

            {/* Member 2 */}
            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">JS</span>
                </div>
                <div>
                  <h4 className="font-medium">Jane Smith</h4>
                  <p className="text-sm text-muted-foreground">
                    jane.smith@email.com
                  </p>
                </div>
                <span className="ml-auto px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">
                  Member
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="font-medium">Payment Status</p>
                  <span className="text-green-600">Paid</span>
                </div>
                <div>
                  <p className="font-medium">Share Amount</p>
                  <span className="font-medium">$420.00</span>
                </div>
              </div>
            </div>

            {/* Member 3 */}
            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">MW</span>
                </div>
                <div>
                  <h4 className="font-medium">Mike Wilson</h4>
                  <p className="text-sm text-muted-foreground">
                    mike.wilson@email.com
                  </p>
                </div>
                <span className="ml-auto px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">
                  Member
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="font-medium">Payment Status</p>
                  <span className="text-yellow-600">Pending</span>
                </div>
                <div>
                  <p className="font-medium">Share Amount</p>
                  <span className="font-medium">$420.00</span>
                </div>
              </div>
            </div>

            {/* Member 4 */}
            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">SD</span>
                </div>
                <div>
                  <h4 className="font-medium">Sarah Davis</h4>
                  <p className="text-sm text-muted-foreground">
                    sarah.davis@email.com
                  </p>
                </div>
                <span className="ml-auto px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">
                  Member
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="font-medium">Payment Status</p>
                  <span className="text-red-600">Overdue</span>
                </div>
                <div>
                  <p className="font-medium">Share Amount</p>
                  <span className="font-medium">$420.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">Recent Group Activity</h2>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 border rounded-lg">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-green-600"
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
              <div className="flex-1">
                <p className="text-sm font-medium">
                  Jane Smith paid her March share
                </p>
                <p className="text-xs text-muted-foreground">
                  2 hours ago • $420.00
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 border rounded-lg">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">
                  Utility bill split updated
                </p>
                <p className="text-xs text-muted-foreground">
                  1 day ago • Electricity bill added
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 border rounded-lg">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-yellow-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">
                  Payment reminder sent to Mike Wilson
                </p>
                <p className="text-xs text-muted-foreground">
                  2 days ago • March payment pending
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-3">
        <button className="p-4 border rounded-lg hover:bg-gray-50 text-left">
          <h4 className="font-medium mb-1">Split New Expense</h4>
          <p className="text-sm text-muted-foreground">
            Add a new expense to split among group members
          </p>
        </button>

        <button className="p-4 border rounded-lg hover:bg-gray-50 text-left">
          <h4 className="font-medium mb-1">Send Reminder</h4>
          <p className="text-sm text-muted-foreground">
            Remind members about pending payments
          </p>
        </button>

        <button className="p-4 border rounded-lg hover:bg-gray-50 text-left">
          <h4 className="font-medium mb-1">Group Settings</h4>
          <p className="text-sm text-muted-foreground">
            Manage group preferences and rules
          </p>
        </button>
      </div>
    </div>
  );
}
