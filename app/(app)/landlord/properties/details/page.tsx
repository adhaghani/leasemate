"use client";

import { useState } from "react";

export default function PropertyDetailsPage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="space-y-6">
      {/* Property Header */}
      <div className="bg-white rounded-lg border shadow-sm p-6">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Sunset Apartments
            </h1>
            <p className="text-muted-foreground">
              123 University Ave, College Town, CA 90210
            </p>
            <div className="flex gap-4 mt-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Active
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                24 Units
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                94% Occupied
              </span>
            </div>
          </div>

          <div className="flex gap-2">
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Edit Property
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Add Unit
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: "overview", label: "Overview" },
            { id: "units", label: "Units" },
            { id: "financials", label: "Financials" },
            { id: "maintenance", label: "Maintenance" },
            { id: "documents", label: "Documents" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === "overview" && (
        <div className="grid gap-6 md:grid-cols-2">
          {/* Property Stats */}
          <div className="bg-white rounded-lg border shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4">Property Statistics</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Units</span>
                <span className="font-medium">24</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Occupied Units</span>
                <span className="font-medium">23</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Vacant Units</span>
                <span className="font-medium">1</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Occupancy Rate</span>
                <span className="font-medium text-green-600">95.8%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Monthly Revenue</span>
                <span className="font-medium text-green-600">$28,750</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Average Rent</span>
                <span className="font-medium">$1,250</span>
              </div>
            </div>
          </div>

          {/* Property Details */}
          <div className="bg-white rounded-lg border shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4">Property Details</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Property Type</span>
                <span className="font-medium">Apartment Complex</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Year Built</span>
                <span className="font-medium">2018</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Sq Ft</span>
                <span className="font-medium">15,000 sq ft</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Parking Spaces</span>
                <span className="font-medium">30</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Laundry</span>
                <span className="font-medium">In-Unit</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Pet Policy</span>
                <span className="font-medium">No Pets</span>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg border shadow-sm p-6 md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 border rounded-lg">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-green-600"
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
                <div className="flex-1">
                  <p className="font-medium">Payment received - Unit 2B</p>
                  <p className="text-sm text-muted-foreground">
                    $1,250 from John Doe • 2 hours ago
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 border rounded-lg">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-medium">New tenant moved in - Unit 4A</p>
                  <p className="text-sm text-muted-foreground">
                    Sarah Johnson • 1 day ago
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 border rounded-lg">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-yellow-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-medium">Maintenance completed - Unit 1C</p>
                  <p className="text-sm text-muted-foreground">
                    HVAC repair • 3 days ago
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "units" && (
        <div className="space-y-6">
          {/* Units Grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 24 }, (_, i) => {
              const unitNumber = `${Math.floor(i / 8) + 1}${String.fromCharCode(
                65 + (i % 8)
              )}`;
              const isOccupied = i !== 7; // Unit 1H is vacant
              const rent = 1200 + (i % 5) * 50;

              return (
                <div
                  key={i}
                  className="bg-white rounded-lg border shadow-sm p-4"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold">Unit {unitNumber}</h4>
                    <span
                      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        isOccupied
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {isOccupied ? "Occupied" : "Vacant"}
                    </span>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Rent:</span>
                      <span className="font-medium">${rent}</span>
                    </div>
                    {isOccupied && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Tenant:</span>
                        <span className="font-medium">John Doe</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sq Ft:</span>
                      <span className="font-medium">650</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Bed/Bath:</span>
                      <span className="font-medium">1/1</span>
                    </div>
                  </div>

                  <div className="mt-4 flex gap-2">
                    <button className="flex-1 px-3 py-1 text-xs border border-gray-300 rounded hover:bg-gray-50">
                      View Details
                    </button>
                    {!isOccupied && (
                      <button className="flex-1 px-3 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700">
                        List Unit
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {activeTab === "financials" && (
        <div className="grid gap-6 md:grid-cols-2">
          {/* Revenue Chart */}
          <div className="bg-white rounded-lg border shadow-sm p-6 md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">
              Monthly Revenue Trend
            </h3>
            <div className="h-64 flex items-end justify-between gap-2">
              {/* Simulated bar chart */}
              {Array.from({ length: 12 }, (_, i) => {
                const height = 120 + Math.random() * 80;
                return (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <div
                      className="w-8 bg-blue-500 rounded-t"
                      style={{ height: `${height}px` }}
                    ></div>
                    <span className="text-xs text-muted-foreground">
                      {
                        [
                          "Jan",
                          "Feb",
                          "Mar",
                          "Apr",
                          "May",
                          "Jun",
                          "Jul",
                          "Aug",
                          "Sep",
                          "Oct",
                          "Nov",
                          "Dec",
                        ][i]
                      }
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Financial Summary */}
          <div className="bg-white rounded-lg border shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4">Financial Summary</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Monthly Revenue</span>
                <span className="font-medium text-green-600">$28,750</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Monthly Expenses</span>
                <span className="font-medium text-red-600">$8,450</span>
              </div>
              <div className="flex justify-between border-t pt-2">
                <span className="font-medium">Net Income</span>
                <span className="font-bold text-green-600">$20,300</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Annual Revenue</span>
                <span className="font-medium">$345,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">ROI</span>
                <span className="font-medium text-green-600">14.2%</span>
              </div>
            </div>
          </div>

          {/* Expense Breakdown */}
          <div className="bg-white rounded-lg border shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4">Monthly Expenses</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Property Tax</span>
                <span className="font-medium">$2,100</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Insurance</span>
                <span className="font-medium">$850</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Maintenance</span>
                <span className="font-medium">$1,500</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Utilities</span>
                <span className="font-medium">$2,200</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Management</span>
                <span className="font-medium">$1,800</span>
              </div>
              <div className="flex justify-between border-t pt-2">
                <span className="font-medium">Total Expenses</span>
                <span className="font-bold">$8,450</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "maintenance" && (
        <div className="space-y-6">
          {/* Maintenance Requests */}
          <div className="bg-white rounded-lg border shadow-sm">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold">
                Active Maintenance Requests
              </h3>
            </div>

            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 border rounded-lg">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="font-medium">
                      Heating system malfunction - Unit 3B
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Reported by tenant • High priority • 2 hours ago
                    </p>
                  </div>
                  <button className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded">
                    Urgent
                  </button>
                </div>

                <div className="flex items-center gap-4 p-4 border rounded-lg">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="font-medium">Kitchen faucet leak - Unit 1A</p>
                    <p className="text-sm text-muted-foreground">
                      Reported by tenant • Medium priority • 1 day ago
                    </p>
                  </div>
                  <button className="px-3 py-1 text-sm bg-yellow-100 text-yellow-700 rounded">
                    Scheduled
                  </button>
                </div>

                <div className="flex items-center gap-4 p-4 border rounded-lg">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="font-medium">
                      Electrical outlet repair - Unit 2C
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Completed by contractor • 3 days ago
                    </p>
                  </div>
                  <button className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded">
                    Completed
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Maintenance Schedule */}
          <div className="bg-white rounded-lg border shadow-sm">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold">Upcoming Maintenance</h3>
            </div>

            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">Annual HVAC inspection</p>
                    <p className="text-sm text-muted-foreground">
                      All units • Scheduled for next week
                    </p>
                  </div>
                  <span className="text-blue-600 font-medium">
                    Dec 15, 2024
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">Pool maintenance</p>
                    <p className="text-sm text-muted-foreground">
                      Chemical balance and cleaning
                    </p>
                  </div>
                  <span className="text-blue-600 font-medium">
                    Dec 12, 2024
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">Fire safety inspection</p>
                    <p className="text-sm text-muted-foreground">
                      Smoke detectors and alarms
                    </p>
                  </div>
                  <span className="text-blue-600 font-medium">
                    Dec 20, 2024
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "documents" && (
        <div className="grid gap-6 md:grid-cols-2">
          {/* Property Documents */}
          <div className="bg-white rounded-lg border shadow-sm">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold">Property Documents</h3>
            </div>

            <div className="p-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
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
                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="font-medium text-sm">Property Deed</span>
                  </div>
                  <button className="text-blue-600 text-sm hover:underline">
                    View
                  </button>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-lg">
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
                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="font-medium text-sm">
                      Insurance Policy
                    </span>
                  </div>
                  <button className="text-blue-600 text-sm hover:underline">
                    View
                  </button>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-lg">
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
                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="font-medium text-sm">Property Survey</span>
                  </div>
                  <button className="text-blue-600 text-sm hover:underline">
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Lease Documents */}
          <div className="bg-white rounded-lg border shadow-sm">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold">Lease Documents</h3>
            </div>

            <div className="p-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="font-medium text-sm">
                      Standard Lease Template
                    </span>
                  </div>
                  <button className="text-blue-600 text-sm hover:underline">
                    View
                  </button>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="font-medium text-sm">
                      Move-in Checklist
                    </span>
                  </div>
                  <button className="text-blue-600 text-sm hover:underline">
                    View
                  </button>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="font-medium text-sm">Pet Addendum</span>
                  </div>
                  <button className="text-blue-600 text-sm hover:underline">
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
