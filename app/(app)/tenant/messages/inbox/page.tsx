export default function TenantMessagesInboxPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Inbox</h1>
          <p className="text-muted-foreground">
            Messages from your landlord and property management
          </p>
        </div>
        <a
          href="/tenant/messages/sent"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Compose Message
        </a>
      </div>

      {/* Message Filters */}
      <div className="flex gap-4 items-center">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search messages..."
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>

        <select className="px-3 py-2 border rounded-lg">
          <option value="all">All Messages</option>
          <option value="unread">Unread</option>
          <option value="important">Important</option>
          <option value="read">Read</option>
        </select>

        <select className="px-3 py-2 border rounded-lg">
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>
      </div>

      {/* Message List */}
      <div className="space-y-2">
        {/* Unread Message */}
        <div className="rounded-lg border bg-blue-50 border-blue-200 p-4 cursor-pointer hover:bg-blue-100">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <h3 className="font-semibold">Property Management Office</h3>
                <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded">
                  Important
                </span>
              </div>
              <h4 className="font-medium mb-1">
                Monthly Rent Reminder - March 2024
              </h4>
              <p className="text-sm text-muted-foreground mb-2">
                Hi John, This is a friendly reminder that your rent payment for
                March 2024 is due on March 1st...
              </p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span>Today, 9:30 AM</span>
                <span>📧 Email</span>
                <span>💰 Payment Related</span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs text-blue-600 font-medium">UNREAD</span>
            </div>
          </div>
        </div>

        {/* Read Messages */}
        <div className="rounded-lg border bg-card text-card-foreground p-4 cursor-pointer hover:bg-gray-50">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-medium text-gray-700">
                  Sarah Thompson - Landlord
                </h3>
              </div>
              <h4 className="font-medium mb-1">
                Re: Kitchen Maintenance Request
              </h4>
              <p className="text-sm text-muted-foreground mb-2">
                Thank you for reporting the faucet issue. I've scheduled a
                plumber to visit on Thursday...
              </p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span>Yesterday, 2:15 PM</span>
                <span>🔧 Maintenance</span>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground p-4 cursor-pointer hover:bg-gray-50">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-medium text-gray-700">
                  Property Management Office
                </h3>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded">
                  Announcement
                </span>
              </div>
              <h4 className="font-medium mb-1">
                Building Maintenance Scheduled - Elevator
              </h4>
              <p className="text-sm text-muted-foreground mb-2">
                Dear residents, Please be advised that elevator maintenance is
                scheduled for this Saturday...
              </p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span>Mar 15, 2024</span>
                <span>🏢 Building Notice</span>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground p-4 cursor-pointer hover:bg-gray-50">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-medium text-gray-700">
                  Sarah Thompson - Landlord
                </h3>
              </div>
              <h4 className="font-medium mb-1">Lease Renewal Discussion</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Hi John, I hope you're doing well. I wanted to reach out
                regarding your lease renewal...
              </p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span>Mar 12, 2024</span>
                <span>📄 Lease Related</span>
                <span>📎 1 attachment</span>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground p-4 cursor-pointer hover:bg-gray-50">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-medium text-gray-700">
                  ABC Maintenance Services
                </h3>
              </div>
              <h4 className="font-medium mb-1">
                Service Completion Confirmation
              </h4>
              <p className="text-sm text-muted-foreground mb-2">
                Your HVAC filter replacement has been completed. Service rating
                and feedback requested...
              </p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span>Mar 10, 2024</span>
                <span>✅ Service Complete</span>
                <span>⭐ Rating Requested</span>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground p-4 cursor-pointer hover:bg-gray-50">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-medium text-gray-700">
                  Property Management Office
                </h3>
              </div>
              <h4 className="font-medium mb-1">
                Payment Confirmation - February Rent
              </h4>
              <p className="text-sm text-muted-foreground mb-2">
                Thank you for your rent payment. This confirms your February
                2024 payment of $1,200.00...
              </p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span>Feb 28, 2024</span>
                <span>💰 Payment Confirmation</span>
                <span>📄 Receipt Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center">
        <p className="text-sm text-muted-foreground">
          Showing 1-6 of 24 messages
        </p>
        <div className="flex gap-2">
          <button className="px-3 py-1 border rounded hover:bg-gray-50 text-sm">
            Previous
          </button>
          <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm">
            1
          </button>
          <button className="px-3 py-1 border rounded hover:bg-gray-50 text-sm">
            2
          </button>
          <button className="px-3 py-1 border rounded hover:bg-gray-50 text-sm">
            3
          </button>
          <button className="px-3 py-1 border rounded hover:bg-gray-50 text-sm">
            Next
          </button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold">Quick Actions</h2>
        </div>

        <div className="p-6">
          <div className="grid gap-4 md:grid-cols-3">
            <a
              href="/tenant/messages/sent"
              className="p-4 border rounded-lg hover:bg-gray-50 text-center"
            >
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
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
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </div>
              <h3 className="font-medium">Send Message</h3>
              <p className="text-sm text-muted-foreground">
                Contact your landlord
              </p>
            </a>

            <a
              href="/tenant/maintenance/submit"
              className="p-4 border rounded-lg hover:bg-gray-50 text-center"
            >
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <svg
                  className="w-5 h-5 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="font-medium">Report Issue</h3>
              <p className="text-sm text-muted-foreground">
                Submit maintenance request
              </p>
            </a>

            <a
              href="/tenant/payments/upcoming"
              className="p-4 border rounded-lg hover:bg-gray-50 text-center"
            >
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
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
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              </div>
              <h3 className="font-medium">Pay Rent</h3>
              <p className="text-sm text-muted-foreground">Make a payment</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
