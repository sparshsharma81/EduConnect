import { redirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CreditCard, Shield, Check } from "lucide-react";
import { PricingTable } from "@clerk/nextjs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Pricing from "@/components/pricing";

export default async function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="flex justify-start mb-2">
        <Link
          href="/"
          className="flex items-center text-muted-foreground hover:text-white transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>
      </div>

      <div className="max-w-full mx-auto mb-12 text-center">
        <Badge
          variant="outline"
          className="bg-blue-900/30 border-sky-700/30 px-4 py-1 text-blue-400 text-sm font-medium mb-4"
        >
          Affordable Education
        </Badge>

        <h1 className="text-4xl md:text-5xl font-bold gradient-title mb-4">
          Simple, Transparent Pricing
        </h1>

        <p className="text-lg font-bold bg-gradient-to-l from-amber-300 via-sky-300 to-green-400 bg-clip-text text-transparent max-w-2xl mx-auto">
          Choose the perfect consultation package that fits your education
          needs with no hidden fees or long-term commitments
        </p>
      </div>

      {/* Pricing Table Section */}
      <Pricing />

      {/* FAQ Section - Optional */}
      <div className="max-w-3xl mx-auto mt-16 text-center">
        <h2 className="text-2xl font-bold bg-gradient-to-l from-green-300 via-black-300 to-amber-400 bg-clip-text text-transparent mb-2">
          Questions? We&apos;re Here to Help
        </h2>
        <p className="font-bold bg-gradient-to-b from-purple-300 via-pink-300 to-green-400 bg-clip-text text-transparent mb-4">
          Contact our support team at support@educonnect.com
        </p>
      </div>
    </div>
  );
}
