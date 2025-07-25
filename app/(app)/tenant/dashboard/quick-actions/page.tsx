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
import {
  AlertTriangle,
  CreditCard,
  Settings,
  Mail,
  Users,
  FileText,
  Car,
  PlusCircle,
  Calendar,
  MessageSquare,
  Check,
} from "lucide-react";

export default function TenantDashboardQuickActionsPage() {
  return (
    <div className="space-y-6">
      <div>
        <Text as="h1" className="text-3xl font-bold tracking-tight">
          Quick Actions
        </Text>
        <Text as="p" styleVariant="muted">
          Access frequently used actions and services
        </Text>
      </div>

      {/* Emergency Actions */}
      <Card className="border-red-200 bg-red-50">
        <CardHeader>
          <CardTitle className="text-red-800 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" />
            Emergency Assistance
          </CardTitle>
          <CardDescription className="text-red-700">
            For urgent maintenance issues or emergencies
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex gap-3">
            <Button className="bg-red-600 hover:bg-red-700">
              Emergency Maintenance
            </Button>
            <Button variant="destructive">Emergency Contact</Button>
          </div>
        </CardContent>
      </Card>

      {/* Common Actions */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Link href="/tenant/payments/upcoming">
          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <CreditCard className="w-6 h-6 text-green-600" />
              </div>
              <Text as="h3" className="font-medium mb-2">
                Pay Rent
              </Text>
              <Text as="p" styleVariant="muted" className="text-sm">
                Make your monthly payment
              </Text>
            </CardContent>
          </Card>
        </Link>

        <Link href="/tenant/maintenance/submit">
          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Settings className="w-6 h-6 text-blue-600" />
              </div>
              <Text as="h3" className="font-medium mb-2">
                Request Maintenance
              </Text>
              <Text as="p" styleVariant="muted" className="text-sm">
                Submit a repair request
              </Text>
            </CardContent>
          </Card>
        </Link>

        <Link href="/tenant/messages/inbox">
          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Mail className="w-6 h-6 text-purple-600" />
              </div>
              <Text as="h3" className="font-medium mb-2">
                Contact Landlord
              </Text>
              <Text as="p" styleVariant="muted" className="text-sm">
                Send a message
              </Text>
            </CardContent>
          </Card>
        </Link>

        <Link href="/tenant/groups">
          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <Text as="h3" className="font-medium mb-2">
                Manage Groups
              </Text>
              <Text as="p" styleVariant="muted" className="text-sm">
                Coordinate with roommates
              </Text>
            </CardContent>
          </Card>
        </Link>

        <Link href="/tenant/documents/lease">
          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-3">
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
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <Text as="h3" className="font-medium mb-2">
                View Documents
              </Text>
              <Text as="p" styleVariant="muted" className="text-sm">
                Access lease & documents
              </Text>
            </CardContent>
          </Card>
        </Link>

        <Link href="/tenant/support">
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
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <Text as="h3" className="font-medium mb-2">
                Get Help
              </Text>
              <Text as="p" styleVariant="muted" className="text-sm">
                Support & FAQ
              </Text>
            </CardContent>
          </Card>
        </Link>
      </div>

      {/* Recent Activity Shortcuts */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>
            Quick access to your recent actions and notifications
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <Text as="p" className="font-medium">
                    Payment Processed
                  </Text>
                  <Text as="p" styleVariant="muted" className="text-sm">
                    January 2025 rent - $1,200
                  </Text>
                </div>
              </div>
              <Badge variant="secondary">2 hours ago</Badge>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Mail className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <Text as="p" className="font-medium">
                    New Message
                  </Text>
                  <Text as="p" styleVariant="muted" className="text-sm">
                    From property management
                  </Text>
                </div>
              </div>
              <Badge>1 day ago</Badge>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <Settings className="w-4 h-4 text-orange-600" />
                </div>
                <div>
                  <Text as="p" className="font-medium">
                    Maintenance Update
                  </Text>
                  <Text as="p" styleVariant="muted" className="text-sm">
                    Kitchen faucet repair completed
                  </Text>
                </div>
              </div>
              <Badge variant="outline">3 days ago</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
