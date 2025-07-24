export default function TenantMaintenance() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Maintenance Requests
        </h1>
        <p className="text-muted-foreground">
          Submit maintenance requests and track their progress.
        </p>
      </div>

      <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4">Maintenance Dashboard</h2>
        <p className="text-muted-foreground">
          This page will allow you to submit new maintenance requests and view
          the status of existing ones.
        </p>
      </div>
    </div>
  );
}
