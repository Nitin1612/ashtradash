import Dashboard from "./components/Dashboard";
import MobileDashboard from "./components/MobDashboard";

function App() {
  const isMobile =
    window.innerWidth <= 768 || document.documentElement.clientWidth <= 768;
  return isMobile ? <MobileDashboard /> : <Dashboard />;
}

export default App;
