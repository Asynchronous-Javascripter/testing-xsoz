import "./globals.css";
//import {Providers} from './providers';
// import {Carter_One} from 'next/font/google';
// import Navbar from '../components/heroui/Navbar';
import DemoNavbar from '../components/heroui/Demo-Navbar';
 /* const carter_font = Carter_One({
  weight:'400',
  subsets:['latin']
});  */ 

// import type { Metadata, Viewport } from "next";

const APP_NAME = "Xsoz";
const APP_DEFAULT_TITLE = "Xsoz AI";
const APP_TITLE_TEMPLATE = "%s - PWA App";
const APP_DESCRIPTION = "Best PWA app in the world!";

export const metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
    { /*    <Providers>  */ } 
      <DemoNavbar/> 
        {children}
    { /*    </Providers>  */ }
      </body>
    </html>
  );
}
