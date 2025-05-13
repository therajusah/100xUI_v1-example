import React from 'react';
import Navbar from '@/app/components/navbar';
// import Footer from '@/app/components/footer';
import "../globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">{children}</main>
      {/* <Footer /> */}
    </div>
  );
}