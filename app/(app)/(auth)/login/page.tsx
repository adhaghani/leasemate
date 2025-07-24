import React from "react";
import { EnhancedLoginForm } from "@/components/enhanced-login-form";

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <EnhancedLoginForm />
      </div>
    </div>
  );
};

export default page;
