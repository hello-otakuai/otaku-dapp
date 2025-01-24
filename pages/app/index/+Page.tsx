import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import LogbookTab from "./components/LogbookTab";
import HeatmapTab from "./components/HeatmapTab";
import AppsTab from "./components/AppsTab";
import SenseiTab from "./components/SenseiTab";
import DevelopersTab from "./components/DevelopersTab";

const TradeLogSummary = () => {
  const [activeTab, setActiveTab] = useState("Logbook");

  const renderContent = () => {
    switch (activeTab) {
      case "Logbook":
        return <LogbookTab />;
      case "Heatmap":
        return <HeatmapTab />;
      case "Apps":
        return <AppsTab />;
      case "Sensei":
        return <SenseiTab />;
      case "Developers":
        return <DevelopersTab />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#1E1E1E] text-white font-['Gothic_A1']">
      <div className="w-5/6 m-auto">
        <Header />
        <div className="flex">
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
          <main className="w-4/5 p-8">{renderContent()}</main>
        </div>
      </div>
    </div>
  );
};

export default TradeLogSummary;
