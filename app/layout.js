import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DevilAI - AI Career Coach ",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
    appearance={{
      baseTheme: dark,
    }}
  >
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/logo.jpeg" sizes="any" />
        </head>
        <body className={`${inter.className}`} suppressHydrationWarning={true}>        
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen">{children}</main>
            <footer className="bg-muted/50 ppy-12">
              <div className="container mx-auto px-4 text-center text-gray-200">
                <p>Made by 😊Devansh Mishra</p>
              </div>
            </footer>
          </ThemeProvider>
        
      </body>
    </html>
    </ClerkProvider>
  );
}
