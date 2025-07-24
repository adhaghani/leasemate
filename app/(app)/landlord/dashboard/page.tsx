export default function LandlordDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Landlord Dashboard
        </h1>
        <p className="text-muted-foreground">
          Manage your properties, tenants, and rental income from one central
          location.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <h3 className="text-lg font-semibold">Total Properties</h3>
          <p className="text-sm text-muted-foreground">Active properties</p>
          <p className="text-2xl font-bold mt-2">8</p>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <h3 className="text-lg font-semibold">Occupied Units</h3>
          <p className="text-sm text-muted-foreground">Current occupancy</p>
          <p className="text-2xl font-bold text-green-600 mt-2">15/18</p>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <h3 className="text-lg font-semibold">Monthly Revenue</h3>
          <p className="text-sm text-muted-foreground">This month</p>
          <p className="text-2xl font-bold mt-2">$12,450</p>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <h3 className="text-lg font-semibold">Maintenance</h3>
          <p className="text-sm text-muted-foreground">Pending requests</p>
          <p className="text-2xl font-bold text-orange-600 mt-2">6</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm">Rent collected from Unit 3A</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span className="text-sm">Maintenance request from Unit 2B</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm">New tenant application received</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-sm">Lease renewal signed for Unit 1C</span>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full text-left p-3 rounded-md border hover:bg-accent hover:text-accent-foreground transition-colors">
              Add New Property
            </button>
            <button className="w-full text-left p-3 rounded-md border hover:bg-accent hover:text-accent-foreground transition-colors">
              Review Tenant Applications
            </button>
            <button className="w-full text-left p-3 rounded-md border hover:bg-accent hover:text-accent-foreground transition-colors">
              Generate Financial Report
            </button>
            <button className="w-full text-left p-3 rounded-md border hover:bg-accent hover:text-accent-foreground transition-colors">
              Send Announcement
            </button>
          </div>
        </div>
      </div>

      <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4">Properties Overview</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h4 className="font-medium">Sunset Apartments</h4>
              <p className="text-sm text-muted-foreground">
                12 units • 10 occupied
              </p>
            </div>
            <div className="text-right">
              <p className="font-medium">$8,400/month</p>
              <p className="text-sm text-green-600">83% occupied</p>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h4 className="font-medium">Downtown Condos</h4>
              <p className="text-sm text-muted-foreground">
                4 units • 3 occupied
              </p>
            </div>
            <div className="text-right">
              <p className="font-medium">$2,850/month</p>
              <p className="text-sm text-green-600">75% occupied</p>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h4 className="font-medium">Riverside Complex</h4>
              <p className="text-sm text-muted-foreground">
                2 units • 2 occupied
              </p>
            </div>
            <div className="text-right">
              <p className="font-medium">$1,200/month</p>
              <p className="text-sm text-green-600">100% occupied</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
