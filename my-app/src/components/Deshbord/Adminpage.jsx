import React, { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Accountdetail from "./Accoundetail";
import Accontdatadisply from "./Accontdatadisply";
import Accountedit from "./Accountedit";

const AdminPage = () => {
  const [activePanel, setActivePanel] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* ===== Header ===== */}
      <header className="bg-gray-800 text-white px-4 py-4 flex justify-between">
        <h1 className="text-xl font-bold">Admin Dashboard</h1>

        <button className="lg:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </header>

      <div className="flex flex-1">
        {/* ===== Sidebar ===== */}
        <aside
          className={`fixed lg:static w-64 bg-white shadow-md p-4 z-40
          ${sidebarOpen || isLargeScreen ? "block" : "hidden"}`}
        >
          <ul className="space-y-2">
            <li onClick={() => setActivePanel("dashboard")} className="cursor-pointer">
              Dashboard
            </li>
            <li onClick={() => setActivePanel("input")} className="cursor-pointer">
              Input User Account
            </li>
            <li onClick={() => setActivePanel("display")} className="cursor-pointer">
              Users Display
            </li>
          </ul>
        </aside>

        {/* ===== Main Content ===== */}
        <main className="flex-1 p-4">
          {activePanel === "dashboard" && (
            <div className="bg-white p-6 rounded shadow">
              <h2 className="text-xl font-bold">Dashboard</h2>
            </div>
          )}

          {activePanel === "input" && (
            <div className="bg-white p-6 rounded shadow">
              <Accountdetail />
            </div>
          )}

          {activePanel === "display" && (
            <div className="bg-white p-6 rounded shadow">
              <Accontdatadisply
                setActivePanel={setActivePanel}
                setEditId={setEditId}
              />
            </div>
          )}

          {activePanel === "edit" && (
            <div className="bg-white p-6 rounded shadow">
              <Accountedit id={editId} />
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminPage;
