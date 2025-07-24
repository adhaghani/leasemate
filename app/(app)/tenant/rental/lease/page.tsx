export default function TenantLeaseAgreementPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Lease Agreement</h1>
        <p className="text-muted-foreground">
          View your current lease agreement and terms
        </p>
      </div>

      <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">
            Current Lease Agreement
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="font-medium text-sm text-muted-foreground">
                Lease Type
              </h3>
              <p className="text-lg">Fixed Term</p>
            </div>
            <div>
              <h3 className="font-medium text-sm text-muted-foreground">
                Duration
              </h3>
              <p className="text-lg">12 Months</p>
            </div>
            <div>
              <h3 className="font-medium text-sm text-muted-foreground">
                Status
              </h3>
              <p className="text-lg text-green-600 font-semibold">Active</p>
            </div>
            <div>
              <h3 className="font-medium text-sm text-muted-foreground">
                Auto Renewal
              </h3>
              <p className="text-lg">No</p>
            </div>
          </div>
        </div>

        <div className="border-t pt-6">
          <h3 className="text-lg font-semibold mb-4">Lease Documents</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h4 className="font-medium">Original Lease Agreement</h4>
                <p className="text-sm text-muted-foreground">
                  Signed on January 1, 2024
                </p>
              </div>
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90">
                Download PDF
              </button>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h4 className="font-medium">Move-in Inspection Report</h4>
                <p className="text-sm text-muted-foreground">
                  Completed on January 1, 2024
                </p>
              </div>
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90">
                Download PDF
              </button>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h4 className="font-medium">Property Rules & Regulations</h4>
                <p className="text-sm text-muted-foreground">
                  Last updated December 2023
                </p>
              </div>
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90">
                Download PDF
              </button>
            </div>
          </div>
        </div>

        <div className="border-t pt-6 mt-6">
          <h3 className="text-lg font-semibold mb-4">Key Terms</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="font-medium mb-2">Rent Payment Terms</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Monthly rent: $1,200</li>
                <li>• Due date: 1st of each month</li>
                <li>• Late fee: $50 after 5 days</li>
                <li>• Payment methods: Online, Check</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Property Rules</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• No smoking indoors</li>
                <li>• Pets allowed with deposit</li>
                <li>• Quiet hours: 10 PM - 8 AM</li>
                <li>• 24-hour notice for maintenance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
