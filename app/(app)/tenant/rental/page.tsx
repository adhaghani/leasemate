import { Text } from "@/components/ui/text";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function TenantRentalPage() {
  return (
    <div className="space-y-6">
      <div>
        <Text as="h1" className="text-3xl font-bold tracking-tight">
          My Rental
        </Text>
        <Text as="p" styleVariant="muted">
          View and manage your rental property information
        </Text>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Property Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Text
                  as="h3"
                  styleVariant="muted"
                  className="font-medium text-sm"
                >
                  Address
                </Text>
                <Text as="p" className="text-lg">
                  123 Main Street, Apartment 2B
                </Text>
              </div>
              <div>
                <Text
                  as="h3"
                  styleVariant="muted"
                  className="font-medium text-sm"
                >
                  Lease Start
                </Text>
                <Text as="p" className="text-lg">
                  January 1, 2024
                </Text>
              </div>
              <div>
                <Text
                  as="h3"
                  styleVariant="muted"
                  className="font-medium text-sm"
                >
                  Lease End
                </Text>
                <Text as="p" className="text-lg">
                  December 31, 2024
                </Text>
              </div>
              <div>
                <Text
                  as="h3"
                  styleVariant="muted"
                  className="font-medium text-sm"
                >
                  Monthly Rent
                </Text>
                <Text as="p" className="text-lg font-semibold">
                  $1,200
                </Text>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Lease Agreement</CardTitle>
            </CardHeader>
            <CardContent>
              <Text as="p" styleVariant="muted" className="text-sm mb-4">
                View your current lease agreement and terms
              </Text>
              <Button className="w-full">View Lease</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <Text as="p" styleVariant="muted" className="text-sm mb-4">
                Access all rental-related documents
              </Text>
              <Button className="w-full">View Documents</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Emergency Contact</CardTitle>
            </CardHeader>
            <CardContent>   
              <Text as="p" styleVariant="muted" className="text-sm mb-4">
                Important contact information
              </Text>
              <Button className="w-full">View Contacts</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
