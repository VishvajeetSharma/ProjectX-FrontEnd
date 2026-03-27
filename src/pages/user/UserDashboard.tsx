import { useEffect, useState } from "react";
import DashboardLayout from "../../layout/DashboardLayout";
import { getUserState } from "../../services";
import CountUp from "react-countup";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";
import { FiBook, FiLayout, FiActivity, FiCreditCard } from "react-icons/fi";

const UserDashboard = () => {
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await getUserState();
        if (res.success) {
          setStats(res.result);
        }
      } catch (error) {
        console.error("Failed to fetch dashboard stats", error);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  if (loading)
    return (
      <DashboardLayout>
        <div className="p-4">Loading Dashboard...</div>
      </DashboardLayout>
    );

  return (
    <DashboardLayout>
      <div className="container-fluid py-4 px-4 dashboard-v2">

        {/* KPI Cards */}
        <div className="row g-4 mb-5">
          {[
            { title: "Total Plans", value: stats?.stats.totalPlans, icon: <FiLayout />, color: "linear-gradient(135deg, #00c6ff, #0072ff)" },
            { title: "Purchased Plans", value: stats?.stats.purchasedPlans, icon: <FiCreditCard />, color: "linear-gradient(135deg, #f953c6, #b91d73)" },
            { title: "Total Courses", value: stats?.stats.totalCourses, icon: <FiBook />, color: "linear-gradient(135deg, #f12711, #f5af19)" },
            { title: "My Courses", value: stats?.stats.userCourses, icon: <FiBook />, color: "linear-gradient(135deg, #11998e, #38ef7d)" },
            { title: "Remaining Credit", value: stats?.stats.remainingCredit, icon: <FiCreditCard />, color: "linear-gradient(135deg, #8e2de2, #4a00e0)" },
          ].map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="dashboard-kpi-card h-100" style={{ background: item.color }}>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="kpi-title mb-1 text-white opacity-75">{item.title}</p>
                    <h3 className="kpi-value text-white fw-bold m-0">
                      <CountUp end={item.value || 0} duration={2} />
                    </h3>
                  </div>
                  <div className="kpi-icon-wrapper">{item.icon}</div>
                </div>
                <div className="mt-3 text-white opacity-50 small">
                  {item.title.includes("My") || item.title.includes("Remaining") ? "User specific stats" : "Total registered"}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Graphs Section */}
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="form-section-card h-100 p-4">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h5 className="m-0">Growth & Adoption Trends</h5>
                <div className="d-flex gap-3">
                  <span className="d-flex align-items-center gap-1 small opacity-75">
                    <span className="dot" style={{ background: '#8884d8' }}></span> Plans
                  </span>
                  <span className="d-flex align-items-center gap-1 small opacity-75">
                    <span className="dot" style={{ background: '#82ca9d' }}></span> Courses
                  </span>
                </div>
              </div>
              <div style={{ width: '100%', height: 350 }}>
                <ResponsiveContainer>
                  <AreaChart data={stats?.chartData}>
                    <defs>
                      <linearGradient id="colorPlans" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="colorCourses" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" vertical={false} />
                    <XAxis dataKey="name" stroke="#666" axisLine={false} tickLine={false} />
                    <YAxis stroke="#666" axisLine={false} tickLine={false} />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#1e1e2d', border: 'none', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', color: '#fff' }}
                      itemStyle={{ color: '#fff' }}
                    />
                    <Area type="monotone" dataKey="plans" stroke="#8884d8" strokeWidth={3} fillOpacity={1} fill="url(#colorPlans)" />
                    <Area type="monotone" dataKey="courses" stroke="#82ca9d" strokeWidth={3} fillOpacity={1} fill="url(#colorCourses)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="form-section-card h-100 p-4">
              <h5 className="mb-4">Activity Insights</h5>

              <div className="stats-summary-item mb-4 glass-card">
                <div className="d-flex justify-content-between  mb-2">
                  <span className="opacity-75">Plan Purchase Rate</span>
                  <span className="fw-bold">{stats?.stats.totalPlans ? Math.round((stats.stats.purchasedPlans / stats.stats.totalPlans) * 100) : 0}%</span>
                </div>
                <div className="progress" style={{ height: '8px', background: '#2a2a2a', borderRadius: '10px' }}>
                  <div className="progress-bar" style={{
                    width: `${stats?.stats.totalPlans ? (stats.stats.purchasedPlans / stats.stats.totalPlans) * 100 : 0}%`,
                    background: 'linear-gradient(to right, #8e2de2, #4a00e0)',
                    borderRadius: '10px'
                  }}></div>
                </div>
              </div>

              <div className="stats-summary-item mb-4 glass-card">
                <div className="d-flex justify-content-between  mb-2">
                  <span className="opacity-75">Course Enrollment Rate</span>
                  <span className="fw-bold">{stats?.stats.totalCourses ? Math.round((stats.stats.userCourses / stats.stats.totalCourses) * 100) : 0}%</span>
                </div>
                <div className="progress" style={{ height: '8px', background: '#2a2a2a', borderRadius: '10px' }}>
                  <div className="progress-bar" style={{
                    width: `${stats?.stats.totalCourses ? (stats.stats.userCourses / stats.stats.totalCourses) * 100 : 0}%`,
                    background: 'linear-gradient(to right, #11998e, #38ef7d)',
                    borderRadius: '10px'
                  }}></div>
                </div>
              </div>

              <div className="activity-placeholder p-4 text-center glass-card mt-auto">
                <div className=" opacity-25 mb-2">
                  <FiActivity size={40} />
                </div>
                <p className=" opacity-50 small mb-0">More insights coming soon...</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
};

export default UserDashboard;