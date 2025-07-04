import React from "react";
import { Button } from "./ui/button";
import {
  Calendar,
  CreditCard,
  ShieldCheck,
  Stethoscope,
  User,
} from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { checkUser } from "@/lib/checkUser";
import { Badge } from "./ui/badge";
import { checkAndAllocateCredits } from "@/actions/credits";
import Image from "next/image";             

export default async function Header() {
  const user = await checkUser();
  if (user?.role === "PATIENT") {
    await checkAndAllocateCredits(user);
  }
    return (
      <header className="fixed top-0 w-full border-b bg-background/90 backdrop-blur-md z-30 supports-[backdrop-filter]:bg-background/80">
          <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
               <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <Image
            src="/logo112.png"
            alt="EduConnect Logo"
            width={200}
            height={60}
            className="h-30 w-auto object-contain"
          />
            </Link>



            {/* Action Buttons */}
            {/* agar meri website pr jo user login kiya hai... */}
            {/* agar usme abhi tk kuch decide nahi kiya..to me use sign in wale page pr direct kar dunga... */}
        <div className="flex items-center space-x-2">
          <SignedIn>
            {/* Admin Links */}

            {/* ab user admin hai..yani parent..to use admin dashboard show hona chahiye  */}
            {user?.role === "ADMIN" && (
              <Link href="/admin">
                <Button
                  variant="outline"
                  className="hidden md:inline-flex items-center gap-2"
                >
                  <ShieldCheck className="h-4 w-4" />
                  Admin Dashboard
                </Button>
                <Button variant="ghost" className="md:hidden w-10 h-10 p-0">
                  <ShieldCheck className="h-4 w-4" />
                </Button>
              </Link>
            )}


            
            {/* Mentor Links */}
            {user?.role === "DOCTOR" && (
              <Link href="/doctor">
                <Button
                  variant="outline"
                  className="hidden md:inline-flex items-center gap-2"
                >
                  <Stethoscope className="h-4 w-4" />
                  Mentor Dashboard
                </Button>
                <Button variant="ghost" className="md:hidden w-10 h-10 p-0">
                  <Stethoscope className="h-4 w-4" />
                </Button>
              </Link>
            )}

{/* agar user ka role student hoga..to me use appointment page pr leke jauga.... */}
             {/* Student Links */}
            {user?.role === "PATIENT" && (
              <Link href="/appointments">
                <Button
                  variant="outline"
                  className="hidden md:inline-flex items-center gap-2"
                >
                  <Calendar className="h-4 w-4" /> 
                    {/* ye hai student k liye */}
                  My Appointments
                </Button>
                <Button variant="ghost" className="md:hidden w-10 h-10 p-0">
                  <Calendar className="h-4 w-4" />
                </Button>
              </Link>
            )}



             {/* Unassigned Role */}
            {user?.role === "UNASSIGNED" && (
              <Link href="/onboarding">
                <Button
                  variant="outline"
                  className="hidden md:inline-flex items-center gap-2"
                >
                  <User className="h-4 w-4" />
                  Complete Profile
                </Button>
                <Button variant="ghost" className="md:hidden w-10 h-10 p-0">
                  <User className="h-4 w-4" />
                </Button>
              </Link>
            )}
          </SignedIn>



            {(!user || user?.role !== "ADMIN") && (
            <Link href={user?.role === "PATIENT" ? "/pricing" : "/doctor"}>
              <Badge
                variant="outline"
                className="h-9 bg-emerald-900/20 border-emerald-700/30 px-3 py-1 flex items-center gap-2"
              >
                <CreditCard className="h-3.5 w-3.5 text-emerald-400" />
                <span className="text-emerald-400">
                  {user && user.role !== "ADMIN" ? (
                    <>
                      {user.credits}{" "}
                      <span className="hidden md:inline">
                        {user?.role === "PATIENT"
                          ? "Credits"
                          : "Earned Credits"}
                      </span>
                    </>
                  ) : (
                    <>Pricing</>
                  )}
                </span>
              </Badge>
            </Link>
          )}




           <SignedOut>
            <SignInButton>
              <Button variant="secondary">Sign In</Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                  userButtonPopoverCard: "shadow-xl",
                  userPreviewMainIdentifier: "font-semibold",
                },
              }}
              afterSignOutUrl="/"
            />
          </SignedIn>
        </div>
      </nav>
    </header>

    );
}



//             <div className='flex items-center space-x-2'>
//               <SignedOut>
//               <SignInButton />
//               <Button variant="secondary">Sign In</Button>
//               <SignUpButton />
//             </SignedOut>
//             <SignedIn>
//   <UserButton 
//     appearance={{
//       elements: {
//         avatarBox: "w-10 h-10",
//         userButtonPopoverCard: "shadow-xl", // now this will be more good ...
//         userPreviewMainIdentifier: "font-semibold",
//       },
//     }}
//   />
// </SignedIn>


//             {/* 
//             these are amazing inbuild things which are provided by clerk
//             ..we do not need to make it..it is amazing predefined components.. and is provided on the 
//             clerk website..basically when we create all the proper authentication..
//             there are buttons like sign in , sign out are shown... 
//             and when we sign in ..then there is option of manage account, sign out ,, and all the good optinos ..we need not to manage from ourself 

            
//             */}
//             </div>
//             </nav>
//         </header>
        
//     )
// }
// export default Header;
