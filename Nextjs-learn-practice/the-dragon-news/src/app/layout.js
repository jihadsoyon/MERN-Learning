import { Geist, Geist_Mono, Montserrat, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
})

export const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
})

export const metadata = {
  title: "The Dragon News",
  description: "Dragoon News is a responsive front-end web application build with react that delivers real-time news articles on a variety of topics, complete with user authentication for personalized access. Built with modern web technologies, the app ensures a seamless user experience across devices and secure login functionality using firebase authentication.let's build the project together.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={`${poppins.className} min-h-full flex flex-col`}>

        {children}
      </body>
    </html>
  );
}
