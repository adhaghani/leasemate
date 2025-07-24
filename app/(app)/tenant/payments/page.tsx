import { Text } from "@/components/ui/text";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function TenantPayments() {
  return (
    <div className="space-y-6">
      <div>
        <Text as="h1" className="text-3xl font-bold tracking-tight">
          Payments
        </Text>
        <Text as="p" styleVariant="muted">
          Manage your rent payments, view payment history, and update payment
          methods.
        </Text>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <Text as="h3" className="text-lg font-semibold">
              Next Payment
            </Text>
            <Text as="p" styleVariant="muted" className="text-sm">
              Due February 1st
            </Text>
            <Text as="p" className="text-2xl font-bold text-blue-600 mt-2">
              $1,200
            </Text>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <Text as="h3" className="text-lg font-semibold">
              Payment Status
            </Text>
            <Text as="p" styleVariant="muted" className="text-sm">
              January 2025
            </Text>
            <Badge className="bg-green-100 text-green-700 mt-2">Paid</Badge>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <Text as="h3" className="text-lg font-semibold">
              Auto-Pay
            </Text>
            <Text as="p" styleVariant="muted" className="text-sm">
              Status
            </Text>
            <Badge variant="outline" className="mt-2">
              Active
            </Badge>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <Text as="h3" className="text-lg font-semibold">
              Balance
            </Text>
            <Text as="p" styleVariant="muted" className="text-sm">
              Current
            </Text>
            <Text as="p" className="text-2xl font-bold text-green-600 mt-2">
              $0.00
            </Text>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Payment Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <Text as="p" styleVariant="muted" className="mb-4">
            This page will show payment history, upcoming payments, and payment
            method management.
          </Text>

          <div className="flex gap-3">
            <Link href="/tenant/payments/upcoming">
              <Button>Make Payment</Button>
            </Link>
            <Link href="/tenant/payments/history">
              <Button variant="outline">View History</Button>
            </Link>
            <Link href="/tenant/payments/methods">
              <Button variant="outline">Payment Methods</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
