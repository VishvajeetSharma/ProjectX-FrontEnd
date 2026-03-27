import DashboardLayout from "../../layout/DashboardLayout"
import { useEffect, useState } from "react";
import { getPublicMasterPlan } from "../../services";
import PricingCard from "../../components/common/PricingCard";

const PurchaseCredit = () => {
  const [masterPlan, setMasterPlan] = useState([])
  const fetchData = async () => {
    const res = await getPublicMasterPlan()
    setMasterPlan(res?.result || [])
  }
  useEffect(() => {
    fetchData()
  }, [])


  const purchasePlan = async (id: any) => {
    console.log(`Plan Id: ${id}`)
  }

  return (
    <DashboardLayout>
      <div className="container-fluid py-3 px-4 overflow-hidden my-bg-dark">
        <div className="row">
          <div className="col-12 mx-auto">
            <div className="d-flex text-dark justify-content-between align-items-center mb-4">
              <h2 className="fw-bold m-0">Purchase Plan</h2>
            </div>

            {/* Cards */}
            <div className="row g-4">
              {masterPlan.map((plan: any, index: any) => (
                <div
                  key={index}
                  className="col-12 col-sm-6 col-lg-4 col-xl-3"
                >
                  <PricingCard plan={plan} index={index} onPurchasePlan={purchasePlan}/>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PurchaseCredit;