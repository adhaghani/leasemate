import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/animate-ui/radix/accordion";
import { Text } from "@/components/ui/text";
import { Separator } from "@/components/ui/separator";
import { Header } from "@/components/header";
import {
  Home,
  Users,
  CreditCard,
  FileText,
  Wrench,
  MessageSquare,
  Shield,
  Clock,
  CheckCircle,
  Star,
  ArrowRight,
  Building,
  UserCheck,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <Badge variant="secondary" className="mb-6">
          🎉 Simplifying Rental Management
        </Badge>
        <Text as="h1" className="mb-6 max-w-4xl mx-auto">
          The Complete Tenant & Landlord Rental Management Platform
        </Text>
        <Text as="p" styleVariant="lead" className="mb-8 max-w-2xl mx-auto">
          Track payments, manage maintenance requests, store documents, and
          improve communication between tenants and landlords — all in one
          powerful platform.
        </Text>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button size="lg" className="gap-2">
            Start Free Trial
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg">
            Watch Demo
          </Button>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Text as="h2" className="mb-4">
              The Problem We Solve
            </Text>
            <Text as="p" styleVariant="lead" className="max-w-2xl mx-auto">
              Rental management shouldn't be a headache for anyone involved
            </Text>
          </div>

          <Tabs defaultValue="tenants" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
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
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CreditCard className="h-8 w-8 text-destructive mb-2" />
                    <CardTitle>Lost Payment Tracking</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Text as="p" className="text-sm">
                      Tenants lose track of rental payments and struggle to
                      maintain proper records
                    </Text>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Wrench className="h-8 w-8 text-destructive mb-2" />
                    <CardTitle>Maintenance Confusion</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Text as="p" className="text-sm">
                      Can't easily report issues or follow up on maintenance
                      requests
                    </Text>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <FileText className="h-8 w-8 text-destructive mb-2" />
                    <CardTitle>Document Chaos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Text as="p" className="text-sm">
                      Don't know what their rental agreement says once it's
                      signed
                    </Text>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="landlords" className="mt-8">
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <MessageSquare className="h-8 w-8 text-destructive mb-2" />
                    <CardTitle>Manual Management</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Text as="p" className="text-sm">
                      Manually manage rent tracking using WhatsApp and Excel
                      spreadsheets
                    </Text>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Clock className="h-8 w-8 text-destructive mb-2" />
                    <CardTitle>Forgotten Requests</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Text as="p" className="text-sm">
                      Forget or miscommunicate about repair requests and
                      maintenance issues
                    </Text>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Shield className="h-8 w-8 text-destructive mb-2" />
                    <CardTitle>Poor Oversight</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Text as="p" className="text-sm">
                      Need better document management and tenant oversight tools
                    </Text>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Text as="h2" className="mb-4">
              Everything You Need
            </Text>
            <Text as="p" styleVariant="lead" className="max-w-2xl mx-auto">
              A comprehensive solution for modern rental management
            </Text>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <CreditCard className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Payment Tracking</CardTitle>
                <CardDescription>
                  Track rent payments, due dates, and payment history with
                  automated reminders
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Wrench className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Maintenance Requests</CardTitle>
                <CardDescription>
                  Log, track, and update maintenance issues with photo uploads
                  and status updates
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Document Storage</CardTitle>
                <CardDescription>
                  Store leases, receipts, and important documents in one secure
                  location
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Communication</CardTitle>
                <CardDescription>
                  Improved transparency and communication between tenants and
                  landlords
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Text as="h2" className="mb-4">
              How It Works
            </Text>
            <Text as="p" styleVariant="lead" className="max-w-2xl mx-auto">
              Get started in minutes, not hours
            </Text>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <Text as="h3" className="mb-2">
                Sign Up
              </Text>
              <Text as="p" className="text-sm">
                Create your account as a tenant or landlord in under 2 minutes
              </Text>
            </div>

            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <Text as="h3" className="mb-2">
                Set Up Properties
              </Text>
              <Text as="p" className="text-sm">
                Add your rental properties and invite tenants to join
              </Text>
            </div>

            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <Text as="h3" className="mb-2">
                Start Managing
              </Text>
              <Text as="p" className="text-sm">
                Begin tracking payments, handling requests, and staying
                organized
              </Text>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Text as="h2" className="mb-4">
              What Our Users Say
            </Text>
            <Text as="p" styleVariant="lead" className="max-w-2xl mx-auto">
              Join thousands of satisfied tenants and landlords
            </Text>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <CardDescription>
                  "SewaLah has completely transformed how I manage my rental
                  properties. No more Excel sheets or missed payments!"
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <UserCheck className="h-8 w-8 text-muted-foreground" />
                  <div>
                    <Text as="p" className="font-medium text-sm">
                      Sarah Johnson
                    </Text>
                    <Text as="p" className="text-xs text-muted-foreground">
                      Property Owner
                    </Text>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <CardDescription>
                  "Finally, I can keep track of all my rental documents and
                  payments in one place. The maintenance request feature is a
                  game-changer!"
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <UserCheck className="h-8 w-8 text-muted-foreground" />
                  <div>
                    <Text as="p" className="font-medium text-sm">
                      Mike Chen
                    </Text>
                    <Text as="p" className="text-xs text-muted-foreground">
                      Tenant
                    </Text>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <CardDescription>
                  "The communication tools have made working with my landlord so
                  much easier. Everything is transparent and well-documented."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <UserCheck className="h-8 w-8 text-muted-foreground" />
                  <div>
                    <Text as="p" className="font-medium text-sm">
                      Emily Rodriguez
                    </Text>
                    <Text as="p" className="text-xs text-muted-foreground">
                      Tenant
                    </Text>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Text as="h2" className="mb-4">
              Frequently Asked Questions
            </Text>
            <Text as="p" styleVariant="lead" className="max-w-2xl mx-auto">
              Everything you need to know about SewaLah
            </Text>
          </div>

          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Is SewaLah suitable for small landlords?
              </AccordionTrigger>
              <AccordionContent>
                Absolutely! SewaLah is designed specifically with small
                landlords in mind. Whether you have one rental property or
                dozens, our platform scales with your needs and eliminates the
                need for manual tracking with WhatsApp and Excel.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                How secure is my data on SewaLah?
              </AccordionTrigger>
              <AccordionContent>
                We take security seriously. All data is encrypted in transit and
                at rest, and we follow industry best practices for data
                protection. Your rental documents and payment information are
                stored securely with regular backups.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                Can tenants and landlords both use the same platform?
              </AccordionTrigger>
              <AccordionContent>
                Yes! SewaLah is designed for both tenants and landlords. Each
                user type has access to features relevant to their role, while
                maintaining transparency and improving communication between
                both parties.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                What types of documents can I store?
              </AccordionTrigger>
              <AccordionContent>
                You can store any rental-related documents including lease
                agreements, payment receipts, maintenance records, property
                photos, insurance documents, and more. All files are securely
                stored and easily accessible.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>
                Is there a mobile app available?
              </AccordionTrigger>
              <AccordionContent>
                SewaLah is fully responsive and works great on mobile browsers.
                We're currently developing dedicated mobile apps for iOS and
                Android that will be available soon.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <Text as="h2" className="mb-4">
            Ready to Simplify Your Rental Management?
          </Text>
          <Text as="p" styleVariant="lead" className="mb-8 max-w-2xl mx-auto">
            Join thousands of tenants and landlords who have streamlined their
            rental process with SewaLah.
          </Text>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="gap-2">
              Start Your Free Trial
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Home className="h-6 w-6 text-primary" />
                <Text as="h4" className="text-primary">
                  SewaLah
                </Text>
              </div>
              <Text as="p" className="text-sm text-muted-foreground">
                Simplifying rental management for tenants and landlords
                everywhere.
              </Text>
            </div>

            <div>
              <Text as="h4" className="mb-4">
                Product
              </Text>
              <div className="space-y-2">
                <Text
                  as="p"
                  className="text-sm text-muted-foreground cursor-pointer hover:text-foreground"
                >
                  Features
                </Text>
                <Text
                  as="p"
                  className="text-sm text-muted-foreground cursor-pointer hover:text-foreground"
                >
                  Pricing
                </Text>
                <Text
                  as="p"
                  className="text-sm text-muted-foreground cursor-pointer hover:text-foreground"
                >
                  Security
                </Text>
              </div>
            </div>

            <div>
              <Text as="h4" className="mb-4">
                Support
              </Text>
              <div className="space-y-2">
                <Text
                  as="p"
                  className="text-sm text-muted-foreground cursor-pointer hover:text-foreground"
                >
                  Help Center
                </Text>
                <Text
                  as="p"
                  className="text-sm text-muted-foreground cursor-pointer hover:text-foreground"
                >
                  Contact Us
                </Text>
                <Text
                  as="p"
                  className="text-sm text-muted-foreground cursor-pointer hover:text-foreground"
                >
                  Documentation
                </Text>
              </div>
            </div>

            <div>
              <Text as="h4" className="mb-4">
                Company
              </Text>
              <div className="space-y-2">
                <Text
                  as="p"
                  className="text-sm text-muted-foreground cursor-pointer hover:text-foreground"
                >
                  About
                </Text>
                <Text
                  as="p"
                  className="text-sm text-muted-foreground cursor-pointer hover:text-foreground"
                >
                  Blog
                </Text>
                <Text
                  as="p"
                  className="text-sm text-muted-foreground cursor-pointer hover:text-foreground"
                >
                  Careers
                </Text>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="flex justify-between items-center flex-wrap gap-4">
            <Text as="p" className="text-sm text-muted-foreground">
              © 2025 SewaLah. All rights reserved.
            </Text>
            <div className="flex gap-6">
              <Text
                as="p"
                className="text-sm text-muted-foreground cursor-pointer hover:text-foreground"
              >
                Privacy Policy
              </Text>
              <Text
                as="p"
                className="text-sm text-muted-foreground cursor-pointer hover:text-foreground"
              >
                Terms of Service
              </Text>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
