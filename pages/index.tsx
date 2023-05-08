import Footer from "components/Footer";
import Header from "components/Header";
import Faq from "components/Sections/FAQ";
import Features from "@/Sections/Features";
import Hero from "components/Sections/Hero";
import Services from "@/Sections/Services";
import Testimonials from "components/Sections/Testimonials";
import AppDownload from "components/Sections/AppDownload";
import { testimonialsData } from "data/dummy";
import Head from "next/head";

//todo: fix css dissappears on page refresh

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
        <Testimonials testimonials={testimonialsData} />
        <Features />
        <Services />
        <AppDownload />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
