import { useState } from 'react';
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";
import 'antd/dist/antd.css';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () => {
    setSidebarOpen(true);
  }
  const closeSidebar = () => {
    setSidebarOpen(false);
  }

  return (
    <div className="container">

      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <h1>DashBoard Amel</h1>

      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
      <Main />
      <listes />

    </div>
  );
}

export default App;
