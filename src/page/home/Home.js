import React from "react"; // Import React library
import Banner from "../../component/banner/banner";
import Features from "../../component/features/features";


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
