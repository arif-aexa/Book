import Footer from "./Books.jsx/Footer";
import Header from "./Books.jsx/Header";
import Hero from "./Books.jsx/Hero";
import Navebar from "./Books.jsx/Navebar";

export default function App() {
  return (
 <>
<div className="relative font-[Manrope] before:fixed before:left-0 before:top-0 before:-z-10 before:h-[435px] before:w-full before:rounded-bl-3xl before:bg-[#EAE6D7] max-md:px-4 lg:text-lg before:lg:rounded-bl-[79px] p-4">
     <Navebar/>
    <Header/>
    <Hero/>
    <Footer/>
</div>
 
    </>
  )
}