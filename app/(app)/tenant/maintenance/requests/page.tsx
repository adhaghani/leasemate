import { Text } from "@/components/ui/text";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function TenantMaintenanceRequestsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <Text as="h2">My Requests</Text>
          <Text as="p" styleVariant="muted">
            Track your maintenance requests and their status
          </Text>
        </div>
        <Button>New Request</Button>
      </div>

      {/* Filters */}
      <div className="flex gap-4 items-center">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="All Requests" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Requests</SelectItem>
            <SelectItem value="open">Open</SelectItem>
            <SelectItem value="in-progress">In Progress</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="cancelled">Cancelled</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="plumbing">Plumbing</SelectItem>
            <SelectItem value="electrical">Electrical</SelectItem>
            <SelectItem value="hvac">Heating/Cooling</SelectItem>
            <SelectItem value="appliances">Appliances</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest First</SelectItem>
            <SelectItem value="oldest">Oldest First</SelectItem>
            <SelectItem value="priority">By Priority</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Active Requests */}
      <div className="space-y-4">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold">Kitchen Faucet Leak</h3>
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded">
                    In Progress
                  </span>
                  <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded">
                    Medium Priority
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  Kitchen • Plumbing • Request #MR-2024-001
                </p>
                <p className="text-sm">
                  The kitchen faucet has been dripping constantly for the past 3
                  days. Water is pooling around the base.
                </p>
              </div>
              <button className="text-blue-600 hover:underline text-sm">
                View Details
              </button>
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-4">
                  <span>Submitted: Mar 15, 2024</span>
                  <span>Assigned to: Mike's Plumbing</span>
                </div>
                <span>Expected completion: Mar 20, 2024</span>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold">Bedroom Window Lock</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                    Open
                  </span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                    Low Priority
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  Bedroom 1 • Doors & Windows • Request #MR-2024-002
                </p>
                <p className="text-sm">
                  The window lock in the master bedroom is loose and doesn't
                  secure properly.
                </p>
              </div>
              <button className="text-blue-600 hover:underline text-sm">
                View Details
              </button>
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-4">
                  <span>Submitted: Mar 18, 2024</span>
                  <span>Status: Pending assignment</span>
                </div>
                <span>Expected response: Mar 21, 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Completed Requests */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">Recently Completed</h2>
        </div>

        <div className="p-6 space-y-4">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-medium">HVAC Filter Replacement</h3>
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                  Completed
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-1">
                Living Room • HVAC • Request #MR-2024-003
              </p>
              <p className="text-sm">
                Completed on Mar 10, 2024 by ABC Maintenance Services
              </p>
            </div>
            <div className="text-right">
              <button className="text-blue-600 hover:underline text-sm">
                Rate Service
              </button>
              <p className="text-xs text-muted-foreground mt-1">Cost: $45.00</p>
            </div>
          </div>

          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-medium">Bathroom Light Fixture</h3>
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                  Completed
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-1">
                Bathroom 1 • Electrical • Request #MR-2024-004
              </p>
              <p className="text-sm">Completed on Mar 5, 2024 by ElectriCorp</p>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-xs text-muted-foreground">Rated</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Cost: $120.00
              </p>
            </div>
          </div>
        </div>
      </div>w

      {/* Request Statistics */}
      <div className="grid gap-4 md:grid-cols-4">
        <div className="p-4 border rounded-lg text-center">
          <h3 className="text-2xl font-bold text-blue-600">2</h3>
          <p className="text-sm text-muted-foreground">Active Requests</p>
        </div>

        <div className="p-4 border rounded-lg text-center">
          <h3 className="text-2xl font-bold text-green-600">12</h3>
          <p className="text-sm text-muted-foreground">Completed This Year</p>
        </div>

        <div className="p-4 border rounded-lg text-center">
          <h3 className="text-2xl font-bold text-orange-600">3.2</h3>
          <p className="text-sm text-muted-foreground">Avg Days to Complete</p>
        </div>

        <div className="p-4 border rounded-lg text-center">
          <h3 className="text-2xl font-bold text-purple-600">4.8</h3>
          <p className="text-sm text-muted-foreground">Avg Service Rating</p>
        </div>
      </div>
    </div>
  );
}
