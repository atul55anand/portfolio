
import type { Metadata } from "next";
import { Josefin_Sans, Forum } from 'next/font/google';
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { ThemeToggle } from "@/components/themeToggle";

const forum = Forum
({ subsets: ['latin'], 
  variable: '--font-sans', 
  weight: ['400']});
const josefin = Josefin_Sans({
  subsets:['latin'],
   variable: '--font-serif',
  weight: ['400'],
})

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Created by Atul Anand",
};

export default function RootLayout(
  {children}
: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="en">
      <body className={twMerge (
        forum.className, 
        josefin.className,
        "text-white antialiased font-sans"
        )} 
        >
          <ThemeToggle />
          {children}
         
    </body>
    </html>
  );
}
