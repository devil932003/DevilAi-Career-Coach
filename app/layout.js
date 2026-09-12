import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Image from "next/image";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DevilAI - AI Career Coach ",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
  >
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/logo.jpeg" sizes="any" />
        </head>
        <body className={`${inter.className}`} suppressHydrationWarning={true}>        
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen light-gradient">{children}</main>
          <footer className="bg-muted/50 py-16">
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 text-center">
    
    {/* Profile Image */}
    <div className="flex-shrink-0">
      <Image
        src="/new-profile.jpg" // ✅ make sure file is renamed without spaces
        alt="Devansh Mishra"
        width={140}   // bigger width
        height={140}  // bigger height
        className="rounded-full border-4 border-white shadow-xl"
      />
    </div>

    {/* Info Section */}
    <div>
      <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
        Developed BY : Devansh Mishra
      </h3>
      <p className="text-muted-foreground text-xl mt-2">
        Full Stack Developer | AI Career Coach Platform
      </p>
      <div className="flex justify-center gap-6 mt-4 text-lg">
        <a href="https://github.com/devil932003" target="_blank" rel="noopener noreferrer" className="hover:underline">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/devansh-mishra9354/" target="_blank" rel="noopener noreferrer" className="hover:underline">
          LinkedIn
        </a>
        <a href="https://portfolio-three-swart-12.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:underline">
          My Platform
        </a>
      </div>
    </div>

  </div>
</footer>



          </ThemeProvider>
        
      </body>
    </html>
    </ClerkProvider>
  );
}
