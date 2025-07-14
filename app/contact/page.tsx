import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  Users,
  Building,
  Headphones,
  FileQuestion,
  ArrowRight,
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
import { Input } from "@/components/ui/input";
import { Header } from "@/components/header";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Support",
    description: "Get help via email",
    contact: "support@sewalah.com",
    availability: "24/7",
    responseTime: "Within 2 hours",
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak with our team",
    contact: "+1 (555) 123-4567",
    availability: "Mon-Fri 9AM-6PM EST",
    responseTime: "Immediate",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with us in real-time",
    contact: "Available in app",
    availability: "Mon-Fri 9AM-6PM EST",
    responseTime: "Within 5 minutes",
  },
];

const supportCategories = [
  {
    icon: Users,
    title: "Tenant Support",
    description: "Help with payments, maintenance requests, and account issues",
  },
  {
    icon: Building,
    title: "Landlord Support",
    description:
      "Property management, tenant onboarding, and reporting assistance",
  },
  {
    icon: Headphones,
    title: "Technical Support",
    description: "App issues, login problems, and technical troubleshooting",
  },
  {
    icon: FileQuestion,
    title: "General Inquiries",
    description: "Billing questions, feature requests, and general information",
  },
];

const offices = [
  {
    city: "San Francisco",
    address: "123 Tech Street, Suite 100",
    zipCode: "San Francisco, CA 94105",
    phone: "+1 (555) 123-4567",
  },
  {
    city: "New York",
    address: "456 Business Ave, Floor 25",
    zipCode: "New York, NY 10001",
    phone: "+1 (555) 987-6543",
  },
  {
    city: "Austin",
    address: "789 Innovation Blvd, Suite 50",
    zipCode: "Austin, TX 78701",
    phone: "+1 (555) 456-7890",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <Badge variant="secondary" className="mb-6">
          <Headphones className="h-4 w-4" />
          We're Here to Help
        </Badge>
        <Text as="h1" className="mb-6 max-w-4xl mx-auto">
          Get in Touch with Our Support Team
        </Text>
        <Text as="p" styleVariant="lead" className="mb-8 max-w-2xl mx-auto">
          Have questions about SewaLah? Need help getting started? Our
          friendly support team is ready to assist you.
        </Text>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Text as="h2" className="mb-4">
              How Can We Help You?
            </Text>
            <Text as="p" styleVariant="lead" className="max-w-2xl mx-auto">
              Choose the best way to reach us based on your needs
            </Text>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <method.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>{method.title}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Text as="p" className="font-semibold text-primary">
                      {method.contact}
                    </Text>
                    <Text as="p" className="text-sm text-muted-foreground">
                      Available: {method.availability}
                    </Text>
                    <Text as="p" className="text-sm text-muted-foreground">
                      Response: {method.responseTime}
                    </Text>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Support Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportCategories.map((category, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <category.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Text as="p" className="text-sm text-muted-foreground">
                    {category.description}
                  </Text>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <Text as="h2" className="mb-4">
                Send Us a Message
              </Text>
              <Text as="p" styleVariant="lead">
                Fill out the form below and we'll get back to you within 24
                hours
              </Text>
            </div>

            <Card>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium mb-2"
                      >
                        First Name
                      </label>
                      <Input
                        id="firstName"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium mb-2"
                      >
                        Last Name
                      </label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-2"
                    >
                      Subject
                    </label>
                    <Input id="subject" placeholder="What's this regarding?" />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className="flex w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <Button size="lg" className="w-full gap-2">
                    <Send className="h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Text as="h2" className="mb-4">
              Our Offices
            </Text>
            <Text as="p" styleVariant="lead" className="max-w-2xl mx-auto">
              Visit us at one of our locations or reach out remotely
            </Text>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {offices.map((office, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <CardTitle>{office.city}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Text as="p" className="text-sm">
                      {office.address}
                    </Text>
                    <Text as="p" className="text-sm text-muted-foreground">
                      {office.zipCode}
                    </Text>
                    <div className="flex items-center gap-2 pt-2">
                      <Phone className="h-4 w-4 text-primary" />
                      <Text as="p" className="text-sm font-medium">
                        {office.phone}
                      </Text>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Text as="h2" className="mb-4">
              Quick Answers
            </Text>
            <Text as="p" styleVariant="lead" className="max-w-2xl mx-auto">
              Common questions and helpful resources
            </Text>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <FileQuestion className="h-8 w-8 text-primary mx-auto mb-3" />
                <Text as="h3" className="mb-2 font-semibold">
                  FAQ
                </Text>
                <Text as="p" className="text-sm text-muted-foreground mb-4">
                  Find answers to common questions
                </Text>
                <Button variant="outline" size="sm">
                  View FAQ
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                <Text as="h3" className="mb-2 font-semibold">
                  User Guide
                </Text>
                <Text as="p" className="text-sm text-muted-foreground mb-4">
                  Learn how to use SewaLah
                </Text>
                <Button variant="outline" size="sm">
                  Read Guide
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <MessageCircle className="h-8 w-8 text-primary mx-auto mb-3" />
                <Text as="h3" className="mb-2 font-semibold">
                  Community
                </Text>
                <Text as="p" className="text-sm text-muted-foreground mb-4">
                  Join our user community
                </Text>
                <Button variant="outline" size="sm">
                  Join Forum
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                <Text as="h3" className="mb-2 font-semibold">
                  Status Page
                </Text>
                <Text as="p" className="text-sm text-muted-foreground mb-4">
                  Check system status
                </Text>
                <Button variant="outline" size="sm">
                  View Status
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <Text as="h2" className="mb-4">
            Ready to Get Started?
          </Text>
          <Text as="p" styleVariant="lead" className="mb-8 max-w-2xl mx-auto">
            Don't wait - join thousands of satisfied tenants and landlords using
            SewaLah today.
          </Text>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="gap-2" asChild>
              <Link href="/pricing">
                Start Free Trial
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
