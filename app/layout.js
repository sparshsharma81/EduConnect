import { Inter } from "next/font/google"; //this is basically the inner font jo hamne import kiya hai..jise ham use kar rahe hai
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import Header from "@/components/Header"; //and this is the header component 
import { ClerkProvider } from "@clerk/nextjs"; //this is the clerk provider which is for authentication ....
import { dark } from "@clerk/themes";//this is the dark theme for clerk which is for authentication 

// HERE WE WILL USE THE DEFAULT FONT 
const inter = Inter({ subsets: ["latin"] });
//this is one of the default font --- inter

export const metadata = {
  title: "MediMeet - Doctors Appointment App",
  description: "Connect with doctors anytime anywhere",
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
            <footer className ="bg-muted/50 py-12">
              {/* ye basically ek basic styling hai footer ki ..taaki vo center me aa jaye.... */}
              <div className="container mx-auto px-4 text-center text-gray-200">
                {/* container basically ek max width provide karta hai according to the size of the screen --basically app responsive ban sake */}
                {/* mx-auto --- this will insure that everything will be pushed inside the middle  */}
                {/* 4 rem padding -- 4 -- 1 rem -- 16px  */}
                <p>Made with Next-js from sparsh sharma</p>
              </div>
            </footer>
          </ThemeProvider>
        
      </body>
    </html> 
    </ClerkProvider>
  );
}
