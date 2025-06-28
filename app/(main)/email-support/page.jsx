"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { 
  Mail, 
  MessageCircle, 
  Clock, 
  Phone, 
  MapPin, 
  FileText, 
  Users, 
  CreditCard,
  Video,
  Calendar,
  AlertCircle,
  CheckCircle,
  ArrowLeft,
  Loader2
} from "lucide-react";
// import { ArrowLeft, CreditCard, Shield, Check } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link"; //ye basically home wale page k liye hai


export default function EmailSupportPage() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    priority: "medium"
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmationModal(true);
  };

  const handleConfirmSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      // Prepare data for Google Apps Script
      const formDataForSubmission = {
        timestamp: new Date().toISOString(),
        category: selectedCategoryData?.title || 'General',
        categoryEmail: selectedCategoryData?.email || '81arvindarora@gmail.com',
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        priority: getPriorityLabel(formData.priority),
        message: formData.message,
        status: 'New'
      };

      console.log('Attempting to submit support request:', formDataForSubmission);

      // Method 1: Try with FormData (Google Apps Script typically prefers this)
      const formDataAlt = new FormData();
      Object.keys(formDataForSubmission).forEach(key => {
        formDataAlt.append(key, formDataForSubmission[key]);
      });

      console.log('Submitting with FormData...');
      
      const response = await fetch('https://script.google.com/macros/s/AKfycbwcwcFex-gcEBE3wcZTmDsSJD_WHdIRVPn716-Jh8GsJXHQ2_TQ7QPY1wuBJFvfgFnlPg/exec', {
        method: 'POST',
        body: formDataAlt
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);

      // Try to read response if possible
      let responseText = '';
      try {
        responseText = await response.text();
        console.log('Response text:', responseText);
      } catch (e) {
        console.log('Could not read response text:', e);
      }

      // Check if the response indicates success
      if (response.status === 200 || response.status === 0) {
        console.log('Support request submitted successfully');
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          priority: "medium"
        });
        setSelectedCategory("");
        
        // Show success message
        toast.success("Support request submitted successfully! We'll get back to you within 24 hours.");
        return; // Exit early to prevent fallback from running 
        ///basically this return will prevent sending email twice
      } else {
        throw new Error(`HTTP ${response.status}: ${responseText}`);
      }
      
    } catch (error) {
      console.error('Error submitting support request:', error);
      
      // Fallback: Try alternative submission method with JSON
      try {
        console.log('Trying fallback method with JSON...');
        
        const formDataForSubmission = {
          timestamp: new Date().toISOString(),
          category: selectedCategoryData?.title || 'General',
          categoryEmail: selectedCategoryData?.email || '81arvindarora@gmail.com',
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          priority: getPriorityLabel(formData.priority),
          message: formData.message,
          status: 'New'
        };

        const response = await fetch('https://script.google.com/macros/s/AKfycbwcwcFex-gcEBE3wcZTmDsSJD_WHdIRVPn716-Jh8GsJXHQ2_TQ7QPY1wuBJFvfgFnlPg/exec', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formDataForSubmission)
        });

        console.log('Fallback response status:', response.status);

        if (response.status === 200 || response.status === 0) {
          console.log('Fallback submission successful');
          
          // Reset form
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
            priority: "medium"
          });
          setSelectedCategory("");
          
          toast.success("Support request submitted successfully! We'll get back to you within 24 hours.");
        } else {
          throw new Error(`Fallback failed with status ${response.status}`);
        }
        
      } catch (fallbackError) {
        console.error('Fallback submission also failed:', fallbackError);
        
        // Show detailed error message
        toast.error(
          `Failed to submit support request. Please try again or contact us directly at 81arvindarora@gmail.com. Error: ${fallbackError.message}`
        );
        
        // Log the data that was attempted to be sent for debugging
        console.log('Data that failed to submit:', {
          timestamp: new Date().toISOString(),
          category: selectedCategoryData?.title || 'General',
          categoryEmail: selectedCategoryData?.email || '81arvindarora@gmail.com',
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          priority: getPriorityLabel(formData.priority),
          message: formData.message,
          status: 'New'
        });
      }
    } finally {
      setIsSubmitting(false);
      setShowConfirmationModal(false);
    }
  };

  const supportCategories = [
    {
      id: "technical",
      title: "Technical Issues",
      description: "Platform bugs, login problems, video call issues",
      icon: <Video className="h-5 w-5" />,
      email: "tech@educonnect.com"
    },
    {
      id: "billing",
      title: "Billing & Payments",
      description: "Credit purchases, refunds, payment issues",
      icon: <CreditCard className="h-5 w-5" />,
      email: "billing@educonnect.com"
    },
    {
      id: "appointments",
      title: "Appointments",
      description: "Booking issues, cancellations, scheduling",
      icon: <Calendar className="h-5 w-5" />,
      email: "appointments@educonnect.com"
    },
    {
      id: "account",
      title: "Account Issues",
      description: "Profile updates, verification, account access",
      icon: <Users className="h-5 w-5" />,
      email: "accounts@educonnect.com"
    },
    {
      id: "general",
      title: "General Support",
      description: "General questions, feedback, suggestions",
      icon: <MessageCircle className="h-5 w-5" />,
      email: "support@educonnect.com"
    }
  ];

  const selectedCategoryData = supportCategories.find(cat => cat.id === selectedCategory);

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'low': return 'text-green-400';
      case 'medium': return 'text-yellow-400';
      case 'high': return 'text-orange-400';
      case 'critical': return 'text-red-400';
      default: return 'text-yellow-400';
    }
  };

  const getPriorityLabel = (priority) => {
    switch (priority) {
      case 'low': return 'Low Priority';
      case 'medium': return 'Medium Priority';
      case 'high': return 'High Priority';
      case 'critical': return 'Critical Priority';
      default: return 'Medium Priority';
    }
  };

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
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-900/30 to-purple-900/30 px-4 py-2 rounded-full border border-indigo-700/30 backdrop-blur-sm mb-4">
            <Mail className="h-4 w-4 text-indigo-400" />
            <span className="bg-gradient-to-r from-sky-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-sm font-medium">Email Support</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-title">
            Get Email Support
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Need help? Our support team is here to assist you. Choose a category and send us a detailed message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Support Categories */}
          <div className="lg:col-span-1">
            <Card className="border-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold bg-gradient-to-r from-purple-500 via-sky-400 to-amber-200 bg-clip-text text-transparent flex items-center gap-2">
                  <FileText className="h-5 w-5 text-blue-400" />
                  Support Categories
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {supportCategories.map((category) => (
                  <div
                    key={category.id}
                    className={`p-4 rounded-lg border cursor-pointer transition-all ${
                      selectedCategory === category.id
                        ? "border-white bg-white-300/20"
                        : "border-amber-300/50 border-opacity-20 hover:border-pink-700 hover:bg-muted/40"

                    }`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-pink-800 rounded-full">
                        {category.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold bg-gradient-to-r from-sky-400 via-green-500 to-pink-500 bg-clip-text text-transparent">
                          {category.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {category.description}
                        </p>
                        <p className="text-xs text-sky-600">
                          {category.email}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Support Information */}
            <Card className="border-white mt-6">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-pink-200 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-400" />
                  Support Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-amber-300">Monday - Friday</span>
                    <span className="text-green-300 font-medium">9:00 AM - 6:00 PM IST</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-amber-300">Saturday</span>
                    <span className="text-green-300 font-medium">10:00 AM - 4:00 PM IST</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-amber-300">Sunday</span>
                    <span className="bg-gradient-to-r from-red-400 via-orange-400 to-pink-500 bg-clip-text text-transparent font-medium">Closed</span>
                  </div>
                </div>
                <div className="p-3 bg-blue-400/10 rounded-lg border border-blue-900/20">
                  <p className="text-sm text-muted-foreground">
                    <strong>Response Time:</strong> We typically respond within 24 hours during business days.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold font-bold bg-gradient-to-r from-sky-300 via-green-400 to-purple-500 bg-clip-text text-transparent flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-pink-400" />
                  Send Support Request
                </CardTitle>
                {selectedCategoryData && (
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="bg-pink-900/20 border-red-400/30 text-pink-400">
                      {selectedCategoryData.title}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      Email: {selectedCategoryData.email}
                    </span>
                  </div>
                )}
              </CardHeader>
              <CardContent>
                {!selectedCategory ? (
                  <div className="text-center py-12">
                    <AlertCircle className="h-12 w-12 text-red-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold bg-gradient-to-r from-red-500 via-pink-300 to-red-500 bg-clip-text text-transparent mb-2">
                      Select a Support Category
                    </h3>
                    <p className="text-white">
                      Please choose a category from the left to get started with your support request.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-white">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                          className="bg-background border-white-700/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-white">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your.email@example.com"
                          className="bg-background border-white-700/20"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-white">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="Brief description of your issue"
                        className="bg-background border-white-700/20"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="priority" className="text-sm font-medium text-white">
                        Priority Level
                      </label>
                      <select
                        id="priority"
                        name="priority"
                        value={formData.priority}
                        onChange={handleChange}
                        className="w-full p-3 bg-background border border-pink-900/20 rounded-md "
                      >
                        <option value="low" className="text-green-300">🟢 Low - General inquiry</option>
                        <option value="medium" className="text-yellow-300">🟡 Medium - Standard issue</option>
                        <option value="high" className="text-red-300">🔴 High - Urgent issue</option>
                        <option value="critical" className="text-red-600">🚨 Critical - Platform down</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium font-bold bg-gradient-to-r from-amber-300 via-green-400 to-yellow-500 bg-clip-text text-transparent">
                        Detailed Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Please provide detailed information about your issue, including any error messages, steps to reproduce, and what you were trying to do when the problem occurred."
                        rows={8}
                        className="bg-background border-white-900/20"
                      />
                    </div>

                    <div className="p-4 bg-muted/20 rounded-lg border border-white-900/20">
                      <h4 className="font-bold bg-gradient-to-r from-green-600 via-green-300 to-green-900 bg-clip-text text-transparent font-semibold mb-2 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        Tips for Faster Resolution
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Include your user ID or account email</li>
                        <li>• Describe the exact steps that led to the issue</li>
                        <li>• Mention your browser and device information</li>
                        <li>• Attach screenshots if applicable</li>
                        <li>• Provide any error messages you received</li>
                      </ul>
                    </div>

                    <div className="flex justify-end">
                      <Button
                      
                        type="submit"
                        className="bg-gradient-to-r from-pink-600 to-blue-700 hover:from-blue-500 hover:to-pink-600 text-white"
                      >
                        <Mail className="h-4 w-4 mr-2" />
                        Send Support Request
                      </Button>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Additional Contact Methods */}
            <Card className="border-white mt-6">
              <CardHeader>
                <CardTitle className="text-xl font-bold bg-gradient-to-r from-amber-200 via-orange-700 to-pink-300 bg-clip-text text-transparent">
                  Other Contact Methods
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-muted/20 rounded-lg border border-pink-300/20">
                    <Phone className="h-8 w-8 text-pink-400 mx-auto mb-3" />
                    <h3 className="font-semibold bg-gradient-to-r from-red-400 via-pink-400 to-pink-700 bg-clip-text text-transparent mb-1">Phone Support</h3>
                    <p className="text-sm text-white mb-2">
                      +1 (555) 123-4567
                    </p>
                    <p className="text-xs text-white">
                      Mon-Fri 9AM-6PM IST
                    </p>
                  </div>
                  <div className="text-center p-4 bg-muted/20 rounded-lg border border-blue-400/20">
                    <Mail className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                    <h3 className="font-semibold bg-gradient-to-r from-purple-600 via-sky-400 to-purple-400 bg-clip-text text-transparent mb-1">General Email</h3>
                    <p className="text-sm text-white mb-2">
                      support@educonnect.com
                    </p>
                    <p className="text-xs text-white">
                      24-hour response time
                    </p>
                  </div>
                  <div className="text-center p-4 bg-muted/20 rounded-lg border border-green-500/20">
                    <MapPin className="h-8 w-8 text-green-400 mx-auto mb-3" />
                    <h3 className="font-semibold bg-gradient-to-r from-green-700 via-green-300 to-amber-100 bg-clip-text text-transparent mb-1">Office Address</h3>
                    <p className="text-sm text-white mb-2">
                      123 Education St
                    </p>
                    <p className="text-xs text-white">
                      Learning City, LC 12345
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      <Dialog open={showConfirmationModal} onOpenChange={setShowConfirmationModal}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-900/20 rounded-full">
                <Mail className="h-6 w-6 text-blue-400" />
              </div>
              <DialogTitle className="text-xl font-bold text-white">
                Confirm Support Request
              </DialogTitle>
            </div>
            <DialogDescription className="text-muted-foreground">
              Please review your support request details before submitting.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Category:</span>
                <span className="text-white font-medium">{selectedCategoryData?.title}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Name:</span>
                <span className="text-white font-medium">{formData.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Email:</span>
                <span className="text-white font-medium">{formData.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subject:</span>
                <span className="text-white font-medium">{formData.subject}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Priority:</span>
                <span className={`font-medium ${getPriorityColor(formData.priority)}`}>
                  {getPriorityLabel(formData.priority)}
                </span>
              </div>
            </div>

            <div className="p-3 bg-muted/20 rounded-lg border border-blue-900/20">
              <h4 className="text-white font-semibold mb-2">Message Preview:</h4>
              <p className="text-sm text-muted-foreground line-clamp-3">
                {formData.message}
              </p>
            </div>

            <div className="p-3 bg-blue-900/10 rounded-lg border border-blue-900/20">
              <p className="text-sm text-muted-foreground">
                <strong>Response Time:</strong> We'll respond within 24 hours during business days.
              </p>
            </div>
          </div>

          <DialogFooter className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => setShowConfirmationModal(false)}
              disabled={isSubmitting}
              className="border-gray-600 hover:bg-gray-800"
            >
              Cancel
            </Button>
            <Button
              onClick={handleConfirmSubmit}
              disabled={isSubmitting}
              className="bg-gradient-to-r from-pink-600 to-blue-700 hover:from-blue-500 hover:to-pink-600 text-white"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Mail className="mr-2 h-4 w-4" />
                  Submit Request
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
