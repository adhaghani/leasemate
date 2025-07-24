export default function CommunicationInboxPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Communication Inbox
          </h1>
          <p className="text-muted-foreground">
            Manage all tenant communications and messages
          </p>
        </div>

        <div className="flex gap-2">
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            Mark All Read
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            New Message
          </button>
        </div>
      </div>

      {/* Message Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Unread Messages
              </p>
              <p className="text-2xl font-bold text-blue-600">12</p>
              <p className="text-xs text-blue-600">Requires attention</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Open Conversations
              </p>
              <p className="text-2xl font-bold text-orange-600">8</p>
              <p className="text-xs text-orange-600">Active threads</p>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-orange-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Urgent Requests
              </p>
              <p className="text-2xl font-bold text-red-600">3</p>
              <p className="text-xs text-red-600">Emergency/maintenance</p>
            </div>
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Avg. Response Time
              </p>
              <p className="text-2xl font-bold text-green-600">2.4h</p>
              <p className="text-xs text-green-600">Last 30 days</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Message List */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg border shadow-sm">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Messages</h3>
                <div className="flex gap-2">
                  <select className="px-3 py-1 border rounded-lg text-sm">
                    <option>All Messages</option>
                    <option>Unread Only</option>
                    <option>Urgent</option>
                    <option>Maintenance</option>
                    <option>General</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Search messages..."
                    className="px-3 py-1 border rounded-lg text-sm w-48"
                  />
                </div>
              </div>
            </div>

            <div className="divide-y max-h-96 overflow-y-auto">
              {/* Message 1 - Urgent */}
              <div className="p-4 hover:bg-gray-50 cursor-pointer border-l-4 border-red-500">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-red-600 font-semibold text-sm">
                        SJ
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium">Sarah Johnson - Apt 2A</h4>
                        <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full">
                          URGENT
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Sunset Apartments
                      </p>
                      <p className="text-sm mt-1">
                        Water leak in bathroom - need immediate assistance!
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">15 min ago</p>
                    <div className="w-3 h-3 bg-blue-600 rounded-full mt-1"></div>
                  </div>
                </div>
              </div>

              {/* Message 2 - Maintenance */}
              <div className="p-4 hover:bg-gray-50 cursor-pointer border-l-4 border-orange-500">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-orange-600 font-semibold text-sm">
                        MR
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium">Mike Rodriguez - Apt 1B</h4>
                        <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full">
                          MAINTENANCE
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Downtown Condos
                      </p>
                      <p className="text-sm mt-1">
                        AC unit making strange noises, could you send someone to
                        check?
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">2 hours ago</p>
                    <div className="w-3 h-3 bg-blue-600 rounded-full mt-1"></div>
                  </div>
                </div>
              </div>

              {/* Message 3 - General */}
              <div className="p-4 hover:bg-gray-50 cursor-pointer">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold text-sm">
                        EP
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium">
                          Emily Parker - Group Leader
                        </h4>
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                          GROUP
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Riverside Complex - Unit 3C
                      </p>
                      <p className="text-sm mt-1">
                        Hi! Our group would like to schedule a walkthrough for
                        lease renewal...
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">4 hours ago</p>
                    <div className="w-3 h-3 bg-blue-600 rounded-full mt-1"></div>
                  </div>
                </div>
              </div>

              {/* Message 4 - Payment */}
              <div className="p-4 hover:bg-gray-50 cursor-pointer">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-semibold text-sm">
                        AL
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium">Alex Liu - Apt 1A</h4>
                        <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                          PAYMENT
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Sunset Apartments
                      </p>
                      <p className="text-sm mt-1">
                        Payment confirmation for December rent. Thank you!
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">1 day ago</p>
                  </div>
                </div>
              </div>

              {/* Message 5 - Read */}
              <div className="p-4 hover:bg-gray-50 cursor-pointer opacity-60">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="text-gray-600 font-semibold text-sm">
                        DB
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">David Brown - Apt 2C</h4>
                      <p className="text-sm text-muted-foreground">
                        Downtown Condos
                      </p>
                      <p className="text-sm mt-1">
                        Thanks for the quick response on the maintenance
                        request.
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">2 days ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Message Composition & Quick Actions */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-white rounded-lg border shadow-sm">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold">Quick Actions</h3>
            </div>

            <div className="p-6 space-y-3">
              <button className="w-full px-4 py-3 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 text-left">
                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                  <div>
                    <p className="font-medium">Handle Urgent Requests</p>
                    <p className="text-sm opacity-75">3 emergency requests</p>
                  </div>
                </div>
              </button>

              <button className="w-full px-4 py-3 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 text-left">
                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                    />
                  </svg>
                  <div>
                    <p className="font-medium">Send Announcement</p>
                    <p className="text-sm opacity-75">
                      Broadcast to all tenants
                    </p>
                  </div>
                </div>
              </button>

              <button className="w-full px-4 py-3 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 text-left">
                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <div>
                    <p className="font-medium">Use Template</p>
                    <p className="text-sm opacity-75">Pre-written messages</p>
                  </div>
                </div>
              </button>

              <button className="w-full px-4 py-3 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 text-left">
                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <div>
                    <p className="font-medium">Contact Groups</p>
                    <p className="text-sm opacity-75">Message entire groups</p>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Message Filters */}
          <div className="bg-white rounded-lg border shadow-sm">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold">Message Filters</h3>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Priority Level
                </label>
                <div className="space-y-2">
                  <label className="flex items-center text-sm">
                    <input type="checkbox" className="mr-2" defaultChecked />
                    <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                    Urgent (3)
                  </label>
                  <label className="flex items-center text-sm">
                    <input type="checkbox" className="mr-2" defaultChecked />
                    <span className="w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    High (5)
                  </label>
                  <label className="flex items-center text-sm">
                    <input type="checkbox" className="mr-2" defaultChecked />
                    <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                    Normal (8)
                  </label>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">
                  Message Type
                </label>
                <div className="space-y-2">
                  <label className="flex items-center text-sm">
                    <input type="checkbox" className="mr-2" defaultChecked />
                    Maintenance Requests
                  </label>
                  <label className="flex items-center text-sm">
                    <input type="checkbox" className="mr-2" defaultChecked />
                    Payment Inquiries
                  </label>
                  <label className="flex items-center text-sm">
                    <input type="checkbox" className="mr-2" defaultChecked />
                    Lease Questions
                  </label>
                  <label className="flex items-center text-sm">
                    <input type="checkbox" className="mr-2" defaultChecked />
                    General Inquiries
                  </label>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">
                  Property
                </label>
                <select className="w-full px-3 py-2 border rounded-lg">
                  <option>All Properties</option>
                  <option>Sunset Apartments</option>
                  <option>Downtown Condos</option>
                  <option>Riverside Complex</option>
                </select>
              </div>
            </div>
          </div>

          {/* Response Templates */}
          <div className="bg-white rounded-lg border shadow-sm">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold">Quick Templates</h3>
            </div>

            <div className="p-6 space-y-2">
              <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 text-sm">
                Maintenance Request Received
              </button>
              <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 text-sm">
                Payment Reminder
              </button>
              <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 text-sm">
                Lease Renewal Notice
              </button>
              <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 text-sm">
                Property Inspection Notice
              </button>
              <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 text-sm">
                Emergency Response
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
