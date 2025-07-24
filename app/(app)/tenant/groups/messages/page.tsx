export default function TenantGroupMessagesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Group Messages</h1>
        <p className="text-muted-foreground">
          Communicate with your roommates about shared responsibilities
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Chat Area */}
        <div className="lg:col-span-2">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm h-[600px] flex flex-col">
            <div className="p-4 border-b">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Sunset Apartment Group</h3>
                  <p className="text-sm text-muted-foreground">
                    4 members • Active now
                  </p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {/* Message 1 - Other user */}
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">JS</span>
                </div>
                <div className="flex-1">
                  <div className="bg-gray-100 rounded-lg p-3 max-w-md">
                    <p className="text-sm">
                      Hey everyone! Just paid my share of the electricity bill.
                      The receipt is uploaded to our shared folder.
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Jane Smith • 2 hours ago
                  </p>
                </div>
              </div>

              {/* Message 2 - Current user */}
              <div className="flex gap-3 justify-end">
                <div className="flex-1">
                  <div className="bg-blue-500 text-white rounded-lg p-3 max-w-md ml-auto">
                    <p className="text-sm">
                      Thanks Jane! I've confirmed the payment. Mike and Sarah,
                      please remember to pay your shares by tomorrow.
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 text-right">
                    You • 1 hour ago
                  </p>
                </div>
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">JD</span>
                </div>
              </div>

              {/* Message 3 - Other user */}
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">MW</span>
                </div>
                <div className="flex-1">
                  <div className="bg-gray-100 rounded-lg p-3 max-w-md">
                    <p className="text-sm">
                      Will pay today evening. Sorry for the delay, had some bank
                      issues.
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Mike Wilson • 45 minutes ago
                  </p>
                </div>
              </div>

              {/* Message 4 - System message */}
              <div className="flex justify-center">
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 max-w-md">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-yellow-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-sm text-yellow-800">
                      Payment reminder sent to Sarah Davis for overdue March
                      rent share
                    </p>
                  </div>
                  <p className="text-xs text-yellow-600 mt-1">
                    System • 30 minutes ago
                  </p>
                </div>
              </div>

              {/* Message 5 - Other user */}
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">SD</span>
                </div>
                <div className="flex-1">
                  <div className="bg-gray-100 rounded-lg p-3 max-w-md">
                    <p className="text-sm">
                      I'm so sorry guys! Had a family emergency. Will pay
                      everything by this weekend, including any late fees.
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Sarah Davis • 15 minutes ago
                  </p>
                </div>
              </div>

              {/* Message 6 - Current user */}
              <div className="flex gap-3 justify-end">
                <div className="flex-1">
                  <div className="bg-blue-500 text-white rounded-lg p-3 max-w-md ml-auto">
                    <p className="text-sm">
                      No worries Sarah! Family comes first. Let me know if you
                      need any help.
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 text-right">
                    You • 10 minutes ago
                  </p>
                </div>
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">JD</span>
                </div>
              </div>

              {/* Typing indicator */}
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">JS</span>
                </div>
                <div className="flex-1">
                  <div className="bg-gray-100 rounded-lg p-3 max-w-md">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Jane is typing...
                  </p>
                </div>
              </div>
            </div>

            {/* Message Input */}
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 h-10 rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                />
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  <svg
                    className="w-4 h-4"
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
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Group Members */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="p-4 border-b">
              <h3 className="font-semibold">Group Members</h3>
            </div>

            <div className="p-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">JD</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">John Doe (You)</p>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-muted-foreground">
                        Online
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">JS</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Jane Smith</p>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-muted-foreground">
                        Online
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">MW</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Mike Wilson</p>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-xs text-muted-foreground">
                        Away
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">SD</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Sarah Davis</p>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <span className="text-xs text-muted-foreground">
                        Last seen 2h ago
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="p-4 border-b">
              <h3 className="font-semibold">Quick Actions</h3>
            </div>

            <div className="p-4">
              <div className="space-y-2">
                <button className="w-full text-left p-2 rounded-md hover:bg-gray-50 text-sm">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-blue-600"
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
                    <span>Request Payment</span>
                  </div>
                </button>

                <button className="w-full text-left p-2 rounded-md hover:bg-gray-50 text-sm">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-green-600"
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
                    <span>Share Expense</span>
                  </div>
                </button>

                <button className="w-full text-left p-2 rounded-md hover:bg-gray-50 text-sm">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span>Schedule Reminder</span>
                  </div>
                </button>

                <button className="w-full text-left p-2 rounded-md hover:bg-gray-50 text-sm">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-orange-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                      />
                    </svg>
                    <span>Share File</span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Recent Files */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="p-4 border-b">
              <h3 className="font-semibold">Recent Files</h3>
            </div>

            <div className="p-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-red-100 rounded flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-red-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">
                      Electricity Bill March.pdf
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Shared by Jane • 2h ago
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Grocery Receipt.jpg</p>
                    <p className="text-xs text-muted-foreground">
                      Shared by You • 1d ago
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Internet Bill Feb.pdf</p>
                    <p className="text-xs text-muted-foreground">
                      Shared by Mike • 3d ago
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
