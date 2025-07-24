export default function LandlordMaintenance() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Maintenance Management
        </h1>
        <p className="text-muted-foreground">
          Manage maintenance requests, assign contractors, and track maintenance
          history.
        </p>
      </div>

      <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4">Maintenance Dashboard</h2>
        <p className="text-muted-foreground">
          This page will show all maintenance requests, contractor assignments,
          and maintenance scheduling.
        </p>
      </div>
    </div>
  );
}
