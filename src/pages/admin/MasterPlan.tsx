import { useEffect, useState } from "react";
import DashboardLayout from "../../layout/DashboardLayout";
import MasterPlanCard from "./MasterPlanCard";
import { deleteMasterPlan, getMasterPlan, updateMasterPlan } from "../../services";
import { showALert, confirmDeletion } from "../../utils";
import { useNavigate } from "react-router-dom";

const MasterPlan = () => {
  const navigate = useNavigate();
  const [masterPlan, setMasterPlan] = useState([])
  const fetchData = async () => {
    const res = await getMasterPlan()
    setMasterPlan(res?.result || [])
  }
  useEffect(() => {
    fetchData()
  }, [])
  const handleEditPlan = (id: any) => {
    navigate(`/admin/create-master-plan?id=${id}`);
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

  const handleTogglePlanStatus = async (id: any, currentStatus: any) => {
    const newStatus = currentStatus === 1 ? 0 : 1;
    try {
      const res = await updateMasterPlan(id, { status: newStatus });
      if (res.success) {
        setMasterPlan((prev: any) => 
          prev.map((p: any) => (p.id === id ? { ...p, status: newStatus } : p))
        );
        showALert("Status Updated", `Plan is now ${newStatus === 1 ? 'Active' : 'Inactive'}`, "success");
      }
    } catch (err) {
      console.error("Failed to toggle status:", err);
      showALert("Error", "Failed to update status", "error");
    }
  };


  return (
    <DashboardLayout>
      <div className="container-fluid py-3 px-4 overflow-hidden my-bg-dark">
        <div className="row">
          <div className="col-12 mx-auto">
            <div className="d-flex text-dark justify-content-between align-items-center mb-4">
              <h2 className="fw-bold m-0">Master Plan</h2>
            </div>

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