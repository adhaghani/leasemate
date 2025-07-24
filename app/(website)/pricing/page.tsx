import Link from "next/link";
import {
  ArrowRight,
  Check,
  Star,
  Zap,
  Crown,
  Building,
  Users,
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

const tenantPlans = [
  {
    name: "Free",
    price: 0,
    period: "month",
    description: "Perfect for individual tenants",
    features: [
      "Basic payment tracking",
      "Submit maintenance requests",
      "Access lease documents",
      "Basic messaging",
      "Payment reminders",
    ],
    limitations: ["Up to 1 property", "Basic support"],
    popular: false,
    buttonText: "Get Started Free",
    buttonVariant: "outline" as const,
  },
  {
    name: "Premium",
    price: 4.99,
    period: "month",
    description: "Enhanced features for active tenants",
    features: [
      "Everything in Free",
      "Advanced payment history",
      "Priority maintenance requests",
      "Document storage (5GB)",
      "Calendar integration",
      "Premium support",
    ],
    limitations: [],
    popular: true,
    buttonText: "Start Premium",
    buttonVariant: "default" as const,
  },
];

const landlordPlans = [
  {
    name: "Starter",
    price: 15,
    period: "month",
    description: "For landlords with 1-5 properties",
    features: [
      "Manage up to 5 properties",
      "Unlimited tenants",
      "Payment tracking & reminders",
      "Maintenance management",
      "Document storage (10GB)",
      "Basic reporting",
      "Email support",
    ],
    limitations: [],
    popular: false,
    buttonText: "Start Starter",
    buttonVariant: "outline" as const,
  },
  {
    name: "Professional",
    price: 35,
    period: "month",
    description: "For growing property portfolios",
    features: [
      "Manage up to 25 properties",
      "Everything in Starter",
      "Advanced analytics",
      "Automated workflows",
      "Document storage (50GB)",
      "Custom reports",
      "Priority support",
      "Tenant screening tools",
    ],
    limitations: [],
    popular: true,
    buttonText: "Start Professional",
    buttonVariant: "default" as const,
  },
  {
    name: "Enterprise",
    price: 99,
    period: "month",
    description: "For large property management companies",
    features: [
      "Unlimited properties",
      "Everything in Professional",
      "White-label solution",
      "API access",
      "Unlimited storage",
      "Custom integrations",
      "Dedicated account manager",
      "24/7 phone support",
    ],
    limitations: [],
    popular: false,
    buttonText: "Contact Sales",
    buttonVariant: "outline" as const,
  },
];

const features = [
  "30-day free trial for all paid plans",
  "No setup fees or hidden costs",
  "Cancel anytime with no penalties",
  "24/7 customer support",
  "99.9% uptime guarantee",
  "Bank-level security",
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <Badge variant="secondary" className="mb-6">
          <Star className="h-4 w-4" />
          Simple Pricing
        </Badge>
        <Text as="h1" className="mb-6 max-w-4xl mx-auto">
          Choose the Perfect Plan for Your Needs
        </Text>
        <Text as="p" styleVariant="lead" className="mb-8 max-w-2xl mx-auto">
          Transparent pricing with no hidden fees. Start free and upgrade as you
          grow.
        </Text>
      </section>

      {/* Pricing Plans */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="tenants" className="max-w-7xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
              <TabsTrigger value="tenants" className="gap-2">
                <Users className="h-4 w-4" />
                For Tenants
              </TabsTrigger>
              <TabsTrigger value="landlords" className="gap-2">
                <Building className="h-4 w-4" />
                For Landlords
              </TabsTrigger>
            </TabsList>

            <TabsContent value="tenants">
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {tenantPlans.map((plan, index) => (
                  <Card
                    key={index}
                    className={`relative ${
                      plan.popular ? "border-primary shadow-lg" : ""
                    }`}
                  >
                    {plan.popular && (
                      <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        Most Popular
                      </Badge>
                    )}
                    <CardHeader className="text-center">
                      <CardTitle className="text-2xl">{plan.name}</CardTitle>
                      <CardDescription>{plan.description}</CardDescription>
                      <div className="pt-4">
                        <Text as="h2" className="text-3xl font-bold">
                          ${plan.price}
                          <span className="text-lg font-normal text-muted-foreground">
                            /{plan.period}
                          </span>
                        </Text>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {plan.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center gap-3"
                          >
                            <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                        {plan.limitations.map((limitation, limitIndex) => (
                          <li
                            key={limitIndex}
                            className="flex items-center gap-3 text-muted-foreground"
                          >
                            <Check className="h-5 w-5 flex-shrink-0" />
                            <span className="text-sm">{limitation}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        className="w-full"
                        variant={plan.buttonVariant}
                        size="lg"
                      >
                        {plan.buttonText}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="landlords">
              <div className="grid md:grid-cols-3 gap-8">
                {landlordPlans.map((plan, index) => (
                  <Card
                    key={index}
                    className={`relative ${
                      plan.popular ? "border-primary shadow-lg" : ""
                    }`}
                  >
                    {plan.popular && (
                      <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        Most Popular
                      </Badge>
                    )}
                    <CardHeader className="text-center">
                      <CardTitle className="text-2xl">{plan.name}</CardTitle>
                      <CardDescription>{plan.description}</CardDescription>
                      <div className="pt-4">
                        <Text as="h2" className="text-3xl font-bold">
                          ${plan.price}
                          <span className="text-lg font-normal text-muted-foreground">
                            /{plan.period}
                          </span>
                        </Text>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {plan.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center gap-3"
                          >
                            <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        className="w-full"
                        variant={plan.buttonVariant}
                        size="lg"
                      >
                        {plan.buttonText}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Features Included */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Text as="h2" className="mb-4">
              What's Included
            </Text>
            <Text as="p" styleVariant="lead" className="max-w-2xl mx-auto">
              All plans include these essential features
            </Text>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Text as="h2" className="mb-4">
              Frequently Asked Questions
            </Text>
            <Text as="p" styleVariant="lead" className="max-w-2xl mx-auto">
              Common questions about our pricing and plans
            </Text>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Can I change plans at any time?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Text as="p" className="text-sm text-muted-foreground">
                  Yes, you can upgrade or downgrade your plan at any time.
                  Changes take effect immediately, and we'll prorate any
                  charges.
                </Text>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Is there a free trial?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Text as="p" className="text-sm text-muted-foreground">
                  All paid plans come with a 30-day free trial. You can also use
                  our free tenant plan indefinitely.
                </Text>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  What payment methods do you accept?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Text as="p" className="text-sm text-muted-foreground">
                  We accept all major credit cards, PayPal, and bank transfers
                  for annual subscriptions.
                </Text>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Do you offer discounts for annual plans?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Text as="p" className="text-sm text-muted-foreground">
                  Yes! Save 20% when you pay annually. Contact us for custom
                  pricing on Enterprise plans.
                </Text>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <Text as="h2" className="mb-4 text-primary-foreground">
            Ready to Get Started?
          </Text>
          <Text
            as="p"
            styleVariant="lead"
            className="mb-8 max-w-2xl mx-auto text-primary-foreground/90"
          >
            Join thousands of satisfied users and transform your rental
            management today.
          </Text>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" variant="secondary" className="gap-2">
              Start Free Trial
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
