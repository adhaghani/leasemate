import { Text } from "@/components/ui/text";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function TenantDocumentsPage() {
  return (
    <div className="space-y-6">
      <div>
        <Text as="h1" className="text-3xl font-bold tracking-tight">
          Documents
        </Text>
        <Text as="p" styleVariant="muted">
          Access all your rental-related documents and forms
        </Text>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Lease Documents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
                    </svg>
                  </div>
                  <div>
                    <Text as="h3" className="font-medium">
                      Lease Agreement
                    </Text>
                    <Text as="p" styleVariant="muted" className="text-sm">
                      Signed on January 1, 2024
                    </Text>
                  </div>
                </div>
                <Button>Download</Button>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
                    </svg>
                  </div>
                  <div>
                    <Text as="h3" className="font-medium">
                      Move-in Inspection
                    </Text>
                    <Text as="p" styleVariant="muted" className="text-sm">
                      Completed on January 1, 2024
                    </Text>
                  </div>
                </div>
                <Button>Download</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Financial Documents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-purple-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
                    </svg>
                  </div>
                  <div>
                    <Text as="h3" className="font-medium">
                      Security Deposit Receipt
                    </Text>
                    <Text as="p" styleVariant="muted" className="text-sm">
                      Amount: $1,200
                    </Text>
                  </div>
                </div>
                <Button>Download</Button>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-orange-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
                    </svg>
                  </div>
                  <div>
                    <Text as="h3" className="font-medium">
                      Payment Receipts
                    </Text>
                    <Text as="p" styleVariant="muted" className="text-sm">
                      Last 12 months
                    </Text>
                  </div>
                </div>
                <Button>View All</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Forms & Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-red-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
                    </svg>
                  </div>
                  <div>
                    <Text as="h3" className="font-medium">
                      Maintenance Request Form
                    </Text>
                    <Text as="p" styleVariant="muted" className="text-sm">
                      Submit non-emergency requests
                    </Text>
                  </div>
                </div>
                <Button>Fill Out</Button>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-teal-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
                    </svg>
                  </div>
                  <div>
                    <Text as="h3" className="font-medium">
                      Lease Renewal Application
                    </Text>
                    <Text as="p" styleVariant="muted" className="text-sm">
                      Available 60 days before lease end
                    </Text>
                  </div>
                </div>
                <Button
                  variant="secondary"
                  disabled
                  className="bg-gray-200 text-gray-500 cursor-not-allowed"
                >
                  Not Available
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
