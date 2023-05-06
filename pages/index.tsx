import Cities from "@/components/Cities/Cities";
import Featured from "@/components/Featured/Featured";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Seo from "@/components/Seo/Seo";
import Testimonials from "@/components/Testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Seo
        title="Listings"
        description="Let HomeHaven help you find the key to your new home."
      />
      <Hero />
      <Featured />
      <Cities />
      <Testimonials />
      <Footer />
    </>
  );
}
