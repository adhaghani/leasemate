import { Text } from "@/components/ui/text";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function TenantMaintenance() {
  return (
    <div className="space-y-6">
      <div>
        <Text as="h1" className="text-3xl font-bold tracking-tight">
          Maintenance Requests
        </Text>
        <Text as="p" styleVariant="muted">
          Submit maintenance requests and track their progress.
        </Text>
      </div>

      <Card>
        <CardContent className="p-6">
          <Text as="h2" className="text-xl font-semibold mb-4">
            Maintenance Dashboard
          </Text>
          <Text as="p" styleVariant="muted">
            This page will allow you to submit new maintenance requests and view
            the status of existing ones.
          </Text>

          <div className="flex gap-3 mt-4">
            <Link href="/tenant/maintenance/submit">
              <Button>Submit New Request</Button>
            </Link>
            <Link href="/tenant/maintenance/requests">
              <Button variant="outline">View My Requests</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
