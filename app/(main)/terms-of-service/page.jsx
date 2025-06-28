"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Scale, Shield, Users, CreditCard, AlertTriangle } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-12">
           <div className="flex justify-start mb-2">
        <Link
          href="/"
          className="flex items-center text-muted-foreground hover:text-white transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-900/30 to-purple-900/30 px-4 py-2 rounded-full border border-indigo-700/30 backdrop-blur-sm mb-4">
            <FileText className="h-4 w-4 text-indigo-400" />
            <span className="text-indigo-400 text-sm font-medium">Legal Terms</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold gradient-title mb-4">
            Terms of Service
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Please read these terms carefully before using our platform. By using EduConnect, you agree to these terms.
          </p>
          <div className="flex items-center justify-center space-x-4 mt-6">
            <Badge variant="outline" className="bg-emerald-900/20 border-emerald-700/30 text-emerald-400">
              Last Updated: {new Date().toLocaleDateString()}
            </Badge>
            <Badge variant="outline" className="bg-blue-900/20 border-blue-700/30 text-blue-400">
              Version 1.0
            </Badge>
          </div>
        </div>

        <div className="space-y-8">
          {/* Acceptance of Terms */}
          <Card className="border-white">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-indigo-900/30 rounded-full">
                  <Scale className="h-5 w-5 text-indigo-400" />
                </div>
                <CardTitle className="text-2xl font-bold font-bold bg-gradient-to-b from-amber-600 via-green-400 to-sky-500 bg-clip-text text-transparent">
                  Acceptance of Terms
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-white">
                By accessing and using EduConnect ("the Platform"), you accept and agree to be bound by the terms and provision of this agreement. 
                If you do not agree to abide by the above, please do not use this service.
              </p>
              <div className="p-4 bg-muted/20 rounded-lg border border-sky-500/30">
                <p className="text-white font-medium mb-2">Important Notice:</p>
                <p className="text-muted-foreground text-sm">
                  These terms constitute a legally binding agreement between you and EduConnect. 
                  Continued use of the platform indicates your acceptance of any modifications to these terms.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Platform Description */}
          <Card className="border-white">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-900/30 rounded-full">
                  <Users className="h-5 w-5 text-purple-400" />
                </div>
                <CardTitle className="text-2xl font-bold font-bold bg-gradient-to-l from-amber-600 via-green-400 to-purple-500 bg-clip-text text-transparent">
                  Platform Description
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-pink-300">What We Provide</h3>
                <ul className="space-y-2 text-white">
                  <li>• Online mentorship platform connecting students with expert mentors</li>
                  <li>• Video consultation services for educational support</li>
                  <li>• Appointment scheduling and management system</li>
                  <li>• Payment processing and credit management</li>
                  <li>• Educational resources and learning materials</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-pink-300">Service Limitations</h3>
                <ul className="space-y-2 text-white">
                  <li>• Platform availability may vary based on maintenance schedules</li>
                  <li>• Video quality depends on user's internet connection</li>
                  <li>• Mentor availability is subject to their individual schedules</li>
                  <li>• Services are provided "as is" without warranties</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* User Responsibilities */}
          <Card className="border-white">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-900/30 rounded-full">
                  <Shield className="h-5 w-5 text-green-400" />
                </div>
                <CardTitle className="text-2xl font-bold font-bold bg-gradient-to-r from-amber-300 via-sky-300 to-green-400 bg-clip-text text-transparent">
                  User Responsibilities
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-pink-300">General Users</h3>
                  <ul className="space-y-2 text-white">
                    <li>• Provide accurate and truthful information</li>
                    <li>• Maintain the security of your account</li>
                    <li>• Respect mentor time and expertise</li>
                    <li>• Follow platform guidelines and policies</li>
                    <li>• Report inappropriate behavior or content</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-pink-300">Mentors</h3>
                  <ul className="space-y-2 text-white">
                    <li>• Maintain professional standards and conduct</li>
                    <li>• Provide accurate credentials and experience</li>
                    <li>• Honor scheduled appointments and commitments</li>
                    <li>• Maintain confidentiality of student information</li>
                    <li>• Provide quality educational guidance</li>
                  </ul>
                </div>
              </div>
              <div className="p-4 bg-red-900/10 rounded-lg border border-red-900/20">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-400 mt-0.5" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Prohibited Activities</h4>
                    <ul className="text-muted-foreground text-sm space-y-1">
                      <li>• Sharing inappropriate or harmful content</li>
                      <li>• Harassment, discrimination, or abusive behavior</li>
                      <li>• Attempting to circumvent payment systems</li>
                      <li>• Impersonating others or providing false information</li>
                      <li>• Using the platform for non-educational purposes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment and Billing */}
          <Card className="border-white">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-900/30 rounded-full">
                  <CreditCard className="h-5 w-5 text-blue-400" />
                </div>
                <CardTitle className="text-2xl font-bold text-sky-300">
                  Payment and Billing
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-pink-300">Credit System</h3>
                  <ul className="space-y-2 text-white">
                    <li>• Credits are purchased in advance</li>
                    <li>• Each appointment costs 2 credits</li>
                    <li>• Credits are non-refundable after use</li>
                    <li>• Unused credits expire after 12 months</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-pink-300">Payment Terms</h3>
                  <ul className="space-y-2 text-white">
                    <li>• All payments are processed securely</li>
                    <li>• Prices are subject to change with notice</li>
                    <li>• Refunds are handled case-by-case</li>
                    <li>• Taxes may apply based on location</li>
                  </ul>
                </div>
              </div>
              <div className="p-4 bg-blue-900/10 rounded-lg border border-blue-900/30">
                <h4 className="text-white font-semibold mb-2">Cancellation Policy</h4>
                <p className="text-muted-foreground text-sm">
                  Appointments can be cancelled up to 24 hours before the scheduled time for a full credit refund. 
                  Late cancellations or no-shows will result in credit forfeiture.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card className="border-white">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-sky-700/50 rounded-full">
                  <FileText className="h-5 w-5 text-yellow-400" />
                </div>
                <CardTitle className="text-2xl font-bold text-amber-300">
                  Intellectual Property
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-pink-300">Platform Content</h3>
                <p className="text-white">
                  All content on the EduConnect platform, including but not limited to text, graphics, logos, 
                  and software, is the property of EduConnect and is protected by copyright laws.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-pink-300">User Content</h3>
                <p className="text-white">
                  Users retain ownership of content they create, but grant EduConnect a license to use, 
                  display, and distribute such content for platform operation and improvement.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-pink-300">Prohibited Use</h3>
                <ul className="space-y-2 text-white">
                  <li>• Copying or reproducing platform content without permission</li>
                  <li>• Reverse engineering or attempting to access source code</li>
                  <li>• Using platform content for commercial purposes</li>
                  <li>• Removing or altering copyright notices</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Privacy and Data */}
          <Card className="border-white">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-900/30 rounded-full">
                  <Shield className="h-5 w-5 text-green-400" />
                </div>
                <CardTitle className="text-2xl font-bold text-green-300">
                  Privacy and Data Protection
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-white">
                Your privacy is important to us. Our collection and use of personal information is governed by our 
                Privacy Policy, which is incorporated into these Terms of Service by reference.
              </p>
              <div className="p-4 bg-green-900/10 rounded-lg border border-green-900/20">
                <h4 className="text-white font-semibold mb-2">Data Protection Commitment</h4>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li>• We implement appropriate security measures to protect your data</li>
                  <li>• We do not sell your personal information to third parties</li>
                  <li>• We comply with applicable data protection laws</li>
                  <li>• You have rights regarding your personal data</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card className="border-white">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-900/30 rounded-full">
                  <AlertTriangle className="h-5 w-5 text-red-400" />
                </div>
                <CardTitle className="text-2xl font-bold text-red-400">
                  Limitation of Liability
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-amber-300">Service Disclaimer</h3>
                <p className="text-white">
                  EduConnect provides educational services but does not guarantee specific learning outcomes. 
                  The quality of mentorship depends on individual mentors and student engagement.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-amber-300">Liability Limits</h3>
                <ul className="space-y-2 text-white">
                  <li>• EduConnect is not liable for indirect, incidental, or consequential damages</li>
                  <li>• Our total liability is limited to the amount paid for services</li>
                  <li>• We are not responsible for mentor-student disputes</li>
                  <li>• Platform downtime or technical issues are not grounds for refunds</li>
                </ul>
              </div>
              <div className="p-4 bg-red-900/10 rounded-lg border border-red-900/20">
                <p className="text-red-500 text-sm">
                  <strong>Important:</strong> These limitations do not apply to damages caused by our gross negligence 
                  or willful misconduct, or where prohibited by law.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card className="border-white">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-red-300">
                Account Termination
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-pink-300">User Termination</h3>
                  <ul className="space-y-2 text-white">
                    <li>• You may terminate your account at any time</li>
                    <li>• Unused credits may be refunded upon request</li>
                    <li>• Account data will be deleted within 30 days</li>
                    <li>• Some data may be retained for legal compliance</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-pink-300">Platform Termination</h3>
                  <ul className="space-y-2 text-white">
                    <li>• We may terminate accounts for policy violations</li>
                    <li>• Immediate termination for serious violations</li>
                    <li>• Notice provided for non-serious violations</li>
                    <li>• Right to appeal termination decisions</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="border-white">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-emerald-400">
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-pink-300 mb-2">Legal Inquiries</h3>
                  <p className="text-white">
                    Email: legal@educonnect.com<br />
                    Phone: +1 (555) 123-4567<br />
                    Address: 123 Education St, Learning City, LC 12345
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-pink-300 mb-2">General Support</h3>
                  <p className="text-white">
                    Email: support@educonnect.com<br />
                    Response time: Within 24 hours<br />
                    Business hours: Mon-Fri 9AM-6PM EST
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
