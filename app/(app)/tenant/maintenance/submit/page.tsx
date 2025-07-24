export default function TenantMaintenanceSubmitPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Submit Maintenance Request
        </h1>
        <p className="text-muted-foreground">
          Report maintenance issues or request repairs
        </p>
      </div>

      {/* Emergency Alert */}
      <div className="rounded-lg border bg-red-50 border-red-200">
        <div className="p-4">
          <div className="flex items-center gap-3">
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
            <div>
              <h3 className="font-medium text-red-800">
                Emergency Maintenance
              </h3>
              <p className="text-sm text-red-700">
                For urgent issues like gas leaks, electrical problems, or
                flooding, call emergency line: <strong>(555) 911-HELP</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Request Form */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">Maintenance Request Form</h2>
          <p className="text-sm text-muted-foreground">
            Please provide detailed information about the issue
          </p>
        </div>

        <div className="p-6">
          <form className="space-y-6">
            {/* Priority Level */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Priority Level</label>
              <div className="grid grid-cols-3 gap-4">
                <label className="flex items-center gap-2 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="priority"
                    value="low"
                    className="text-green-600"
                  />
                  <div>
                    <div className="font-medium text-green-600">Low</div>
                    <div className="text-xs text-muted-foreground">
                      Non-urgent
                    </div>
                  </div>
                </label>
                <label className="flex items-center gap-2 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="priority"
                    value="medium"
                    className="text-yellow-600"
                    defaultChecked
                  />
                  <div>
                    <div className="font-medium text-yellow-600">Medium</div>
                    <div className="text-xs text-muted-foreground">
                      Within a week
                    </div>
                  </div>
                </label>
                <label className="flex items-center gap-2 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="priority"
                    value="high"
                    className="text-red-600"
                  />
                  <div>
                    <div className="font-medium text-red-600">High</div>
                    <div className="text-xs text-muted-foreground">ASAP</div>
                  </div>
                </label>
              </div>
            </div>

            {/* Category */}
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="category">
                Category
              </label>
              <select id="category" className="w-full p-3 border rounded-lg">
                <option value="">Select a category...</option>
                <option value="plumbing">Plumbing</option>
                <option value="electrical">Electrical</option>
                <option value="hvac">Heating/Cooling</option>
                <option value="appliances">Appliances</option>
                <option value="doors-windows">Doors & Windows</option>
                <option value="flooring">Flooring</option>
                <option value="painting">Painting</option>
                <option value="pest-control">Pest Control</option>
                <option value="locks-security">Locks & Security</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Location */}
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="location">
                Location in Property
              </label>
              <select id="location" className="w-full p-3 border rounded-lg">
                <option value="">Select location...</option>
                <option value="living-room">Living Room</option>
                <option value="kitchen">Kitchen</option>
                <option value="bedroom-1">Bedroom 1</option>
                <option value="bedroom-2">Bedroom 2</option>
                <option value="bedroom-3">Bedroom 3</option>
                <option value="bathroom-1">Bathroom 1</option>
                <option value="bathroom-2">Bathroom 2</option>
                <option value="basement">Basement</option>
                <option value="attic">Attic</option>
                <option value="garage">Garage</option>
                <option value="exterior">Exterior</option>
                <option value="common-area">Common Area</option>
              </select>
            </div>

            {/* Subject */}
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="subject">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Brief description of the issue"
                className="w-full p-3 border rounded-lg"
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="description">
                Detailed Description
              </label>
              <textarea
                id="description"
                rows={5}
                placeholder="Please describe the issue in detail, including when it started, what you've tried, and any other relevant information..."
                className="w-full p-3 border rounded-lg resize-none"
              ></textarea>
            </div>

            {/* Photos */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Photos (Optional)</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <svg
                  className="w-12 h-12 text-gray-400 mx-auto mb-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-gray-500">
                  Drop photos here or click to upload
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  PNG, JPG up to 10MB each (max 5 photos)
                </p>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  className="hidden"
                />
              </div>
            </div>

            {/* Contact Preferences */}
            <div className="space-y-2">
              <label className="text-sm font-medium">
                Preferred Contact Method
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" defaultChecked />
                  <span className="text-sm">Email notifications</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">SMS updates</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">
                    Phone call (for urgent matters)
                  </span>
                </label>
              </div>
            </div>

            {/* Access Information */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Access Information</label>
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="access"
                    value="available"
                    className="rounded"
                    defaultChecked
                  />
                  <span className="text-sm">
                    I will be available during business hours
                  </span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="access"
                    value="key"
                    className="rounded"
                  />
                  <span className="text-sm">
                    Please use spare key (with landlord)
                  </span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="access"
                    value="schedule"
                    className="rounded"
                  />
                  <span className="text-sm">Please schedule with me first</span>
                </label>
              </div>
              <textarea
                placeholder="Additional access instructions or availability notes..."
                className="w-full p-3 border rounded-lg resize-none mt-2"
                rows={2}
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex gap-4">
              <button
                type="submit"
                className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 font-medium"
              >
                Submit Request
              </button>
              <button
                type="button"
                className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Save as Draft
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Quick Tips */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold">Tips for Better Service</h2>
        </div>

        <div className="p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold text-sm">1</span>
              </div>
              <div>
                <h3 className="font-medium">Be Specific</h3>
                <p className="text-sm text-muted-foreground">
                  Provide detailed descriptions and exact locations
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold text-sm">2</span>
              </div>
              <div>
                <h3 className="font-medium">Include Photos</h3>
                <p className="text-sm text-muted-foreground">
                  Visual evidence helps contractors prepare better
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold text-sm">3</span>
              </div>
              <div>
                <h3 className="font-medium">Set Priority Correctly</h3>
                <p className="text-sm text-muted-foreground">
                  Choose appropriate urgency for faster resolution
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold text-sm">4</span>
              </div>
              <div>
                <h3 className="font-medium">Provide Access Info</h3>
                <p className="text-sm text-muted-foreground">
                  Clear access instructions prevent delays
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
