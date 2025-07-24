import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Text } from "@/components/ui/text";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CommunicationInboxPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <Text as="h1" className="text-3xl font-bold tracking-tight">
            Communication Inbox
          </Text>
          <Text as="p" styleVariant="muted">
            Manage all tenant communications and messages
          </Text>
        </div>

        <div className="flex gap-2">
          <Button variant="outline">Mark All Read</Button>
          <Button>New Message</Button>
        </div>
      </div>

      {/* Message Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <Text as="p" styleVariant="muted" className="font-medium">
                Unread Messages
              </Text>
              <Text as="p" className="text-2xl font-bold text-blue-600">
                12
              </Text>
              <Text as="p" className="text-xs text-blue-600">
                Requires attention
              </Text>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
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
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <Text as="p" styleVariant="muted" className="font-medium">
                Open Conversations
              </Text>
              <Text as="p" className="text-2xl font-bold text-orange-600">
                8
              </Text>
              <Text as="p" className="text-xs text-orange-600">
                Active threads
              </Text>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-orange-600"
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
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <Text as="p" styleVariant="muted" className="font-medium">
                Urgent Requests
              </Text>
              <Text as="p" className="text-2xl font-bold text-red-600">
                3
              </Text>
              <Text as="p" className="text-xs text-red-600">
                Emergency/maintenance
              </Text>
            </div>
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
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
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <Text as="p" styleVariant="muted" className="font-medium">
                Avg. Response Time
              </Text>
              <Text as="p" className="text-2xl font-bold text-green-600">
                2.4h
              </Text>
              <Text as="p" className="text-xs text-green-600">
                Last 30 days
              </Text>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
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
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Message List */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Messages</CardTitle>
                <div className="flex gap-2">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Messages</SelectItem>
                      <SelectItem value="unread">Unread Only</SelectItem>
                      <SelectItem value="urgent">Urgent</SelectItem>
                      <SelectItem value="maintenance">Maintenance</SelectItem>
                      <SelectItem value="general">General</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input placeholder="Search messages..." className="w-48" />
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-0">
              <div className="divide-y max-h-96 overflow-y-auto">
                {/* Message 1 - Urgent */}
                <div className="p-4 hover:bg-accent cursor-pointer border-l-4 border-red-500">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                        <Text
                          as="p"
                          className="text-red-600 font-semibold text-sm"
                        >
                          SJ
                        </Text>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <Text as="h4" className="font-medium">
                            Sarah Johnson - Apt 2A
                          </Text>
                          <Badge
                            variant="destructive"
                            className="bg-red-100 text-red-700 border-red-200"
                          >
                            URGENT
                          </Badge>
                        </div>
                        <Text as="p" styleVariant="muted">
                          Sunset Apartments
                        </Text>
                        <Text as="p" className="text-sm mt-1">
                          Water leak in bathroom - need immediate assistance!
                        </Text>
                      </div>
                    </div>
                    <div className="text-right">
                      <Text as="p" className="text-xs text-muted-foreground">
                        15 min ago
                      </Text>
                      <div className="w-3 h-3 bg-blue-600 rounded-full mt-1"></div>
                    </div>
                  </div>
                </div>

                {/* Message 2 - Maintenance */}
                <div className="p-4 hover:bg-accent cursor-pointer border-l-4 border-orange-500">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                        <Text
                          as="p"
                          className="text-orange-600 font-semibold text-sm"
                        >
                          MR
                        </Text>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <Text as="h4" className="font-medium">
                            Mike Rodriguez - Apt 1B
                          </Text>
                          <Badge className="bg-orange-100 text-orange-700 border-orange-200">
                            MAINTENANCE
                          </Badge>
                        </div>
                        <Text as="p" styleVariant="muted">
                          Downtown Condos
                        </Text>
                        <Text as="p" className="text-sm mt-1">
                          AC unit making strange noises, could you send someone
                          to check?
                        </Text>
                      </div>
                    </div>
                    <div className="text-right">
                      <Text as="p" className="text-xs text-muted-foreground">
                        2 hours ago
                      </Text>
                      <div className="w-3 h-3 bg-blue-600 rounded-full mt-1"></div>
                    </div>
                  </div>
                </div>

                {/* Message 3 - General */}
                <div className="p-4 hover:bg-accent cursor-pointer">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Text
                          as="p"
                          className="text-blue-600 font-semibold text-sm"
                        >
                          EP
                        </Text>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <Text as="h4" className="font-medium">
                            Emily Parker - Group Leader
                          </Text>
                          <Badge className="bg-green-100 text-green-700 border-green-200">
                            GROUP
                          </Badge>
                        </div>
                        <Text as="p" styleVariant="muted">
                          Riverside Complex - Unit 3C
                        </Text>
                        <Text as="p" className="text-sm mt-1">
                          Hi! Our group would like to schedule a walkthrough for
                          lease renewal...
                        </Text>
                      </div>
                    </div>
                    <div className="text-right">
                      <Text as="p" className="text-xs text-muted-foreground">
                        4 hours ago
                      </Text>
                      <div className="w-3 h-3 bg-blue-600 rounded-full mt-1"></div>
                    </div>
                  </div>
                </div>

                {/* Message 4 - Payment */}
                <div className="p-4 hover:bg-accent cursor-pointer">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <Text
                          as="p"
                          className="text-green-600 font-semibold text-sm"
                        >
                          AL
                        </Text>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <Text as="h4" className="font-medium">
                            Alex Liu - Apt 1A
                          </Text>
                          <Badge className="bg-purple-100 text-purple-700 border-purple-200">
                            PAYMENT
                          </Badge>
                        </div>
                        <Text as="p" styleVariant="muted">
                          Sunset Apartments
                        </Text>
                        <Text as="p" className="text-sm mt-1">
                          Payment confirmation for December rent. Thank you!
                        </Text>
                      </div>
                    </div>
                    <div className="text-right">
                      <Text as="p" className="text-xs text-muted-foreground">
                        1 day ago
                      </Text>
                    </div>
                  </div>
                </div>

                {/* Message 5 - Read */}
                <div className="p-4 hover:bg-accent cursor-pointer opacity-60">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                        <Text
                          as="p"
                          className="text-gray-600 font-semibold text-sm"
                        >
                          DB
                        </Text>
                      </div>
                      <div className="flex-1">
                        <Text as="h4" className="font-medium">
                          David Brown - Apt 2C
                        </Text>
                        <Text as="p" styleVariant="muted">
                          Downtown Condos
                        </Text>
                        <Text as="p" className="text-sm mt-1">
                          Thanks for the quick response on the maintenance
                          request.
                        </Text>
                      </div>
                    </div>
                    <div className="text-right">
                      <Text as="p" className="text-xs text-muted-foreground">
                        2 days ago
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Message Composition & Quick Actions */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-white rounded-lg border shadow-sm">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold">Quick Actions</h3>
            </div>

            <div className="p-6 space-y-3">
              <button className="w-full px-4 py-3 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 text-left">
                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                  <div>
                    <p className="font-medium">Handle Urgent Requests</p>
                    <p className="text-sm opacity-75">3 emergency requests</p>
                  </div>
                </div>
              </button>

              <button className="w-full px-4 py-3 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 text-left">
                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                    />
                  </svg>
                  <div>
                    <p className="font-medium">Send Announcement</p>
                    <p className="text-sm opacity-75">
                      Broadcast to all tenants
                    </p>
                  </div>
                </div>
              </button>

              <button className="w-full px-4 py-3 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 text-left">
                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5"
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
                  <div>
                    <p className="font-medium">Use Template</p>
                    <p className="text-sm opacity-75">Pre-written messages</p>
                  </div>
                </div>
              </button>

              <button className="w-full px-4 py-3 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 text-left">
                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <div>
                    <p className="font-medium">Contact Groups</p>
                    <p className="text-sm opacity-75">Message entire groups</p>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Message Filters */}
          <div className="bg-white rounded-lg border shadow-sm">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold">Message Filters</h3>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Priority Level
                </label>
                <div className="space-y-2">
                  <label className="flex items-center text-sm">
                    <input type="checkbox" className="mr-2" defaultChecked />
                    <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                    Urgent (3)
                  </label>
                  <label className="flex items-center text-sm">
                    <input type="checkbox" className="mr-2" defaultChecked />
                    <span className="w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    High (5)
                  </label>
                  <label className="flex items-center text-sm">
                    <input type="checkbox" className="mr-2" defaultChecked />
                    <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                    Normal (8)
                  </label>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">
                  Message Type
                </label>
                <div className="space-y-2">
                  <label className="flex items-center text-sm">
                    <input type="checkbox" className="mr-2" defaultChecked />
                    Maintenance Requests
                  </label>
                  <label className="flex items-center text-sm">
                    <input type="checkbox" className="mr-2" defaultChecked />
                    Payment Inquiries
                  </label>
                  <label className="flex items-center text-sm">
                    <input type="checkbox" className="mr-2" defaultChecked />
                    Lease Questions
                  </label>
                  <label className="flex items-center text-sm">
                    <input type="checkbox" className="mr-2" defaultChecked />
                    General Inquiries
                  </label>
                </div>
              </div>

              <div>
                <Text as="p" className="text-sm font-medium mb-2">
                  Property
                </Text>
                <Select defaultValue="all">
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Properties</SelectItem>
                    <SelectItem value="sunset">Sunset Apartments</SelectItem>
                    <SelectItem value="downtown">Downtown Condos</SelectItem>
                    <SelectItem value="riverside">Riverside Complex</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Response Templates */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Templates</CardTitle>
            </CardHeader>

            <CardContent className="space-y-2">
              <Button
                variant="ghost"
                className="w-full justify-start text-sm h-auto py-2"
              >
                Maintenance Request Received
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-sm h-auto py-2"
              >
                Payment Reminder
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-sm h-auto py-2"
              >
                Lease Renewal Notice
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-sm h-auto py-2"
              >
                Property Inspection Notice
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-sm h-auto py-2"
              >
                Emergency Response
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
