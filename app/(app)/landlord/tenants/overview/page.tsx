export default function LandlordTenantsOverviewPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Tenants Overview</h1>
        <p className="text-muted-foreground">
          Manage your tenant relationships and communications
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <h3 className="text-lg font-semibold">Total Tenants</h3>
          <p className="text-3xl font-bold text-primary mt-2">10</p>
          <p className="text-sm text-muted-foreground">Across all properties</p>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <h3 className="text-lg font-semibold">Active Leases</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">9</p>
          <p className="text-sm text-muted-foreground">
            Current lease agreements
          </p>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <h3 className="text-lg font-semibold">Expiring Soon</h3>
          <p className="text-3xl font-bold text-yellow-600 mt-2">2</p>
          <p className="text-sm text-muted-foreground">Next 60 days</p>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <h3 className="text-lg font-semibold">Outstanding Rent</h3>
          <p className="text-3xl font-bold text-red-600 mt-2">$1,200</p>
          <p className="text-sm text-muted-foreground">Past due payments</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold">Recent Tenant Activity</h2>
          </div>

          <div className="p-6">
            <div className="space-y-4">
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
                <div className="flex-1">
                  <p className="text-sm font-medium">
                    John Doe paid rent for Unit 1A
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Sunset Apartments • 2 hours ago
                  </p>
                </div>
                <span className="text-sm font-medium text-green-600">
                  $1,200
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">
                    New message from Jane Smith
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Sunset Apartments • 4 hours ago
                  </p>
                </div>
                <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                  New
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-yellow-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">
                    Lease renewal reminder sent
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Oak Grove Complex • 1 day ago
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-red-600"
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
                    Late rent notice for Alex Anderson
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Pine Ridge Townhomes • 2 days ago
                  </p>
                </div>
                <span className="text-xs px-2 py-1 bg-red-100 text-red-800 rounded-full">
                  Overdue
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold">Lease Renewals</h2>
          </div>

          <div className="p-6">
            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-medium">Mike Wilson</h4>
                    <p className="text-sm text-muted-foreground">
                      Oak Grove Complex, Unit A
                    </p>
                  </div>
                  <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">
                    30 days
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Lease expires: March 15, 2024
                </p>
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-blue-600 text-white text-xs rounded-md">
                    Send Renewal
                  </button>
                  <button className="px-3 py-1 border text-xs rounded-md">
                    Contact
                  </button>
                </div>
              </div>

              <div className="p-4 border rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-medium">Sarah Davis</h4>
                    <p className="text-sm text-muted-foreground">
                      Oak Grove Complex, Unit B
                    </p>
                  </div>
                  <span className="text-xs px-2 py-1 bg-red-100 text-red-800 rounded-full">
                    15 days
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Lease expires: March 1, 2024
                </p>
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-blue-600 text-white text-xs rounded-md">
                    Send Renewal
                  </button>
                  <button className="px-3 py-1 border text-xs rounded-md">
                    Contact
                  </button>
                </div>
              </div>

              <div className="p-4 border rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-medium">Tom Brown</h4>
                    <p className="text-sm text-muted-foreground">
                      Oak Grove Complex, Unit C
                    </p>
                  </div>
                  <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
                    Renewed
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  New lease starts: April 1, 2024
                </p>
                <div className="flex gap-2">
                  <button className="px-3 py-1 border text-xs rounded-md">
                    View Contract
                  </button>
                  <button className="px-3 py-1 border text-xs rounded-md">
                    Contact
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-6 border-b flex justify-between items-center">
          <h2 className="text-xl font-semibold">All Tenants</h2>
          <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90">
            Add Tenant
          </button>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-medium">JD</span>
                  </div>
                  <div>
                    <h4 className="font-medium">John Doe</h4>
                    <p className="text-sm text-muted-foreground">
                      john.doe@email.com
                    </p>
                  </div>
                </div>
                <div className="space-y-1 text-sm">
                  <p>
                    <strong>Unit:</strong> Sunset Apartments 1A
                  </p>
                  <p>
                    <strong>Rent:</strong> $1,200/month
                  </p>
                  <p>
                    <strong>Lease Ends:</strong> Dec 31, 2024
                  </p>
                  <span className="inline-flex items-center px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                    Current
                  </span>
                </div>
              </div>

              <div className="p-4 border rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-medium">JS</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Jane Smith</h4>
                    <p className="text-sm text-muted-foreground">
                      jane.smith@email.com
                    </p>
                  </div>
                </div>
                <div className="space-y-1 text-sm">
                  <p>
                    <strong>Unit:</strong> Sunset Apartments 1B
                  </p>
                  <p>
                    <strong>Rent:</strong> $1,200/month
                  </p>
                  <p>
                    <strong>Lease Ends:</strong> Jan 15, 2025
                  </p>
                  <span className="inline-flex items-center px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                    Current
                  </span>
                </div>
              </div>

              <div className="p-4 border rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-medium">MW</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Mike Wilson</h4>
                    <p className="text-sm text-muted-foreground">
                      mike.wilson@email.com
                    </p>
                  </div>
                </div>
                <div className="space-y-1 text-sm">
                  <p>
                    <strong>Unit:</strong> Oak Grove Complex A
                  </p>
                  <p>
                    <strong>Rent:</strong> $1,200/month
                  </p>
                  <p>
                    <strong>Lease Ends:</strong> Mar 15, 2024
                  </p>
                  <span className="inline-flex items-center px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded-full">
                    Expiring Soon
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
