export default function VacantUnitsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Vacant Units</h1>
          <p className="text-muted-foreground">
            Manage and list your available rental units
          </p>
        </div>

        <div className="flex gap-2">
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            Export List
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Add New Unit
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Total Vacant
              </p>
              <p className="text-2xl font-bold">7</p>
              <p className="text-xs text-red-600">Units available</p>
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
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Listed Online
              </p>
              <p className="text-2xl font-bold">5</p>
              <p className="text-xs text-blue-600">Active listings</p>
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
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Avg. Days Vacant
              </p>
              <p className="text-2xl font-bold">18</p>
              <p className="text-xs text-yellow-600">Days average</p>
            </div>
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
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Potential Revenue
              </p>
              <p className="text-2xl font-bold">$8,750</p>
              <p className="text-xs text-green-600">Monthly potential</p>
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
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-4 items-center">
        <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">All Properties</option>
          <option value="sunset">Sunset Apartments</option>
          <option value="downtown">Downtown Condos</option>
          <option value="riverside">Riverside Complex</option>
        </select>

        <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">All Status</option>
          <option value="ready">Ready to Rent</option>
          <option value="maintenance">Under Maintenance</option>
          <option value="listed">Listed Online</option>
        </select>

        <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">Sort by</option>
          <option value="unit">Unit Number</option>
          <option value="rent">Rent Price</option>
          <option value="days">Days Vacant</option>
        </select>
      </div>

      {/* Vacant Units List */}
      <div className="bg-white rounded-lg border shadow-sm">
        <div className="p-6 border-b">
          <h3 className="text-lg font-semibold">Available Units</h3>
        </div>

        <div className="divide-y">
          {/* Unit 1 */}
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>

                <div>
                  <h4 className="font-semibold text-lg">Unit 1H</h4>
                  <p className="text-muted-foreground">Sunset Apartments</p>
                  <p className="text-sm text-muted-foreground">
                    123 University Ave, College Town, CA
                  </p>
                  <div className="flex gap-2 mt-2">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Ready to Rent
                    </span>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Listed Online
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-2xl font-bold text-green-600">$1,250</div>
                <div className="text-sm text-muted-foreground">per month</div>
                <div className="text-sm text-red-600 mt-1">Vacant 12 days</div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-sm">
              <div>
                <span className="text-muted-foreground">Size:</span>
                <span className="font-medium ml-2">650 sq ft</span>
              </div>
              <div>
                <span className="text-muted-foreground">Bed/Bath:</span>
                <span className="font-medium ml-2">1/1</span>
              </div>
              <div>
                <span className="text-muted-foreground">Inquiries:</span>
                <span className="font-medium ml-2">3 this week</span>
              </div>
              <div>
                <span className="text-muted-foreground">Showings:</span>
                <span className="font-medium ml-2">2 scheduled</span>
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Schedule Showing
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                Edit Listing
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                View Details
              </button>
            </div>
          </div>

          {/* Unit 2 */}
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>

                <div>
                  <h4 className="font-semibold text-lg">Unit 2D</h4>
                  <p className="text-muted-foreground">Downtown Condos</p>
                  <p className="text-sm text-muted-foreground">
                    456 Main St, College Town, CA
                  </p>
                  <div className="flex gap-2 mt-2">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      Under Maintenance
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-2xl font-bold text-green-600">$1,400</div>
                <div className="text-sm text-muted-foreground">per month</div>
                <div className="text-sm text-red-600 mt-1">Vacant 25 days</div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-sm">
              <div>
                <span className="text-muted-foreground">Size:</span>
                <span className="font-medium ml-2">750 sq ft</span>
              </div>
              <div>
                <span className="text-muted-foreground">Bed/Bath:</span>
                <span className="font-medium ml-2">1/1</span>
              </div>
              <div>
                <span className="text-muted-foreground">Maintenance:</span>
                <span className="font-medium ml-2">Kitchen remodel</span>
              </div>
              <div>
                <span className="text-muted-foreground">Est. Complete:</span>
                <span className="font-medium ml-2">Dec 20, 2024</span>
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <button
                className="px-4 py-2 bg-gray-400 text-white rounded-lg cursor-not-allowed"
                disabled
              >
                Maintenance in Progress
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                View Maintenance
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                View Details
              </button>
            </div>
          </div>

          {/* Unit 3 */}
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>

                <div>
                  <h4 className="font-semibold text-lg">Unit 3F</h4>
                  <p className="text-muted-foreground">Riverside Complex</p>
                  <p className="text-sm text-muted-foreground">
                    789 River Rd, College Town, CA
                  </p>
                  <div className="flex gap-2 mt-2">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Ready to Rent
                    </span>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                      Premium Unit
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-2xl font-bold text-green-600">$1,600</div>
                <div className="text-sm text-muted-foreground">per month</div>
                <div className="text-sm text-red-600 mt-1">Vacant 8 days</div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-sm">
              <div>
                <span className="text-muted-foreground">Size:</span>
                <span className="font-medium ml-2">950 sq ft</span>
              </div>
              <div>
                <span className="text-muted-foreground">Bed/Bath:</span>
                <span className="font-medium ml-2">2/1.5</span>
              </div>
              <div>
                <span className="text-muted-foreground">Inquiries:</span>
                <span className="font-medium ml-2">8 this week</span>
              </div>
              <div>
                <span className="text-muted-foreground">Showings:</span>
                <span className="font-medium ml-2">5 scheduled</span>
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Schedule Showing
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                Create Listing
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                View Details
              </button>
            </div>
          </div>

          {/* Unit 4 */}
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>

                <div>
                  <h4 className="font-semibold text-lg">Unit 1C</h4>
                  <p className="text-muted-foreground">Sunset Apartments</p>
                  <p className="text-sm text-muted-foreground">
                    123 University Ave, College Town, CA
                  </p>
                  <div className="flex gap-2 mt-2">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Ready to Rent
                    </span>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Listed Online
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-2xl font-bold text-green-600">$1,200</div>
                <div className="text-sm text-muted-foreground">per month</div>
                <div className="text-sm text-red-600 mt-1">Vacant 5 days</div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-sm">
              <div>
                <span className="text-muted-foreground">Size:</span>
                <span className="font-medium ml-2">600 sq ft</span>
              </div>
              <div>
                <span className="text-muted-foreground">Bed/Bath:</span>
                <span className="font-medium ml-2">1/1</span>
              </div>
              <div>
                <span className="text-muted-foreground">Inquiries:</span>
                <span className="font-medium ml-2">12 this week</span>
              </div>
              <div>
                <span className="text-muted-foreground">Showings:</span>
                <span className="font-medium ml-2">4 scheduled</span>
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Schedule Showing
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                Edit Listing
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-3">
        <div className="bg-white rounded-lg border shadow-sm p-6">
          <h3 className="font-semibold mb-3">Bulk Actions</h3>
          <div className="space-y-2">
            <button className="w-full px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200">
              List All Ready Units
            </button>
            <button className="w-full px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200">
              Update All Rent Prices
            </button>
            <button className="w-full px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200">
              Generate Marketing Materials
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg border shadow-sm p-6">
          <h3 className="font-semibold mb-3">Marketing</h3>
          <div className="space-y-2">
            <button className="w-full px-4 py-2 bg-orange-100 text-orange-700 rounded-lg hover:bg-orange-200">
              Create Virtual Tours
            </button>
            <button className="w-full px-4 py-2 bg-pink-100 text-pink-700 rounded-lg hover:bg-pink-200">
              Post to Social Media
            </button>
            <button className="w-full px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200">
              Print Flyers
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg border shadow-sm p-6">
          <h3 className="font-semibold mb-3">Analytics</h3>
          <div className="space-y-2">
            <button className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
              Vacancy Report
            </button>
            <button className="w-full px-4 py-2 bg-yellow-100 text-yellow-700 rounded-lg hover:bg-yellow-200">
              Market Comparison
            </button>
            <button className="w-full px-4 py-2 bg-teal-100 text-teal-700 rounded-lg hover:bg-teal-200">
              Revenue Projections
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
