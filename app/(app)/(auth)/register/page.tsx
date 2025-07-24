"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  ArrowLeft,
  ArrowRight,
  User,
  Camera,
  Building,
  Home,
  Users,
  Crown,
  Sparkles,
  SkipForward,
} from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import Link from "next/link";

const registerSchema = z
  .object({
    fullName: z.string().min(2, "Full name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(8, "Please confirm your password"),
    username: z
      .string()
      .min(3, "Username must be at least 3 characters")
      .regex(
        /^[a-zA-Z0-9_]+$/,
        "Username can only contain letters, numbers, and underscores"
      ),
    profilePicture: z.string().optional(),
    phone: z.string().optional(),
    userType: z.enum(["tenant", "landlord"], {
      message: "Please select whether you're a tenant or landlord",
    }),
    plan: z.string().min(1, "Please select a plan"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type RegisterFormData = z.infer<typeof registerSchema>;

// Minimalist profile picture presets that match the website's theme
const profilePicturePresets = [
  {
    id: "gradient-1",
    name: "Ocean Wave",
    gradient: "from-blue-400 to-cyan-300",
  },
  { id: "gradient-2", name: "Sunset", gradient: "from-orange-400 to-pink-400" },
  {
    id: "gradient-3",
    name: "Forest",
    gradient: "from-green-400 to-emerald-300",
  },
  {
    id: "gradient-4",
    name: "Purple Dream",
    gradient: "from-purple-400 to-indigo-400",
  },
  { id: "gradient-5", name: "Coral", gradient: "from-red-400 to-pink-300" },
  {
    id: "gradient-6",
    name: "Golden Hour",
    gradient: "from-yellow-400 to-orange-300",
  },
  { id: "gradient-7", name: "Mint", gradient: "from-teal-400 to-green-300" },
  {
    id: "gradient-8",
    name: "Lavender",
    gradient: "from-violet-400 to-purple-300",
  },
  { id: "icon-user", name: "Profile", icon: User },
  { id: "icon-home", name: "Home", icon: Home },
  { id: "icon-building", name: "Building", icon: Building },
  { id: "icon-crown", name: "Crown", icon: Crown },
];

const plans = {
  tenant: [
    {
      id: "tenant-basic",
      name: "Basic",
      price: "Free",
      description: "Perfect for individual tenants",
      features: [
        "Property search",
        "Basic communication tools",
        "Rent payment tracking",
        "Maintenance requests",
      ],
      popular: false,
    },
    {
      id: "tenant-premium",
      name: "Premium",
      price: "$9.99/month",
      description: "Enhanced features for active renters",
      features: [
        "Everything in Basic",
        "Priority support",
        "Advanced search filters",
        "Document storage",
        "Credit score monitoring",
      ],
      popular: true,
    },
  ],
  landlord: [
    {
      id: "landlord-starter",
      name: "Starter",
      price: "Free",
      description: "Perfect for getting started",
      features: [
        "Up to 2 properties",
        "Basic tenant management",
        "Rent tracking",
        "Basic communication tools",
        "Community support",
      ],
      popular: false,
    },
    {
      id: "landlord-professional",
      name: "Professional",
      price: "$19.99/month",
      description: "Great for small property owners",
      features: [
        "Up to 10 properties",
        "Advanced tenant screening",
        "Automated rent collection",
        "Basic analytics",
        "Maintenance management",
        "Priority support",
      ],
      popular: true,
    },
    {
      id: "landlord-enterprise",
      name: "Enterprise",
      price: "$49.99/month",
      description: "Perfect for growing portfolios",
      features: [
        "Unlimited properties",
        "Everything in Professional",
        "Advanced analytics",
        "API access",
        "White-label options",
        "Dedicated support",
      ],
      popular: false,
    },
    {
      id: "landlord-premium",
      name: "Premium",
      price: "$99.99/month",
      description: "For serious property managers",
      features: [
        "Everything in Enterprise",
        "Custom integrations",
        "Advanced reporting",
        "Multi-tenant dashboard",
        "24/7 phone support",
        "Training sessions",
      ],
      popular: false,
    },
  ],
};

export default function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      userType: undefined,
      fullName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      profilePicture: "gradient-1",
      phone: "",
      plan: undefined,
    },
  });

  const userType = form.watch("userType");
  const selectedPlan = form.watch("plan");
  const selectedProfilePicture = form.watch("profilePicture");

  const onSubmit = async (data: RegisterFormData) => {
    setIsLoading(true);
    try {
      // Here you would typically send the data to your backend
      console.log("Registration data:", data);
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate API call
      // Redirect to success page or dashboard
    } catch (error) {
      console.error("Registration failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const skipStep = () => {
    if (currentStep === 3) {
      // Skip user details
      form.setValue("phone", "");
      nextStep();
    }
  };

  const renderProfilePicture = (
    preset: (typeof profilePicturePresets)[0],
    size = "w-16 h-16"
  ) => {
    if (preset.gradient) {
      return (
        <div
          className={`${size} bg-gradient-to-br ${preset.gradient} rounded-2xl flex items-center justify-center shadow-lg`}
        >
          <User className="w-1/2 h-1/2 text-white" />
        </div>
      );
    } else if (preset.icon) {
      const IconComponent = preset.icon;
      return (
        <div
          className={`${size} bg-primary/10 rounded-2xl flex items-center justify-center border-2 border-primary/20`}
        >
          <IconComponent className="w-1/2 h-1/2 text-primary" />
        </div>
      );
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">
                What best describes you?
              </h2>
              <p className="text-muted-foreground">
                Choose your role to get personalized features
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div
                className={`p-8 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                  userType === "tenant"
                    ? "border-primary bg-primary/5 shadow-lg scale-105"
                    : "border-border hover:border-primary/50 hover:bg-primary/5"
                }`}
                onClick={() => form.setValue("userType", "tenant")}
              >
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-blue-100 rounded-3xl flex items-center justify-center">
                    <Home className="h-10 w-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">I'm a Tenant</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Looking for rental properties and want to manage my rental
                    experience seamlessly
                  </p>
                </div>
              </div>

              <div
                className={`p-8 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                  userType === "landlord"
                    ? "border-primary bg-primary/5 shadow-lg scale-105"
                    : "border-border hover:border-primary/50 hover:bg-primary/5"
                }`}
                onClick={() => form.setValue("userType", "landlord")}
              >
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-3xl flex items-center justify-center">
                    <Building className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">I'm a Landlord</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I own rental properties and want to efficiently manage my
                    tenants and properties
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">Create Your Account</h2>
              <p className="text-muted-foreground">
                Set up your basic account information
              </p>
            </div>

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">
                        Full Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your full name"
                          className="h-12"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">
                        Username
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Choose a unique username"
                          className="h-12"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">
                      Email Address
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        className="h-12"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">
                        Password
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Create a strong password"
                          className="h-12"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">
                        Confirm Password
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Confirm your password"
                          className="h-12"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">
                Personalize Your Profile
              </h2>
              <p className="text-muted-foreground">
                Choose your profile picture and add optional details
              </p>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <Label className="text-base font-medium">Profile Picture</Label>
                <div className="grid grid-cols-4 sm:grid-cols-6 gap-4">
                  {profilePicturePresets.map((preset) => (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => form.setValue("profilePicture", preset.id)}
                      className={`relative group transition-all duration-200 ${
                        selectedProfilePicture === preset.id
                          ? "ring-4 ring-primary ring-offset-2 scale-110"
                          : "hover:scale-105"
                      }`}
                    >
                      {renderProfilePicture(preset)}
                      <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {preset.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label className="text-base font-medium">Phone Number</Label>
                  <Badge variant="secondary" className="text-xs">
                    Optional
                  </Badge>
                </div>
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="Enter your phone number (optional)"
                          className="h-12"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Adding your phone number helps with account security and
                        important notifications.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">Choose Your Plan</h2>
              <p className="text-muted-foreground">
                Select the perfect plan for your{" "}
                {userType === "tenant" ? "rental" : "property management"} needs
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {plans[userType]?.map((plan) => (
                <div
                  key={plan.id}
                  className={`relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                    selectedPlan === plan.id
                      ? "border-primary bg-primary/5 shadow-lg scale-105"
                      : "border-border hover:border-primary/50 hover:bg-primary/5"
                  }`}
                  onClick={() => form.setValue("plan", plan.id)}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground px-3 py-1">
                        <Sparkles className="w-3 h-3 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                    <div className="text-3xl font-bold text-primary mb-2">
                      {plan.price}
                    </div>
                    <p className="text-muted-foreground">{plan.description}</p>
                  </div>

                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background decoration - matching homepage style */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/5" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" />

      <div className="relative z-10 flex flex-col justify-center py-12 sm:px-6 lg:px-8 min-h-screen">
        <div className="sm:mx-auto sm:w-full sm:max-w-2xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-primary/80 rounded-2xl mb-6">
              <span className="text-2xl font-bold text-primary-foreground">
                S
              </span>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Join SewaLah
            </h1>
            <p className="mt-3 text-lg text-muted-foreground">
              Create your account and start managing rentals smarter
            </p>
          </div>
        </div>

        <div className="sm:mx-auto sm:w-full sm:max-w-4xl">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-sm font-medium text-muted-foreground">
              Step {currentStep} of 4
            </span>
          </div>
          <div className="flex justify-center mb-5">
            <div className="flex space-x-2">
              {[1, 2, 3, 4].map((step) => (
                <div
                  key={step}
                  className={`w-8 h-2 rounded-full transition-all duration-300 ${
                    step <= currentStep
                      ? "bg-gradient-to-r from-primary to-primary/80"
                      : "bg-muted"
                  }`}
                />
              ))}
            </div>
          </div>
          <Card className="border-0 shadow-2xl">
            <CardContent className="p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  {renderStepContent()}

                  <div className="flex justify-between items-center mt-12 pt-6 border-t border-border/50">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={prevStep}
                      disabled={currentStep === 1}
                      className="gap-2"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Previous
                    </Button>

                    <div className="flex gap-3">
                      {currentStep === 3 && (
                        <Button
                          type="button"
                          variant="ghost"
                          onClick={skipStep}
                          className="gap-2 text-muted-foreground hover:text-foreground"
                        >
                          <SkipForward className="h-4 w-4" />
                          Skip this step
                        </Button>
                      )}

                      {currentStep < 4 ? (
                        <Button
                          type="button"
                          onClick={nextStep}
                          disabled={
                            (currentStep === 1 && !userType) ||
                            (currentStep === 2 &&
                              (!form.watch("fullName") ||
                                !form.watch("email") ||
                                !form.watch("password") ||
                                !form.watch("confirmPassword") ||
                                !form.watch("username")))
                          }
                          className="gap-2"
                        >
                          Next
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      ) : (
                        <Button
                          type="submit"
                          disabled={!selectedPlan || isLoading}
                          className="gap-2 px-8"
                        >
                          {isLoading ? "Creating Account..." : "Create Account"}
                          {!isLoading && <ArrowRight className="h-4 w-4" />}
                        </Button>
                      )}
                    </div>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>

          <div className="text-center text-xs text-muted-foreground mt-6">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              Sign in here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
