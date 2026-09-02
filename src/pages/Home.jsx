import React from 'react';
import Hero from '../components/Hero';
import HomeServices from '../components/home/HomeServices';
import HomeWork from '../components/home/HomeWork';
import HomeWhyMe from '../components/home/HomeWhyMe';
import HomeProcess from '../components/home/HomeProcess';
import HomeAbout from '../components/home/HomeAbout';
import HomeTech from '../components/home/HomeTech';
import HomeCTA from '../components/home/HomeCTA';

export default function Home() {
  return (
    <main className="relative z-10 w-full overflow-hidden">
      <Hero />
      <HomeServices />
      <HomeWork />
      <HomeWhyMe />
      <HomeProcess />
      <HomeAbout />
      <HomeTech />
      <HomeCTA />
    </main>
  );
}
