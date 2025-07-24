import { Text } from "@/components/ui/text";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function TenantRentalDetails() {
  return (
    <div className="space-y-6">
      <div>
        <Text as="h1" className="text-3xl font-bold tracking-tight">
          My Rental Property
        </Text>
        <Text as="p" styleVariant="muted">
          View details about your current rental property and lease information.
        </Text>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Property Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Text as="p" className="font-medium">
                Address
              </Text>
              <Text as="p" styleVariant="muted">
                123 Sunset Apartments, Unit 2B
              </Text>
            </div>
            <div>
              <Text as="p" className="font-medium">
                Type
              </Text>
              <Text as="p" styleVariant="muted">
                2 Bedroom, 1 Bathroom Apartment
              </Text>
            </div>
            <div>
              <Text as="p" className="font-medium">
                Square Footage
              </Text>
              <Text as="p" styleVariant="muted">
                850 sq ft
              </Text>
            </div>
            <div>
              <Text as="p" className="font-medium">
                Parking
              </Text>
              <Text as="p" styleVariant="muted">
                1 Assigned Space (#15)
              </Text>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Lease Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Text as="p" className="font-medium">
                Lease Term
              </Text>
              <Text as="p" styleVariant="muted">
                12 Months
              </Text>
            </div>
            <div>
              <Text as="p" className="font-medium">
                Move-in Date
              </Text>
              <Text as="p" styleVariant="muted">
                January 1, 2024
              </Text>
            </div>
            <div>
              <Text as="p" className="font-medium">
                Lease End
              </Text>
              <Text as="p" styleVariant="muted">
                December 31, 2024
              </Text>
            </div>
            <div>
              <Text as="p" className="font-medium">
                Monthly Rent
              </Text>
              <Text as="p" styleVariant="muted">
                $1,200
              </Text>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Property Information</CardTitle>
        </CardHeader>
        <CardContent>
          <Text as="p" styleVariant="muted" className="mb-4">
            This page will display detailed information about your rental
            property including address, amenities, and lease details.
          </Text>

          <div className="flex gap-3">
            <Link href="/tenant/rental/lease">
              <Button>View Lease Agreement</Button>
            </Link>
            <Link href="/tenant/rental/documents">
              <Button variant="outline">View Documents</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
