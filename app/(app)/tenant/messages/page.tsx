import { Text } from "@/components/ui/text"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"


export default function TenantMessagesPage() {
  return (
    <div className="space-y-6">
      <div>
        <Text as="h1" className="text-3xl font-bold tracking-tight">Messages</Text>
        <Text as="p" styleVariant="muted">
          Communicate with your landlord and property management
        </Text>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Conversations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Card className="p-3 cursor-pointer hover:bg-accent border-l-4 border-blue-500">
                  <div className="flex items-center justify-between">
                    <div>
                      <Text as="p" className="font-medium">Property Manager</Text>
                      <Text as="p" styleVariant="muted" className="text-sm">
                        Maintenance update available
                      </Text>
                    </div>
                    <Badge>New</Badge>
                  </div>
                </Card>

                <Card className="p-3 cursor-pointer hover:bg-accent">
                  <div className="flex items-center justify-between">
                    <div>
                      <Text as="p" className="font-medium">Landlord</Text>
                      <Text as="p" styleVariant="muted" className="text-sm">
                        Lease renewal discussion
                      </Text>
                    </div>
                    <span className="text-xs text-muted-foreground">2h</span>
                  </div>
                </Card>

                <Card className="p-3 cursor-pointer hover:bg-accent">
                  <div className="flex items-center justify-between">
                    <div>
                      <Text as="p" className="font-medium">Maintenance Team</Text>
                      <Text as="p" styleVariant="muted" className="text-sm">
                        Work order completed
                      </Text>
                    </div>
                    <span className="text-xs text-muted-foreground">1d</span>
                  </div>
                </Card>
              </div>

              <Button className="w-full mt-4">
                New Message
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Card className="h-[600px] flex flex-col">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">PM</span>
                </div>
                <div>
                  <Text as="h3" className="font-medium">Property Manager</Text>
                  <Text as="p" styleVariant="muted" className="text-sm">Online now</Text>
                </div>
              </div>
            </CardHeader>

            <CardContent className="flex-1 space-y-4 overflow-y-auto">
              <div className="flex justify-start">
                <div className="max-w-xs">
                  <Card className="p-3 bg-gray-100">
                    <Text as="p" className="text-sm">
                      Hi! Your maintenance request for the kitchen faucet has been completed. 
                      Please let us know if you have any issues.
                    </Text>
                  </Card>
                  <Text as="p" className="text-xs text-muted-foreground mt-1">10:30 AM</Text>
                </div>
              </div>

              <div className="flex justify-end">
                <div className="max-w-xs">
                  <Card className="p-3 bg-blue-500 text-white">
                    <Text as="p" className="text-sm text-white">
                      Thank you! The faucet is working perfectly now.
                    </Text>
                  </Card>
                  <Text as="p" className="text-xs text-muted-foreground mt-1 text-right">10:45 AM</Text>
                </div>
              </div>

              <div className="flex justify-start">
                <div className="max-w-xs">
                  <Card className="p-3 bg-gray-100">
                    <Text as="p" className="text-sm">
                      Great! We'll close this work order. Have a wonderful day!
                    </Text>
                  </Card>
                  <Text as="p" className="text-xs text-muted-foreground mt-1">10:50 AM</Text>
                </div>
              </div>

              <div className="flex justify-center">
                <Badge variant="outline" className="text-xs">Today</Badge>
              </div>
            </CardContent>

            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  placeholder="Type your message..."
                  className="flex-1"
                />
                <Button>Send</Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
