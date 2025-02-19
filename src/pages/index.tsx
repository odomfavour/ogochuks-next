'use client';

import Head from 'next/head';
// import Image from "next/image";
// import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import WhatIDoSection from '@/components/WhatIDoSection';
import PortfolioSection from '@/components/PortfolioSection';
import TestimonialSection from '@/components/TestimonialSection';
import ContactSection from '@/components/ContactSection';
import FooterSection from '@/components/FooterSection';
import SkillsSection from '@/components/SkillsSection';

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Ogochuks || Home</title>
        <meta name="description" content="Ogochukwu Odom" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/ogo-prof.ico" />
      </Head>
      <main className="scroll-smooth">
        <Header />
        <HeroSection />
        <AboutSection />
        <WhatIDoSection />
        <SkillsSection />
        <PortfolioSection />
        <TestimonialSection />
        <ContactSection />
        <FooterSection />
      </main>
    </>
  );
}
