import Dashboard from "./components/Dashboard";
import MobileDashboard from "./components/MobDashboard";
import DBHelper from "./components/tools/DBHelper";

const App =()=> {
  const isMobile =
    window.innerWidth <= 768 || document.documentElement.clientWidth <= 768;

    const value = DBHelper.response

    const data = {
      analyticsData : {
        approval: value.todays_order_summary_section?.approval_pending,
        request :value.requested_prods?.total_request_received,
        totalorders : value.todays_order_summary_section?.total_order,
        transactions : value.todays_order_summary_section?.total_transaction
      },
      orderData : value.order_summary_section,
      graphData : value.analytics_section
    }

  return isMobile ? (
    <MobileDashboard data={data}  />
  ) : (
    <Dashboard data={data} />
  );
}

export default App;
