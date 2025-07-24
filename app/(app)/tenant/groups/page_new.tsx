import { Text } from "@/components/ui/text";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function TenantGroupsMainPage() {
  return (
    <div className="space-y-6">
      <div>
        <Text as="h1" className="text-3xl font-bold tracking-tight">
          Groups
        </Text>
        <Text as="p" styleVariant="muted">
          Manage shared expenses and coordinate with your roommates
        </Text>
      </div>

      {/* Current Group Status */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <Text as="h3" className="text-lg font-semibold mb-2">
                Your Group Status
              </Text>
              <div className="flex items-center gap-2">
                <Badge className="bg-green-100 text-green-700">
                  Active Member
                </Badge>
                <Text as="p" styleVariant="muted" className="text-sm">
                  Riverside Complex Group - Unit 2B
                </Text>
              </div>
            </div>
            <div className="text-right">
              <Text as="p" className="text-2xl font-bold">
                4
              </Text>
              <Text as="p" styleVariant="muted" className="text-sm">
                Members
              </Text>
            </div>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="text-center">
              <Text as="p" className="text-xl font-bold text-blue-600">
                $420
              </Text>
              <Text as="p" styleVariant="muted" className="text-sm">
                Your Share
              </Text>
            </div>
            <div className="text-center">
              <Text as="p" className="text-xl font-bold text-green-600">
                Paid
              </Text>
              <Text as="p" styleVariant="muted" className="text-sm">
                This Month
              </Text>
            </div>
            <div className="text-center">
              <Text as="p" className="text-xl font-bold text-orange-600">
                $1,680
              </Text>
              <Text as="p" styleVariant="muted" className="text-sm">
                Total Rent
              </Text>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Link href="/tenant/groups/my-group">
          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <Text as="h3" className="font-medium mb-2">
                My Group
              </Text>
              <Text as="p" styleVariant="muted" className="text-sm">
                View group details
              </Text>
            </CardContent>
          </Card>
        </Link>

        <Link href="/tenant/groups/payments">
          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
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
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <Text as="h3" className="font-medium mb-2">
                Payment Splits
              </Text>
              <Text as="p" styleVariant="muted" className="text-sm">
                Manage shared expenses
              </Text>
            </CardContent>
          </Card>
        </Link>

        <Link href="/tenant/groups/messages">
          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
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
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <Text as="h3" className="font-medium mb-2">
                Group Chat
              </Text>
              <Text as="p" styleVariant="muted" className="text-sm">
                Message roommates
              </Text>
            </CardContent>
          </Card>
        </Link>

        <Link href="/tenant/groups/settings">
          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-6 h-6 text-gray-600"
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
                </svg>
              </div>
              <Text as="h3" className="font-medium mb-2">
                Settings
              </Text>
              <Text as="p" styleVariant="muted" className="text-sm">
                Group preferences
              </Text>
            </CardContent>
          </Card>
        </Link>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <Text as="p" className="font-medium">
                    Payment received from Mike
                  </Text>
                  <Text as="p" styleVariant="muted" className="text-sm">
                    $420 for January rent
                  </Text>
                </div>
              </div>
              <Badge variant="secondary">2 hours ago</Badge>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
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
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <div>
                  <Text as="p" className="font-medium">
                    New group message
                  </Text>
                  <Text as="p" styleVariant="muted" className="text-sm">
                    Sarah: "Utilities bill is due soon"
                  </Text>
                </div>
              </div>
              <Badge>5 hours ago</Badge>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
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
                      d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <Text as="p" className="font-medium">
                    Expense added
                  </Text>
                  <Text as="p" styleVariant="muted" className="text-sm">
                    Internet bill: $80 split 4 ways
                  </Text>
                </div>
              </div>
              <Badge variant="outline">1 day ago</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payment Summary */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>This Month's Summary</CardTitle>
          </CardHeader>

          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <Text as="p" styleVariant="muted">
                  Your Share
                </Text>
                <Text as="p" className="font-medium">
                  $420.00
                </Text>
              </div>
              <div className="flex justify-between">
                <Text as="p" styleVariant="muted">
                  Utilities Split
                </Text>
                <Text as="p" className="font-medium">
                  $20.00
                </Text>
              </div>
              <div className="flex justify-between">
                <Text as="p" styleVariant="muted">
                  Total Due
                </Text>
                <Text as="p" className="font-bold text-lg">
                  $440.00
                </Text>
              </div>
              <div className="pt-2">
                <Button className="w-full">Pay Your Share</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Group Payment Status</CardTitle>
          </CardHeader>

          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Text as="p">Emily (You)</Text>
                <Badge className="bg-green-100 text-green-700">Paid</Badge>
              </div>
              <div className="flex items-center justify-between">
                <Text as="p">Mike</Text>
                <Badge className="bg-green-100 text-green-700">Paid</Badge>
              </div>
              <div className="flex items-center justify-between">
                <Text as="p">Sarah</Text>
                <Badge className="bg-yellow-100 text-yellow-700">Pending</Badge>
              </div>
              <div className="flex items-center justify-between">
                <Text as="p">Alex</Text>
                <Badge className="bg-green-100 text-green-700">Paid</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
