export default function TenantMessagesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Messages</h1>
        <p className="text-muted-foreground">
          Communicate with your landlord and property management
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Conversations</h2>
            <div className="space-y-3">
              <div className="p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Property Manager</h3>
                    <p className="text-sm text-muted-foreground">
                      Sarah Johnson
                    </p>
                  </div>
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Maintenance update for your...
                </p>
              </div>

              <div className="p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Landlord</h3>
                    <p className="text-sm text-muted-foreground">Mike Chen</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Thanks for the payment...
                </p>
              </div>

              <div className="p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                <div>
                  <h3 className="font-medium">Maintenance Team</h3>
                  <p className="text-sm text-muted-foreground">
                    ABC Maintenance
                  </p>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Scheduled for tomorrow...
                </p>
              </div>
            </div>

            <button className="w-full mt-4 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90">
              New Message
            </button>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm h-[600px] flex flex-col">
            <div className="p-4 border-b">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                  SJ
                </div>
                <div>
                  <h3 className="font-medium">Sarah Johnson</h3>
                  <p className="text-sm text-muted-foreground">
                    Property Manager
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-1 p-4 space-y-4 overflow-y-auto">
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                  <p className="text-sm">
                    Hi John! Just wanted to update you on the maintenance
                    request for your kitchen faucet.
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Today, 2:30 PM
                  </p>
                </div>
              </div>

              <div className="flex justify-end">
                <div className="bg-primary text-primary-foreground rounded-lg p-3 max-w-xs">
                  <p className="text-sm">Great! What's the status?</p>
                  <p className="text-xs opacity-75 mt-1">Today, 2:32 PM</p>
                </div>
              </div>

              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                  <p className="text-sm">
                    Our maintenance team will be there tomorrow between 10 AM -
                    2 PM. Please make sure someone is available to let them in.
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Today, 2:35 PM
                  </p>
                </div>
              </div>

              <div className="flex justify-end">
                <div className="bg-primary text-primary-foreground rounded-lg p-3 max-w-xs">
                  <p className="text-sm">
                    Perfect! I'll be working from home tomorrow. Thank you!
                  </p>
                  <p className="text-xs opacity-75 mt-1">Today, 2:36 PM</p>
                </div>
              </div>
            </div>

            <div className="p-4 border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 p-3 border rounded-lg"
                />
                <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
