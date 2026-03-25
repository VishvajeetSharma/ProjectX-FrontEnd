import { useEffect, useState } from "react";
import DashboardLayout from "../../layout/DashboardLayout";
import MasterPlanCard from "./MasterPlanCard";
import { deleteMasterPlan, getMasterPlan } from "../../services";
import { showALert, confirmDeletion } from "../../utils";

// In your component:



const MasterPlan = () => {
  const [masterPlan, setMasterPlan] = useState([])
  const fetchData = async () => {
    const res = await getMasterPlan()
    setMasterPlan(res?.result || [])
  }
  useEffect(() => {
    fetchData()
  }, [])
  const handleEditPlan = (id: any) => {
    console.log('Edit plan', id);
  };

  const handleDeletePlan = async (id: any) => {
    const confirmed = await confirmDeletion('master plan');
    if (!confirmed) return;

    const res = await deleteMasterPlan(id);
    if (res?.success) {
      showALert("Delete Plan", res.message, "success");
      fetchData();
    } else {
      showALert("Delete Plan", res.message, "error");
    }
  };

  const handleTogglePlanStatus = (id: any, currentStatus: any) => {
    console.log('Toggle status for plan', id, currentStatus);
  };


  return (
    <DashboardLayout>
      <div className="container-fluid py-3 px-4 overflow-hidden my-bg-dark">
        <div className="row">
          <div className="col-12 mx-auto">
            <h2 className="fw-bold text-white">Master Plan</h2>

            {/* Cards */}
            <div className="row g-4">
              {masterPlan.map((sub: any) => (
                <MasterPlanCard
                  key={sub.id}
                  {...sub}
                  onEdit={(id) => handleEditPlan(id)}
                  onDelete={(id) => handleDeletePlan(id)}
                  onToggleStatus={(id, status) => handleTogglePlanStatus(id, status)}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MasterPlan;