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
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/5" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" />

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 py-24 text-center">
        <div className="relative">
          <Badge
            variant="secondary"
            className="mb-8 text-sm px-4 py-2 bg-primary/10 text-primary border-primary/20 hover:bg-primary/15 transition-colors"
          >
            🎉 Simplifying Rental Management
          </Badge>
          <Text
            as="h1"
            className="mb-8 max-w-5xl mx-auto text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
          >
            The Complete Tenant & Landlord
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              {" "}
              Rental Management
            </span>{" "}
            Platform
          </Text>
          <Text
            as="p"
            styleVariant="lead"
            className="mb-10 max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed"
          >
            Track payments, manage maintenance requests, store documents, and
            improve communication between tenants and landlords — all in one
            powerful platform designed for the modern rental experience.
          </Text>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              size="lg"
              className="gap-2 px-8 py-3 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 text-base font-semibold border-2 hover:bg-primary/5 transition-all duration-300"
            >
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <Text as="h3" className="text-3xl font-bold text-primary">
                1000+
              </Text>
              <Text as="p" className="text-sm text-muted-foreground">
                Active Users
              </Text>
            </div>
            <div className="text-center">
              <Text as="h3" className="text-3xl font-bold text-primary">
                500+
              </Text>
              <Text as="p" className="text-sm text-muted-foreground">
                Properties Managed
              </Text>
            </div>
            <div className="text-center">
              <Text as="h3" className="text-3xl font-bold text-primary">
                99.9%
              </Text>
              <Text as="p" className="text-sm text-muted-foreground">
                Uptime
              </Text>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="relative z-10 bg-gradient-to-br from-muted/30 via-muted/50 to-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Text as="h2" className="mb-6 text-3xl sm:text-4xl font-bold">
              The Problem We Solve
            </Text>
            <Text
              as="p"
              styleVariant="lead"
              className="max-w-3xl mx-auto text-lg text-muted-foreground"
            >
              Rental management shouldn't be a headache for anyone involved.
              We're here to change that.
            </Text>
          </div>

          <Tabs defaultValue="tenants" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 h-14 p-1 bg-background/50 backdrop-blur-sm border border-border/50">
              <TabsTrigger
                value="tenants"
                className="gap-2 h-full text-base font-medium data-[state=active]:bg-background data-[state=active]:shadow-md"
              >
                <Users className="h-5 w-5" />
                For Tenants
              </TabsTrigger>
              <TabsTrigger
                value="landlords"
                className="gap-2 h-full text-base font-medium data-[state=active]:bg-background data-[state=active]:shadow-md"
              >
                <Building className="h-5 w-5" />
                For Landlords
              </TabsTrigger>
            </TabsList>

            <TabsContent value="tenants" className="mt-12">
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-0 bg-background/60 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-destructive/10 rounded-2xl flex items-center justify-center mb-4">
                      <CreditCard className="h-8 w-8 text-destructive" />
                    </div>
                    <CardTitle className="text-xl">
                      Lost Payment Tracking
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Text
                      as="p"
                      className="text-muted-foreground leading-relaxed"
                    >
                      Tenants lose track of rental payments and struggle to
                      maintain proper records for future references
                    </Text>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-background/60 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-destructive/10 rounded-2xl flex items-center justify-center mb-4">
                      <Wrench className="h-8 w-8 text-destructive" />
                    </div>
                    <CardTitle className="text-xl">
                      Maintenance Confusion
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Text
                      as="p"
                      className="text-muted-foreground leading-relaxed"
                    >
                      Can't easily report issues or follow up on maintenance
                      requests with clear communication
                    </Text>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-background/60 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-destructive/10 rounded-2xl flex items-center justify-center mb-4">
                      <FileText className="h-8 w-8 text-destructive" />
                    </div>
                    <CardTitle className="text-xl">Document Chaos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Text
                      as="p"
                      className="text-muted-foreground leading-relaxed"
                    >
                      Don't know what their rental agreement says once it's
                      signed and can't access important documents
                    </Text>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="landlords" className="mt-12">
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-0 bg-background/60 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-destructive/10 rounded-2xl flex items-center justify-center mb-4">
                      <MessageSquare className="h-8 w-8 text-destructive" />
                    </div>
                    <CardTitle className="text-xl">Manual Management</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Text
                      as="p"
                      className="text-muted-foreground leading-relaxed"
                    >
                      Manually manage rent tracking using WhatsApp and Excel
                      spreadsheets without proper organization
                    </Text>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-background/60 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-destructive/10 rounded-2xl flex items-center justify-center mb-4">
                      <Clock className="h-8 w-8 text-destructive" />
                    </div>
                    <CardTitle className="text-xl">
                      Forgotten Requests
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Text
                      as="p"
                      className="text-muted-foreground leading-relaxed"
                    >
                      Forget or miscommunicate about repair requests and
                      maintenance issues leading to tenant dissatisfaction
                    </Text>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-background/60 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-destructive/10 rounded-2xl flex items-center justify-center mb-4">
                      <Shield className="h-8 w-8 text-destructive" />
                    </div>
                    <CardTitle className="text-xl">Poor Oversight</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Text
                      as="p"
                      className="text-muted-foreground leading-relaxed"
                    >
                      Need better document management and tenant oversight tools
                      for efficient property management
                    </Text>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Text as="h2" className="mb-6 text-3xl sm:text-4xl font-bold">
              Everything You Need
            </Text>
            <Text
              as="p"
              styleVariant="lead"
              className="max-w-3xl mx-auto text-lg text-muted-foreground"
            >
              A comprehensive solution for modern rental management with all the
              tools you need
            </Text>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 bg-background shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
              <CardHeader className="pb-4">
                <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <CreditCard className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-xl mb-3">Payment Tracking</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Track rent payments, due dates, and payment history with
                  automated reminders and detailed analytics
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-0 bg-background shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
              <CardHeader className="pb-4">
                <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Wrench className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-xl mb-3">
                  Maintenance Requests
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Log, track, and update maintenance issues with photo uploads
                  and real-time status updates
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-0 bg-background shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
              <CardHeader className="pb-4">
                <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <FileText className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-xl mb-3">Document Storage</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Store leases, receipts, and important documents in one secure
                  location with easy access
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-0 bg-background shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
              <CardHeader className="pb-4">
                <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <MessageSquare className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-xl mb-3">Communication</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Improved transparency and communication between tenants and
                  landlords with built-in messaging
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative z-10 bg-gradient-to-br from-muted/30 via-muted/50 to-muted/30 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Text as="h2" className="mb-6 text-3xl sm:text-4xl font-bold">
              How It Works
            </Text>
            <Text
              as="p"
              styleVariant="lead"
              className="max-w-3xl mx-auto text-lg text-muted-foreground"
            >
              Get started in minutes, not hours. Our streamlined process makes
              it easy to begin.
            </Text>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-3xl flex items-center justify-center mx-auto text-2xl font-bold shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  1
                </div>
                {/* Connector line for desktop */}
                <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              </div>
              <Text as="h3" className="text-2xl font-bold mb-4">
                Sign Up
              </Text>
              <Text
                as="p"
                className="text-muted-foreground leading-relaxed text-base"
              >
                Create your account as a tenant or landlord in under 2 minutes
                with our simple registration process
              </Text>
            </div>

            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-3xl flex items-center justify-center mx-auto text-2xl font-bold shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  2
                </div>
                {/* Connector line for desktop */}
                <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              </div>
              <Text as="h3" className="text-2xl font-bold mb-4">
                Set Up Properties
              </Text>
              <Text
                as="p"
                className="text-muted-foreground leading-relaxed text-base"
              >
                Add your rental properties and invite tenants to join your
                property management network
              </Text>
            </div>

            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-3xl flex items-center justify-center mx-auto text-2xl font-bold shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  3
                </div>
              </div>
              <Text as="h3" className="text-2xl font-bold mb-4">
                Start Managing
              </Text>
              <Text
                as="p"
                className="text-muted-foreground leading-relaxed text-base"
              >
                Begin tracking payments, handling requests, and staying
                organized with powerful automation tools
              </Text>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-10 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Text as="h2" className="mb-6 text-3xl sm:text-4xl font-bold">
              What Our Users Say
            </Text>
            <Text
              as="p"
              styleVariant="lead"
              className="max-w-3xl mx-auto text-lg text-muted-foreground"
            >
              Join thousands of satisfied tenants and landlords who trust
              SewaLah
            </Text>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 bg-background shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="pb-4">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <CardDescription className="text-base leading-relaxed">
                  "SewaLah has completely transformed how I manage my rental
                  properties. No more Excel sheets or missed payments! The
                  automation features are incredible."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <UserCheck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <Text as="p" className="font-semibold">
                      Sarah Johnson
                    </Text>
                    <Text as="p" className="text-sm text-muted-foreground">
                      Property Owner
                    </Text>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="pb-4">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <CardDescription className="text-base leading-relaxed">
                  "Finally, I can keep track of all my rental documents and
                  payments in one place. The maintenance request feature is a
                  game-changer for communication!"
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <UserCheck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <Text as="p" className="font-semibold">
                      Mike Chen
                    </Text>
                    <Text as="p" className="text-sm text-muted-foreground">
                      Tenant
                    </Text>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="pb-4">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <CardDescription className="text-base leading-relaxed">
                  "The communication tools have made working with my landlord so
                  much easier. Everything is transparent and well-documented.
                  Highly recommended!"
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <UserCheck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <Text as="p" className="font-semibold">
                      Emily Rodriguez
                    </Text>
                    <Text as="p" className="text-sm text-muted-foreground">
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
      <section className="relative z-10 bg-gradient-to-br from-muted/30 via-muted/50 to-muted/30 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Text as="h2" className="mb-6 text-3xl sm:text-4xl font-bold">
              Frequently Asked Questions
            </Text>
            <Text
              as="p"
              styleVariant="lead"
              className="max-w-3xl mx-auto text-lg text-muted-foreground"
            >
              Everything you need to know about SewaLah to get started
            </Text>
          </div>

          <Accordion
            type="single"
            collapsible
            className="max-w-4xl mx-auto space-y-4"
          >
            <AccordionItem
              value="item-1"
              className="border border-border/50 rounded-2xl bg-background/60 backdrop-blur-sm px-6"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6 text-lg font-semibold">
                Is SewaLah suitable for small landlords?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-6">
                Absolutely! SewaLah is designed specifically with small
                landlords in mind. Whether you have one rental property or
                dozens, our platform scales with your needs and eliminates the
                need for manual tracking with WhatsApp and Excel.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="border border-border/50 rounded-2xl bg-background/60 backdrop-blur-sm px-6"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6 text-lg font-semibold">
                How secure is my data on SewaLah?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-6">
                We take security seriously. All data is encrypted in transit and
                at rest, and we follow industry best practices for data
                protection. Your rental documents and payment information are
                stored securely with regular backups and enterprise-grade
                security.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="border border-border/50 rounded-2xl bg-background/60 backdrop-blur-sm px-6"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6 text-lg font-semibold">
                Can tenants and landlords both use the same platform?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-6">
                Yes! SewaLah is designed for both tenants and landlords. Each
                user type has access to features relevant to their role, while
                maintaining transparency and improving communication between
                both parties through our unified platform.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="border border-border/50 rounded-2xl bg-background/60 backdrop-blur-sm px-6"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6 text-lg font-semibold">
                What types of documents can I store?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-6">
                You can store any rental-related documents including lease
                agreements, payment receipts, maintenance records, property
                photos, insurance documents, inspection reports, and more. All
                files are securely stored and easily accessible with powerful
                search capabilities.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="border border-border/50 rounded-2xl bg-background/60 backdrop-blur-sm px-6"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6 text-lg font-semibold">
                Is there a mobile app available?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-6">
                SewaLah is fully responsive and works great on mobile browsers.
                We're currently developing dedicated mobile apps for iOS and
                Android that will be available soon with enhanced
                mobile-specific features.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Text as="h2" className="mb-6 text-3xl sm:text-4xl font-bold">
              Ready to Simplify Your Rental Management?
            </Text>
            <Text
              as="p"
              styleVariant="lead"
              className="mb-12 max-w-3xl mx-auto text-lg text-muted-foreground"
            >
              Join thousands of tenants and landlords who have streamlined their
              rental process with SewaLah. Start your journey today.
            </Text>
            <div className="flex gap-6 justify-center flex-wrap">
              <Button
                size="lg"
                className="gap-2 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Start Your Free Trial
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg font-semibold border-2 hover:bg-primary/5 transition-all duration-300"
              >
                Schedule a Demo
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t bg-gradient-to-br from-muted/30 via-muted/50 to-muted/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center">
                  <Home className="h-6 w-6 text-primary-foreground" />
                </div>
                <Text as="h4" className="text-primary text-xl font-bold">
                  SewaLah
                </Text>
              </div>
              <Text as="p" className="text-muted-foreground leading-relaxed">
                Simplifying rental management for tenants and landlords
                everywhere with modern, intuitive tools.
              </Text>
            </div>

            <div>
              <Text as="h4" className="mb-6 text-lg font-semibold">
                Product
              </Text>
              <div className="space-y-3">
                <Text
                  as="p"
                  className="text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                >
                  Features
                </Text>
                <Text
                  as="p"
                  className="text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                >
                  Pricing
                </Text>
                <Text
                  as="p"
                  className="text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                >
                  Security
                </Text>
                <Text
                  as="p"
                  className="text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                >
                  Integrations
                </Text>
              </div>
            </div>

            <div>
              <Text as="h4" className="mb-6 text-lg font-semibold">
                Support
              </Text>
              <div className="space-y-3">
                <Text
                  as="p"
                  className="text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                >
                  Help Center
                </Text>
                <Text
                  as="p"
                  className="text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                >
                  Contact Us
                </Text>
                <Text
                  as="p"
                  className="text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                >
                  Documentation
                </Text>
                <Text
                  as="p"
                  className="text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                >
                  API Reference
                </Text>
              </div>
            </div>

            <div>
              <Text as="h4" className="mb-6 text-lg font-semibold">
                Company
              </Text>
              <div className="space-y-3">
                <Text
                  as="p"
                  className="text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                >
                  About
                </Text>
                <Text
                  as="p"
                  className="text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                >
                  Blog
                </Text>
                <Text
                  as="p"
                  className="text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                >
                  Careers
                </Text>
                <Text
                  as="p"
                  className="text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                >
                  Press Kit
                </Text>
              </div>
            </div>
          </div>

          <Separator className="my-12 bg-border/50" />

          <div className="flex justify-between items-center flex-wrap gap-6">
            <Text as="p" className="text-muted-foreground">
              © 2025 SewaLah. All rights reserved.
            </Text>
            <div className="flex gap-8">
              <Text
                as="p"
                className="text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Text>
              <Text
                as="p"
                className="text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
              >
                Terms of Service
              </Text>
              <Text
                as="p"
                className="text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
              >
                Cookie Policy
              </Text>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
