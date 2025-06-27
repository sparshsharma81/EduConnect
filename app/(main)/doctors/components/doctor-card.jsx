import { User, Star, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function DoctorCard({ doctor }) {
  return (
    <Card className="border-white hover:border-blue-500/40 transition-all">
      <CardContent>
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-700 to-blue-800 flex items-center justify-center flex-shrink-0">
            {doctor.imageUrl ? (
              <img
                src={doctor.imageUrl}
                alt={doctor.name}
                className="w-12 h-12 rounded-full object-cover"
              />
            ) : (
              <User className="h-6 w-6 text-blue-200" />
            )}
          </div>

          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
              <h3 className="font-medium text-white text-lg">{doctor.name}</h3>
              <Badge
                variant="outline"
                className="bg-pink-900/20 border-pink-800/30 text-blue-200 self-start"
              >
                <Star className="h-3 w-3 mr-1" />
                Verified
              </Badge>
            </div>

            <p className="text-sm text-muted-foreground mb-1">
              {doctor.specialty} • {doctor.experience} years experience
            </p>

            <div className="mt-4 line-clamp-2 text-sm text-muted-foreground mb-4">
              {doctor.description}
            </div>

            <Button
              asChild
              className="w-full bg-gradient-to-r from-pink-600 to-blue-700 hover:from-blue-500 hover:to-pink-600 text-white mt-2"
            >
              <Link href={`/doctors/${doctor.specialty}/${doctor.id}`}>
                <Calendar className="h-4 w-4 mr-2" />
                View Profile & Book
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
