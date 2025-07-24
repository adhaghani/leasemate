export default function TenantPaymentMethodsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Payment Methods</h1>
        <p className="text-muted-foreground">
          Manage your payment methods and preferences
        </p>
      </div>

      {/* Primary Payment Method */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">Primary Payment Method</h2>
          <p className="text-sm text-muted-foreground">
            Used for automatic rent payments
          </p>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between p-4 border rounded-lg bg-blue-50">
            <div className="flex items-center gap-4">
              <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">VISA</span>
              </div>
              <div>
                <p className="font-medium">•••• •••• •••• 4321</p>
                <p className="text-sm text-muted-foreground">Expires 12/26</p>
              </div>
            </div>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
              Primary
            </span>
          </div>
        </div>
      </div>

      {/* Saved Payment Methods */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-6 border-b">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold">Saved Payment Methods</h2>
              <p className="text-sm text-muted-foreground">
                Manage your saved cards and bank accounts
              </p>
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Add Payment Method
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">VISA</span>
                </div>
                <div>
                  <p className="font-medium">•••• •••• •••• 4321</p>
                  <p className="text-sm text-muted-foreground">Expires 12/26</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="text-blue-600 hover:underline text-sm">
                  Set as Primary
                </button>
                <button className="text-red-600 hover:underline text-sm">
                  Remove
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-8 bg-red-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">MC</span>
                </div>
                <div>
                  <p className="font-medium">•••• •••• •••• 8765</p>
                  <p className="text-sm text-muted-foreground">Expires 08/27</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="text-blue-600 hover:underline text-sm">
                  Set as Primary
                </button>
                <button className="text-red-600 hover:underline text-sm">
                  Remove
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-8 bg-green-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">BANK</span>
                </div>
                <div>
                  <p className="font-medium">Chase Bank •••• 9876</p>
                  <p className="text-sm text-muted-foreground">
                    Checking Account
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="text-blue-600 hover:underline text-sm">
                  Set as Primary
                </button>
                <button className="text-red-600 hover:underline text-sm">
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Preferences */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">Payment Preferences</h2>
          <p className="text-sm text-muted-foreground">
            Configure automatic payments and notifications
          </p>
        </div>

        <div className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Auto-pay Rent</h3>
              <p className="text-sm text-muted-foreground">
                Automatically pay rent on the due date
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Payment Reminders</h3>
              <p className="text-sm text-muted-foreground">
                Get reminded before payment due dates
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="space-y-2">
            <h3 className="font-medium">Reminder Schedule</h3>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" defaultChecked />
                <span className="text-sm">5 days before due date</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" defaultChecked />
                <span className="text-sm">1 day before due date</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">On due date</span>
              </label>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-medium">Notification Method</h3>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="notification"
                  className="rounded"
                  defaultChecked
                />
                <span className="text-sm">Email notifications</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="notification" className="rounded" />
                <span className="text-sm">SMS notifications</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="notification" className="rounded" />
                <span className="text-sm">Both email and SMS</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Security Information */}
      <div className="rounded-lg border text-card-foreground shadow-sm bg-yellow-50">
        <div className="p-6">
          <div className="flex items-start gap-3">
            <svg
              className="w-5 h-5 text-yellow-600 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
            <div>
              <h3 className="font-medium text-yellow-800">Security Notice</h3>
              <p className="text-sm text-yellow-700 mt-1">
                Your payment information is encrypted and secure. We never store
                your full card details on our servers. All transactions are
                processed through our secure payment partners.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Payment History Quick Link */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Recent Payment Activity</h3>
              <p className="text-sm text-muted-foreground">
                View your latest transactions and receipts
              </p>
            </div>
            <a
              href="/tenant/payments/history"
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              View Payment History
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
