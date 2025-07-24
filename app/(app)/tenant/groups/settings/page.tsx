export default function TenantGroupSettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Group Settings</h1>
        <p className="text-muted-foreground">
          Manage your group preferences and payment rules
        </p>
      </div>

      {/* Group Information */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">Group Information</h2>
        </div>

        <div className="p-6 space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="text-sm font-medium mb-2 block">
                Group Name
              </label>
              <input
                type="text"
                value="Sunset Apartment Group"
                className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">
                Property Address
              </label>
              <input
                type="text"
                value="123 Sunset Avenue, Unit 2B"
                className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">
                Lease Start Date
              </label>
              <input
                type="date"
                value="2024-01-15"
                className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">
                Lease End Date
              </label>
              <input
                type="date"
                value="2024-12-31"
                className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">
              Group Description
            </label>
            <textarea
              rows={3}
              placeholder="Add a description for your group..."
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            />
          </div>
        </div>
      </div>

      {/* Payment Rules */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">Payment Rules</h2>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-4">Rent Split Method</h3>
            <div className="space-y-3">
              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  name="rent_split"
                  value="equal"
                  defaultChecked
                  className="w-4 h-4"
                />
                <div>
                  <p className="font-medium">Equal Split</p>
                  <p className="text-sm text-muted-foreground">
                    Divide rent equally among all members ($300 each)
                  </p>
                </div>
              </label>

              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  name="rent_split"
                  value="custom"
                  className="w-4 h-4"
                />
                <div>
                  <p className="font-medium">Custom Split</p>
                  <p className="text-sm text-muted-foreground">
                    Set different amounts for each member based on room size
                  </p>
                </div>
              </label>

              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  name="rent_split"
                  value="percentage"
                  className="w-4 h-4"
                />
                <div>
                  <p className="font-medium">Percentage Split</p>
                  <p className="text-sm text-muted-foreground">
                    Split based on percentage allocation
                  </p>
                </div>
              </label>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Utility Split Rules</h3>
            <div className="space-y-3">
              <label className="flex items-center gap-3">
                <input type="checkbox" defaultChecked className="w-4 h-4" />
                <div>
                  <p className="font-medium">Split electricity equally</p>
                  <p className="text-sm text-muted-foreground">
                    Divide monthly electricity bill among all members
                  </p>
                </div>
              </label>

              <label className="flex items-center gap-3">
                <input type="checkbox" defaultChecked className="w-4 h-4" />
                <div>
                  <p className="font-medium">Split internet/cable equally</p>
                  <p className="text-sm text-muted-foreground">
                    Divide internet and cable costs among all members
                  </p>
                </div>
              </label>

              <label className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4" />
                <div>
                  <p className="font-medium">Split water bill equally</p>
                  <p className="text-sm text-muted-foreground">
                    Include water usage in shared expenses
                  </p>
                </div>
              </label>

              <label className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4" />
                <div>
                  <p className="font-medium">Split shared groceries</p>
                  <p className="text-sm text-muted-foreground">
                    Include household essentials and shared food items
                  </p>
                </div>
              </label>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Payment Deadlines</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Rent Due Date
                </label>
                <select className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm">
                  <option value="1">1st of each month</option>
                  <option value="5">5th of each month</option>
                  <option value="15">15th of each month</option>
                  <option value="last">Last day of month</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">
                  Utility Payment Deadline
                </label>
                <select className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm">
                  <option value="5">5 days after bill received</option>
                  <option value="7">1 week after bill received</option>
                  <option value="14">2 weeks after bill received</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Late Payment Policy</h3>
            <div className="space-y-4">
              <label className="flex items-center gap-3">
                <input type="checkbox" defaultChecked className="w-4 h-4" />
                <span>Enable automatic payment reminders</span>
              </label>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Grace Period
                  </label>
                  <select className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm">
                    <option value="3">3 days</option>
                    <option value="5">5 days</option>
                    <option value="7">1 week</option>
                    <option value="14">2 weeks</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Late Fee Amount
                  </label>
                  <input
                    type="number"
                    placeholder="Enter amount in $"
                    className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">Notification Settings</h2>
        </div>

        <div className="p-6 space-y-4">
          <div className="space-y-3">
            <label className="flex items-center gap-3">
              <input type="checkbox" defaultChecked className="w-4 h-4" />
              <div>
                <p className="font-medium">Payment reminders</p>
                <p className="text-sm text-muted-foreground">
                  Get notified about upcoming and overdue payments
                </p>
              </div>
            </label>

            <label className="flex items-center gap-3">
              <input type="checkbox" defaultChecked className="w-4 h-4" />
              <div>
                <p className="font-medium">New expense notifications</p>
                <p className="text-sm text-muted-foreground">
                  Get notified when new shared expenses are added
                </p>
              </div>
            </label>

            <label className="flex items-center gap-3">
              <input type="checkbox" className="w-4 h-4" />
              <div>
                <p className="font-medium">Group messages</p>
                <p className="text-sm text-muted-foreground">
                  Get notified about new messages in group chat
                </p>
              </div>
            </label>

            <label className="flex items-center gap-3">
              <input type="checkbox" defaultChecked className="w-4 h-4" />
              <div>
                <p className="font-medium">Member activity</p>
                <p className="text-sm text-muted-foreground">
                  Get notified when members join or leave the group
                </p>
              </div>
            </label>
          </div>
        </div>
      </div>

      {/* Group Members Management */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">Member Management</h2>
        </div>

        <div className="p-6 space-y-4">
          <div className="space-y-3">
            {/* Current User */}
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">JD</span>
                </div>
                <div>
                  <p className="font-medium">John Doe (You)</p>
                  <p className="text-sm text-muted-foreground">
                    john.doe@email.com
                  </p>
                </div>
              </div>
              <span className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">
                Admin
              </span>
            </div>

            {/* Other Members */}
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">JS</span>
                </div>
                <div>
                  <p className="font-medium">Jane Smith</p>
                  <p className="text-sm text-muted-foreground">
                    jane.smith@email.com
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <span className="px-3 py-1 text-sm bg-gray-100 text-gray-800 rounded-full">
                  Member
                </span>
                <button className="text-red-600 hover:text-red-800 text-sm">
                  Remove
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">MW</span>
                </div>
                <div>
                  <p className="font-medium">Mike Wilson</p>
                  <p className="text-sm text-muted-foreground">
                    mike.wilson@email.com
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <span className="px-3 py-1 text-sm bg-gray-100 text-gray-800 rounded-full">
                  Member
                </span>
                <button className="text-red-600 hover:text-red-800 text-sm">
                  Remove
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">SD</span>
                </div>
                <div>
                  <p className="font-medium">Sarah Davis</p>
                  <p className="text-sm text-muted-foreground">
                    sarah.davis@email.com
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <span className="px-3 py-1 text-sm bg-gray-100 text-gray-800 rounded-full">
                  Member
                </span>
                <button className="text-red-600 hover:text-red-800 text-sm">
                  Remove
                </button>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t">
            <button className="w-full p-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 text-center">
              <p className="text-sm font-medium text-gray-600">
                Invite New Member
              </p>
              <p className="text-xs text-gray-500">
                Send an invitation via email
              </p>
            </button>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 justify-end">
        <button className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
          Cancel Changes
        </button>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Save Settings
        </button>
      </div>
    </div>
  );
}
