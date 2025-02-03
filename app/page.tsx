import AllProducts from "@/components/AllProducts";
import Hero from "../components/Hero";
import ProductList from "../components/ProductList";
import TestimonialSection from "@/components/Testimonial";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProductList />
      <AllProducts />
      <TestimonialSection />
    </main>
  );
}
