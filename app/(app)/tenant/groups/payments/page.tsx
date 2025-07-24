export default function TenantGroupPaymentsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Group Payment Splits
        </h1>
        <p className="text-muted-foreground">
          Manage and track shared expenses with your roommates
        </p>
      </div>

      {/* Current Month Summary */}
      <div className="grid gap-4 md:grid-cols-4">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <h3 className="text-lg font-semibold">Total Expenses</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">$1,680</p>
          <p className="text-sm text-muted-foreground">March 2024</p>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <h3 className="text-lg font-semibold">Your Share</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">$420</p>
          <p className="text-sm text-muted-foreground">25% of total</p>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <h3 className="text-lg font-semibold">Paid Amount</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">$420</p>
          <p className="text-sm text-muted-foreground">Fully paid</p>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <h3 className="text-lg font-semibold">Outstanding</h3>
          <p className="text-3xl font-bold text-red-600 mt-2">$420</p>
          <p className="text-sm text-muted-foreground">From other members</p>
        </div>
      </div>

      {/* Expense Breakdown */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-6 border-b flex justify-between items-center">
          <h2 className="text-xl font-semibold">March 2024 Expenses</h2>
          <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90">
            Add Expense
          </button>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            {/* Rent */}
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Monthly Rent</h4>
                    <p className="text-sm text-muted-foreground">
                      Split equally among 4 members
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold">$1,200.00</p>
                  <p className="text-sm text-muted-foreground">
                    Your share: $300.00
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-2 mb-3">
                <div className="text-center p-2 bg-green-50 rounded">
                  <p className="text-xs font-medium">John (You)</p>
                  <p className="text-sm font-bold text-green-600">Paid</p>
                </div>
                <div className="text-center p-2 bg-green-50 rounded">
                  <p className="text-xs font-medium">Jane</p>
                  <p className="text-sm font-bold text-green-600">Paid</p>
                </div>
                <div className="text-center p-2 bg-yellow-50 rounded">
                  <p className="text-xs font-medium">Mike</p>
                  <p className="text-sm font-bold text-yellow-600">Pending</p>
                </div>
                <div className="text-center p-2 bg-red-50 rounded">
                  <p className="text-xs font-medium">Sarah</p>
                  <p className="text-sm font-bold text-red-600">Overdue</p>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md">
                  View Details
                </button>
                <button className="px-3 py-1 border text-sm rounded-md">
                  Send Reminder
                </button>
              </div>
            </div>

            {/* Utilities */}
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-yellow-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Electricity Bill</h4>
                    <p className="text-sm text-muted-foreground">
                      Split equally among 4 members
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold">$280.00</p>
                  <p className="text-sm text-muted-foreground">
                    Your share: $70.00
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-2 mb-3">
                <div className="text-center p-2 bg-green-50 rounded">
                  <p className="text-xs font-medium">John (You)</p>
                  <p className="text-sm font-bold text-green-600">Paid</p>
                </div>
                <div className="text-center p-2 bg-green-50 rounded">
                  <p className="text-xs font-medium">Jane</p>
                  <p className="text-sm font-bold text-green-600">Paid</p>
                </div>
                <div className="text-center p-2 bg-green-50 rounded">
                  <p className="text-xs font-medium">Mike</p>
                  <p className="text-sm font-bold text-green-600">Paid</p>
                </div>
                <div className="text-center p-2 bg-green-50 rounded">
                  <p className="text-xs font-medium">Sarah</p>
                  <p className="text-sm font-bold text-green-600">Paid</p>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md">
                  View Details
                </button>
                <button className="px-3 py-1 border text-sm rounded-md">
                  Download Receipt
                </button>
              </div>
            </div>

            {/* Internet */}
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Internet & Cable</h4>
                    <p className="text-sm text-muted-foreground">
                      Split equally among 4 members
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold">$120.00</p>
                  <p className="text-sm text-muted-foreground">
                    Your share: $30.00
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-2 mb-3">
                <div className="text-center p-2 bg-green-50 rounded">
                  <p className="text-xs font-medium">John (You)</p>
                  <p className="text-sm font-bold text-green-600">Paid</p>
                </div>
                <div className="text-center p-2 bg-yellow-50 rounded">
                  <p className="text-xs font-medium">Jane</p>
                  <p className="text-sm font-bold text-yellow-600">Pending</p>
                </div>
                <div className="text-center p-2 bg-yellow-50 rounded">
                  <p className="text-xs font-medium">Mike</p>
                  <p className="text-sm font-bold text-yellow-600">Pending</p>
                </div>
                <div className="text-center p-2 bg-yellow-50 rounded">
                  <p className="text-xs font-medium">Sarah</p>
                  <p className="text-sm font-bold text-yellow-600">Pending</p>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md">
                  View Details
                </button>
                <button className="px-3 py-1 border text-sm rounded-md">
                  Send Reminder
                </button>
              </div>
            </div>

            {/* Groceries */}
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Shared Groceries</h4>
                    <p className="text-sm text-muted-foreground">
                      Household essentials and shared food
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold">$80.00</p>
                  <p className="text-sm text-muted-foreground">
                    Your share: $20.00
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-2 mb-3">
                <div className="text-center p-2 bg-green-50 rounded">
                  <p className="text-xs font-medium">John (You)</p>
                  <p className="text-sm font-bold text-green-600">Paid</p>
                </div>
                <div className="text-center p-2 bg-green-50 rounded">
                  <p className="text-xs font-medium">Jane</p>
                  <p className="text-sm font-bold text-green-600">Paid</p>
                </div>
                <div className="text-center p-2 bg-green-50 rounded">
                  <p className="text-xs font-medium">Mike</p>
                  <p className="text-sm font-bold text-green-600">Paid</p>
                </div>
                <div className="text-center p-2 bg-green-50 rounded">
                  <p className="text-xs font-medium">Sarah</p>
                  <p className="text-sm font-bold text-green-600">Paid</p>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md">
                  View Details
                </button>
                <button className="px-3 py-1 border text-sm rounded-md">
                  Add Receipt
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment History */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">Recent Payment Activity</h2>
        </div>

        <div className="p-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">
                    You paid your share for Electricity
                  </p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
              </div>
              <span className="text-sm font-medium text-green-600">$70.00</span>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">
                    Jane paid her share for Electricity
                  </p>
                  <p className="text-xs text-muted-foreground">3 hours ago</p>
                </div>
              </div>
              <span className="text-sm font-medium text-green-600">$70.00</span>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path
                      fillRule="evenodd"
                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">
                    New expense added: Electricity Bill
                  </p>
                  <p className="text-xs text-muted-foreground">1 day ago</p>
                </div>
              </div>
              <span className="text-sm font-medium text-blue-600">$280.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
