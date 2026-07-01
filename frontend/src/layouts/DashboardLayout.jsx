import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const DashboardLayout = () => {
  return (
    <div className="dashboard-wrapper">
      <Navbar />
      <main className="dashboard-content">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
