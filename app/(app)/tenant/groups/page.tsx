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
  Users,
  CreditCard,
  MessageSquare,
  Calendar,
  Plus,
  Check,
  DollarSign,
  Settings,
  Calculator,
} from "lucide-react";

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
                <Users className="w-6 h-6 text-blue-600" />
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
                <CreditCard className="w-6 h-6 text-green-600" />
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
                <MessageSquare className="w-6 h-6 text-purple-600" />
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
                <Settings className="w-6 h-6 text-gray-600" />
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
                  <Check className="w-4 h-4 text-green-600" />
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
                  <MessageSquare className="w-4 h-4 text-blue-600" />
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
                  <Calculator className="w-4 h-4 text-orange-600" />
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
