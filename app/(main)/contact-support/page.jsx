"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSupportPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-xl mx-auto">
        <Card className="border-pink-900/20">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-white">
              Contact Support
            </CardTitle>
            <p className="text-muted-foreground mt-2">
              Have a question or need help? Fill out the form below and our team will get back to you soon.
            </p>
          </CardHeader>
          <CardContent>
            {submitted ? (
              <div className="text-center py-8">
                <p className="text-blue-400 text-lg font-semibold mb-2">Thank you for reaching out!</p>
                <p className="text-muted-foreground">We have received your message and will respond as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1 text-white">Name</label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1 text-white">Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1 text-white">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    placeholder="How can we help you?"
                    rows={5}
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-pink-600 to-blue-700 hover:from-blue-500 hover:to-pink-600 text-white">
                  Send Message
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 
