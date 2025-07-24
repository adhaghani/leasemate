export default function LandlordPropertiesListPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Property List</h1>
          <p className="text-muted-foreground">
            Manage all your properties and units
          </p>
        </div>
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90">
          Add Property
        </button>
      </div>

      <div className="flex gap-4 items-center">
        <input
          type="text"
          placeholder="Search properties..."
          className="flex h-9 w-full max-w-sm rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        />
        <select className="flex h-9 w-[180px] items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring">
          <option>All Properties</option>
          <option>Occupied</option>
          <option>Vacant</option>
          <option>Under Maintenance</option>
        </select>
      </div>

      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="grid gap-4 p-6">
          {/* Property Item 1 */}
          <div className="border rounded-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Sunset Apartments</h3>
                  <p className="text-muted-foreground">
                    123 Main Street, City, State 12345
                  </p>
                  <div className="flex gap-4 mt-2">
                    <span className="text-sm text-muted-foreground">
                      Built: 2018
                    </span>
                    <span className="text-sm text-muted-foreground">
                      4 Units
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Apartment Complex
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold">$4,800</p>
                <p className="text-sm text-muted-foreground">monthly revenue</p>
                <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full mt-2">
                  75% Occupied
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm font-medium">Unit 1A</p>
                <p className="text-xs text-green-600">Occupied - John Doe</p>
                <p className="text-xs text-muted-foreground">$1,200/month</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm font-medium">Unit 1B</p>
                <p className="text-xs text-green-600">Occupied - Jane Smith</p>
                <p className="text-xs text-muted-foreground">$1,200/month</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm font-medium">Unit 2A</p>
                <p className="text-xs text-green-600">Occupied - Bob Johnson</p>
                <p className="text-xs text-muted-foreground">$1,200/month</p>
              </div>
              <div className="p-3 bg-red-50 rounded-lg">
                <p className="text-sm font-medium">Unit 2B</p>
                <p className="text-xs text-red-600">Vacant</p>
                <p className="text-xs text-muted-foreground">$1,200/month</p>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700">
                View Details
              </button>
              <button className="px-3 py-1 border border-gray-300 text-sm rounded-md hover:bg-gray-50">
                Edit Property
              </button>
              <button className="px-3 py-1 border border-gray-300 text-sm rounded-md hover:bg-gray-50">
                Manage Units
              </button>
            </div>
          </div>

          {/* Property Item 2 */}
          <div className="border rounded-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Oak Grove Complex</h3>
                  <p className="text-muted-foreground">
                    456 Oak Avenue, City, State 12345
                  </p>
                  <div className="flex gap-4 mt-2">
                    <span className="text-sm text-muted-foreground">
                      Built: 2015
                    </span>
                    <span className="text-sm text-muted-foreground">
                      6 Units
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Apartment Complex
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold">$7,200</p>
                <p className="text-sm text-muted-foreground">monthly revenue</p>
                <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full mt-2">
                  100% Occupied
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm font-medium">Unit A</p>
                <p className="text-xs text-green-600">Occupied - Mike Wilson</p>
                <p className="text-xs text-muted-foreground">$1,200/month</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm font-medium">Unit B</p>
                <p className="text-xs text-green-600">Occupied - Sarah Davis</p>
                <p className="text-xs text-muted-foreground">$1,200/month</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm font-medium">Unit C</p>
                <p className="text-xs text-green-600">Occupied - Tom Brown</p>
                <p className="text-xs text-muted-foreground">$1,200/month</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm font-medium">Unit D</p>
                <p className="text-xs text-green-600">Occupied - Lisa Garcia</p>
                <p className="text-xs text-muted-foreground">$1,200/month</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm font-medium">Unit E</p>
                <p className="text-xs text-green-600">
                  Occupied - David Miller
                </p>
                <p className="text-xs text-muted-foreground">$1,200/month</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm font-medium">Unit F</p>
                <p className="text-xs text-green-600">Occupied - Emma Taylor</p>
                <p className="text-xs text-muted-foreground">$1,200/month</p>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700">
                View Details
              </button>
              <button className="px-3 py-1 border border-gray-300 text-sm rounded-md hover:bg-gray-50">
                Edit Property
              </button>
              <button className="px-3 py-1 border border-gray-300 text-sm rounded-md hover:bg-gray-50">
                Manage Units
              </button>
            </div>
          </div>

          {/* Property Item 3 */}
          <div className="border rounded-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-orange-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-orange-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">
                    Pine Ridge Townhomes
                  </h3>
                  <p className="text-muted-foreground">
                    789 Pine Street, City, State 12345
                  </p>
                  <div className="flex gap-4 mt-2">
                    <span className="text-sm text-muted-foreground">
                      Built: 2020
                    </span>
                    <span className="text-sm text-muted-foreground">
                      2 Units
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Townhouse
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold">$3,200</p>
                <p className="text-sm text-muted-foreground">monthly revenue</p>
                <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-orange-100 text-orange-800 rounded-full mt-2">
                  50% Occupied
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm font-medium">Unit 1</p>
                <p className="text-xs text-green-600">
                  Occupied - Alex Anderson
                </p>
                <p className="text-xs text-muted-foreground">$1,600/month</p>
              </div>
              <div className="p-3 bg-red-50 rounded-lg">
                <p className="text-sm font-medium">Unit 2</p>
                <p className="text-xs text-red-600">Vacant</p>
                <p className="text-xs text-muted-foreground">$1,600/month</p>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700">
                View Details
              </button>
              <button className="px-3 py-1 border border-gray-300 text-sm rounded-md hover:bg-gray-50">
                Edit Property
              </button>
              <button className="px-3 py-1 border border-gray-300 text-sm rounded-md hover:bg-gray-50">
                Manage Units
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
