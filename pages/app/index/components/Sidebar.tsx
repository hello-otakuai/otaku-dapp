import React from "react";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar = ({ activeTab, setActiveTab }: SidebarProps) => {
  return (
    <aside className="w-1/5 bg-[#1A1A1A] rounded-[36px] py-10">
      <nav>
        <ul className="space-y-6 px-10">
          {["Logbook", "Heatmap", "Apps", "Sensei", "Developers"].map((tab) => (
            <li
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`${
                activeTab === tab ? "bg-[#1E1E1E] text-white" : "text-gray-400"
              } hover:text-white hover:bg-[#1E1E1E] rounded-[24px] p-3 px-10 transition-colors cursor-pointer`}
            >
              {tab}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
