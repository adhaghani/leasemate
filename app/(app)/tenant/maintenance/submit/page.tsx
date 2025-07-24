import { Text } from "@/components/ui/text"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function TenantMaintenanceSubmitPage() {
  return (
    <div className="space-y-6">
      <div>
        <Text as="h1" className="text-3xl font-bold tracking-tight">
          Submit Maintenance Request
        </Text>
        <Text as="p" styleVariant="muted">
          Report maintenance issues or request repairs
        </Text>
      </div>

      {/* Emergency Alert */}
      <Card className="border-red-200 bg-red-50">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
              <svg
                className="w-5 h-5 text-red-600"
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
            <div>
              <Text as="h4" className="font-medium text-red-800">Emergency Maintenance</Text>
              <Text as="p" className="text-sm text-red-700">
                For emergencies (gas leak, flooding, electrical issues), call (555) 123-4567 immediately
              </Text>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Request Form */}
      <Card>
        <CardHeader>
          <CardTitle>Maintenance Request Form</CardTitle>
          <CardDescription>
            Please provide detailed information about the issue
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Request Type
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="plumbing">Plumbing</SelectItem>
                    <SelectItem value="electrical">Electrical</SelectItem>
                    <SelectItem value="hvac">HVAC</SelectItem>
                    <SelectItem value="appliance">Appliance</SelectItem>
                    <SelectItem value="structural">Structural</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Priority Level
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low - Not urgent</SelectItem>
                    <SelectItem value="medium">Medium - Within a week</SelectItem>
                    <SelectItem value="high">High - Within 24 hours</SelectItem>
                    <SelectItem value="emergency">Emergency - Immediate</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Location
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="kitchen">Kitchen</SelectItem>
                  <SelectItem value="bathroom">Bathroom</SelectItem>
                  <SelectItem value="living-room">Living Room</SelectItem>
                  <SelectItem value="bedroom">Bedroom</SelectItem>
                  <SelectItem value="basement">Basement</SelectItem>
                  <SelectItem value="exterior">Exterior</SelectItem>
                  <SelectItem value="common-area">Common Area</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Description
              </label>
              <textarea
                className="w-full p-3 border rounded-md h-32"
                placeholder="Please describe the issue in detail. Include when you first noticed the problem and any steps you've already taken."
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Preferred Contact Method
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="How should we contact you?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="phone">Phone Call</SelectItem>
                  <SelectItem value="text">Text Message</SelectItem>
                  <SelectItem value="app">In-App Message</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Card className="bg-yellow-50 border-yellow-200">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-yellow-600 mt-0.5"
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
                  <div>
                    <Text as="h4" className="font-medium text-yellow-800 mb-1">Before Submitting</Text>
                    <Text as="p" className="text-sm text-yellow-700">
                      Please ensure you've checked basic troubleshooting steps like circuit breakers,
                      water shut-offs, and that the issue isn't related to normal wear and tear.
                    </Text>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-3">
              <Button type="submit">Submit Request</Button>
              <Button variant="outline" type="button">Save as Draft</Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Quick Tips */}
      <Card>
        <CardHeader>
          <CardTitle>Tips for Better Service</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-medium text-sm">1</span>
              </div>
              <div>
                <Text as="h4" className="font-medium mb-1">Be Specific</Text>
                <Text as="p" styleVariant="muted" className="text-sm">
                  Provide detailed descriptions and exact locations to help maintenance staff prepare
                </Text>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 font-medium text-sm">2</span>
              </div>
              <div>
                <Text as="h4" className="font-medium mb-1">Include Photos</Text>
                <Text as="p" styleVariant="muted" className="text-sm">
                  Photos help us understand the issue better and bring the right tools
                </Text>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-purple-600 font-medium text-sm">3</span>
              </div>
              <div>
                <Text as="h4" className="font-medium mb-1">Be Available</Text>
                <Text as="p" styleVariant="muted" className="text-sm">
                  Make sure someone can provide access during normal business hours
                </Text>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-orange-600 font-medium text-sm">4</span>
              </div>
              <div>
                <Text as="h4" className="font-medium mb-1">Follow Up</Text>
                <Text as="p" styleVariant="muted" className="text-sm">
                  Check your request status and respond promptly to any questions
                </Text>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
