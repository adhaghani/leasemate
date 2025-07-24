export default function TenantDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Tenant Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to your tenant portal. Manage your rental, payments, and
          communicate with your landlord.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <h3 className="text-lg font-semibold">Rent Status</h3>
          <p className="text-sm text-muted-foreground">Current month rent</p>
          <p className="text-2xl font-bold text-green-600 mt-2">Paid</p>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <h3 className="text-lg font-semibold">Next Payment</h3>
          <p className="text-sm text-muted-foreground">Due date</p>
          <p className="text-2xl font-bold mt-2">Feb 1, 2025</p>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <h3 className="text-lg font-semibold">Maintenance</h3>
          <p className="text-sm text-muted-foreground">Open requests</p>
          <p className="text-2xl font-bold mt-2">2</p>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <h3 className="text-lg font-semibold">Messages</h3>
          <p className="text-sm text-muted-foreground">Unread messages</p>
          <p className="text-2xl font-bold mt-2">1</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm">Rent payment processed</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm">Maintenance request submitted</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
              <span className="text-sm">Message from landlord</span>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full text-left p-3 rounded-md border hover:bg-accent hover:text-accent-foreground transition-colors">
              Submit Maintenance Request
            </button>
            <button className="w-full text-left p-3 rounded-md border hover:bg-accent hover:text-accent-foreground transition-colors">
              View Payment History
            </button>
            <button className="w-full text-left p-3 rounded-md border hover:bg-accent hover:text-accent-foreground transition-colors">
              Contact Landlord
            </button>
            <button className="w-full text-left p-3 rounded-md border hover:bg-accent hover:text-accent-foreground transition-colors">
              Download Lease Agreement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
