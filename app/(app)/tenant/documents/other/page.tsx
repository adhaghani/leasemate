export default function TenantDocumentsOtherPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Other Documents</h1>
          <p className="text-muted-foreground">
            Additional documents, forms, and important papers
          </p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Upload Document
        </button>
      </div>

      {/* Document Categories */}
      <div className="flex gap-4 items-center flex-wrap">
        <select className="px-3 py-2 border rounded-lg">
          <option value="all">All Categories</option>
          <option value="insurance">Insurance</option>
          <option value="forms">Forms & Applications</option>
          <option value="notices">Notices</option>
          <option value="personal">Personal Documents</option>
          <option value="maintenance">Maintenance Records</option>
          <option value="correspondence">Correspondence</option>
        </select>

        <select className="px-3 py-2 border rounded-lg">
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="name">By Name</option>
          <option value="type">By Type</option>
        </select>

        <div className="flex-1">
          <input
            type="text"
            placeholder="Search documents..."
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
      </div>

      {/* Upload Area */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">Upload New Document</h2>
          <p className="text-sm text-muted-foreground">
            Add important documents to your file
          </p>
        </div>

        <div className="p-6">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <svg
              className="w-12 h-12 text-gray-400 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            <p className="text-lg font-medium text-gray-700 mb-2">
              Drop files here or click to upload
            </p>
            <p className="text-sm text-gray-500 mb-4">
              PDF, DOC, DOCX, JPG, PNG up to 25MB per file
            </p>

            <div className="grid gap-4 md:grid-cols-2 mt-6">
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="doc-category">
                  Document Category
                </label>
                <select id="doc-category" className="w-full p-2 border rounded">
                  <option value="">Select category...</option>
                  <option value="insurance">Insurance Documents</option>
                  <option value="forms">Forms & Applications</option>
                  <option value="notices">Notices & Communications</option>
                  <option value="personal">Personal Documents</option>
                  <option value="maintenance">Maintenance Records</option>
                  <option value="correspondence">Correspondence</option>
                </select>
              </div>

              <div className="space-y-2">
                <label
                  className="text-sm font-medium"
                  htmlFor="doc-description"
                >
                  Description (Optional)
                </label>
                <input
                  type="text"
                  id="doc-description"
                  placeholder="Brief description..."
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>

            <input type="file" multiple className="hidden" />
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Choose Files
            </button>
          </div>
        </div>
      </div>

      {/* Document Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Insurance Documents */}
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="p-4 border-b">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold">Insurance Documents</h3>
            </div>
          </div>

          <div className="p-4 space-y-3">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <p className="font-medium text-sm">Renters Insurance Policy</p>
                <p className="text-xs text-muted-foreground">
                  Updated Jan 15, 2024 • PDF
                </p>
              </div>
              <button className="text-blue-600 hover:underline text-xs">
                View
              </button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <p className="font-medium text-sm">Insurance Certificate</p>
                <p className="text-xs text-muted-foreground">
                  Issued Jan 15, 2024 • PDF
                </p>
              </div>
              <button className="text-blue-600 hover:underline text-xs">
                View
              </button>
            </div>
          </div>
        </div>

        {/* Forms & Applications */}
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="p-4 border-b">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-green-600"
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
              <h3 className="font-semibold">Forms & Applications</h3>
            </div>
          </div>

          <div className="p-4 space-y-3">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <p className="font-medium text-sm">Rental Application</p>
                <p className="text-xs text-muted-foreground">
                  Submitted Jan 2, 2024 • PDF
                </p>
              </div>
              <button className="text-blue-600 hover:underline text-xs">
                View
              </button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <p className="font-medium text-sm">Background Check Consent</p>
                <p className="text-xs text-muted-foreground">
                  Signed Jan 2, 2024 • PDF
                </p>
              </div>
              <button className="text-blue-600 hover:underline text-xs">
                View
              </button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <p className="font-medium text-sm">Pet Application Form</p>
                <p className="text-xs text-muted-foreground">
                  Approved Jan 10, 2024 • PDF
                </p>
              </div>
              <button className="text-blue-600 hover:underline text-xs">
                View
              </button>
            </div>
          </div>
        </div>

        {/* Notices */}
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="p-4 border-b">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-5 5v-5zM9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold">Notices</h3>
            </div>
          </div>

          <div className="p-4 space-y-3">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <p className="font-medium text-sm">Move-in Welcome Notice</p>
                <p className="text-xs text-muted-foreground">
                  Received Jan 15, 2024 • PDF
                </p>
              </div>
              <button className="text-blue-600 hover:underline text-xs">
                View
              </button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <p className="font-medium text-sm">Building Policy Updates</p>
                <p className="text-xs text-muted-foreground">
                  Mar 8, 2024 • PDF
                </p>
              </div>
              <button className="text-blue-600 hover:underline text-xs">
                View
              </button>
            </div>
          </div>
        </div>

        {/* Personal Documents */}
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="p-4 border-b">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-purple-600"
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
              <h3 className="font-semibold">Personal Documents</h3>
            </div>
          </div>

          <div className="p-4 space-y-3">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <p className="font-medium text-sm">Employment Verification</p>
                <p className="text-xs text-muted-foreground">
                  Uploaded Jan 5, 2024 • PDF
                </p>
              </div>
              <button className="text-blue-600 hover:underline text-xs">
                View
              </button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <p className="font-medium text-sm">Bank Statements</p>
                <p className="text-xs text-muted-foreground">Dec 2023 • PDF</p>
              </div>
              <button className="text-blue-600 hover:underline text-xs">
                View
              </button>
            </div>
          </div>
        </div>

        {/* Maintenance Records */}
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="p-4 border-b">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold">Maintenance Records</h3>
            </div>
          </div>

          <div className="p-4 space-y-3">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <p className="font-medium text-sm">HVAC Service Report</p>
                <p className="text-xs text-muted-foreground">
                  Mar 10, 2024 • PDF
                </p>
              </div>
              <button className="text-blue-600 hover:underline text-xs">
                View
              </button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <p className="font-medium text-sm">Plumbing Repair Invoice</p>
                <p className="text-xs text-muted-foreground">
                  Feb 20, 2024 • PDF
                </p>
              </div>
              <button className="text-blue-600 hover:underline text-xs">
                View
              </button>
            </div>
          </div>
        </div>

        {/* Correspondence */}
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="p-4 border-b">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold">Correspondence</h3>
            </div>
          </div>

          <div className="p-4 space-y-3">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <p className="font-medium text-sm">Lease Renewal Discussion</p>
                <p className="text-xs text-muted-foreground">
                  Mar 12, 2024 • Email
                </p>
              </div>
              <button className="text-blue-600 hover:underline text-xs">
                View
              </button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <p className="font-medium text-sm">Reference Letters</p>
                <p className="text-xs text-muted-foreground">
                  Jan 3, 2024 • PDF
                </p>
              </div>
              <button className="text-blue-600 hover:underline text-xs">
                View
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Document Management */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold">Document Management</h2>
        </div>

        <div className="p-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 border rounded-lg text-center">
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
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="font-medium">Bulk Download</h3>
              <p className="text-sm text-muted-foreground">
                Download all documents
              </p>
            </div>

            <div className="p-4 border rounded-lg text-center">
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
                    d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H15"
                  />
                </svg>
              </div>
              <h3 className="font-medium">Organize</h3>
              <p className="text-sm text-muted-foreground">
                Sort by categories
              </p>
            </div>

            <div className="p-4 border rounded-lg text-center">
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
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="font-medium">Search</h3>
              <p className="text-sm text-muted-foreground">
                Find documents quickly
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
