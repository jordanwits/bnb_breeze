import type React from "react"
import type { Metadata } from "next"
import { Raleway } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import ErrorListener from "@/components/error-listener"
import Script from "next/script"

const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" })

export const metadata: Metadata = {
  title: "BNB Breeze - What We Offer",
  description: "Discover the comprehensive services offered by BNB Breeze for short-term rental management.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="suppress-benign-rejections" strategy="beforeInteractive">
          {`
            (function(){
              function isEmptyObject(val){return typeof val==='object' && val!=null && !Array.isArray(val) && Object.keys(val).length===0}
              function isBenign(reason){return reason==null || isEmptyObject(reason) || (typeof Event!=='undefined' && reason instanceof Event)}
              window.addEventListener('unhandledrejection', function(ev){
                var r = ev && ev.reason;
                if (isBenign(r)) { try{ ev.preventDefault(); ev.stopImmediatePropagation && ev.stopImmediatePropagation(); }catch(e){} }
              }, { capture: true });
              var prev = window.onunhandledrejection;
              window.onunhandledrejection = function(ev){
                var r = ev && ev.reason;
                if (isBenign(r)) { try{ ev.preventDefault(); ev.stopImmediatePropagation && ev.stopImmediatePropagation(); }catch(e){} return true; }
                return prev ? prev.call(this, ev) : undefined;
              };
            })();
          `}
        </Script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${raleway.className} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <ErrorListener />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
