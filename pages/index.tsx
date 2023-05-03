import Footer from "components/Footer";
import Header from "components/Header";
import About from "components/Sections/About";
import Contact from "components/Sections/Contact";
import Faq from "components/Sections/FAQ";
import Features from "components/Sections/Features";
import Hero from "components/Sections/Hero";
import Services from "@/Sections/Services";
import Testimonials from "components/Sections/Testimonials";
import { pricingData, testimonialsData } from "data/dummy";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>CRM Software landing</title>
        <meta name="description" content="Cloud Crm landing page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <Testimonials testimonials={testimonialsData} />
        <Services plans={pricingData} />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
