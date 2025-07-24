export default function TenantMaintenanceRequestPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Request Maintenance
        </h1>
        <p className="text-muted-foreground">
          Submit a maintenance request for your rental property
        </p>
      </div>

      <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-6">New Maintenance Request</h2>

        <form className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium mb-2">
                Request Type
              </label>
              <select className="w-full p-3 border rounded-md">
                <option>Select type...</option>
                <option>Plumbing</option>
                <option>Electrical</option>
                <option>Heating/Cooling</option>
                <option>Appliances</option>
                <option>Structural</option>
                <option>Pest Control</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Priority</label>
              <select className="w-full p-3 border rounded-md">
                <option>Low - Can wait a week</option>
                <option>Medium - Within a few days</option>
                <option>High - Within 24 hours</option>
                <option>Emergency - Immediate attention</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Location</label>
            <select className="w-full p-3 border rounded-md">
              <option>Select location...</option>
              <option>Living Room</option>
              <option>Kitchen</option>
              <option>Bedroom 1</option>
              <option>Bedroom 2</option>
              <option>Bathroom</option>
              <option>Balcony/Patio</option>
              <option>Laundry Room</option>
              <option>Common Area</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Description
            </label>
            <textarea
              className="w-full p-3 border rounded-md h-32"
              placeholder="Please describe the issue in detail. Include when you first noticed the problem and any steps you've already taken."
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Photos (Optional)
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="mt-4">
                <label htmlFor="file-upload" className="cursor-pointer">
                  <span className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90">
                    Upload Photos
                  </span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                    multiple
                    accept="image/*"
                  />
                </label>
                <p className="text-sm text-muted-foreground mt-2">
                  PNG, JPG, GIF up to 10MB each
                </p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex">
              <svg
                className="h-5 w-5 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800">
                  Emergency Requests
                </h3>
                <p className="text-sm text-yellow-700 mt-1">
                  For emergencies (gas leaks, electrical hazards, flooding),
                  call the emergency hotline: <strong>(555) 123-4567</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              type="submit"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 flex-1"
            >
              Submit Request
            </button>
            <button
              type="button"
              className="border border-gray-300 px-6 py-3 rounded-md hover:bg-gray-50"
            >
              Save Draft
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
