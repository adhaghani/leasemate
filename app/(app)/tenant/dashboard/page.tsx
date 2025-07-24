import { Text } from "@/components/ui/text";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function TenantDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <Text as="h1" className="text-3xl font-bold tracking-tight">
          Tenant Dashboard
        </Text>
        <Text as="p" styleVariant="muted">
          Welcome to your tenant portal. Manage your rental, payments, and
          communicate with your landlord.
        </Text>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <Text as="h3" className="text-lg font-semibold">
              Rent Status
            </Text>
            <Text as="p" styleVariant="muted" className="text-sm">
              Current month rent
            </Text>
            <Text as="p" className="text-2xl font-bold text-green-600 mt-2">
              Paid
            </Text>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <Text as="h3" className="text-lg font-semibold">
              Next Payment
            </Text>
            <Text as="p" styleVariant="muted" className="text-sm">
              Due date
            </Text>
            <Text as="p" className="text-2xl font-bold mt-2">
              Feb 1, 2025
            </Text>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <Text as="h3" className="text-lg font-semibold">
              Maintenance
            </Text>
            <Text as="p" styleVariant="muted" className="text-sm">
              Open requests
            </Text>
            <Text as="p" className="text-2xl font-bold mt-2">
              2
            </Text>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <Text as="h3" className="text-lg font-semibold">
              Messages
            </Text>
            <Text as="p" styleVariant="muted" className="text-sm">
              Unread messages
            </Text>
            <Text as="p" className="text-2xl font-bold text-blue-600 mt-2">
              1
            </Text>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardContent className="p-6">
            <Text as="h3" className="text-lg font-semibold mb-4">
              Recent Activity
            </Text>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <Text as="p" className="text-sm">
                  Rent payment processed
                </Text>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <Text as="p" className="text-sm">
                  Maintenance request submitted
                </Text>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                <Text as="p" className="text-sm">
                  Message from landlord
                </Text>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <Text as="h3" className="text-lg font-semibold mb-4">
              Quick Actions
            </Text>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                Submit Maintenance Request
              </Button>
              <Button variant="outline" className="w-full justify-start">
                View Payment History
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Contact Landlord
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Download Lease Agreement
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
