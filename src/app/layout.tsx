/** @format */
'use client'

// import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import {Inter} from 'next/font/google';
import {QueryClient, QueryClientProvider, useQuery} from '@tanstack/react-query';

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  
  const queryClient = new QueryClient();

  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
        <body className={inter.className}></body>
      </QueryClientProvider>
    </html>
  );
}
