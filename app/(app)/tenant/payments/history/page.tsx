import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Text } from "@/components/ui/text";
import { Check, AlertCircle } from "lucide-react";

export default function TenantPaymentHistoryPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Payment History</h1>
        <p className="text-muted-foreground">
          View all your past rent payments and transactions
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Payments</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Check className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-medium">December 2024 Rent</h3>
                  <p className="text-sm text-muted-foreground">
                    Paid on Dec 1, 2024
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold">$1,200.00</p>
                <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                  Paid
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Check className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-medium">November 2024 Rent</h3>
                  <p className="text-sm text-muted-foreground">
                    Paid on Nov 1, 2024
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold">$1,200.00</p>
                <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                  Paid
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Check className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-medium">October 2024 Rent</h3>
                  <p className="text-sm text-muted-foreground">
                    Paid on Oct 1, 2024
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold">$1,200.00</p>
                <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                  Paid
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-medium">September 2024 Rent</h3>
                  <p className="text-sm text-muted-foreground">
                    Paid on Sep 3, 2024 (Late)
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold">$1,250.00</p>
                <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                  Late Payment
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <button className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90">
              Load More Payments
            </button>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-2">Total Paid</h3>
          <p className="text-3xl font-bold text-green-600">$14,450</p>
          <p className="text-sm text-muted-foreground">This year</p>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-2">On-time Payments</h3>
          <p className="text-3xl font-bold text-blue-600">11/12</p>
          <p className="text-sm text-muted-foreground">92% success rate</p>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-2">Late Fees</h3>
          <p className="text-3xl font-bold text-orange-600">$50</p>
          <p className="text-sm text-muted-foreground">This year</p>
        </div>
      </div>
    </div>
  );
}
