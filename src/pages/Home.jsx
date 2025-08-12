import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Features from '../components/Home/Features';
import About from '../components/Home/About';
// import SpecialOffer from '../components/Home/SpecialOffer';
import TourSection from '../components/Home/TourSection';
import WhyChooseUs from '../components/Home/WhyChooseUs';
import Services from '../components/Home/Services';
import DestinationSection from '../components/Home/DestinationSection';
import Testimonials from '../components/Home/Testimonials';
import PlanningSection from '../components/Home/PlanningSection';
import ClientSection from '../components/Home/ClientSection';

const Home = () => {
  return (
      <>


      <Header />
      <Features/>
      <About/>
      {/* <SpecialOffer/> */}
      <TourSection/>
      <WhyChooseUs/>
      <Services/>
      <DestinationSection />
      <PlanningSection />
      <Testimonials/>
      <ClientSection/>
      <Footer />
    </>
  );
};

export default Home;
