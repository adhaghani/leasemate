export default function LandlordPayments() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Rent & Payments</h1>
        <p className="text-muted-foreground">
          Track rent collection, payment history, and financial reports.
        </p>
      </div>

      <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4">Payment Management</h2>
        <p className="text-muted-foreground">
          This page will show rent collection status, payment history, late
          payments, and financial reports.
        </p>
      </div>
    </div>
  );
}
