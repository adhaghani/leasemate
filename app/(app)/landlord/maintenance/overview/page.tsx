export default function LandlordMaintenanceOverviewPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Maintenance Overview
        </h1>
        <p className="text-muted-foreground">
          Track and manage all maintenance requests across your properties
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <h3 className="text-lg font-semibold">Open Requests</h3>
          <p className="text-3xl font-bold text-red-600 mt-2">7</p>
          <p className="text-sm text-muted-foreground">Requires attention</p>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <h3 className="text-lg font-semibold">In Progress</h3>
          <p className="text-3xl font-bold text-yellow-600 mt-2">3</p>
          <p className="text-sm text-muted-foreground">Being worked on</p>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <h3 className="text-lg font-semibold">Completed This Month</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">12</p>
          <p className="text-sm text-muted-foreground">Resolved issues</p>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <h3 className="text-lg font-semibold">Average Response Time</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">2.3</p>
          <p className="text-sm text-muted-foreground">hours</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold">Recent Requests</h2>
          </div>

          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 border rounded-lg">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
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
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="font-medium">Leaking faucet in kitchen</h4>
                  <p className="text-sm text-muted-foreground">
                    Sunset Apartments, Unit 1B
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Reported by Jane Smith • 2 hours ago
                  </p>
                  <span className="inline-flex items-center px-2 py-1 text-xs bg-red-100 text-red-800 rounded-full mt-2">
                    Urgent
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 border rounded-lg">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-yellow-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="font-medium">Electrical outlet not working</h4>
                  <p className="text-sm text-muted-foreground">
                    Oak Grove Complex, Unit C
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Reported by Tom Brown • 4 hours ago
                  </p>
                  <span className="inline-flex items-center px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded-full mt-2">
                    In Progress
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 border rounded-lg">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="font-medium">AC unit making noise</h4>
                  <p className="text-sm text-muted-foreground">
                    Pine Ridge Townhomes, Unit 1
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Reported by Alex Anderson • 6 hours ago
                  </p>
                  <span className="inline-flex items-center px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full mt-2">
                    Scheduled
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 border rounded-lg">
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
                <div className="flex-1">
                  <h4 className="font-medium">Garbage disposal fixed</h4>
                  <p className="text-sm text-muted-foreground">
                    Sunset Apartments, Unit 1A
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Completed by John Smith • 1 day ago
                  </p>
                  <span className="inline-flex items-center px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full mt-2">
                    Completed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold">Maintenance Team</h2>
          </div>

          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-medium">JS</span>
                  </div>
                  <div>
                    <h4 className="font-medium">John Smith</h4>
                    <p className="text-sm text-muted-foreground">
                      General Maintenance
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                    Available
                  </span>
                  <p className="text-xs text-muted-foreground mt-1">
                    2 active jobs
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-medium">MW</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Mike Williams</h4>
                    <p className="text-sm text-muted-foreground">Electrical</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded-full">
                    Busy
                  </span>
                  <p className="text-xs text-muted-foreground mt-1">
                    1 active job
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-medium">SJ</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Sarah Johnson</h4>
                    <p className="text-sm text-muted-foreground">Plumbing</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                    Available
                  </span>
                  <p className="text-xs text-muted-foreground mt-1">
                    0 active jobs
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 font-medium">RD</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Robert Davis</h4>
                    <p className="text-sm text-muted-foreground">HVAC</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                    Available
                  </span>
                  <p className="text-xs text-muted-foreground mt-1">
                    1 active job
                  </p>
                </div>
              </div>
            </div>

            <button className="w-full mt-4 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
              Manage Team
            </button>
          </div>
        </div>
      </div>

      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-6 border-b flex justify-between items-center">
          <h2 className="text-xl font-semibold">Priority Requests</h2>
          <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90">
            Create Request
          </button>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-semibold text-red-600">
                    Emergency: Water leak in basement
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Sunset Apartments, Unit 1B
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Reported 30 minutes ago by Jane Smith
                  </p>
                </div>
                <span className="inline-flex items-center px-2 py-1 text-xs bg-red-100 text-red-800 rounded-full">
                  Emergency
                </span>
              </div>

              <p className="text-sm mb-3">
                "There's water coming through the ceiling in my basement. It
                appears to be getting worse."
              </p>

              <div className="flex gap-2">
                <button className="px-3 py-1 bg-red-600 text-white text-sm rounded-md">
                  Assign Immediately
                </button>
                <button className="px-3 py-1 border text-sm rounded-md">
                  Contact Tenant
                </button>
                <button className="px-3 py-1 border text-sm rounded-md">
                  View Details
                </button>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-semibold text-orange-600">
                    Heater not working
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Oak Grove Complex, Unit F
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Reported 2 hours ago by Emma Taylor
                  </p>
                </div>
                <span className="inline-flex items-center px-2 py-1 text-xs bg-orange-100 text-orange-800 rounded-full">
                  High Priority
                </span>
              </div>

              <p className="text-sm mb-3">
                "The heater stopped working completely. It's getting quite cold
                in the apartment."
              </p>

              <div className="flex gap-2">
                <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md">
                  Assign to Robert
                </button>
                <button className="px-3 py-1 border text-sm rounded-md">
                  Contact Tenant
                </button>
                <button className="px-3 py-1 border text-sm rounded-md">
                  View Details
                </button>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-semibold">Dishwasher not draining</h4>
                  <p className="text-sm text-muted-foreground">
                    Oak Grove Complex, Unit D
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Reported 4 hours ago by Lisa Garcia
                  </p>
                </div>
                <span className="inline-flex items-center px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                  Normal
                </span>
              </div>

              <p className="text-sm mb-3">
                "Dishwasher is not draining properly. Water pools at the bottom
                after each cycle."
              </p>

              <div className="flex gap-2">
                <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md">
                  Assign to Sarah
                </button>
                <button className="px-3 py-1 border text-sm rounded-md">
                  Contact Tenant
                </button>
                <button className="px-3 py-1 border text-sm rounded-md">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
