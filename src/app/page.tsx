import FeatureProduct from "@/components/FeatureProduct";
import Footer from "@/components/Footer";
import FrequentlyQuestions from "@/components/FrequentlyQuestions";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Product from "@/components/Product";
import RecommendProducts from "@/components/RecommendProducts";
import Image from "next/image";

export default function Home() {
  return (
    <><div className="overflow-hidden bg-gray-50">

    <Navbar />
    
    <HeroSection />
    <Product/>
    <FeatureProduct/>
    <RecommendProducts/>
    <FrequentlyQuestions/>
   
    <Footer/>
    </div>
    
    </>
     
  );
}
