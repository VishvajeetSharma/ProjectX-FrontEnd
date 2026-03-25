import { useEffect, useState } from "react";
import DashboardLayout from "../../layout/DashboardLayout";
import MasterPlanCard from "./MasterPlanCard";
import { deleteMasterPlan, getMasterPlan } from "../../services";
import { showALert } from "../../utils";

// In your component:


 
const MasterPlan = () => {
  const [masterPlan, setMasterPlan] = useState([])
  const fetchData = async () => {
   const res= await getMasterPlan()
   setMasterPlan(res?.result || [] ) 
  }
  useEffect(() => {
  fetchData()
  }, [])
  const handleEditPlan = (id: any) => {
  console.log('Edit plan', id);
};

const handleDeletePlan = async(id: any) => {
 const res=await deleteMasterPlan(id);
 if(res?.success){
  showALert("Delete Plan",res.message,"success")
  fetchData()
 }else{
  showALert("Delete Plan",res.message,"error")
 }
};

const handleTogglePlanStatus = (id: any, currentStatus: any) => {
  console.log('Toggle status for plan', id, currentStatus);
};

  
  return (
    <DashboardLayout>
      <div className="py-5 text-white overflow-x-hidden my-bg-dark">
        <div className="row px-4">
          <div className="col-12">

            {/* Title */}
            <div className="text-start mb-4">
              <h1 className="fw-bold">Master Plan</h1>
              <p className="text-secondary">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, explicabo.
              </p>
            </div>

            {/* Cards */}
            <div className="row g-4">
              {masterPlan.map((sub:any) => (
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