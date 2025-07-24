"use client";

import Link from "next/link";
import { useState } from "react";
import { Home, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { DarkModeToggle } from "@/components/darkmode-toggle";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="border-b border-border/50 fixed w-full z-50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
            <Home className="h-6 w-6 text-primary-foreground" />
          </div>
          <Text as="h2" className="font-bold text-primary text-xl">
            SewaLah
          </Text>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navigationItems.map((item) => (
            <Button
              key={item.href}
              variant="ghost"
              asChild
              className="text-base font-medium hover:bg-primary/10 transition-colors"
            >
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
          <DarkModeToggle />
          <Button
            asChild
            className="px-6 py-2 font-semibold shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
          >
            <Link href="/login">Sign In</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-3">
          <DarkModeToggle />
          <Drawer open={isOpen} onOpenChange={setIsOpen}>
            <DrawerTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary/10"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </DrawerTrigger>
            <DrawerContent className="bg-background/95 backdrop-blur-md border-border/50">
              <DrawerHeader>
                <DrawerTitle className="text-xl font-semibold">
                  Navigation
                </DrawerTitle>
              </DrawerHeader>
              <div className="p-6 space-y-3">
                {navigationItems.map((item) => (
                  <DrawerClose key={item.href} asChild>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-left text-base py-3 hover:bg-primary/10"
                      asChild
                    >
                      <Link href={item.href}>{item.label}</Link>
                    </Button>
                  </DrawerClose>
                ))}
                <div className="pt-4 border-t border-border/50">
                  <DrawerClose asChild>
                    <Button
                      className="w-full py-3 font-semibold shadow-md"
                      asChild
                    >
                      <Link href="/login">Sign In</Link>
                    </Button>
                  </DrawerClose>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
}
