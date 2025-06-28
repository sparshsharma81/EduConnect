"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ArrowLeft, CreditCard, Shield, Check } from "lucide-react";
import { 
  Mail, 
  MessageCircle, 
  Loader2,
  CheckCircle
} from "lucide-react";
import { toast } from "sonner";
import Link from "next/link"; //ye basically home wale page k liye hai

export default function ContactSupportPage() {
  const [submitted, setSubmitted] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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
        category: 'General Contact',
        categoryEmail: '81arvindarora@gmail.com',
        name: form.name,
        email: form.email,
        subject: 'Contact Support Request',
        priority: 'Medium Priority',
        message: form.message,
        status: 'New'
      };

      console.log('Attempting to submit contact request:', formDataForSubmission);

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
        console.log('Contact request submitted successfully');
        
        // Reset form
        setForm({
          name: "",
          email: "",
          message: ""
        });
        
        // Show success message
        toast.success("Message sent successfully! We'll get back to you within 24 hours.");
        setSubmitted(true);
        return; // Exit early to prevent fallback from running
      } else {
        throw new Error(`HTTP ${response.status}: ${responseText}`);
      }
      
    } catch (error) {
      console.error('Error submitting contact request:', error);
      
      // Fallback: Try alternative submission method with JSON
      try {
        console.log('Trying fallback method with JSON...');
        
        const formDataForSubmission = {
          timestamp: new Date().toISOString(),
          category: 'General Contact',
          categoryEmail: '81arvindarora@gmail.com',
          name: form.name,
          email: form.email,
          subject: 'Contact Support Request',
          priority: 'Medium Priority',
          message: form.message,
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
          setForm({
            name: "",
            email: "",
            message: ""
          });
          
          toast.success("Message sent successfully! We'll get back to you within 24 hours.");
          setSubmitted(true);
        } else {
          throw new Error(`Fallback failed with status ${response.status}`);
        }
        
      } catch (fallbackError) {
        console.error('Fallback submission also failed:', fallbackError);
        
        // Show detailed error message
        toast.error(
          `Failed to send message. Please try again or contact us directly at 81arvindarora@gmail.com. Error: ${fallbackError.message}`
        );
        
        // Log the data that was attempted to be sent for debugging
        console.log('Data that failed to submit:', {
          timestamp: new Date().toISOString(),
          category: 'General Contact',
          categoryEmail: '81arvindarora@gmail.com',
          name: form.name,
          email: form.email,
          subject: 'Contact Support Request',
          priority: 'Medium Priority',
          message: form.message,
          status: 'New'
        });
      }
    } finally {
      setIsSubmitting(false);
      setShowConfirmationModal(false);
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
      <div className="max-w-xl mx-auto">
        <Card className="border-white">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold gradient-title">
              Contact Support
            </CardTitle>
            <p className="font-bold bg-gradient-to-r from-amber-300 via-purple-300 to-green-400 bg-clip-text text-transparent font-medium mt-2">
              Have a question or need help? Fill out the form below and our team will get back to you soon.
            </p>
          </CardHeader>
          <CardContent>
            {submitted ? (
              <div className="text-center py-8">
                <div className="flex items-center justify-center mb-4">
                  <CheckCircle className="h-12 w-12 text-green-400" />
                </div>
                <p className="text-green-400 text-lg font-semibold mb-2">Thank you for reaching out!</p>
                <p className="text-sm bg-gradient-to-r from-purple-400 via-amber-300 to-sky-500 bg-clip-text text-transparent">We have received your message and will respond as soon as possible.</p>
                <Button 
                  onClick={() => setSubmitted(false)}
                  variant="outline"
                  className="mt-4 bg-gradient-to-r from-pink-600 to-blue-700 hover:from-blue-500 hover:to-pink-600 text-white"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1 font-medium font-bold bg-gradient-to-b from-amber-600 via-green-400 to-sky-500 bg-clip-text text-transparent">Name</label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="bg-background border-white-900/20"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1 font-medium font-bold bg-gradient-to-b from-amber-600 via-green-400 to-sky-500 bg-clip-text text-transparent">Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="bg-background border-white-900/20"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1 font-medium font-bold bg-gradient-to-b from-amber-600 via-green-400 to-sky-500 bg-clip-text text-transparent">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    placeholder="How can we help you?"
                    rows={5}
                    className="bg-background border-white-900/20"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-pink-600 to-blue-700 hover:from-blue-500 hover:to-pink-600 text-white"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Confirmation Modal */}
      <Dialog open={showConfirmationModal} onOpenChange={setShowConfirmationModal}>
        <DialogContent className="max-w-md border-white">
          <DialogHeader>
            <div className="flex items-center gap-3 ">
              <div className="p-2 bg-blue-700/20 rounded-full">
                <MessageCircle className="h-6 w-6 text-blue-400" />
              </div>
              <DialogTitle className="text-xl font-bold text-white">
                <div className="font-bold bg-gradient-to-b from-pink-600 via-purple-500 to-green-500 bg-clip-text text-transparent">
                  Confirm Message
                  </div>
              </DialogTitle>
            </div>
            <DialogDescription className="text-white">
              Please review your message before sending.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="font-bold bg-gradient-to-b from-amber-600 via-green-400 to-sky-500 bg-clip-text text-transparent">Name:</span>
                <span className="font-bold bg-gradient-to-r from-purple-300 via-sky-300 to-green-400 bg-clip-text text-transparent font-medium">{form.name}</span>
              </div>
              <div className="flex justify-between">
                <span className=" font-bold bg-gradient-to-b from-amber-600 via-green-400 to-sky-500 bg-clip-text text-transparent">Email:</span>
                <span className="font-bold bg-gradient-to-r from-purple-300 via-sky-300 to-green-400 bg-clip-text text-transparent font-medium">{form.email}</span>
              </div>
            </div>

            <div className="p-3 bg-muted/20 rounded-lg border border-blue-900/50">
              <h4 className="font-bold bg-gradient-to-b from-purple-600 via-sky-300 to-green-800 bg-clip-text text-transparent font-semibold mb-2">Message Preview:</h4>
              <p className="text-sm line-clamp-3 text-amber-300">
                {form.message}
              </p>
            </div>

            <div className="p-3 bg-blue-900/10 rounded-lg border border-blue-400/50">
              <p className="text-sm bg-gradient-to-r from-purple-500 via-amber-300 to-sky-700 bg-clip-text text-transparent">
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
                  Sending...
                </>
              ) : (
                <>
                  <Mail className="mr-2 h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
} 
