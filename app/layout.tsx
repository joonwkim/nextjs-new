"use client";
import localFont from "next/font/local";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import BootstrapClient from "./bootstrapClient";
import "./styles.css";
import { useState } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <BootstrapClient />

        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top-nav">
          <button
            className="btn btn-outline-light me-2"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            ☰
          </button>
          <a className="navbar-brand" href="#">Brand</a>
        </nav>

        {/* Main Layout */}
        <div className="container-fluid layout-wrapper">
          <div className="row">

            {/* Sidebar (Hidden on Small Screens) */}
            <div className={`col-md-3 col-lg-2 sidebar ${sidebarOpen ? "show" : ""}`}>
              <ul className="nav flex-column">
                <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Categories</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Settings</a></li>
              </ul>
            </div>

            {/* Page Content */}
            <div className="col-md-9 col-lg-10 main-content">
              <div className="blog-content">{children}</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="footer">&copy; 2025 YourSite. All Rights Reserved.</footer>
      </body>
    </html>
  );
}
