// this folder contains all the static data which we will be having in our project

import {
  Calendar,
  Video,
  CreditCard,
  User,
  FileText,
  ShieldCheck,
} from "lucide-react";

// JSON data for features
export const features = [
  {
    icon: <User className="h-6 w-6 text-emerald-400" />,
    title: "Create Your Profile",
    description:
      "Sign up and complete your profile to get personalized learning recommendations and track your academic journey.",
  },
  {
    icon: <Calendar className="h-6 w-6 text-emerald-400" />,
    title: "Schedule Sessions",
    description:
      "Browse educator profiles, check availability, and schedule learning sessions that fit your timetable.",
  },
  {
    icon: <Video className="h-6 w-6 text-emerald-400" />,
    title: "Live Online Learning",
    description:
      "Connect with qualified educators through secure, high-quality video sessions from anywhere.",
  },
  {
    icon: <CreditCard className="h-6 w-6 text-emerald-400" />,
    title: "Flexible Credit System",
    description:
      "Choose from affordable learning credit packages or subscriptions that suit your educational goals.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-emerald-400" />,
    title: "Verified Educators",
    description:
      "All educators are carefully screened and verified to ensure a high standard of teaching.",
  },
  {
    icon: <FileText className="h-6 w-6 text-emerald-400" />,
    title: "Learning Records",
    description:
      "Easily access your session history, educator feedback, and learning progress in one place.",
  },
];

// JSON data for testimonials
export const testimonials = [
  {
    initials: "SP",
    name: "Sana P.",
    role: "Student",
    quote:
      "The online session feature is a game-changer. I could attend classes from home and keep up with my studies during busy weeks.",
  },
  {
    initials: "AM",
    name: "Amit M.",
    role: "Math Tutor",
    quote:
      "EduConnecting has allowed me to teach students from different regions, expanding my reach and making my schedule more flexible.",
  },
  {
    initials: "JT",
    name: "Jaya T.",
    role: "Parent",
    quote:
      "The credit system is simple and efficient. I got a package for my kids, and we've been able to book quality sessions on demand.",
  },
];

// JSON data for credit system benefits
export const creditBenefits = [
  "Each learning session requires <strong class='text-emerald-400'>2 credits</strong> regardless of subject or duration",
  "Credits <strong class='text-emerald-400'>never expire</strong> – use them whenever learning needs arise",
  "Monthly plans provide you with <strong class='text-emerald-400'>fresh credits every month</strong>",
  "Change or cancel your subscription <strong class='text-emerald-400'>anytime</strong> with no extra fees",
];
