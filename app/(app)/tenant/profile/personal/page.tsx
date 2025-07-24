export default function TenantProfilePersonalPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Personal Information
        </h1>
        <p className="text-muted-foreground">
          Manage your personal details and contact information
        </p>
      </div>

      {/* Personal Information Form */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">Basic Information</h2>
          <p className="text-sm text-muted-foreground">
            Keep your information up to date
          </p>
        </div>

        <div className="p-6">
          <form className="space-y-6">
            {/* Profile Photo */}
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Profile Photo</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Upload a profile picture
                </p>
                <div className="flex gap-2">
                  <button
                    type="button"
                    className="px-3 py-2 text-sm border rounded-lg hover:bg-gray-50"
                  >
                    Change Photo
                  </button>
                  <button
                    type="button"
                    className="px-3 py-2 text-sm text-red-600 border border-red-300 rounded-lg hover:bg-red-50"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>

            {/* Name Fields */}
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="first-name">
                  First Name
                </label>
                <input
                  type="text"
                  id="first-name"
                  defaultValue="John"
                  className="w-full p-3 border rounded-lg"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="last-name">
                  Last Name
                </label>
                <input
                  type="text"
                  id="last-name"
                  defaultValue="Doe"
                  className="w-full p-3 border rounded-lg"
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  defaultValue="john.doe@email.com"
                  className="w-full p-3 border rounded-lg"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  defaultValue="(555) 123-4567"
                  className="w-full p-3 border rounded-lg"
                />
              </div>
            </div>

            {/* Date of Birth */}
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="dob">
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="dob"
                  defaultValue="1990-05-15"
                  className="w-full p-3 border rounded-lg"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="occupation">
                  Occupation
                </label>
                <input
                  type="text"
                  id="occupation"
                  defaultValue="Software Engineer"
                  className="w-full p-3 border rounded-lg"
                />
              </div>
            </div>

            {/* Address Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Current Address</h3>

              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="address">
                  Street Address
                </label>
                <input
                  type="text"
                  id="address"
                  defaultValue="123 Sunset Drive, Unit 2B"
                  className="w-full p-3 border rounded-lg"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="city">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    defaultValue="Springfield"
                    className="w-full p-3 border rounded-lg"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="state">
                    State
                  </label>
                  <select id="state" className="w-full p-3 border rounded-lg">
                    <option value="CA">California</option>
                    <option value="NY">New York</option>
                    <option value="TX">Texas</option>
                    <option value="FL">Florida</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="zip">
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    id="zip"
                    defaultValue="12345"
                    className="w-full p-3 border rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Employment Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Employment Information</h3>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="employer">
                    Employer
                  </label>
                  <input
                    type="text"
                    id="employer"
                    defaultValue="Tech Solutions Inc."
                    className="w-full p-3 border rounded-lg"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="job-title">
                    Job Title
                  </label>
                  <input
                    type="text"
                    id="job-title"
                    defaultValue="Senior Software Engineer"
                    className="w-full p-3 border rounded-lg"
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="work-phone">
                    Work Phone
                  </label>
                  <input
                    type="tel"
                    id="work-phone"
                    defaultValue="(555) 987-6543"
                    className="w-full p-3 border rounded-lg"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    className="text-sm font-medium"
                    htmlFor="annual-income"
                  >
                    Annual Income
                  </label>
                  <input
                    type="text"
                    id="annual-income"
                    defaultValue="$85,000"
                    className="w-full p-3 border rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Additional Information</h3>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium"
                    htmlFor="marital-status"
                  >
                    Marital Status
                  </label>
                  <select
                    id="marital-status"
                    className="w-full p-3 border rounded-lg"
                  >
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                    <option value="divorced">Divorced</option>
                    <option value="widowed">Widowed</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label
                    className="text-sm font-medium"
                    htmlFor="household-size"
                  >
                    Household Size
                  </label>
                  <select
                    id="household-size"
                    className="w-full p-3 border rounded-lg"
                  >
                    <option value="1">1 person</option>
                    <option value="2">2 people</option>
                    <option value="3">3 people</option>
                    <option value="4">4 people</option>
                    <option value="5+">5+ people</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="notes">
                  Additional Notes
                </label>
                <textarea
                  id="notes"
                  rows={3}
                  placeholder="Any additional information you'd like to share..."
                  className="w-full p-3 border rounded-lg resize-none"
                ></textarea>
              </div>
            </div>

            {/* Save Button */}
            <div className="flex gap-4">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
              >
                Save Changes
              </button>
              <button
                type="button"
                className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Privacy Settings */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">Privacy Settings</h2>
          <p className="text-sm text-muted-foreground">
            Control who can see your information
          </p>
        </div>

        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Profile Visibility</h3>
              <p className="text-sm text-muted-foreground">
                Allow landlord to view your profile information
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Contact Information Sharing</h3>
              <p className="text-sm text-muted-foreground">
                Share contact details with maintenance contractors
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Emergency Contact Access</h3>
              <p className="text-sm text-muted-foreground">
                Allow emergency contacts to view your information
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Account Security */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">Account Security</h2>
          <p className="text-sm text-muted-foreground">
            Manage your account security settings
          </p>
        </div>

        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Two-Factor Authentication</h3>
              <p className="text-sm text-muted-foreground">
                Add an extra layer of security to your account
              </p>
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">
              Enable 2FA
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Change Password</h3>
              <p className="text-sm text-muted-foreground">
                Update your account password
              </p>
            </div>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
              Change Password
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Download Data</h3>
              <p className="text-sm text-muted-foreground">
                Download a copy of your personal data
              </p>
            </div>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
