import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { SPECIALTIES } from "@/lib/specialities";

export default async function DoctorsPage() {
  return (
    <><div className="flex flex-col items-center justify-center mb-8 text-center">
    <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-red-300 via-purple-400 to-pink-400 text-transparent bg-clip-text">
      Find Your Mentor
    </h1>
    <p className="text-muted-foreground text-lg max-w-md ">
      Browse by specialty or view all available Mentors
    </p>
  </div>
  
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  {SPECIALTIES.map((specialty) => (
    <Link key={specialty.name} href={`/doctors/${specialty.name}`}>
      <Card className="group relative overflow-hidden border-white rounded-xl bg-gradient-to-br from-slate-800/40 to-slate-900/30 shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out hover:scale-105">
        
        {/* Glow overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl z-0" />

        <CardContent className="relative z-10 p-6 flex flex-col items-center justify-center text-center h-full">
          {/* Icon container */}
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-700 to-blue-800 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
            <div className="text-blue-200 group-hover:text-blue-100 transition-colors duration-300">
              {specialty.icon}
            </div>
          </div>

          {/* Specialty Name */}
          <h3 className="font-semibold text-white text-lg group-hover:text-blue-100 transition-colors duration-300">
            {specialty.name}
          </h3>
        </CardContent>
      </Card>
    </Link>
  ))}
</div>


    </>
  );
}
