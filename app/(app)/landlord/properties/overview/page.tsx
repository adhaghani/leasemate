import { Text } from "@/components/ui/text";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Home,
  Building,
  Users,
  TrendingUp,
  MapPin,
  Bed,
  Key,
  Check,
  User,
  AlertTriangle,
} from "lucide-react";

export default function LandlordPropertiesOverviewPage() {
  return (
    <div className="space-y-6">
      <div>
        <Text as="h1" className="text-3xl font-bold tracking-tight">
          Properties Overview
        </Text>
        <Text as="p" styleVariant="muted">
          Manage all your rental properties from one place
        </Text>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <Text as="h3" className="text-lg font-semibold">
              Total Properties
            </Text>
            <Text as="p" className="text-3xl font-bold text-primary mt-2">
              12
            </Text>
            <Text as="p" styleVariant="muted" className="text-sm">
              Across 3 locations
            </Text>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <Text as="h3" className="text-lg font-semibold">
              Occupied Units
            </Text>
            <Text as="p" className="text-3xl font-bold text-green-600 mt-2">
              10
            </Text>
            <Text as="p" styleVariant="muted" className="text-sm">
              83% occupancy rate
            </Text>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <Text as="h3" className="text-lg font-semibold">
              Available Units
            </Text>
            <Text as="p" className="text-3xl font-bold text-blue-600 mt-2">
              2
            </Text>
            <Text as="p" styleVariant="muted" className="text-sm">
              Ready for rent
            </Text>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <Text as="h3" className="text-lg font-semibold">
              Monthly Revenue
            </Text>
            <Text as="p" className="text-3xl font-bold text-green-600 mt-2">
              $15,200
            </Text>
            <Text as="p" styleVariant="muted" className="text-sm">
              +5% from last month
            </Text>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row justify-between items-center">
          <CardTitle>Property List</CardTitle>
          <Button>Add Property</Button>
        </CardHeader>

        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Home className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <Text as="h3" className="font-semibold">
                    Sunset Apartments
                  </Text>
                  <Text
                    as="p"
                    styleVariant="muted"
                    className="text-sm flex items-center gap-1"
                  >
                    <MapPin className="w-3 h-3" />
                    123 Main Street, City, State
                  </Text>
                  <Text
                    as="p"
                    styleVariant="muted"
                    className="text-sm flex items-center gap-1"
                  >
                    <Bed className="w-3 h-3" />4 units • 3 occupied
                  </Text>
                </div>
              </div>
              <div className="text-right">
                <Text as="p" className="font-semibold">
                  $4,800/month
                </Text>
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-800"
                >
                  75% Occupied
                </Badge>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center">
                  <Building className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <Text as="h3" className="font-semibold">
                    Oak Grove Complex
                  </Text>
                  <Text
                    as="p"
                    styleVariant="muted"
                    className="text-sm flex items-center gap-1"
                  >
                    <MapPin className="w-3 h-3" />
                    456 Oak Avenue, City, State
                  </Text>
                  <Text
                    as="p"
                    styleVariant="muted"
                    className="text-sm flex items-center gap-1"
                  >
                    <Bed className="w-3 h-3" />6 units • 6 occupied
                  </Text>
                </div>
              </div>
              <div className="text-right">
                <Text as="p" className="font-semibold">
                  $7,200/month
                </Text>
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-800"
                >
                  100% Occupied
                </Badge>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Building className="w-8 h-8 text-orange-600" />
                </div>
                <div>
                  <Text as="h3" className="font-semibold">
                    Pine Ridge Townhomes
                  </Text>
                  <Text
                    as="p"
                    styleVariant="muted"
                    className="text-sm flex items-center gap-1"
                  >
                    <MapPin className="w-3 h-3" />
                    789 Pine Street, City, State
                  </Text>
                  <Text
                    as="p"
                    styleVariant="muted"
                    className="text-sm flex items-center gap-1"
                  >
                    <Bed className="w-3 h-3" />2 units • 1 occupied
                  </Text>
                </div>
              </div>
              <div className="text-right">
                <Text as="p" className="font-semibold">
                  $3,200/month
                </Text>
                <Badge
                  variant="outline"
                  className="text-orange-800 border-orange-200"
                >
                  50% Occupied
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <Text as="p" className="text-sm font-medium">
                    Payment received from Unit 2B
                  </Text>
                  <Text as="p" styleVariant="muted" className="text-xs">
                    2 hours ago
                  </Text>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <Text as="p" className="text-sm font-medium">
                    New lease signed for Unit 3A
                  </Text>
                  <Text as="p" styleVariant="muted" className="text-xs">
                    1 day ago
                  </Text>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-4 h-4 text-yellow-600" />
                </div>
                <div>
                  <Text as="p" className="text-sm font-medium">
                    Maintenance request from Unit 1C
                  </Text>
                  <Text as="p" styleVariant="muted" className="text-xs">
                    2 days ago
                  </Text>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              <Button
                variant="outline"
                className="justify-start text-left h-auto p-3"
              >
                <div>
                  <Text as="h4" className="font-medium">
                    Add New Property
                  </Text>
                  <Text as="p" styleVariant="muted" className="text-sm">
                    Expand your portfolio
                  </Text>
                </div>
              </Button>
              <Button
                variant="outline"
                className="justify-start text-left h-auto p-3"
              >
                <div>
                  <Text as="h4" className="font-medium">
                    Screen New Tenant
                  </Text>
                  <Text as="p" styleVariant="muted" className="text-sm">
                    Review applications
                  </Text>
                </div>
              </Button>
              <Button
                variant="outline"
                className="justify-start text-left h-auto p-3"
              >
                <div>
                  <Text as="h4" className="font-medium">
                    Schedule Maintenance
                  </Text>
                  <Text as="p" styleVariant="muted" className="text-sm">
                    Coordinate repairs
                  </Text>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
