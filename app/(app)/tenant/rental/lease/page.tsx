import { Text } from "@/components/ui/text";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function TenantLeaseAgreementPage() {
  return (
    <div className="space-y-6">
      <div>
        <Text as="h1" className="text-3xl font-bold tracking-tight">
          Lease Agreement
        </Text>
        <Text as="p" styleVariant="muted">
          View your current lease agreement and terms
        </Text>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Current Lease Agreement</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
            <div>
              <Text
                as="h3"
                styleVariant="muted"
                className="font-medium text-sm"
              >
                Lease Type
              </Text>
              <Text as="p" className="text-lg">
                Fixed Term
              </Text>
            </div>
            <div>
              <Text
                as="h3"
                styleVariant="muted"
                className="font-medium text-sm"
              >
                Duration
              </Text>
              <Text as="p" className="text-lg">
                12 Months
              </Text>
            </div>
            <div>
              <Text
                as="h3"
                styleVariant="muted"
                className="font-medium text-sm"
              >
                Status
              </Text>
              <Badge variant="default" className="bg-green-100 text-green-800">
                Active
              </Badge>
            </div>
            <div>
              <Text
                as="h3"
                styleVariant="muted"
                className="font-medium text-sm"
              >
                Auto Renewal
              </Text>
              <Text as="p" className="text-lg">
                No
              </Text>
            </div>
          </div>

          <div className="border-t pt-6">
            <Text as="h3" className="text-lg font-semibold mb-4">
              Lease Documents
            </Text>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <Text as="h4" className="font-medium">
                    Original Lease Agreement
                  </Text>
                  <Text as="p" styleVariant="muted" className="text-sm">
                    Signed on January 1, 2024
                  </Text>
                </div>
                <Button>Download PDF</Button>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <Text as="h4" className="font-medium">
                    Move-in Inspection Report
                  </Text>
                  <Text as="p" styleVariant="muted" className="text-sm">
                    Completed on January 1, 2024
                  </Text>
                </div>
                <Button>Download PDF</Button>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <Text as="h4" className="font-medium">
                    Property Rules & Regulations
                  </Text>
                  <Text as="p" styleVariant="muted" className="text-sm">
                    Last updated December 2023
                  </Text>
                </div>
                <Button>Download PDF</Button>
              </div>
            </div>
          </div>

          <div className="border-t pt-6 mt-6">
            <Text as="h3" className="text-lg font-semibold mb-4">
              Key Terms
            </Text>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Text as="h4" className="font-medium mb-2">
                  Rent Payment Terms
                </Text>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Monthly rent: $1,200</li>
                  <li>• Due date: 1st of each month</li>
                  <li>• Late fee: $50 after 5 days</li>
                  <li>• Payment methods: Online, Check</li>
                </ul>
              </div>
              <div>
                <Text as="h4" className="font-medium mb-2">
                  Property Use
                </Text>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Residential use only</li>
                  <li>• No pets allowed</li>
                  <li>• No smoking inside</li>
                  <li>• Maximum 2 occupants</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
