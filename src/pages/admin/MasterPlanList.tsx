import { useEffect, useState } from "react";
import DashboardLayout from "../../layout/DashboardLayout";
import MasterPlanCard from "../../components/admin/MasterPlanCard";
import {
  deleteMasterPlan,
  getMasterPlan,
  updateMasterPlan,
} from "../../services";
import { showALert, confirmAction } from "../../utils/index";
import { useNavigate } from "react-router-dom";

const MasterPlanList = () => {
  const navigate = useNavigate();
  const [masterPlan, setMasterPlan] = useState<any[]>([]);

  const fetchData = async () => {
    const res = await getMasterPlan();
    setMasterPlan(res?.result || []);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEditPlan = (id: number) => {
    navigate(`/admin/create-master-plan?id=${id}`);
  };

const handleDeletePlan = async (id: number) => {
  const confirmed = await confirmAction("You want to delete this master plan?");
  if (!confirmed) return;
  try {
    const res = await deleteMasterPlan(id);
    if (res?.success) {
      showALert("Delete Plan", res.message, "success");
      fetchData();
    } else {
      showALert("Delete Plan", res.message || "Failed to delete plan", "error");
    }
  } catch (err) {
    console.error("Failed to delete plan:", err);
    showALert("Delete Plan", "An error occurred while deleting the plan", "error");
  }
};


const handleTogglePlanStatus = async (id: number) => {
  const plan = masterPlan.find((p) => p.id === id);
  if (!plan) return;

  const newStatus = plan.status === 1 ? 0 : 1;

  const confirmed = await confirmAction(
    newStatus === 1
      ? "You want to activate this plan?"
      : "You want to deactivate this plan?"
  );
  if (!confirmed) return;
  try {
    const res = await updateMasterPlan(id, { status: newStatus });
    if (res.success) {
      fetchData(); 
      showALert(
        "Status Updated",
        `Plan is now ${newStatus === 1 ? "Active" : "Inactive"}`,
        "success"
      );
    } else {
      showALert("Error", res.message || "Failed to update status", "error");
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
              {masterPlan.map((plan: any, index: number) => (
                <div key={plan.id} className="col-12 col-sm-6 col-lg-4 col-xl-3">
                  <MasterPlanCard
                    {...plan}
                    index={index} 
                    onEdit={handleEditPlan}
                    onDelete={handleDeletePlan}
                    onToggleStatus={handleTogglePlanStatus}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout >
  );
};

export default MasterPlanList;