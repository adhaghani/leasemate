export default function TenantPayments() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Payments</h1>
        <p className="text-muted-foreground">
          Manage your rent payments, view payment history, and update payment
          methods.
        </p>
      </div>

      <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4">Payment Dashboard</h2>
        <p className="text-muted-foreground">
          This page will show payment history, upcoming payments, and payment
          method management.
        </p>
      </div>
    </div>
  );
}
