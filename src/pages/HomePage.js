import React from "react";


import NavBar from "../components/NavBar";
import GetStarted from "../components/GetStarted";
import AboutNapollo from "../components/AboutNapollo";
import WhatsHot from "../components/WhatsHot";
import ExpansionPage from "../components/ExpansionPage";
import TrendingMusic from "../components/TrendingMusic";
import ChoosePlan from "../components/ChoosePlan";
import Testimonials from "../components/Testimonials";
import DownloadApp from "../components/DownloadApp";
import Footer from "../components/Footer";


export default function HomePage() {
  return (
    <div className="homePage">
      <NavBar />
      <GetStarted />
      <AboutNapollo />
      <WhatsHot />
      <ExpansionPage />
      <TrendingMusic />
      <ChoosePlan />
      <Testimonials />
      <DownloadApp />
      <Footer />
    </div>
  )
}
