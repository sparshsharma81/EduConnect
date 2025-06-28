"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Eye, Lock, Users, Database, Globe,ArrowLeft } from "lucide-react";
import Link from "next/link"; //ye basically home wale page k liye hai


export default function PrivacyPolicyPage() {
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
            <Shield className="h-4 w-4 text-indigo-400" />
            <span className="text-indigo-400 text-sm font-medium">Privacy & Security</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-title">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
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
          {/* Information We Collect */}
          <Card className="border-white">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-indigo-900/30 rounded-full">
                  <Database className="h-5 w-5 text-indigo-400" />
                </div>
                <CardTitle className="text-2xl font-bold text-sky-400">
                  Information We Collect
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-pink-400">Personal Information</h3>
                  <ul className="space-y-2 text-white">
                    <li>• Name and contact information</li>
                    <li>• Email address and phone number</li>
                    <li>• Profile information and preferences</li>
                    <li>• Payment and billing information</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-pink-400">Professional Information</h3>
                  <ul className="space-y-2 text-white">
                    <li>• Educational credentials and certifications</li>
                    <li>• Professional experience and specialties</li>
                    <li>• Service descriptions and availability</li>
                    <li>• Credential verification documents</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-pink-400">Usage Information</h3>
                <ul className="space-y-2 text-white">
                  {/* here from the text-muted-foreground...we have maken it to white */}
                  <li>• Appointment booking and scheduling data</li>
                  <li>• Video call session recordings (with consent)</li>
                  <li>• Communication logs and support tickets</li>
                  <li>• Platform usage analytics and preferences</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Information */}
          <Card className="border-white">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-900/30 rounded-full">
                  <Eye className="h-5 w-5 text-purple-400" />
                </div>
                <CardTitle className="text-2xl font-bold text-sky-400">
                  How We Use Your Information
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-pink-400">Service Provision</h3>
                  <ul className="space-y-2 text-white">
                    <li>• Facilitate mentor-student connections</li>
                    <li>• Process appointments and payments</li>
                    <li>• Provide video consultation services</li>
                    <li>• Manage user accounts and preferences</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-pink-400">Platform Improvement</h3>
                  <ul className="space-y-2 text-white">
                    <li>• Analyze usage patterns and trends</li>
                    <li>• Improve service quality and features</li>
                    <li>• Develop new educational tools</li>
                    <li>• Enhance user experience</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-pink-400">Communication</h3>
                <ul className="space-y-2 text-white">
                  <li>• Send appointment reminders and updates</li>
                  <li>• Provide customer support and assistance</li>
                  <li>• Share important platform announcements</li>
                  <li>• Send educational content and resources</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Information Sharing */}
          <Card className="border-white">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-900/30 rounded-full">
                  <Users className="h-5 w-5 text-green-400" />
                </div>
                <CardTitle className="text-2xl font-bold text-sky-300">
                  Information Sharing and Disclosure
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="p-4 bg-muted/20 rounded-lg border border-blue-900">
                  <h3 className="text-lg font-semibold text-white mb-2">We Do Not Sell Your Data</h3>
                  <p className="text-muted-foreground">
                    EduConnect does not sell, trade, or rent your personal information to third parties for marketing purposes.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-pink-300">Limited Sharing</h3>
                  <ul className="space-y-2 text-white">
                    <li>• <strong>Service Providers:</strong> Trusted partners who help us operate our platform</li>
                    <li>• <strong>Legal Requirements:</strong> When required by law or to protect rights</li>
                    <li>• <strong>Safety:</strong> To prevent fraud, abuse, or security threats</li>
                    <li>• <strong>Consent:</strong> With your explicit permission for specific purposes</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Security */}
          <Card className="border-white">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-900/70 rounded-full">
                  <Lock className="h-5 w-5 text-red-400" />
                </div>
                <CardTitle className="text-2xl font-bold text-sky-300">
                  Data Security and Protection
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-pink-300">Security Measures</h3>
                  <ul className="space-y-2 text-white">
                    <li>• End-to-end encryption for communications</li>
                    <li>• Secure data centers and infrastructure</li>
                    <li>• Regular security audits and updates</li>
                    <li>• Access controls and authentication</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-pink-300">Data Retention</h3>
                  <ul className="space-y-2 text-white">
                    <li>• Account data: Until account deletion</li>
                    <li>• Appointment records: 7 years for legal compliance</li>
                    <li>• Communication logs: 2 years</li>
                    <li>• Analytics data: 3 years (anonymized)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card className="border-white">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-900/30 rounded-full">
                  <Globe className="h-5 w-5 text-blue-400" />
                </div>
                <CardTitle className="text-2xl font-bold text-sky-300">
                  Your Privacy Rights
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-pink-300">Access and Control</h3>
                  <ul className="space-y-2 text-white">
                    <li>• View and update your personal information</li>
                    <li>• Download your data in portable format</li>
                    <li>• Delete your account and associated data</li>
                    <li>• Opt-out of marketing communications</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-pink-300">Additional Rights</h3>
                  <ul className="space-y-2 text-white">
                    <li>• Request data correction or updates</li>
                    <li>• Restrict processing of your data</li>
                    <li>• Object to certain data processing</li>
                    <li>• Lodge complaints with authorities</li>
                  </ul>
                </div>
              </div>
              <div className="p-4 bg-blue-900/10 rounded-lg border border-blue-900">
                <p className="text-muted-foreground">
                  <strong>Contact Us:</strong> To exercise your privacy rights, contact us at{" "}
                  <a href="mailto:privacy@educonnect.com" className="text-blue-400 hover:text-blue-300">
                    privacy@educonnect.com
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="border-white">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-sky-300">
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-pink-300 mb-2">Privacy Officer</h3>
                  <p className="text-white">
                    Email: privacy@educonnect.com<br />
                    Phone: +1 (555) 123-4567<br />
                    Address: 123 Education St, Learning City, LC 12345
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-pink-300 mb-2">Data Protection</h3>
                  <p className="text-white">
                    For data protection inquiries:<br />
                    Email: dataprotection@educonnect.com<br />
                    Response time: Within 30 days
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
