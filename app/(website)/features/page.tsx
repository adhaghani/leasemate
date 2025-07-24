import Link from "next/link";
import {
  ArrowRight,
  CreditCard,
  Wrench,
  FileText,
  MessageSquare,
  Shield,
  Bell,
  Calendar,
  BarChart3,
  Users,
  Building,
  CheckCircle,
  Star,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Header } from "@/components/header";

const coreFeatures = [
  {
    icon: CreditCard,
    title: "Payment Tracking",
    description: "Automated rent tracking with payment reminders and history",
    details: [
      "Automatic payment reminders",
      "Payment history and receipts",
      "Multiple payment methods",
      "Late fee calculations",
    ],
  },
  {
    icon: Wrench,
    title: "Maintenance Management",
    description: "Streamlined maintenance request and repair tracking system",
    details: [
      "Submit maintenance requests with photos",
      "Real-time status updates",
      "Contractor assignment and tracking",
      "Maintenance history logs",
    ],
  },
  {
    icon: FileText,
    title: "Document Storage",
    description: "Secure cloud storage for all rental documents and agreements",
    details: [
      "Lease agreement storage",
      "Digital signatures",
      "Document versioning",
      "Secure file sharing",
    ],
  },
  {
    icon: MessageSquare,
    title: "Communication Hub",
    description: "Centralized messaging between tenants and landlords",
    details: [
      "In-app messaging system",
      "Email notifications",
      "Message threading",
      "File attachments",
    ],
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Automated alerts for important dates and events",
    details: [
      "Rent due reminders",
      "Lease expiration alerts",
      "Maintenance updates",
      "Custom notification preferences",
    ],
  },
  {
    icon: Calendar,
    title: "Calendar Integration",
    description: "Rental calendar with important dates and appointments",
    details: [
      "Rent due dates",
      "Maintenance appointments",
      "Property inspections",
      "Lease renewals",
    ],
  },
  {
    icon: BarChart3,
    title: "Analytics & Reports",
    description: "Detailed insights and reporting for property management",
    details: [
      "Payment analytics",
      "Maintenance cost tracking",
      "Tenant satisfaction metrics",
      "Custom report generation",
    ],
  },
  {
    icon: Shield,
    title: "Security & Privacy",
    description:
      "Bank-level security with data encryption and privacy protection",
    details: [
      "End-to-end encryption",
      "Secure data storage",
      "Privacy controls",
      "Regular security audits",
    ],
  },
];

const tenantFeatures = [
  "Track rent payments and due dates",
  "Submit maintenance requests with photos",
  "Access lease documents anytime",
  "Communicate directly with landlords",
  "Receive important notifications",
  "View payment history and receipts",
];

const landlordFeatures = [
  "Manage multiple properties and tenants",
  "Track rent collection and late payments",
  "Assign and monitor maintenance tasks",
  "Store and share documents securely",
  "Generate financial reports",
  "Automated payment reminders",
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <Badge variant="secondary" className="mb-6">
          <Zap className="h-4 w-4" />
          Powerful Features
        </Badge>
        <Text as="h1" className="mb-6 max-w-4xl mx-auto">
          Everything You Need for Modern Rental Management
        </Text>
        <Text as="p" styleVariant="lead" className="mb-8 max-w-2xl mx-auto">
          Discover how SewaLah's comprehensive feature set transforms the way
          tenants and landlords manage their rental relationships.
        </Text>
        <Button size="lg" className="gap-2" asChild>
          <Link href="/pricing">
            Start Free Trial
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </section>

      {/* Feature Categories */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Text as="h2" className="mb-4">
              Features Tailored for You
            </Text>
            <Text as="p" styleVariant="lead" className="max-w-2xl mx-auto">
              Whether you're a tenant or landlord, SewaLah has the tools you
              need
            </Text>
          </div>

          <Tabs defaultValue="tenants" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
              <TabsTrigger value="tenants" className="gap-2">
                <Users className="h-4 w-4" />
                For Tenants
              </TabsTrigger>
              <TabsTrigger value="landlords" className="gap-2">
                <Building className="h-4 w-4" />
                For Landlords
              </TabsTrigger>
            </TabsList>

            <TabsContent value="tenants" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tenantFeatures.map((feature, index) => (
                  <Card key={index} className="text-center">
                    <CardContent className="pt-6">
                      <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-3" />
                      <Text as="p" className="font-medium">
                        {feature}
                      </Text>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="landlords" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {landlordFeatures.map((feature, index) => (
                  <Card key={index} className="text-center">
                    <CardContent className="pt-6">
                      <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-3" />
                      <Text as="p" className="font-medium">
                        {feature}
                      </Text>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Text as="h2" className="mb-4">
              Core Features
            </Text>
            <Text as="p" styleVariant="lead" className="max-w-2xl mx-auto">
              Comprehensive tools designed to simplify every aspect of rental
              management
            </Text>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreFeatures.map((feature, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-left space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Text as="h2" className="mb-4">
              Why Choose SewaLah?
            </Text>
            <Text as="p" styleVariant="lead" className="max-w-2xl mx-auto">
              Built with the latest technology and best practices for rental
              management
            </Text>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <Text as="h3" className="mb-2">
                Lightning Fast
              </Text>
              <Text as="p" className="text-sm text-muted-foreground">
                Built on modern cloud infrastructure for instant access and
                real-time updates
              </Text>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <Text as="h3" className="mb-2">
                Bank-Level Security
              </Text>
              <Text as="p" className="text-sm text-muted-foreground">
                Your data is protected with enterprise-grade security and
                encryption
              </Text>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <Text as="h3" className="mb-2">
                User-Friendly
              </Text>
              <Text as="p" className="text-sm text-muted-foreground">
                Intuitive interface designed for users of all technical
                backgrounds
              </Text>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <Text as="h2" className="mb-4">
            Ready to Experience These Features?
          </Text>
          <Text as="p" styleVariant="lead" className="mb-8 max-w-2xl mx-auto">
            Join thousands of tenants and landlords who have transformed their
            rental management with SewaLah.
          </Text>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="gap-2" asChild>
              <Link href="/pricing">
                Start Free Trial
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Schedule Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
