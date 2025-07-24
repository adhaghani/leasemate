export default function TenantUpcomingPaymentsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Upcoming Payments</h1>
        <p className="text-muted-foreground">
          View and manage your upcoming rent payments
        </p>
      </div>

      <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4">Next Payment Due</h2>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-blue-900">
                January 2025 Rent
              </h3>
              <p className="text-blue-700">Due on January 1, 2025</p>
              <p className="text-sm text-blue-600 mt-1">5 days remaining</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-blue-900">$1,200.00</p>
              <button className="mt-2 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4">Payment Schedule</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg bg-blue-50">
            <div>
              <h3 className="font-medium">January 2025 Rent</h3>
              <p className="text-sm text-muted-foreground">Due: Jan 1, 2025</p>
            </div>
            <div className="text-right">
              <p className="font-semibold">$1,200.00</p>
              <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                Due Soon
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h3 className="font-medium">February 2025 Rent</h3>
              <p className="text-sm text-muted-foreground">Due: Feb 1, 2025</p>
            </div>
            <div className="text-right">
              <p className="font-semibold">$1,200.00</p>
              <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                Scheduled
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h3 className="font-medium">March 2025 Rent</h3>
              <p className="text-sm text-muted-foreground">Due: Mar 1, 2025</p>
            </div>
            <div className="text-right">
              <p className="font-semibold">$1,200.00</p>
              <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                Scheduled
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Auto-Pay Settings</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span>Auto-pay enabled</span>
              <div className="w-12 h-6 bg-gray-200 rounded-full flex items-center">
                <div className="w-5 h-5 bg-white rounded-full shadow transform transition"></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span>Payment method</span>
              <span className="text-sm text-muted-foreground">**** 1234</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Auto-pay date</span>
              <span className="text-sm text-muted-foreground">
                1st of month
              </span>
            </div>
          </div>
          <button className="w-full mt-4 border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50">
            Manage Auto-Pay
          </button>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Payment Reminders</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span>Email reminders</span>
              <div className="w-12 h-6 bg-blue-600 rounded-full flex items-center justify-end pr-1">
                <div className="w-5 h-5 bg-white rounded-full shadow"></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span>SMS reminders</span>
              <div className="w-12 h-6 bg-blue-600 rounded-full flex items-center justify-end pr-1">
                <div className="w-5 h-5 bg-white rounded-full shadow"></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span>Reminder timing</span>
              <span className="text-sm text-muted-foreground">
                3 days before
              </span>
            </div>
          </div>
          <button className="w-full mt-4 border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50">
            Update Preferences
          </button>
        </div>
      </div>
    </div>
  );
}
