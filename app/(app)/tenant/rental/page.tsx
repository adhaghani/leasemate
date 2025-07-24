export default function TenantRentalPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">My Rental</h1>
        <p className="text-muted-foreground">
          View and manage your rental property information
        </p>
      </div>

      <div className="grid gap-6">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Property Overview</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h3 className="font-medium text-sm text-muted-foreground">
                Address
              </h3>
              <p className="text-lg">123 Main Street, Apartment 2B</p>
            </div>
            <div>
              <h3 className="font-medium text-sm text-muted-foreground">
                Lease Start
              </h3>
              <p className="text-lg">January 1, 2024</p>
            </div>
            <div>
              <h3 className="font-medium text-sm text-muted-foreground">
                Lease End
              </h3>
              <p className="text-lg">December 31, 2024</p>
            </div>
            <div>
              <h3 className="font-medium text-sm text-muted-foreground">
                Monthly Rent
              </h3>
              <p className="text-lg font-semibold">$1,200</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-2">Lease Agreement</h3>
            <p className="text-sm text-muted-foreground mb-4">
              View your current lease agreement and terms
            </p>
            <button className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90">
              View Lease
            </button>
          </div>

          <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-2">Documents</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Access all rental-related documents
            </p>
            <button className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90">
              View Documents
            </button>
          </div>

          <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-2">Emergency Contacts</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Important contact information
            </p>
            <button className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90">
              View Contacts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
