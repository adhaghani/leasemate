import { Text } from "@/components/ui/text";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function TenantSupportPage() {
  return (
    <div className="space-y-6">
      <div>
        <Text as="h1" className="text-3xl font-bold tracking-tight">
          Support Center
        </Text>
        <Text as="p" styleVariant="muted">
          Get help with your rental experience and find answers to common
          questions
        </Text>
      </div>

      {/* Emergency Contact */}
      <Card className="border-red-200 bg-red-50">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <div>
              <Text as="h3" className="text-lg font-semibold text-red-800">
                Emergency Support
              </Text>
              <Text as="p" className="text-red-700">
                For urgent issues: <strong>(555) 123-4567</strong> - Available
                24/7
              </Text>
              <Text as="p" className="text-sm text-red-600 mt-1">
                Gas leaks, flooding, electrical emergencies, lockouts
              </Text>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Link href="/tenant/maintenance/submit">
          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                </svg>
              </div>
              <Text as="h3" className="font-medium mb-2">
                Submit Maintenance
              </Text>
              <Text as="p" styleVariant="muted" className="text-sm">
                Report issues or repairs
              </Text>
            </CardContent>
          </Card>
        </Link>

        <Link href="/tenant/messages/sent">
          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <Text as="h3" className="font-medium mb-2">
                Contact Management
              </Text>
              <Text as="p" styleVariant="muted" className="text-sm">
                Send a message
              </Text>
            </CardContent>
          </Card>
        </Link>

        <Link href="/tenant/payments/methods">
          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              </div>
              <Text as="h3" className="font-medium mb-2">
                Payment Help
              </Text>
              <Text as="p" styleVariant="muted" className="text-sm">
                Payment issues & methods
              </Text>
            </CardContent>
          </Card>
        </Link>
      </div>

      {/* FAQ Section */}
      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
          <Text as="p" styleVariant="muted">
            Quick answers to common questions
          </Text>
        </CardHeader>

        <CardContent>
          <div className="space-y-4">
            <Card className="p-4">
              <Text as="h4" className="font-medium mb-2">
                How do I pay my rent?
              </Text>
              <Text as="p" styleVariant="muted" className="text-sm">
                You can pay rent through your tenant portal, by setting up
                auto-pay, or by visiting the payments section to make a one-time
                payment.
              </Text>
            </Card>

            <Card className="p-4">
              <Text as="h4" className="font-medium mb-2">
                How quickly are maintenance requests handled?
              </Text>
              <Text as="p" styleVariant="muted" className="text-sm">
                Emergency requests are handled within 24 hours. Regular
                maintenance requests are typically completed within 3-5 business
                days.
              </Text>
            </Card>

            <Card className="p-4">
              <Text as="h4" className="font-medium mb-2">
                Can I have roommates?
              </Text>
              <Text as="p" styleVariant="muted" className="text-sm">
                Yes! You can use our Groups feature to manage shared expenses
                and coordinate with roommates. All roommates must be approved
                and added to the lease.
              </Text>
            </Card>

            <Card className="p-4">
              <Text as="h4" className="font-medium mb-2">
                How do I renew my lease?
              </Text>
              <Text as="p" styleVariant="muted" className="text-sm">
                Lease renewal notices are sent 60 days before expiration. You
                can respond through your portal or contact property management
                directly.
              </Text>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <Text as="h4" className="font-medium mb-2">
                Property Management Office
              </Text>
              <Text as="p" styleVariant="muted" className="text-sm mb-1">
                Phone: (555) 123-4567
              </Text>
              <Text as="p" styleVariant="muted" className="text-sm mb-1">
                Email: support@propertymanagement.com
              </Text>
              <Text as="p" styleVariant="muted" className="text-sm">
                Hours: Mon-Fri 9AM-6PM, Sat 10AM-4PM
              </Text>
            </div>

            <div>
              <Text as="h4" className="font-medium mb-2">
                Emergency Contact
              </Text>
              <Text as="p" styleVariant="muted" className="text-sm mb-1">
                24/7 Emergency Line: (555) 123-4567
              </Text>
              <Text as="p" styleVariant="muted" className="text-sm mb-1">
                After Hours Security: (555) 987-6543
              </Text>
              <Text as="p" styleVariant="muted" className="text-sm">
                Available 24/7 for urgent issues
              </Text>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Support Resources */}
      <Card>
        <CardHeader>
          <CardTitle>Additional Resources</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="grid gap-3 md:grid-cols-2">
            <Button variant="outline" className="justify-start">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              Tenant Handbook
            </Button>

            <Button variant="outline" className="justify-start">
              <svg
                className="w-4 h-4 mr-2"
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
              Lease Agreement
            </Button>

            <Button variant="outline" className="justify-start">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              Property Amenities
            </Button>

            <Button variant="outline" className="justify-start">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Community Guidelines
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Live Chat Widget */}
      <div className="fixed bottom-6 right-6">
        <Button className="rounded-full w-14 h-14 shadow-lg">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
}
