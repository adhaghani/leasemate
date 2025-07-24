export default function LandlordMaintenanceRequestsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Maintenance Requests
          </h1>
          <p className="text-muted-foreground">
            View and manage all maintenance requests from tenants
          </p>
        </div>
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90">
          Create Request
        </button>
      </div>

      <div className="flex gap-4 items-center">
        <input
          type="text"
          placeholder="Search requests..."
          className="flex h-9 w-full max-w-sm rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        />
        <select className="flex h-9 w-[180px] items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring">
          <option>All Statuses</option>
          <option>Open</option>
          <option>In Progress</option>
          <option>Completed</option>
          <option>On Hold</option>
        </select>
        <select className="flex h-9 w-[180px] items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring">
          <option>All Priorities</option>
          <option>Emergency</option>
          <option>High</option>
          <option>Normal</option>
          <option>Low</option>
        </select>
        <select className="flex h-9 w-[180px] items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring">
          <option>All Properties</option>
          <option>Sunset Apartments</option>
          <option>Oak Grove Complex</option>
          <option>Pine Ridge Townhomes</option>
        </select>
      </div>

      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-6">
          <div className="space-y-6">
            {/* Request 1 - Emergency */}
            <div className="border-l-4 border-red-500 bg-red-50 p-6 rounded-lg">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-start gap-4">
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
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      Water leak in basement
                    </h3>
                    <p className="text-muted-foreground">Request #1024</p>
                    <div className="flex gap-4 mt-2 text-sm">
                      <span>
                        <strong>Property:</strong> Sunset Apartments, Unit 1B
                      </span>
                      <span>
                        <strong>Tenant:</strong> Jane Smith
                      </span>
                      <span>
                        <strong>Submitted:</strong> 30 minutes ago
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-red-100 text-red-800 rounded-full">
                    Emergency
                  </span>
                  <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-yellow-100 text-yellow-800 rounded-full">
                    Open
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-medium mb-2">Description:</h4>
                <p className="text-sm">
                  "There's water coming through the ceiling in my basement. It
                  appears to be getting worse and I can hear dripping from
                  upstairs. This started about an hour ago and seems to be from
                  the unit above me."
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="font-medium mb-2">Contact Information:</h4>
                  <p className="text-sm">Email: jane.smith@email.com</p>
                  <p className="text-sm">Phone: (555) 234-5678</p>
                  <p className="text-sm">
                    Best contact time: Anytime (emergency)
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Category:</h4>
                  <p className="text-sm">Plumbing - Emergency</p>
                  <p className="text-sm">Estimated cost: $200-500</p>
                  <p className="text-sm">
                    Urgency: Immediate attention required
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="px-4 py-2 bg-red-600 text-white text-sm rounded-md hover:bg-red-700">
                  Assign Emergency Team
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700">
                  Contact Tenant
                </button>
                <button className="px-4 py-2 border border-gray-300 text-sm rounded-md hover:bg-gray-50">
                  Update Status
                </button>
                <button className="px-4 py-2 border border-gray-300 text-sm rounded-md hover:bg-gray-50">
                  View Photos
                </button>
              </div>
            </div>

            {/* Request 2 - In Progress */}
            <div className="border-l-4 border-yellow-500 bg-yellow-50 p-6 rounded-lg">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-yellow-600"
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
                    <h3 className="text-lg font-semibold">
                      Electrical outlet not working
                    </h3>
                    <p className="text-muted-foreground">Request #1023</p>
                    <div className="flex gap-4 mt-2 text-sm">
                      <span>
                        <strong>Property:</strong> Oak Grove Complex, Unit C
                      </span>
                      <span>
                        <strong>Tenant:</strong> Tom Brown
                      </span>
                      <span>
                        <strong>Submitted:</strong> 4 hours ago
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-orange-100 text-orange-800 rounded-full">
                    High Priority
                  </span>
                  <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full">
                    In Progress
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-medium mb-2">Description:</h4>
                <p className="text-sm">
                  "The main electrical outlet in the living room stopped working
                  yesterday. I've tried resetting the breaker but it didn't
                  help. My home office equipment is connected to this outlet."
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="font-medium mb-2">Assigned To:</h4>
                  <p className="text-sm">Mike Williams (Electrical)</p>
                  <p className="text-sm">Started: 2 hours ago</p>
                  <p className="text-sm">ETA: 1-2 hours remaining</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Progress Updates:</h4>
                  <p className="text-sm">• Arrived on site at 2:00 PM</p>
                  <p className="text-sm">• Diagnosed faulty GFCI outlet</p>
                  <p className="text-sm">• Ordering replacement part</p>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700">
                  Check Progress
                </button>
                <button className="px-4 py-2 border border-gray-300 text-sm rounded-md hover:bg-gray-50">
                  Contact Worker
                </button>
                <button className="px-4 py-2 border border-gray-300 text-sm rounded-md hover:bg-gray-50">
                  Update Tenant
                </button>
                <button className="px-4 py-2 border border-gray-300 text-sm rounded-md hover:bg-gray-50">
                  View Details
                </button>
              </div>
            </div>

            {/* Request 3 - Normal Priority */}
            <div className="border-l-4 border-blue-500 bg-blue-50 p-6 rounded-lg">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-start gap-4">
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
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      AC unit making noise
                    </h3>
                    <p className="text-muted-foreground">Request #1022</p>
                    <div className="flex gap-4 mt-2 text-sm">
                      <span>
                        <strong>Property:</strong> Pine Ridge Townhomes, Unit 1
                      </span>
                      <span>
                        <strong>Tenant:</strong> Alex Anderson
                      </span>
                      <span>
                        <strong>Submitted:</strong> 6 hours ago
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full">
                    Normal
                  </span>
                  <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-green-100 text-green-800 rounded-full">
                    Scheduled
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-medium mb-2">Description:</h4>
                <p className="text-sm">
                  "The AC unit has been making a grinding noise for the past few
                  days. It's still cooling but the noise is getting louder,
                  especially at night."
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="font-medium mb-2">Scheduled For:</h4>
                  <p className="text-sm">Tomorrow, March 16th at 10:00 AM</p>
                  <p className="text-sm">Assigned to: Robert Davis (HVAC)</p>
                  <p className="text-sm">Estimated duration: 1-2 hours</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Tenant Availability:</h4>
                  <p className="text-sm">Available: Weekday mornings</p>
                  <p className="text-sm">Phone: (555) 456-7890</p>
                  <p className="text-sm">Email: alex.anderson@email.com</p>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="px-4 py-2 bg-green-600 text-white text-sm rounded-md hover:bg-green-700">
                  Confirm Schedule
                </button>
                <button className="px-4 py-2 border border-gray-300 text-sm rounded-md hover:bg-gray-50">
                  Reschedule
                </button>
                <button className="px-4 py-2 border border-gray-300 text-sm rounded-md hover:bg-gray-50">
                  Contact Tenant
                </button>
                <button className="px-4 py-2 border border-gray-300 text-sm rounded-md hover:bg-gray-50">
                  View Details
                </button>
              </div>
            </div>

            {/* Request 4 - Completed */}
            <div className="border-l-4 border-green-500 bg-green-50 p-6 rounded-lg">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-green-600"
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
                    <h3 className="text-lg font-semibold">
                      Garbage disposal fixed
                    </h3>
                    <p className="text-muted-foreground">Request #1021</p>
                    <div className="flex gap-4 mt-2 text-sm">
                      <span>
                        <strong>Property:</strong> Sunset Apartments, Unit 1A
                      </span>
                      <span>
                        <strong>Tenant:</strong> John Doe
                      </span>
                      <span>
                        <strong>Completed:</strong> 1 day ago
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full">
                    Normal
                  </span>
                  <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-green-100 text-green-800 rounded-full">
                    Completed
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-medium mb-2">Work Summary:</h4>
                <p className="text-sm">
                  "Garbage disposal was jammed with debris. Cleared blockage,
                  tested functionality, and provided tenant with usage
                  guidelines to prevent future issues."
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="font-medium mb-2">Completed By:</h4>
                  <p className="text-sm">John Smith (General Maintenance)</p>
                  <p className="text-sm">Work time: 45 minutes</p>
                  <p className="text-sm">Parts used: None</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Tenant Feedback:</h4>
                  <p className="text-sm">Rating: ⭐⭐⭐⭐⭐ (5/5)</p>
                  <p className="text-sm">"Quick and professional service!"</p>
                  <p className="text-sm">Follow-up required: No</p>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700">
                  View Report
                </button>
                <button className="px-4 py-2 border border-gray-300 text-sm rounded-md hover:bg-gray-50">
                  Archive Request
                </button>
                <button className="px-4 py-2 border border-gray-300 text-sm rounded-md hover:bg-gray-50">
                  Print Summary
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center">
        <div className="flex gap-2">
          <button className="px-3 py-1 border rounded-md hover:bg-gray-50">
            Previous
          </button>
          <button className="px-3 py-1 bg-blue-600 text-white rounded-md">
            1
          </button>
          <button className="px-3 py-1 border rounded-md hover:bg-gray-50">
            2
          </button>
          <button className="px-3 py-1 border rounded-md hover:bg-gray-50">
            3
          </button>
          <button className="px-3 py-1 border rounded-md hover:bg-gray-50">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
