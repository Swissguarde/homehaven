import Cities from "@/components/Cities/Cities";
import Featured from "@/components/Featured/Featured";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Testimonials from "@/components/Testimonials/Testimonials";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - HomeHaven</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Featured />
      <Cities />
      <Testimonials />
      <Footer />
    </>
  );
}
