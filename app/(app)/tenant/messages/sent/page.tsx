export default function TenantMessagesSentPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Sent Messages</h1>
          <p className="text-muted-foreground">
            Messages you've sent to your landlord and property management
          </p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Compose New Message
        </button>
      </div>

      {/* Compose Message Form */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">New Message</h2>
        </div>

        <div className="p-6">
          <form className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="recipient">
                  To
                </label>
                <select id="recipient" className="w-full p-3 border rounded-lg">
                  <option value="">Select recipient...</option>
                  <option value="landlord">Sarah Thompson - Landlord</option>
                  <option value="property-mgmt">
                    Property Management Office
                  </option>
                  <option value="maintenance">Maintenance Department</option>
                  <option value="emergency">Emergency Contact</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="category">
                  Category
                </label>
                <select id="category" className="w-full p-3 border rounded-lg">
                  <option value="">Select category...</option>
                  <option value="general">General Inquiry</option>
                  <option value="maintenance">Maintenance Request</option>
                  <option value="payment">Payment Related</option>
                  <option value="lease">Lease Questions</option>
                  <option value="noise">Noise Complaint</option>
                  <option value="emergency">Emergency</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="subject">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Enter message subject"
                className="w-full p-3 border rounded-lg"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                placeholder="Type your message here..."
                className="w-full p-3 border rounded-lg resize-none"
              ></textarea>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">
                Attachments (Optional)
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                <svg
                  className="w-8 h-8 text-gray-400 mx-auto mb-2"
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
                <p className="text-sm text-gray-500">
                  Drop files here or click to upload
                </p>
                <p className="text-xs text-gray-400">
                  PNG, JPG, PDF up to 10MB
                </p>
                <input type="file" multiple className="hidden" />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" id="urgent" className="rounded" />
              <label htmlFor="urgent" className="text-sm">
                Mark as urgent
              </label>
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 font-medium"
              >
                Send Message
              </button>
              <button
                type="button"
                className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Save Draft
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Sent Messages History */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">Recently Sent</h2>
        </div>

        <div className="space-y-2 p-6">
          <div className="rounded-lg border p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-medium">Kitchen Maintenance Follow-up</h3>
                <p className="text-sm text-muted-foreground">
                  To: Sarah Thompson - Landlord
                </p>
              </div>
              <div className="text-right">
                <span className="text-xs text-green-600 font-medium">
                  ✓ Delivered
                </span>
                <p className="text-xs text-muted-foreground">Today, 11:30 AM</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Hi Sarah, I wanted to follow up on the kitchen faucet repair. The
              plumber mentioned they would return tomorrow...
            </p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground mt-2">
              <span>🔧 Maintenance</span>
              <span>✉️ Replied</span>
            </div>
          </div>

          <div className="rounded-lg border p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-medium">
                  Rent Payment Confirmation Request
                </h3>
                <p className="text-sm text-muted-foreground">
                  To: Property Management Office
                </p>
              </div>
              <div className="text-right">
                <span className="text-xs text-green-600 font-medium">
                  ✓ Read
                </span>
                <p className="text-xs text-muted-foreground">
                  Yesterday, 3:20 PM
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Could you please confirm receipt of my March rent payment? I made
              the payment on March 1st but haven't received...
            </p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground mt-2">
              <span>💰 Payment</span>
              <span>📄 Receipt Attached</span>
            </div>
          </div>

          <div className="rounded-lg border p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-medium">
                  Noise Complaint - Upstairs Neighbor
                </h3>
                <p className="text-sm text-muted-foreground">
                  To: Property Management Office
                </p>
              </div>
              <div className="text-right">
                <span className="text-xs text-yellow-600 font-medium">
                  ⏳ Pending
                </span>
                <p className="text-xs text-muted-foreground">Mar 15, 8:45 PM</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              I'm writing to report ongoing noise issues from the apartment
              above mine. The noise typically occurs late at night...
            </p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground mt-2">
              <span>🔊 Noise Complaint</span>
              <span>🌙 After Hours</span>
            </div>
          </div>

          <div className="rounded-lg border p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-medium">Lease Renewal Question</h3>
                <p className="text-sm text-muted-foreground">
                  To: Sarah Thompson - Landlord
                </p>
              </div>
              <div className="text-right">
                <span className="text-xs text-green-600 font-medium">
                  ✓ Replied
                </span>
                <p className="text-xs text-muted-foreground">Mar 12, 2:15 PM</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Hi Sarah, I hope you're doing well. I wanted to discuss my lease
              renewal options as my current lease expires...
            </p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground mt-2">
              <span>📄 Lease Related</span>
              <span>💬 Conversation</span>
            </div>
          </div>
        </div>
      </div>

      {/* Message Statistics */}
      <div className="grid gap-4 md:grid-cols-4">
        <div className="p-4 border rounded-lg text-center">
          <h3 className="text-2xl font-bold text-blue-600">12</h3>
          <p className="text-sm text-muted-foreground">Messages Sent</p>
        </div>

        <div className="p-4 border rounded-lg text-center">
          <h3 className="text-2xl font-bold text-green-600">8</h3>
          <p className="text-sm text-muted-foreground">Received Replies</p>
        </div>

        <div className="p-4 border rounded-lg text-center">
          <h3 className="text-2xl font-bold text-orange-600">2.3</h3>
          <p className="text-sm text-muted-foreground">
            Avg Response Time (hours)
          </p>
        </div>

        <div className="p-4 border rounded-lg text-center">
          <h3 className="text-2xl font-bold text-purple-600">1</h3>
          <p className="text-sm text-muted-foreground">Pending Responses</p>
        </div>
      </div>
    </div>
  );
}
