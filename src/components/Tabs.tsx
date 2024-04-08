// components/Tabs.js
import { useState } from 'react';

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="relative text-center text-sm">
    <div className="flex border items-center rounded-3xl">
      <span
        className={`tab ${
          activeTab === "All" ? "active" : ""
        }`}
        onClick={() => handleTabClick("All")}
      >
        All
      </span>
      <span
        className={`tab ${activeTab === "Invited" ? "active" : ""}`}
        onClick={() => handleTabClick("Invited")}
      >
        Invited
      </span>
      <span
        className={`tab ${
          activeTab === "Signedup" ? "active" : ""
        }`}
        onClick={() => handleTabClick("Signedup")}
      >
        Signedup
      </span>
    </div>
  </div>
  );
};

export default Tabs;
