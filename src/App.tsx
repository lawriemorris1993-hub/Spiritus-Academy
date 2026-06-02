/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Programmes from "./components/Programmes";
import StudentLife from "./components/StudentLife";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col" id="academy-root-layout">
      {/* 1. Header Navigation bar */}
      <Header />

      <main className="flex-grow">
        {/* 2. Hero Presentation Splash */}
        <Hero />

        {/* 3. Creed / Mission & General Values */}
        <About />

        {/* 4. Subject Streams listing */}
        <Programmes />

        {/* 5. Photographic Showcase */}
        <StudentLife />

        {/* 6. Quick Action Links & Contacts */}
        <Contact />
      </main>

      {/* 7. Bottom closure navigation bar */}
      <Footer />

      {/* 8. Sticky Float Contact bubble dial */}
      <FloatingWhatsApp />
    </div>
  );
}
