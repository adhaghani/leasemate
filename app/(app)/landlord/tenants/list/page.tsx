export default function LandlordTenantsListPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Tenant List</h1>
          <p className="text-muted-foreground">
            Manage all tenant information and communications
          </p>
        </div>
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90">
          Add Tenant
        </button>
      </div>

      <div className="flex gap-4 items-center">
        <input
          type="text"
          placeholder="Search tenants..."
          className="flex h-9 w-full max-w-sm rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        />
        <select className="flex h-9 w-[180px] items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring">
          <option>All Tenants</option>
          <option>Active Leases</option>
          <option>Expiring Soon</option>
          <option>Past Due</option>
        </select>
        <select className="flex h-9 w-[180px] items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring">
          <option>All Properties</option>
          <option>Sunset Apartments</option>
          <option>Oak Grove Complex</option>
          <option>Pine Ridge Townhomes</option>
        </select>
      </div>

      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-6">
          <div className="grid gap-6">
            {/* Tenant Card 1 */}
            <div className="border rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold text-lg">
                      JD
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">John Doe</h3>
                    <p className="text-muted-foreground">john.doe@email.com</p>
                    <p className="text-muted-foreground">(555) 123-4567</p>
                  </div>
                </div>
                <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-green-100 text-green-800 rounded-full">
                  Active Lease
                </span>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">
                    Property
                  </p>
                  <p className="font-medium">Sunset Apartments</p>
                  <p className="text-sm text-muted-foreground">Unit 1A</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">
                    Monthly Rent
                  </p>
                  <p className="font-medium text-green-600">$1,200</p>
                  <p className="text-sm text-muted-foreground">Paid on time</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">
                    Lease Period
                  </p>
                  <p className="font-medium">Jan 1, 2024</p>
                  <p className="text-sm text-muted-foreground">
                    to Dec 31, 2024
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">
                    Move-in Date
                  </p>
                  <p className="font-medium">Jan 1, 2024</p>
                  <p className="text-sm text-muted-foreground">10 months ago</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                  Rent Current
                </span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  Good Standing
                </span>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                  Background Check Complete
                </span>
              </div>

              <div className="flex gap-2">
                <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700">
                  View Profile
                </button>
                <button className="px-3 py-1 border border-gray-300 text-sm rounded-md hover:bg-gray-50">
                  Send Message
                </button>
                <button className="px-3 py-1 border border-gray-300 text-sm rounded-md hover:bg-gray-50">
                  View Lease
                </button>
                <button className="px-3 py-1 border border-gray-300 text-sm rounded-md hover:bg-gray-50">
                  Payment History
                </button>
              </div>
            </div>

            {/* Tenant Card 2 */}
            <div className="border rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-semibold text-lg">
                      JS
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Jane Smith</h3>
                    <p className="text-muted-foreground">
                      jane.smith@email.com
                    </p>
                    <p className="text-muted-foreground">(555) 234-5678</p>
                  </div>
                </div>
                <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-green-100 text-green-800 rounded-full">
                  Active Lease
                </span>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">
                    Property
                  </p>
                  <p className="font-medium">Sunset Apartments</p>
                  <p className="text-sm text-muted-foreground">Unit 1B</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">
                    Monthly Rent
                  </p>
                  <p className="font-medium text-green-600">$1,200</p>
                  <p className="text-sm text-muted-foreground">Paid on time</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">
                    Lease Period
                  </p>
                  <p className="font-medium">Feb 15, 2024</p>
                  <p className="text-sm text-muted-foreground">
                    to Jan 15, 2025
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">
                    Move-in Date
                  </p>
                  <p className="font-medium">Feb 15, 2024</p>
                  <p className="text-sm text-muted-foreground">9 months ago</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                  Rent Current
                </span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  Good Standing
                </span>
                <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">
                  Recent Message
                </span>
              </div>

              <div className="flex gap-2">
                <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700">
                  View Profile
                </button>
                <button className="px-3 py-1 border border-gray-300 text-sm rounded-md hover:bg-gray-50">
                  Send Message
                </button>
                <button className="px-3 py-1 border border-gray-300 text-sm rounded-md hover:bg-gray-50">
                  View Lease
                </button>
                <button className="px-3 py-1 border border-gray-300 text-sm rounded-md hover:bg-gray-50">
                  Payment History
                </button>
              </div>
            </div>

            {/* Tenant Card 3 */}
            <div className="border rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-semibold text-lg">
                      MW
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Mike Wilson</h3>
                    <p className="text-muted-foreground">
                      mike.wilson@email.com
                    </p>
                    <p className="text-muted-foreground">(555) 345-6789</p>
                  </div>
                </div>
                <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-yellow-100 text-yellow-800 rounded-full">
                  Expiring Soon
                </span>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">
                    Property
                  </p>
                  <p className="font-medium">Oak Grove Complex</p>
                  <p className="text-sm text-muted-foreground">Unit A</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">
                    Monthly Rent
                  </p>
                  <p className="font-medium text-green-600">$1,200</p>
                  <p className="text-sm text-muted-foreground">Paid on time</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">
                    Lease Period
                  </p>
                  <p className="font-medium">Mar 15, 2023</p>
                  <p className="text-sm text-muted-foreground">
                    to Mar 15, 2024
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">
                    Move-in Date
                  </p>
                  <p className="font-medium">Mar 15, 2023</p>
                  <p className="text-sm text-muted-foreground">11 months ago</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                  Rent Current
                </span>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                  Lease Expires in 30 days
                </span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  Renewal Pending
                </span>
              </div>

              <div className="flex gap-2">
                <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700">
                  View Profile
                </button>
                <button className="px-3 py-1 bg-orange-600 text-white text-sm rounded-md hover:bg-orange-700">
                  Send Renewal
                </button>
                <button className="px-3 py-1 border border-gray-300 text-sm rounded-md hover:bg-gray-50">
                  Send Message
                </button>
                <button className="px-3 py-1 border border-gray-300 text-sm rounded-md hover:bg-gray-50">
                  View Lease
                </button>
              </div>
            </div>

            {/* Tenant Card 4 */}
            <div className="border rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 font-semibold text-lg">
                      AA
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Alex Anderson</h3>
                    <p className="text-muted-foreground">
                      alex.anderson@email.com
                    </p>
                    <p className="text-muted-foreground">(555) 456-7890</p>
                  </div>
                </div>
                <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-red-100 text-red-800 rounded-full">
                  Past Due
                </span>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">
                    Property
                  </p>
                  <p className="font-medium">Pine Ridge Townhomes</p>
                  <p className="text-sm text-muted-foreground">Unit 1</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">
                    Monthly Rent
                  </p>
                  <p className="font-medium text-red-600">$1,600</p>
                  <p className="text-sm text-muted-foreground">
                    5 days overdue
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">
                    Lease Period
                  </p>
                  <p className="font-medium">Jun 1, 2024</p>
                  <p className="text-sm text-muted-foreground">
                    to May 31, 2025
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">
                    Move-in Date
                  </p>
                  <p className="font-medium">Jun 1, 2024</p>
                  <p className="text-sm text-muted-foreground">6 months ago</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">
                  Payment Overdue
                </span>
                <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">
                  Late Notice Sent
                </span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  Good Standing (Previous)
                </span>
              </div>

              <div className="flex gap-2">
                <button className="px-3 py-1 bg-red-600 text-white text-sm rounded-md hover:bg-red-700">
                  Follow Up
                </button>
                <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700">
                  View Profile
                </button>
                <button className="px-3 py-1 border border-gray-300 text-sm rounded-md hover:bg-gray-50">
                  Send Message
                </button>
                <button className="px-3 py-1 border border-gray-300 text-sm rounded-md hover:bg-gray-50">
                  Payment History
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
