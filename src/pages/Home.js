import React from "react"; // Import React library
import Banner from "../components/banner";
import Features from "../components/features";


function Home() {
  return (
    <main>
        {/* Hero section */}
        <Banner/>
        {/* Features section */}
        <Features/>
   </main>
  );
}

export default Home;
