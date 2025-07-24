export default function TenantRentalDetails() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          My Rental Property
        </h1>
        <p className="text-muted-foreground">
          View details about your current rental property and lease information.
        </p>
      </div>

      <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4">Property Information</h2>
        <p className="text-muted-foreground">
          This page will display detailed information about your rental property
          including address, amenities, and lease details.
        </p>
      </div>
    </div>
  );
}
