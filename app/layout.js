import { Inter } from "next/font/google"; //this is basically the inner font jo hamne import kiya hai..jise ham use kar rahe hai
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import Header from "@/components/Header"; //and this is the header component 
import { ClerkProvider } from "@clerk/nextjs"; //this is the clerk provider which is for authentication ....
import { dark } from "@clerk/themes";//this is the dark theme for clerk which is for authentication 
import Link from "next/link";

// HERE WE WILL USE THE DEFAULT FONT 
const inter = Inter({ subsets: ["latin"] });
//this is one of the default font --- inter

export const metadata = {
  title: "EduConnect - Mentors Appointment App",
  description: "Connect with Mentors anytime anywhere",
};

export default function RootLayout({ children }) {
  return ( 
      <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      {/* the clerk provide dark themes so that we can use it in the dark theme  */}
      {/* clerk is used basically for authentication --- */}
      {/* basically it will allow only specific users to enter to our application  */}

    <html lang="en" suppressHydrationWarning>
      {/* ye basically warnings ko daba dega */}

      {/* ye theme provider basically dark mode k liye hai..shadcn ui se import kiya hai.. */}
      {/* all components are adapting to the dark mode  */}
  <head>
          <link rel="icon" href="/logo.png" sizes="any" />
        </head>
      <body className={`${inter.className}`}>
         
          <ThemeProvider
            attribute="class"
            defaultTheme="dark" 
            enableSystem
            disableTransitionOnChange
          >
            {/* yaha pr ham header component add karege  */}
 
            <Header />
           <main className="min-h-screen">{children}</main>
           {/* the min-h-screen dhyan rakhegi ki kam se kam 100 view port height to ho iski  */}
            <Toaster richColors />

            {/* yaha pr ham footer component add karege   */}
            <footer className ="bg-muted/50 py-10 bg-gradient-to-r from-indigo-900/30 to-purple-900/30">
              {/* ye basically ek basic styling hai footer ki ..taaki vo center me aa jaye.... */}
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                  <div>
                    <h3 className="text-purple-400 font-semibold mb-4">EduConnect</h3>
                    <p className="text-sky-300 text-sm">
                      Connect with expert mentors for personalized learning experiences.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-red-400 font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                      <li><Link href="/doctors" className="text-sky-300 hover:text-white transition-colors">Find Mentors</Link></li>
                      <li><Link href="/pricing" className="text-sky-300 hover:text-white transition-colors">Pricing</Link></li>
                      <li><Link href="/onboarding" className="text-sky-300 hover:text-white transition-colors">Get Started</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-red-400 font-semibold mb-4">Support</h4>
                    <ul className="space-y-2 text-sm">
                      <li><Link href="/contact-support" className="text-sky-300 hover:text-white transition-colors">Contact Support</Link></li>
                      <li><Link href="/email-support" className="text-sky-300 hover:text-white transition-colors">Email Support</Link></li>
                      {/* <li><a href="mailto:support@educonnect.com" className="text-sky-300 hover:text-white transition-colors">Direct Email</a></li> */}
                      {/* basically we have removed this option.... */}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-red-400 font-semibold mb-4">Legal</h4>
                    <ul className="space-y-2 text-sm">
                      <li><Link href="/privacy-policy" className="text-sky-300 hover:text-white transition-colors">Privacy Policy</Link></li>
                      <li><Link href="/terms-of-service" className="text-sky-300 hover:text-white transition-colors">Terms of Service</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="border-t border-gray-700 pt-6 text-center">
                  <p className="text-white text-sm">Made By Sparsh Sharma</p>
                </div>
              </div>
            </footer>
          </ThemeProvider>
        
      </body>
    </html> 
    </ClerkProvider>
  );
}
