"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Ban, Loader2, User, Search, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { updateDoctorActiveStatus } from "@/actions/admin";
import useFetch from "@/hooks/use-fetch";
import { toast } from "sonner";

export function VerifiedDoctors({ doctors }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [targetDoctor, setTargetDoctor] = useState(null);
  const [actionType, setActionType] = useState(null);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [confirmAction, setConfirmAction] = useState(null); // 'suspend' or 'reinstate'

  const {
    loading,
    data,
    fn: submitStatusUpdate,
  } = useFetch(updateDoctorActiveStatus);

  const filteredDoctors = doctors.filter((doctor) => {
    const query = searchTerm.toLowerCase();
    return (
      (doctor.name?.toLowerCase() || '').includes(query) ||
      (doctor.specialty?.toLowerCase() || '').includes(query) ||
      (doctor.email?.toLowerCase() || '').includes(query)
    );
  });

  const handleStatusChangeConfirmation = (doctor, suspend) => {
    setTargetDoctor(doctor);
    setConfirmAction(suspend ? 'suspend' : 'reinstate');
    setConfirmOpen(true);
  };

  const handleConfirmedAction = async () => {
    if (loading || !targetDoctor || !confirmAction) return;

    const formData = new FormData();
    formData.append("doctorId", targetDoctor.id);
    formData.append("suspend", confirmAction === 'suspend' ? "true" : "false");

    setActionType(confirmAction === 'suspend' ? "SUSPEND" : "REINSTATE");
    await submitStatusUpdate(formData);
    setConfirmOpen(false);
  };

  useEffect(() => {
    if (data?.success && targetDoctor && actionType) {
      const actionVerb = actionType === "SUSPEND" ? "Suspended" : "Reinstated";
      toast.success(`${actionVerb} ${targetDoctor.name || 'Mentor'} successfully!`);
      setTargetDoctor(null);
      setActionType(null);
    }
  }, [data]);

  return (
    <div>
      <Card className="bg-muted/20 border-white">
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <CardTitle className="text-xl font-bold bg-gradient-to-l from-green-700 via-sky-400 to-purple-400 bg-clip-text text-transparent">
                Manage Mentors
              </CardTitle>
              <CardDescription>
                View and manage all verified Mentors
              </CardDescription>
            </div>
            <div className="relative w-full md:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search Mentors..."
                className="pl-8 bg-background border-pink-900/20"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </CardHeader>

        <CardContent>
          {filteredDoctors.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              {searchTerm
                ? "No Mentors match your search criteria."
                : "No verified Mentors available."}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredDoctors.map((doctor) => {
                const isSuspended = doctor.verificationStatus === "REJECTED";
                return (
                  <Card
                    key={doctor.id}
                    className="bg-background border-white-900/60 hover:border-white transition-all"
                  >
                    <CardContent className="p-4">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="bg-muted/20 rounded-full p-2 bg-gradient-to-r from-pink-500 to-blue-600 ">
                            <User className="h-5 w-5 text-pink-100" />
                          </div>
                          <div>
                            <h3 className="font-medium bg-gradient-to-t from-green-500 to-sky-700 bg-clip-text text-transparent">
                              {doctor.name || 'N/A'}
                            </h3>
                            <p className="text-sm bg-gradient-to-r from-amber-300 via-blue-300 to-green-400 bg-clip-text text-transparent mb-1">
                              {doctor.specialty || 'N/A'} • {doctor.experience || 0} years
                              experience
                            </p>
                            <p className="text-sm font-medium font-bold bg-gradient-to-r from-pink-300 via-sky-400 to-purple-500 bg-clip-text text-transparent mb-1">
                              {doctor.email || 'N/A'}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 self-end md:self-auto">
                          {isSuspended ? (
                            <>
                              <Badge
                                variant="outline"
                                className="bg-red-900/40 border-red-900/30 text-red-400"
                              >
                                Suspended
                              </Badge>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() =>
                                  handleStatusChangeConfirmation(doctor, false)
                                }
                                disabled={loading}
                                className="border-pink-900/30 hover:bg-muted/80"
                              >
                                {loading && targetDoctor?.id === doctor.id ? (
                                  <Loader2 className="h-4 w-4 mr-1 animate-spin" />
                                ) : (
                                  <Check className="h-4 w-4 mr-1" />
                                )}
                                Reinstate
                              </Button>
                            </>
                          ) : (
                            <>
                              <Badge
                                variant="outline"
                                className="bg-pink-900/20 border-pink-900/30 text-pink-400"
                              >
                                Active
                              </Badge>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleStatusChangeConfirmation(doctor, true)}
                                disabled={loading}
                                className="border-red-900/30 hover:bg-red-900/10 text-red-400"
                              >
                                {loading && targetDoctor?.id === doctor.id ? (
                                  <Loader2 className="h-4 w-4 mr-1 animate-spin" />
                                ) : (
                                  <Ban className="h-4 w-4 mr-1" />
                                )}
                                Suspend
                              </Button>
                            </>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Confirmation Dialog */}
      <Dialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-red-900/20 rounded-full">
                <AlertTriangle className="h-6 w-6 text-red-400" />
              </div>
              <DialogTitle className="text-xl font-bold text-white">
                {confirmAction === 'suspend' ? 'Suspend Mentor' : 'Reinstate Mentor'}
              </DialogTitle>
            </div>
            <DialogDescription className="text-muted-foreground">
              {confirmAction === 'suspend' 
                ? `Are you sure you want to suspend ${targetDoctor?.name || 'this Mentor'}? They will not be able to accept new appointments.`
                : `Are you sure you want to reinstate ${targetDoctor?.name || 'this Mentor'}? They will be able to accept appointments again.`
              }
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => setConfirmOpen(false)}
              className="border-gray-600 hover:bg-gray-800"
            >
              Cancel
            </Button>
            <Button
              onClick={handleConfirmedAction}
              disabled={loading}
              className={
                confirmAction === 'suspend' 
                  ? "bg-red-600 hover:bg-red-700" 
                  : "bg-emerald-600 hover:bg-emerald-700"
              }
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {confirmAction === 'suspend' ? 'Suspending...' : 'Reinstating...'}
                </>
              ) : (
                <>
                  {confirmAction === 'suspend' ? (
                    <>
                      <Ban className="mr-2 h-4 w-4" />
                      Suspend Mentor
                    </>
                  ) : (
                    <>
                      <Check className="mr-2 h-4 w-4" />
                      Reinstate Mentor
                    </>
                  )}
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
