export default function LandlordTenants() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Tenants</h1>
        <p className="text-muted-foreground">
          Manage tenant applications, screening, leases, and tenant information.
        </p>
      </div>

      <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4">Tenant Management</h2>
        <p className="text-muted-foreground">
          This page will show all your tenants, pending applications, and lease
          management tools.
        </p>
      </div>
    </div>
  );
}
