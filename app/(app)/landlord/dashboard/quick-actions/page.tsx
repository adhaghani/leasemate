import { Text } from "@/components/ui/text";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function LandlordDashboardQuickActionsPage() {
  return (
    <div className="space-y-4">
      <div>
        <Text as="h2">Quick Actions</Text>
        <Text as="p" styleVariant="muted">
          Perform common tasks quickly and efficiently
        </Text>
      </div>

      {/* Quick Action Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Add New Property */}
        <Card>
          <CardContent className="flex items-center gap-4">
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
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <div>
              <Text as="h4">Add New Property</Text>
              <Text as="p" styleVariant="muted">
                Add a property to your portfolio
              </Text>
            </div>
          </CardContent>
        </Card>

        {/* Add New Tenant */}
        <Card>
          <CardContent className="flex items-center gap-4">
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
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                />
              </svg>
            </div>
            <div>
              <Text as="h4">Add New Tenant</Text>
              <Text as="p" styleVariant="muted">
                Register a new tenant
              </Text>
            </div>
          </CardContent>
        </Card>

        {/* Send Announcement */}
        <Card>
          <CardContent className="flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                />
              </svg>
            </div>
            <div>
              <Text as="h4">Send Announcement</Text>
              <Text as="p" styleVariant="muted">
                Notify all tenants
              </Text>
            </div>
          </CardContent>
        </Card>

        {/* Record Payment */}
        <Card>
          <CardContent className="flex items-center gap-4">
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
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                />
              </svg>
            </div>
            <div>
              <Text as="h4">Record Payment</Text>
              <Text as="p" styleVariant="muted">
                Log a manual payment
              </Text>
            </div>
          </CardContent>
        </Card>

        {/* Create Maintenance Request */}
        <Card>
          <CardContent className="flex items-center gap-4">
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
            <div>
              <Text as="h4">Create Maintenance</Text>
              <Text as="p" styleVariant="muted">
                Schedule maintenance work
              </Text>
            </div>
          </CardContent>
        </Card>

        {/* Generate Report */}
        <Card>
          <CardContent className="flex items-center gap-4">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <div>
              <Text as="h4">Generate Report</Text>
              <Text as="p" styleVariant="muted">
                Create financial reports
              </Text>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Actions */}
      <Card>
        <CardContent className="space-y-4">
          <div>
            <Text as="h4">Recent Actions</Text>
            <Text as="p" styleVariant="muted">
              Your latest activities
            </Text>
          </div>
          <Separator className="w-full" />
          <div>
            <div className="space-y-4">
              <Card className="border-l-4 border-green-500">
                <CardContent className="flex items-center gap-4 p-4">
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <Text as="p" className="font-medium">
                      Payment recorded for Unit 2B
                    </Text>
                    <Text as="p" styleVariant="muted" className="text-sm">
                      $1,200 from John Doe • 2 hours ago
                    </Text>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-blue-500">
                <CardContent className="flex items-center gap-4 p-4">
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
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <Text as="p" className="font-medium">
                      Added new property
                    </Text>
                    <Text as="p" styleVariant="muted" className="text-sm">
                      Sunset Apartments Building C • 1 day ago
                    </Text>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-purple-500">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
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
                        d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <Text as="p" className="font-medium">
                      Sent maintenance reminder
                    </Text>
                    <Text as="p" styleVariant="muted" className="text-sm">
                      Annual HVAC inspection notice • 2 days ago
                    </Text>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-yellow-500">
                <CardContent className="flex items-center gap-4 p-4">
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
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <Text as="p" className="font-medium">
                      New tenant application
                    </Text>
                    <Text as="p" styleVariant="muted" className="text-sm">
                      Sarah Johnson for Unit 4A • 3 days ago
                    </Text>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Shortcuts Section */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Property Shortcuts</CardTitle>
          </CardHeader>

          <CardContent>
            <div className="space-y-3">
              <Button
                variant="ghost"
                className="w-full justify-between p-3 h-auto"
              >
                <Text as="p" className="font-medium">
                  View All Properties
                </Text>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Button>

              <Button
                variant="ghost"
                className="w-full justify-between p-3 h-auto"
              >
                <Text as="p" className="font-medium">
                  Vacant Units
                </Text>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Button>

              <Button
                variant="ghost"
                className="w-full justify-between p-3 h-auto"
              >
                <Text as="p" className="font-medium">
                  Property Documents
                </Text>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tenant Shortcuts</CardTitle>
          </CardHeader>

          <CardContent>
            <div className="space-y-3">
              <Button
                variant="ghost"
                className="w-full justify-between p-3 h-auto"
              >
                <Text as="p" className="font-medium">
                  All Tenants
                </Text>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Button>

              <Button
                variant="ghost"
                className="w-full justify-between p-3 h-auto"
              >
                <Text as="p" className="font-medium">
                  Pending Applications
                </Text>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Button>

              <Button
                variant="ghost"
                className="w-full justify-between p-3 h-auto"
              >
                <Text as="p" className="font-medium">
                  Lease Management
                </Text>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Forms */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Forms</CardTitle>
          <CardDescription>
            Commonly used forms for faster workflow
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="p-4">
              <Text as="h4" className="font-medium mb-2">
                Late Payment Notice
              </Text>
              <Text as="p" styleVariant="muted" className="text-sm mb-3">
                Send automated late payment notices
              </Text>
              <Button className="w-full bg-red-100 text-red-700 border-red-200 hover:bg-red-200">
                Generate Notice
              </Button>
            </Card>

            <Card className="p-4">
              <Text as="h4" className="font-medium mb-2">
                Lease Renewal
              </Text>
              <Text as="p" styleVariant="muted" className="text-sm mb-3">
                Create lease renewal documents
              </Text>
              <Button className="w-full bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-200">
                Create Renewal
              </Button>
            </Card>

            <Card className="p-4">
              <Text as="h4" className="font-medium mb-2">
                Move-In Checklist
              </Text>
              <Text as="p" styleVariant="muted" className="text-sm mb-3">
                Generate move-in inspection forms
              </Text>
              <Button className="w-full bg-green-100 text-green-700 border-green-200 hover:bg-green-200">
                Create Checklist
              </Button>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
