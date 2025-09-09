import React from "react";
import Tracker from "../components/odertrack/Tracker";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TrackTable from "../components/odertrack/TrackTable";

const TrackOrder = () => {
  return (
    <>
      <Navbar />
      <div className="px-8 md:px-12 lg:px-24 py-16 flex flex-col gap-18">
        <Tracker />
        <TrackTable />
      </div>
      <Footer />
    </>
  );
};

export default TrackOrder;
