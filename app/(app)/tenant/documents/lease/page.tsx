export default function TenantDocumentsLeasePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Lease Documents</h1>
        <p className="text-muted-foreground">
          View and download your current lease agreement and related documents
        </p>
      </div>

      {/* Current Lease Overview */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">Current Lease Agreement</h2>
          <p className="text-sm text-muted-foreground">
            Active lease for Unit 2B, Sunset Apartments
          </p>
        </div>

        <div className="p-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-sm text-muted-foreground">
                  Lease Period
                </h3>
                <p className="font-semibold">
                  January 15, 2024 - January 14, 2025
                </p>
              </div>

              <div>
                <h3 className="font-medium text-sm text-muted-foreground">
                  Monthly Rent
                </h3>
                <p className="font-semibold">$1,200.00</p>
              </div>

              <div>
                <h3 className="font-medium text-sm text-muted-foreground">
                  Security Deposit
                </h3>
                <p className="font-semibold">$1,200.00</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-sm text-muted-foreground">
                  Property Address
                </h3>
                <p className="font-semibold">
                  123 Sunset Drive, Unit 2B
                  <br />
                  Springfield, CA 12345
                </p>
              </div>

              <div>
                <h3 className="font-medium text-sm text-muted-foreground">
                  Landlord
                </h3>
                <p className="font-semibold">Sarah Thompson</p>
                <p className="text-sm text-muted-foreground">
                  sarah@sunsetapartments.com
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                Active Lease
              </span>
              <span className="text-sm text-muted-foreground">
                • Expires in 295 days
              </span>
            </div>

            <div className="flex gap-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Download Full Lease PDF
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                Email Copy to Me
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                Request Amendment
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lease Documents */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">Related Documents</h2>
          <p className="text-sm text-muted-foreground">
            Additional documents related to your lease
          </p>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
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
                </div>
                <div>
                  <h3 className="font-medium">Lease Agreement - 2024</h3>
                  <p className="text-sm text-muted-foreground">
                    Main lease contract • 12 pages • Signed Jan 15, 2024
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="text-blue-600 hover:underline text-sm">
                  View
                </button>
                <button className="text-blue-600 hover:underline text-sm">
                  Download
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
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
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Move-in Inspection Report</h3>
                  <p className="text-sm text-muted-foreground">
                    Property condition report • 4 pages • Completed Jan 15, 2024
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="text-blue-600 hover:underline text-sm">
                  View
                </button>
                <button className="text-blue-600 hover:underline text-sm">
                  Download
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
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
                <div>
                  <h3 className="font-medium">Security Deposit Receipt</h3>
                  <p className="text-sm text-muted-foreground">
                    Payment confirmation • 1 page • Issued Jan 15, 2024
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="text-blue-600 hover:underline text-sm">
                  View
                </button>
                <button className="text-blue-600 hover:underline text-sm">
                  Download
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M10.5 3L12 2l1.5 1H21v6H3V3h7.5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Property Rules & Regulations</h3>
                  <p className="text-sm text-muted-foreground">
                    Building policies • 6 pages • Updated Jan 2024
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="text-blue-600 hover:underline text-sm">
                  View
                </button>
                <button className="text-blue-600 hover:underline text-sm">
                  Download
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-orange-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Key & Access Agreement</h3>
                  <p className="text-sm text-muted-foreground">
                    Access terms • 2 pages • Signed Jan 15, 2024
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="text-blue-600 hover:underline text-sm">
                  View
                </button>
                <button className="text-blue-600 hover:underline text-sm">
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lease Amendment History */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">Amendment History</h2>
          <p className="text-sm text-muted-foreground">
            Changes and addendums to your lease
          </p>
        </div>

        <div className="p-6">
          <div className="text-center py-8">
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
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <p className="text-gray-500">No amendments to your lease</p>
            <p className="text-sm text-gray-400 mt-1">
              Any changes or addendums will appear here
            </p>
          </div>
        </div>
      </div>

      {/* Important Information */}
      <div className="rounded-lg border bg-yellow-50 border-yellow-200">
        <div className="p-6">
          <div className="flex items-start gap-3">
            <svg
              className="w-5 h-5 text-yellow-600 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div>
              <h3 className="font-medium text-yellow-800 mb-2">
                Important Information
              </h3>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Your lease expires on January 14, 2025</li>
                <li>
                  • Renewal notices typically sent 60 days prior to expiration
                </li>
                <li>
                  • Contact your landlord with any questions about lease terms
                </li>
                <li>• Keep copies of all lease documents for your records</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold">Quick Actions</h2>
        </div>

        <div className="p-6">
          <div className="grid gap-4 md:grid-cols-3">
            <button className="p-4 border rounded-lg hover:bg-gray-50 text-center">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
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
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <h3 className="font-medium">Ask Question</h3>
              <p className="text-sm text-muted-foreground">About lease terms</p>
            </button>

            <button className="p-4 border rounded-lg hover:bg-gray-50 text-center">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
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
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="font-medium">Request Amendment</h3>
              <p className="text-sm text-muted-foreground">
                Modify lease terms
              </p>
            </button>

            <button className="p-4 border rounded-lg hover:bg-gray-50 text-center">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <svg
                  className="w-5 h-5 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </div>
              <h3 className="font-medium">Download All</h3>
              <p className="text-sm text-muted-foreground">As ZIP file</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
