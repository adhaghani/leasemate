export default function TenantMessagesAnnouncementsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Announcements</h1>
        <p className="text-muted-foreground">
          Important announcements and notices from property management
        </p>
      </div>

      {/* Filter Options */}
      <div className="flex gap-4 items-center">
        <select className="px-3 py-2 border rounded-lg">
          <option value="all">All Announcements</option>
          <option value="urgent">Urgent Only</option>
          <option value="maintenance">Maintenance</option>
          <option value="policy">Policy Updates</option>
          <option value="events">Events</option>
        </select>

        <select className="px-3 py-2 border rounded-lg">
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>

        <div className="flex items-center gap-2">
          <input type="checkbox" id="unread-only" className="rounded" />
          <label htmlFor="unread-only" className="text-sm">
            Unread only
          </label>
        </div>
      </div>

      {/* Urgent Announcements */}
      <div className="rounded-lg border bg-red-50 border-red-200">
        <div className="p-6">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg
                className="w-5 h-5 text-red-600"
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
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-red-800">
                    Emergency Water Shutoff - Building A
                  </h3>
                  <p className="text-sm text-red-600">
                    Property Management Office
                  </p>
                </div>
                <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded">
                  URGENT
                </span>
              </div>
              <p className="text-sm text-red-700 mb-3">
                Due to an emergency pipe repair, water will be shut off in
                Building A from 2:00 PM to 6:00 PM today. We apologize for the
                inconvenience and are working to restore service as quickly as
                possible.
              </p>
              <div className="flex items-center gap-4 text-xs text-red-600">
                <span>Posted: Today, 1:30 PM</span>
                <span>💧 Water Service</span>
                <span>⚠️ Emergency</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Regular Announcements */}
      <div className="space-y-4">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold">
                    Elevator Maintenance Schedule
                  </h3>
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded">
                    Maintenance
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Property Management Office
                </p>
              </div>
              <span className="text-xs text-muted-foreground">
                Yesterday, 4:20 PM
              </span>
            </div>

            <p className="text-sm mb-4">
              Please be advised that elevator maintenance is scheduled for this
              Saturday, March 23rd, from 8:00 AM to 12:00 PM. During this time,
              the elevator will be out of service. We recommend using the stairs
              and planning accordingly for any heavy deliveries or moving
              activities.
            </p>

            <div className="bg-gray-50 p-3 rounded-lg mb-4">
              <h4 className="font-medium text-sm mb-2">
                Maintenance Schedule:
              </h4>
              <ul className="text-sm space-y-1">
                <li>• Saturday, March 23rd: 8:00 AM - 12:00 PM</li>
                <li>• Backup generators will be tested during this time</li>
                <li>• Emergency contact: (555) 911-HELP</li>
              </ul>
            </div>

            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span>🏢 Building Notice</span>
              <span>📅 Scheduled Event</span>
              <span>📞 Emergency Contact Available</span>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold">
                    New Recycling Program
                  </h3>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                    Policy Update
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Property Management Office
                </p>
              </div>
              <span className="text-xs text-muted-foreground">
                Mar 15, 2024
              </span>
            </div>

            <p className="text-sm mb-4">
              We're excited to announce our new comprehensive recycling program
              starting April 1st! This initiative will help reduce waste and
              support environmental sustainability in our community.
            </p>

            <div className="bg-green-50 p-3 rounded-lg mb-4">
              <h4 className="font-medium text-sm mb-2">What's Changing:</h4>
              <ul className="text-sm space-y-1">
                <li>• New color-coded recycling bins in common areas</li>
                <li>• Weekly pickup schedule (Wednesdays)</li>
                <li>• Educational materials will be distributed</li>
                <li>• Composting bins available upon request</li>
              </ul>
            </div>

            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span>♻️ Environmental</span>
              <span>📋 Policy Change</span>
              <span>🗓️ Effective April 1st</span>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold">
                    Community Spring BBQ Event
                  </h3>
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded">
                    Community Event
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Residents Committee
                </p>
              </div>
              <span className="text-xs text-muted-foreground">
                Mar 12, 2024
              </span>
            </div>

            <p className="text-sm mb-4">
              Join us for our annual Spring BBQ on Saturday, April 6th at 2:00
              PM in the community courtyard! This is a great opportunity to meet
              your neighbors and enjoy some delicious food.
            </p>

            <div className="bg-purple-50 p-3 rounded-lg mb-4">
              <h4 className="font-medium text-sm mb-2">Event Details:</h4>
              <ul className="text-sm space-y-1">
                <li>• Date: Saturday, April 6th</li>
                <li>• Time: 2:00 PM - 6:00 PM</li>
                <li>• Location: Community Courtyard</li>
                <li>• Food and drinks provided</li>
                <li>• RSVP by April 1st</li>
              </ul>
            </div>

            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span>🎉 Community Event</span>
              <span>🍔 Food & Drinks</span>
              <span>📝 RSVP Required</span>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold">
                    Parking Policy Updates
                  </h3>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                    Policy Update
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Property Management Office
                </p>
              </div>
              <span className="text-xs text-muted-foreground">Mar 8, 2024</span>
            </div>

            <p className="text-sm mb-4">
              Effective March 15th, we're implementing new parking guidelines to
              ensure fair access for all residents. Please review the updated
              policies below.
            </p>

            <div className="bg-blue-50 p-3 rounded-lg mb-4">
              <h4 className="font-medium text-sm mb-2">Key Changes:</h4>
              <ul className="text-sm space-y-1">
                <li>• Guest parking limited to 72 hours</li>
                <li>• Reserved spots must display valid permits</li>
                <li>• Visitor registration required after 10 PM</li>
                <li>• Towing enforced for violations</li>
              </ul>
            </div>

            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span>🚗 Parking</span>
              <span>📋 Policy Update</span>
              <span>⚖️ Enforcement</span>
            </div>
          </div>
        </div>
      </div>

      {/* Archived Announcements Link */}
      <div className="text-center">
        <button className="text-blue-600 hover:underline">
          View Archived Announcements
        </button>
      </div>
    </div>
  );
}
