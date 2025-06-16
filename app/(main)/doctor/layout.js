import { Stethoscope } from "lucide-react";
import { PageHeader } from "@/components/page-header";

export const metadata = {
  title: "Mentor Dashboard - EduConnect",
  description: "Manage your appointments and availability",
};

export default async function DoctorDashboardLayout({ children }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader icon={<Stethoscope />} title="Mentor Dashboard" />

      {children}
    </div>
  );
}